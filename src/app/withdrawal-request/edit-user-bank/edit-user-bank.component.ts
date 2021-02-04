import { CartServices } from "./../../services/cart.services";
import { forkJoin } from "rxjs";
import { SystemService } from "app/services/system.services";
import { DynamicDialogConfig } from "primeng/api";
import { DynamicDialogRef } from "primeng/api";
import { WithdrawalService } from "app/services/withdrawal.service";
import { FormGroup, Validators } from "@angular/forms";
import {
  ConfirmationService,
  MessageService,
} from "primeng/components/common/api";
import { UserService } from "./../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
// Models
import { BankAccountModal } from "./../../services/withdrawal.service";
@Component({
  selector: "app-edit-user-bank",
  templateUrl: "./edit-user-bank.component.html",
  styleUrls: ["./edit-user-bank.component.scss"],
  providers: [SystemService],
})
export class EditUserBankComponent implements OnInit {
  editBankAccountForm: FormGroup;
  maxAccount = 3;
  selectedBank: BankAccountModal;
  userBanks = [];
  bankBranchOptions = [];
  cityOptions = [];
  currentFormAction = "edit"; // 'edit' / 'add'
  nationOptions = [];
  showNoteMessage = true;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private userService: UserService,
    private withdrawalService: WithdrawalService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private systemService: SystemService,
    private cartServices: CartServices
  ) {
    this.editBankAccountForm = this.fb.group({
      userBankId: [""],
      accountName: ["", Validators.required],
      accountNumber: ["", Validators.required],
      bankName: ["", Validators.required],
      bankBranch: [""],
      cityId: [""],
      countryId: [""],
    });

    if (this.config.data && this.config.data.userBanks) {
      if (this.config.data.userBanks.length) {
        this.userBanks = this.config.data.userBanks;
        if(this.config.data.selectedBank && this.config.data.selectedBank.userBankId){
          this.selectedBank = this.config.data.selectedBank;
          this.editBankAccountForm.patchValue(this.selectedBank);
        } else {
          this.selectedBank = this.userBanks[0];
          this.editBankAccountForm.patchValue(this.selectedBank);
        }
      }
      this.cartServices.getCountry().subscribe((resNation) => {
        this.nationOptions = resNation.result.data.map((item) => ({
          label: item.areaName,
          value: item.areaId,
        }));
        if (this.selectedBank && this.selectedBank.countryId) {
          this.getDistrictOfCountry(this.selectedBank.countryId);
        }
      });
    }
  }

  ngOnInit() {}

  onChangeCountry($event) {
    this.getDistrictOfCountry($event.value);
  }

  getDistrictOfCountry(countryId) {
    this.systemService.getAreaByParent(countryId).subscribe(
      (resDistric) => {
        if (resDistric && resDistric.length > 0) {
          this.cityOptions = resDistric.map((item: any) => ({
            label: item.areaName,
            value: item.areaId,
          }));
        }
      },
      (err) => {
        this.showMessage(
          "error",
          "Không load được danh sách quận huyện!",
          "Error"
        );
      }
    );
  }

  saveBankAccountToDb() {
    this.spinner.show();
    const formVal = this.editBankAccountForm.getRawValue();
    let bankInfor: BankAccountModal = {
      accountName: formVal.accountName,
      accountNumber: formVal.accountNumber,
      bankName: formVal.bankName,
      bankBranch: formVal.bankBranch,
      cityId: formVal.cityId,
      countryId: formVal.countryId,
    };
    if (formVal.userBankId) {
      bankInfor["userBankId"] = formVal.userBankId;
    }

    this.withdrawalService.addOrUpdateUserBank(bankInfor).subscribe(
      (resSaveBankAccount) => {
        if (
          resSaveBankAccount &&
          resSaveBankAccount.result &&
          resSaveBankAccount.result.success
        ) {
          if (bankInfor.userBankId) {
            this.showMessage("success", "Cập nhật thành công!", "Success");
            this.userBanks = this.userBanks.map((bank) => {
              if (bank.userBankId == bankInfor.userBankId) {
                this.selectedBank = bankInfor;
                return bankInfor;
              } else {
                return bank;
              }
            });
          } else {
            bankInfor.userBankId = resSaveBankAccount.result.data;
            this.userBanks.unshift(bankInfor);
            this.selectedBank = this.userBanks[0];
            this.showMessage("success", "Thêm mới  thành công!", "Success");
          }
        } else {
          this.showMessage("error", "Thao tác không thành công!", "Error");
        }
        this.spinner.hide();
      },
      (error) => {
        this.showMessage(
          "error",
          "Thao tác không thành công! Hãy thử lại!",
          "Error"
        );
        this.spinner.hide();
      }
    );
  }

  editUserBank(userBank) {
    this.currentFormAction = "edit";
    this.editBankAccountForm.patchValue(userBank);
    this.selectedBank = userBank;
  }

  addBankAccount($event) {
    if (
      this.userBanks &&
      this.userBanks.length !== undefined &&
      this.userBanks.length < this.maxAccount
    ) {
      this.currentFormAction = "add";
      this.editBankAccountForm.reset();
      this.selectedBank = this.editBankAccountForm.value;
    }
  }

  deleteUserBank(userBank, index) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xóa?",
      accept: () => {
        this.spinner.show();
        this.withdrawalService.deleteUserBank(userBank.userBankId).subscribe(
          (resDel) => {
            if (resDel && resDel.result && resDel.result.success) {
              this.userBanks = this.userBanks.filter(
                (bank) => bank.userBankId !== userBank.userBankId
              );
              if (this.userBanks && this.userBanks.length) {
                this.selectedBank = this.userBanks[0];
              } else {
                this.selectedBank = undefined;
              }
              this.showMessage(
                "success",
                "Thao tác xóa thành công! Hãy thử lại!",
                "Success"
              );
            } else {
              this.showMessage(
                "error",
                "Thao tác xóa không thành công! Hãy thử lại!",
                "Error"
              );
            }
            this.spinner.hide();
            this.editBankAccountForm.reset();
          },
          (errDel) => {
            this.spinner.hide();
          }
        );
      },
    });
  }

  showMessage(type, message, summary) {
    this.messageService.clear();
    this.messageService.add({
      key: "toast-message-edit-userbank",
      severity: type,
      summary: summary,
      detail: message,
    });
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.editBankAccountForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  selectedUserBank(userBank) {
    this.ref.close({
      selectUserBank: userBank,
      userBanks: this.userBanks
    });
  }

  cancel(){
    this.ref.close({
      userBanks: this.userBanks
    });
  }

  ngOnDestroy(){
  }
}
