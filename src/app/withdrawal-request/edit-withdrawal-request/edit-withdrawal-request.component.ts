import { ClientProfile } from "app/model/client-profile.model";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { EditUserBankComponent } from "./../edit-user-bank/edit-user-bank.component";
import { WithdrawalService } from "app/services/withdrawal.service";
import { FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/components/common/api";
import { UserService } from "./../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MenuItem } from "primeng/api";
import { DialogService } from "primeng/api";

// RXJS
import { forkJoin } from "rxjs";
// Model
import { BankAccountModal } from "./../../services/withdrawal.service";

@Component({
  selector: "app-edit-withdrawal-request",
  templateUrl: "./edit-withdrawal-request.component.html",
  styleUrls: ["./step-action.scss", "./edit-withdrawal-request.component.scss"],
  providers: [UserService, DialogService],
})
export class EditWithdrawalRequestComponent implements OnInit {
  msgs = [];
  items: MenuItem[] = [
    { label: "Tạo yêu cầu rút tiền", disabled: false },
    { label: "Xác nhận yêu cầu", disabled: true },
    { label: "Yêu cầu rút tiền thành công", disabled: true },
  ];
  withdrawalRequestForm: FormGroup;
  userBanks = [];
  userBankOptions = [];
  walletOptions = [];
  walletSelected: any = {};
  activeIndex: number = 0;
  minWithdrawAmount = 100000;
  password: string;
  showPass = false;
  account: ClientProfile;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private userService: UserService,
    private withdrawalService: WithdrawalService,
    private dialogService: DialogService,
    private cd: ChangeDetectorRef
  ) {
    this.account = JSON.parse(localStorage.getItem("userData"));
    this.withdrawalRequestForm = this.fb.group({
      // for update/ insert
      userId: [""],
      maxWithdrawAmount: ["", Validators.required],
      withdrawAmount: ["", Validators.required],
      withdrawalFee: ["", Validators.required],
      totalAmount: ["", Validators.required],
      userBank: [{}, Validators.required],
    });
    this.withdrawalRequestForm.controls["maxWithdrawAmount"].disable();
    this.withdrawalRequestForm.controls["withdrawalFee"].disable();
    this.withdrawalRequestForm.controls["withdrawAmount"].disable();
    this.withdrawalRequestForm.controls["userBank"].valueChanges.subscribe(
      (value) => {
        if (value) {
          this.withdrawalRequestForm.controls["withdrawAmount"].enable();
        }
      }
    );
    this.withdrawalRequestForm.controls["withdrawAmount"].valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.checkWithdrawAmount();
      });
  }

  changeWallet($event) {
    this.getMaxWithdrawAmount(
      this.walletSelected.walletId,
      this.walletSelected.currencyId
    );
  }

  ngOnInit() {
    this.getInitFormData();
  }

  getInitFormData() {
    this.spinner.show();
    forkJoin([
      this.withdrawalService.getLsUserBank(),
      this.withdrawalService.getLsWallet(),
    ]).subscribe(
      (res) => {
        if (res && res.length) {
          if (res[0] && res[0].result && res[0].result.success) {
            this.userBanks = res[0].result.data;
            this.userBankOptions = res[0].result.data.map((item) => ({
              label: `${item.bankName} - ${item.accountNumber}`,
              value: item,
            }));
          }
          if (res[1] && res[1].result && res[1].result.success) {
            this.walletOptions = res[1].result.data.map((item) => ({
              label: item.walletName,
              value: item,
            }));
            this.walletSelected = res[1].result.data.find(
              (wallet) => wallet.isDefault == "1"
            );
          }

          this.getMaxWithdrawAmount(
            this.walletSelected.walletId,
            this.walletSelected.currencyId
          );
        }
        this.spinner.hide();
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
  }

  checkWithdrawAmount() {
    const checkWithdrawRequestParams: any = {};
    const formVal = this.withdrawalRequestForm.getRawValue();
    if (formVal.withdrawAmount) {
      if (formVal.withdrawAmount < formVal.maxWithdrawAmount) {
        checkWithdrawRequestParams["WalletId"] = this.walletSelected.walletId;
        checkWithdrawRequestParams[
          "CurrencyId"
        ] = this.walletSelected.currencyId;
        checkWithdrawRequestParams["MaxWithdrawAmount"] =
          formVal.maxWithdrawAmount;
        checkWithdrawRequestParams["UserBankId"] = formVal.userBank.UserBankId;
        checkWithdrawRequestParams["Bank"] = formVal.userBank.bankName;
        this.withdrawalService
          .calWithdrawalRequest(checkWithdrawRequestParams)
          .subscribe(
            (res) => {
              if (res && res.result && res.result.success) {
                this.withdrawalRequestForm.patchValue({
                  maxWithdrawAmount: res.result.data.maxWithdrawAmount,
                });
              }
            },
            (errCheckAmount) => {
              this.showMessage(
                "error",
                "Không thể lấy dữ liệu! Hãy thử lại",
                "Có lỗi xảy ra!"
              );
            }
          );
      } else {
        this.showMessage(
          "error",
          "Số tiền không hợp lệ. Số tiền cần rút phải nhỏ hơn Số tiền tối đa. ",
          "Có lỗi xảy ra!"
        );
      }
    }
  }

  getMaxWithdrawAmount(WalletId, CurrencyId) {
    this.withdrawalService
      .calWithdrawalRequest({
        WalletId: WalletId,
        CurrencyId: CurrencyId,
      })
      .subscribe(
        (res) => {
          if (res && res.result && res.result.success) {
            this.withdrawalRequestForm.patchValue({
              maxWithdrawAmount: res.result.data.maxWithdrawAmount,
              withdrawalFee: res.result.data.withdrawalFee,
              totalAmount: res.result.data.totalAmount,
            });
          }
        },
        (errGetMaxWithdrawAmount) => {
          this.showMessage(
            "error",
            "Không thể lấy dữ liệu số tiền tối đa",
            "Có lỗi xảy ra!"
          );
        }
      );
  }

  nextToConfirmWithdrawalRequest() {
    if (this.withdrawalRequestForm.valid) {
      if (!this.walletSelected) {
        this.msgs.push({
          severity: "error",
          summary: "",
          detail: "Bạn chưa chọn ví",
        });
      } else {
        this.nextToStep(1);
      }
    }
  }

  checkRequestValid() {
    let valid = true;
    let formVal = this.withdrawalRequestForm.getRawValue();
    if (
      !this.withdrawalRequestForm.valid ||
      !this.walletSelected ||
      this.withdrawalRequestForm.getRawValue().withdrawAmount == 0 ||
      formVal.withdrawAmount > formVal.maxWithdrawAmount
    ) {
      valid = false;
    }
    return valid;
  }
  confirmWithdrawalRequest() {
    // const checkWithdrawRequestParams: any = {};
    // const formVal = this.withdrawalRequestForm.getRawValue();
    // checkWithdrawRequestParams["WalletId"] = this.walletSelected.walletId;
    // checkWithdrawRequestParams["CurrencyId"] = this.walletSelected.currencyId;
    // checkWithdrawRequestParams["MaxWithdrawAmount"] = formVal.maxWithdrawAmount;
    // checkWithdrawRequestParams["UserBankId"] = formVal.userBank.UserBankId;
    // checkWithdrawRequestParams["Bank"] = formVal.userBank.bankName;
    // this.withdrawalService
    //   .calWithdrawalRequest(checkWithdrawRequestParams)
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //       if (res && res.result && res.result.success) {
    //         this.nextToStep(2, true);
    //       }
    //     },
    //     (errCheckAmount) => {
    //       this.showMessage(
    //         "error",
    //         "Không thể lấy dữ liệu! Hãy thử lại",
    //         "Có lỗi xảy ra!"
    //       );
    //     }
    //   );
    this.nextToStep(2, true);
  }

  editUserBank() {
    const ref = this.dialogService.open(EditUserBankComponent, {
      data: {
        userBanks: this.userBanks,
        selectedBank: this.withdrawalRequestForm.value.userBank,
      },
      showHeader: false,
      style: {
        "max-width": "700px",
        "max-height": "90vh",
        "overflow-y": "auto",
        "overflow-x": "hidden",
      },
      header: "Danh sách tài khoản ngân hàng",
      width: "90%",
    });
    ref.onClose.subscribe((resSelectUserBank) => {
      if (resSelectUserBank) {
        if (resSelectUserBank.userBanks) {
          this.userBanks = resSelectUserBank.userBanks;
          this.userBankOptions = this.userBanks.map((item) => ({
            label: `${item.bankName} - ${item.accountNumber}`,
            value: item,
          }));
          if (this.userBanks.length == 0) {
            this.withdrawalRequestForm.patchValue({
              userBank: {},
            });
          }
        }
        if (resSelectUserBank.selectUserBank) {
          this.withdrawalRequestForm.patchValue({
            userBank: resSelectUserBank.selectUserBank,
          });
        }
      }
    });
  }

  showMessage(type, message, summary) {
    this.messageService.clear();
    this.messageService.add({
      key: "toast-message",
      severity: type,
      summary: summary,
      detail: message,
    });
  }

  nextToStep(step, disabledPreStep?) {
    this.items = this.items.map((item, index) => {
      if (disabledPreStep) {
        if (index <= step) {
          item.disabled = true;
        } else {
          item.disabled = false;
        }
      } else {
        if (index <= step) {
          item.disabled = false;
        } else {
          item.disabled = true;
        }
      }
      return item;
    });
    this.activeIndex = step;
  }

  finish() {
    this.nextToStep(0);
    this.withdrawalRequestForm.reset();
    this.getMaxWithdrawAmount(
      this.walletSelected.walletId,
      this.walletSelected.currencyId
    );
    this.withdrawalRequestForm.controls["withdrawAmount"].disable();
    this.cd.detectChanges();
  }
}
