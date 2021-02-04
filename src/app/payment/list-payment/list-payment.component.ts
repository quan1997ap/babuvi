import { User } from './../../model/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

// Service
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
import { UserService } from './../../services/user.service';

// RXJS
import { forkJoin } from "rxjs";
@Component({
  selector: "app-list-payment",
  templateUrl: "./list-payment.component.html",
  styleUrls: ["./list-payment.component.scss"],
  providers: [UserService]
})
export class ListPaymentComponent implements OnInit {
  filterForm: FormGroup;
  paymentTypeList = [];
  paymentStatusList = [];
  paymentList = [];
  currentUser = new User();
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) {
    this.filterForm = this.fb.group({
      paymentCode: [""],
      paymentType: [""],
      paymentStatus: [""],
      fromDate: [],
      toDate: [],
    });
    this.userService.getInfoUser().subscribe(
      resUserInfor => {
        if (resUserInfor && resUserInfor.result && resUserInfor.result.success === true) {
          this.currentUser = resUserInfor.result.data;
        }
      },
      err => {
        this.showMessage("error", "Không thể lấy dữ liệu User", "Có lỗi xảy ra!");
      }
    );
  }

  ngOnInit() {
    this.getInitFormData();
  }

  addPayment() {
    this.router.navigate(['/payment/add']);
  }

  removeSelectedPayment() {}

  getInitFormData() {
    this.spinner.show();
    forkJoin([
      this.paymentService.getPaymentRequestType(),
      this.paymentService.getPaymentRequestStatus(),
    ]).subscribe(
      (res) => {
        if (res && res.length) {
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
        }
        this.spinner.hide();
        let patchFromVal = { };
        if(this.paymentTypeList.length && this.paymentTypeList[0].value){
          patchFromVal['paymentType'] = this.paymentTypeList[0].value
        }
        if(this.paymentStatusList.length && this.paymentStatusList[0].value){
          patchFromVal['paymentStatus'] = this.paymentStatusList[0].value
        }
        this.filterForm.patchValue(patchFromVal);
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
  }

  filterPayment(){
    this.filterPaymentWithPagination(1, 10);
  }

  filterPaymentWithPagination(pageIndex, pageSize) {
    this.spinner.show();
    const formVal = this.filterForm.getRawValue();
    const parmas = {
      PaymentRequestCode: formVal.paymentCode,
      StartDate: formVal.fromDate,
      EndDate: formVal.toDate,
      Type: formVal.paymentType,
      Status: formVal.paymentStatus,
      UserCode: this.currentUser.userCode
    };
    console.log(parmas);
    this.paymentService.searchPaymentRequest(pageIndex, pageSize, parmas ).subscribe(
      (resPayment) => {
        if(resPayment && resPayment.result && resPayment.result.success){
          this.paymentList = resPayment.result.data.lsData;
        } 
        this.spinner.hide();
      },
      (err) => {
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
}
