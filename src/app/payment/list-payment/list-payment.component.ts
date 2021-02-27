import { PaymentRequestSearchModel } from "./../../model/payment-request.model";
import { User } from "./../../model/user.model";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

// Service
import { PaymentService } from "./../../services/payment.service";
import { MessageService } from "primeng/api";
import { UserService } from "./../../services/user.service";
import { DataTable } from "primeng/primeng";
// RXJS
import { forkJoin } from "rxjs";
@Component({
  selector: "app-list-payment",
  templateUrl: "./list-payment.component.html",
  styleUrls: ["./list-payment.component.scss"],
  providers: [UserService],
})
export class ListPaymentComponent implements OnInit {
  filterForm: FormGroup;
  paymentTypeList = [];
  paymentStatusList = [];
  paymentList = [];
  paymentListStatistic = {
    totalAmount: 0,
    totalAmountRequest: 0,
    dataCount: 0,
  };
  currentUser = new User();
  @ViewChild("dt") public dataTable: DataTable;
  
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
      (resUserInfor) => {
        if (
          resUserInfor &&
          resUserInfor.result &&
          resUserInfor.result.success === true
        ) {
          this.currentUser = resUserInfor.result.data;
        }
      },
      (err) => {
        this.showMessage(
          "error",
          "Không thể lấy dữ liệu User",
          "Có lỗi xảy ra!"
        );
      }
    );
  }

  ngOnInit() {
    this.getInitFormData();
  }

  addPayment() {
    this.router.navigate(["/payment/add"]);
  }

  removeSelectedPayment() {
    console.log(this.dataTable._selection);
    const lsId = this.dataTable._selection.map(
      (request) => request.paymentRequestId
    );
    this.paymentService.deletePaymentRequest(lsId.toString()).subscribe(
      (resDel) => {
        this.showMessage("success", "Thành công", "Xóa  yêu cầu thanh toán thành công");
      },
      (errDel) => { this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra khi xóa yêu cầu thanh toán!");}
    );
  }

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
        let patchFromVal = {};
        if (this.paymentTypeList.length && this.paymentTypeList[0].value) {
          patchFromVal["paymentType"] = this.paymentTypeList[0].value;
        }
        if (this.paymentStatusList.length && this.paymentStatusList[0].value) {
          patchFromVal["paymentStatus"] = this.paymentStatusList[0].value;
        }
        this.filterForm.patchValue(patchFromVal);
        this.filterPayment();
        this.spinner.hide();
      },
      (error) => {
        this.showMessage("error", "Không thể lấy dữ liệu", "Có lỗi xảy ra!");
        this.spinner.hide();
      }
    );
  }

  filterPayment() {
    this.filterPaymentWithPagination(1, 1000);
  }

  filterPaymentWithPagination(pageIndex, pageSize) {
    this.spinner.show();
    const formVal = this.filterForm.getRawValue();
    const parmas: PaymentRequestSearchModel = {
      paymentRequestCode: formVal.paymentCode,
      startDate: formVal.fromDate,
      endDate: formVal.toDate,
      type: formVal.paymentType,
      status: formVal.paymentStatus,
      userCode: this.currentUser.userCode,
    };
    this.paymentService
      .searchPaymentRequest(pageIndex, pageSize, parmas)
      .subscribe(
        (resPayment) => {
          if (resPayment && resPayment.result && resPayment.result.success) {
            this.paymentList = resPayment.result.data.lsData;
            this.paymentListStatistic = {
              totalAmount: resPayment.result.data.totalAmount,
              totalAmountRequest: resPayment.result.data.totalAmountRequest,
              dataCount: resPayment.result.data.dataCount,
            };
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
