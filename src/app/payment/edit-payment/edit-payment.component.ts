import { User } from './../../model/user.model';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

// Service
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
// RXJS
import { forkJoin } from "rxjs";

class PaymentItemModel{
  amount: number;
  desc: string;
}

@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
  providers: [UserService]
})
export class EditPaymentComponent implements OnInit {
  filterForm: FormGroup;
  paymentTypeList = [];
  paymentStatusList = [];
  paymentList:PaymentItemModel[]= [{
    amount: 0,
    desc: ""
  }];
  currentUser = new User();
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.filterForm = this.fb.group({
      PaymentRequestId: [""],
      PaymentRequestCode: [""],
      PaymentRequestDate: [new Date()],
      UserId: [""],
      AmountRequest: [0],
      TotalFee: [0],
      TotalAmount: [0],
      ExchangeRate: [0],
      Type: [""],
      Status: [""],
      StatusDisplay: [""],
      ServiceId: [""]
    });
  }

  ngOnInit() {
    this.getInitFormData();
  }

  addPayment() {}

  removeSelectedPayment() {}

  getInitFormData() {
    this.spinner.show();
    forkJoin([
      this.paymentService.getPaymentRequestType(),
      this.paymentService.getPaymentRequestStatus(),
      this.userService.getInfoUser()
    ]).subscribe(
      (res) => {
        if (res && res.length) {
          console.log(res)
          if (res[0] && res[0].result && res[0].result.success) {
            this.paymentTypeList = res[0].result.data.map((item) => ({
              label: item.displayValue,
              value: item.code,
            }));
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
        let patchFromVal = { };
        if(this.paymentTypeList.length && this.paymentTypeList[0].value){
          patchFromVal['paymentType'] = this.paymentTypeList[0].value
        }
        if(this.paymentStatusList.length && this.paymentStatusList[0].value){
          patchFromVal['paymentStatus'] = this.paymentStatusList[0].value
        } 
        if(this.currentUser){
          patchFromVal['UserId'] = this.currentUser.userId;
        };
        this.filterForm.patchValue(patchFromVal);
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
  }

  addPaymentRequest(){
    const newPaymentRequest: PaymentItemModel = {
      amount: 0,
      desc: ""
    }
    this.paymentList.push(newPaymentRequest)
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
}
