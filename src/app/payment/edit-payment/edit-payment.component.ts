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
import { CouponServices } from 'app/services/coupon.service';
import { DialogService } from "primeng/api";

// Models
import { ClientProfile } from 'app/model/client-profile.model';
import { User } from "./../../model/user.model";

// RXJS
import { forkJoin, Subscription } from "rxjs";

// Components
import { ListCouponComponent } from './../../coupon/list-coupon/list-coupon.component';

@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
  providers: [UserService],
})
export class EditPaymentComponent implements OnInit {
  requestListForm: FormGroup;
  paymentTypeList = [];
  paymentStatusList = [];
  currentUser = new User();
  private subscription: Subscription;
  timeoutInputChange: any;
  account: ClientProfile;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private userService: UserService,
    private dialogService: DialogService
  ) {
    this.account = JSON.parse(localStorage.getItem('userData')); //this.account.userId
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
    totalAmount: 0
  }


  private createPaymentRequest(): FormGroup {
    return this.fb.group({
      checked: new FormControl(true),
      description: new FormControl(""),
      serviceGroupId: new FormControl(null, [Validators.required]),
      amountRequest: new FormControl(0, [Validators.required, Validators.min(1)]),
      exchangeRate: new FormControl(0, []),
      totalAmount: new FormControl(0, []),
      totalFee: new FormControl(0, []),
      lsService: new FormControl([]),
      // for display option
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
      this.paymentService.getPaymentRequestType(),
      this.paymentService.getPaymentRequestStatus(),
      this.userService.getInfoUser(),
    ]).subscribe(
      (res) => {
        if (res && res.length) {
          if (res[0] && res[0].result && res[0].result.success) {
            this.paymentTypeList = res[0].result.data.map((item) => ({
              label: item.displayValue,
              value: Number(item.value),
            }));
            this.paymentTypeList.push({ label: 8, value: 8 });
            this.paymentTypeList.push({ label: 9, value: 9 });
          }
          if (res[1] && res[1].result && res[1].result.success) {
            this.paymentStatusList = res[1].result.data.map((item) => ({
              label: item.displayValue,
              value: item.code,
            }));
          }
          if (res[2] && res[2].result && res[2].result.success) {
            this.currentUser = res[2].result.data;
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

  calPaymentRequest(event, rowIndex) {
    clearTimeout(this.timeoutInputChange);
    this.subscription.unsubscribe();
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(
      rowIndex
    );

    if(currentPaymentRequestControl.valid){
      this.timeoutInputChange = setTimeout( () => {
        this.spinner.show();
        // map lsServiceChecked to lsAllService
        const serviceSelected = currentPaymentRequestControl.value.lsService.map( service => {
          service.isChecked = true;
          return service;
        })
        const lsServiceMerge =  Object.assign(currentPaymentRequestControl.value.lsAllService, currentPaymentRequestControl.value.lsService );
        const params = {
          serviceGroupId: currentPaymentRequestControl.value.serviceGroupId,
          couponCode: null,
          lsService: lsServiceMerge,
          amountRequest: currentPaymentRequestControl.value.amountRequest,
        };
        this.subscription = this.paymentService.calPaymentRequest(params).subscribe(
          (resServiceOfPaymentType) => {
            let lsServiceChecked = [];
            let lsAllService = resServiceOfPaymentType.result.data.lsService;
            if (currentPaymentRequestControl.value.edited) {
              // Đã edit => lấy theo isChecked
              lsServiceChecked = lsAllService.filter(
                (service) => service.isChecked == true
              );
            } else {
               // Chưa edit => lấy theo isDefault
              lsServiceChecked = lsAllService.filter(
                (service) => service.isDefault == "1"
              );
            }
    
            if (
              resServiceOfPaymentType &&
              resServiceOfPaymentType.result &&
              resServiceOfPaymentType.result.data
            ) {
              currentPaymentRequestControl.patchValue({
                edited: true,
                serviceGroupId: resServiceOfPaymentType.result.data.serviceGroupId,
                exchangeRate: resServiceOfPaymentType.result.data.exchangeRate,
                totalAmount: resServiceOfPaymentType.result.data.totalAmount,
                totalFee: resServiceOfPaymentType.result.data.totalFee,
                lsAllService: lsAllService,
                lsService: lsServiceChecked,
              });
            }
            this.calTotalPaymentRequest();
            this.spinner.hide();
          },
          (err) => {
            this.spinner.hide();
          }
        );
      }, 500)
    }
  }
  
  calTotalPaymentRequest(){
    this.totalPaymentRequest = {
      totalPay: 0,
      totalFee: 0,
      totalAmount: 0
    };
    this.paymentRequestFormArray.value.map(paymentRequest => {
      console.log(paymentRequest);
      this.totalPaymentRequest.totalFee +=  paymentRequest.totalFee;
      this.totalPaymentRequest.totalAmount += paymentRequest.totalAmount;
    })
    this.totalPaymentRequest.totalPay +=  this.totalPaymentRequest.totalAmount - this.totalPaymentRequest.totalFee;
  }

  paymentValAtIndex(index, field) {
    let currentPaymentRequestControl = this.paymentRequestFormArray.at(index);
    return currentPaymentRequestControl.value[field];
  }

  makeDataForDropdownService(rowIndex, field) {
    return this.paymentValAtIndex(rowIndex, field).map((service) => ({
      label: service.serviceName,
      value: service,
    }));
  }

  selectCoupon() {
    const ref = this.dialogService.open(ListCouponComponent, {
      header: "Mã khuyến mại của bạn",
      style: {
        "max-width": "500px",
        "min-width": "300px",
        "overflow-y": "auto",
      },
    });
  }
}
