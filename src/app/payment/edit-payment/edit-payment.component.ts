import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

// Services
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
import { UserService } from "./../../services/user.service";
import { CouponServices } from "app/services/coupon.service";
import { DialogService } from "primeng/api";

// Models
import { ClientProfile } from "app/model/client-profile.model";
import { User } from "./../../model/user.model";
import { PaymentRequestModel, PaymentServiceModel, ServiceGroupPaymentRequestModel } from './../../model/payment-request.model';

// RXJS
import { forkJoin, Subscription } from "rxjs";

// Components
import { ListCouponComponent } from "./../list-coupon/list-coupon.component";

@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
  providers: [UserService, DialogService], // resolve close multi dialog
})
export class EditPaymentComponent implements OnInit {
  requestListForm: FormGroup;
  paymentTypeList = [];
  currentUser = new User();
  private subscription: Subscription;
  timeoutInputChange: any;
  account: ClientProfile;
  currentCoupon;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private userService: UserService,
    private dialogService: DialogService
  ) {
    this.account = JSON.parse(localStorage.getItem("userData")); //this.account.userId
    // https://www.c-sharpcorner.com/article/creating-table-with-reactive-forms-in-angular-9-using-primeng-table2/
    this.requestListForm = this.fb.group({
      lsPaymentRequest: this.fb.array(
        [this.createPaymentRequest()],
        Validators.required
      ),
    });
  }

  totalPaymentRequest = {
    totalPay: 0,
    totalFee: 0,
    totalAmount: 0,
  };

  private createPaymentRequest(): FormGroup {
    return this.fb.group({
      checked: new FormControl(true),
      description: new FormControl(""),
      serviceGroupId: new FormControl(null, [Validators.required]),
      amountRequest: new FormControl(0, [
        Validators.required,
        Validators.min(1),
      ]),
      exchangeRate: new FormControl(0, []),
      totalAmount: new FormControl(0, []),
      totalFee: new FormControl(0, []),
      lsServiceSelectedOptionType1: new FormControl([]),
      lsServiceSelectedOptionType2: new FormControl([], [Validators.required]),
      lsServiceSelectedOptionType3: new FormControl([]),
      // for display option
      couponCode: new FormControl(null),
      lsAllService: new FormControl([]),
      edited: new FormControl(false),
    });
  }

  get paymentRequestFormArray(): FormArray {
    return this.requestListForm.get("lsPaymentRequest") as FormArray;
  }

  addPaymentRequest(): void {
    this.paymentRequestFormArray.push(this.createPaymentRequest());
  }

  removePaymentRequest(rowIndex: number): void {
    this.paymentRequestFormArray.removeAt(rowIndex);
  }

  isPaymentControlHasError(control: any, validationType: string): boolean {
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  ngOnInit() {
    this.getInitFormData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  savePaymentRequestToDb() {
    console.log(this.paymentRequestFormArray.value);
  }

  removePaymentRequestToDb() {}

  getInitFormData() {
    this.spinner.show();
    this.subscription = forkJoin([
      this.paymentService.getLsServiceGroupPaymentRequest(),
      this.paymentService.getPaymentRequestStatus(),
      this.userService.getInfoUser(),
    ]).subscribe(
      (res) => {
        if (res && res.length) {
          if (res[0] && res[0].result && res[0].result.success) {
            this.paymentTypeList = res[0].result.data.map((item: ServiceGroupPaymentRequestModel) => ({
              label: item.groupName,
              value: item.serviceGroupId,
            }));
          }
          if (res[1] && res[1].result && res[1].result.success) {
            this.currentUser = res[1].result.data;
          }
        }
        this.spinner.hide();
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
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

  calPaymentRequest(event, rowIndex, isChangeGroupPaymentRequest?: boolean) {
    clearTimeout(this.timeoutInputChange);
    this.subscription.unsubscribe();
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(
      rowIndex
    );

    if (currentPaymentRequestControl.value.serviceGroupId && currentPaymentRequestControl.value.amountRequest) {
      this.timeoutInputChange = setTimeout(() => {
        this.spinner.show();
        // các dịch vụ đã chọn => isChecked == true
        let lsRequestService = [];
        console.log(isChangeGroupPaymentRequest)
        if(!isChangeGroupPaymentRequest){
          lsRequestService = currentPaymentRequestControl.value.lsAllService.map( service => {
            if( 
              currentPaymentRequestControl.value.lsServiceSelectedOptionType1.map(s => s.serviceId).includes(service.serviceId) ||  
              currentPaymentRequestControl.value.lsServiceSelectedOptionType2.map(s => s.serviceId).includes(service.serviceId) ||
              currentPaymentRequestControl.value.lsServiceSelectedOptionType3.map(s => s.serviceId).includes(service.serviceId)
            ){
              service.isChecked = true;
            }
            return service;
          })
        }
        console.log( lsRequestService )
        const params: PaymentRequestModel = {
          serviceGroupId: currentPaymentRequestControl.value.serviceGroupId,
          couponCode: currentPaymentRequestControl.value.couponCode,
          lsService: lsRequestService,
          amountRequest: currentPaymentRequestControl.value.amountRequest,
        };
        this.subscription = this.paymentService
          .calPaymentRequest(params)
          .subscribe(
            (resServiceOfPaymentType) => {
              let lsServiceSelectedOptionType1 = [];
              let lsServiceSelectedOptionType2 = [];
              let lsServiceSelectedOptionType3 = [];
              let lsAllService = resServiceOfPaymentType.result.data.lsService;
              if (currentPaymentRequestControl.value.edited) {
                // Đã edit => lấy theo isChecked
                lsServiceSelectedOptionType1 = lsAllService.filter(
                  (service) => service.isOption == '1'
                );
                lsServiceSelectedOptionType2 = lsAllService.filter(
                  (service) => service.isChecked == true && service.isOption == '2'
                );
                lsServiceSelectedOptionType3 = lsAllService.filter(
                  (service) => service.isChecked == true && service.isOption == '3'
                );
              } else {
                // Chưa edit => lấy theo isDefault
                lsServiceSelectedOptionType1 = lsAllService.filter(
                  (service) => service.isOption == '1'
                );
                lsServiceSelectedOptionType2 = lsAllService.filter(
                  (service) => service.isDefault == "1" == true && service.isOption == '2'
                );
                lsServiceSelectedOptionType3 = lsAllService.filter(
                  (service) => service.isDefault == "1" == true && service.isOption == '3'
                );
              }

              if (
                resServiceOfPaymentType &&
                resServiceOfPaymentType.result &&
                resServiceOfPaymentType.result.data
              ) {
                currentPaymentRequestControl.patchValue({
                  edited: true,
                  serviceGroupId:
                    resServiceOfPaymentType.result.data.serviceGroupId,
                  exchangeRate:
                    resServiceOfPaymentType.result.data.exchangeRate,
                  totalAmount: resServiceOfPaymentType.result.data.totalAmount,
                  totalFee: resServiceOfPaymentType.result.data.totalFee,
                  lsAllService: lsAllService,
                  lsServiceSelectedOptionType1: lsServiceSelectedOptionType1,
                  lsServiceSelectedOptionType2: lsServiceSelectedOptionType2,
                  lsServiceSelectedOptionType3: lsServiceSelectedOptionType3
                });
              }
              this.calTotalPaymentRequest();
              this.spinner.hide();
            },
            (err) => {
              this.spinner.hide();
            }
          );
      }, 500);
    }
  }

  calTotalPaymentRequest() {
    this.totalPaymentRequest = {
      totalPay: 0,
      totalFee: 0,
      totalAmount: 0,
    };
    this.paymentRequestFormArray.value.map((paymentRequest) => {
      this.totalPaymentRequest.totalFee += paymentRequest.totalFee;
      this.totalPaymentRequest.totalAmount += paymentRequest.totalAmount;
    });
    this.totalPaymentRequest.totalPay +=
      this.totalPaymentRequest.totalAmount - this.totalPaymentRequest.totalFee;
  }

  paymentValAtIndex(index, field) {
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(index);
    return currentPaymentRequestControl.value[field];
  }

  makeDataForDropdownService(rowIndex, field, isOption: string) {
    return this.paymentValAtIndex(rowIndex, field).filter( service => service.isOption == isOption ).map((service) => ({
      label: service.serviceName,
      value: service
    }));
  }

  selectCoupon() {
    if (this.paymentRequestFormArray.valid) {
      const ref = this.dialogService.open(ListCouponComponent, {
        header: "Mã khuyến mại của bạn",
        style: {
          "max-width": "500px",
          "min-width": "300px",
          "overflow-y": "auto",
        },
      });
      ref.onClose.subscribe((couponSelected) => {
        if (couponSelected) {
          this.currentCoupon = couponSelected;
          this.subscription = this.paymentService.addCouponPaymentRequest(
            {
              coupon: couponSelected.couponCode,
              lsPaymentRequest: this.paymentRequestFormArray.value
            }
          ).subscribe(
            resAddCouponPaymentRequest => {
              console.log(resAddCouponPaymentRequest)
            },
            error => {
              this.showMessage(
                "error",
                "Có lỗi xảy ra khi áp dụng coupon. Hãy thử lại!",
                "Error"
              );
            }
          )
          this.paymentRequestFormArray.controls.forEach(
            (requestControl, index) => {
              let currentPaymentRequestControl = this.paymentRequestFormArray.at(
                index
              );
              this.calPaymentRequest(null, index);
              currentPaymentRequestControl.patchValue({
                couponCode: couponSelected.couponCode,
              });
            }
          );
        }
      });
    } else {
      this.showMessage(
        "error",
        "Bạn cần điền đầy đủ thông tin strong danh sách yêu cầu",
        "Error"
      );
    }
  }
}
