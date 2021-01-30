import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

// Service
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
// RXJS
import { forkJoin } from "rxjs";
@Component({
  selector: "app-edit-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
})
export class EditPaymentComponent implements OnInit {
  filterForm: FormGroup;
  paymentTypeList = [];
  paymentStatusList = [];
  paymentList = [];
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private paymentService: PaymentService,
    private messageService: MessageService
  ) {
    this.filterForm = this.fb.group({
      paymentCode: [""],
      paymentType: [""],
      paymentStatus: [""],
      fromDate: [new Date()],
      toDate: [new Date()],
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
        else if(this.paymentStatusList.length && this.paymentStatusList[0].value){
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

  filterPayment() {
    const formVal = this.filterForm.getRawValue();
    console.log(formVal);
    this.paymentService.searchPaymentRequest(1, 10).subscribe(
      (resPayment) => {
        console.log(resPayment);
      },
      (err) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
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
