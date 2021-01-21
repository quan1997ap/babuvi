import { ChangeDetectorRef } from "@angular/core";
// import { PrintBillComponent } from "./../../merchandise/delivery/print-bill/print-bill.component";
import { DialogService, MessageService } from "primeng/api";
import { MerchandiseServices } from "app/services/merchandise.services";
import { Component, OnInit } from "@angular/core";
import { APP_NAME } from "app/config/app.config";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-handel-delivery",
  templateUrl: "./handel-delivery.component.html",
  styleUrls: ["./handel-delivery.component.scss"],
  providers: [DialogService],
})
export class HandelDeliveryComponent implements OnInit {
  APP_NAME = APP_NAME;
  styleSheetFiles = "/assets/styles/css/print-bill.css";
  loading = false;
  filterByOptions = [{ label: "Theo mã phiếu", value: 1 }];
  filterForm: FormGroup;
  currentPage = 0;
  numOfItemOnPage = 5;
  requestList = [];
  requestListSelected = []; // for print
  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private merchandiseServices: MerchandiseServices,
    public dialogService: DialogService,
    public cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      code: ["", Validators.required],
      filterBy: [this.filterByOptions[0].value, Validators.required],
    });
  }

  cleanList() {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      this.requestList =  this.requestList.filter((request) => request.checked == false);
    }
  }

  filterRequest() {
    const code = this.filterForm.getRawValue().code.trim();
    const filterType = this.filterForm.getRawValue().filterBy;
    if (
      this.requestList
        .map((request) => request.deliveryRequestCode)
        .includes(code)
    ) {
      this.showMessage("error", "Mã đã tồn tại", "Thông báo");
    } else {
      switch (filterType) {
        case 1:
          this.merchandiseServices.getDeliveryRequestByCode(code).subscribe(
            (res) => {
              if (res && res.result && res.result.success == true) {
                let listRequest =
                  res.result.data && res.result.data.lsDetail
                    ? res.result.data.lsDetail
                    : [];
                res.result.data.checked = false;
                res.result.data.isCollapse = false;
                res.result.sumRequestWeight = this.sumWeightOfRequestList(res.result.data.lsDetail);
                this.requestList.unshift(res.result.data);
              }
            },
            (err) => {
              this.showMessage(
                "error",
                "Lọc dữ liệu không thành công",
                "Thông báo"
              );
            }
          );
          break;
      }
    }
  }

  sumWeightOfRequestList(requestList) {
    if (requestList && requestList.length > 0) {
      return requestList.reduce((a, b) => a + (parseInt(b['paymentWeight']) || 0), 0);
    } else {
      return 0;
    }
  }

  totalPackageOfRequestList() {
    if (this.requestList && this.requestList.length > 0) {
      return this.requestList.reduce((a, b) => a + (parseInt(b['totalPackage']) || 0), 0);
    } else {
      return 0;
    }
  }

  totalMissingAmountOfRequestList(lsDetail) {
    if (this.requestList && this.requestList.length > 0) {
      return this.requestList.reduce((a, b) => a + (parseInt(b['missingAmount']) || 0), 0);
    } else {
      return 0;
    }
  }

  changeStatusDeliveryRequestDetail(
    requestDetail,
    deliveryRequestDetailId,
    oldStatus
  ) {
    if (confirm("Bạn có muốn thay đổi trạng thái bản ghi này?")) {
      this.loading = true;
      this.merchandiseServices
        .changeStatusDeliveryRequestDetail(deliveryRequestDetailId)
        .subscribe(
          (resChangeStatus) => {
            if (
              resChangeStatus &&
              resChangeStatus.result &&
              resChangeStatus.result.success == true
            ) {
              this.showMessage(
                "success",
                "Đổi trạng thái thành công",
                "Thông báo"
              );
              requestDetail.status = oldStatus == 1 ? 2 : 1;
              this.loading = false;
              this.cdr.detectChanges();
            } else {
              this.showMessage(
                "error",
                "Đổi trạng thái không thành công",
                "Thông báo"
              );
              this.loading = false;
            }
          },
          (errChangeStatus) => {
            this.showMessage(
              "error",
              "Đổi trạng thái không thành công",
              "Thông báo"
            );
            this.loading = false;
          }
        );
    }
  }
  start() {
    this.loading = true;
    const deliveryRequestIds = this.requestList
      .filter((request) => request.checked == true)
      .map((request) => request.deliveryRequestId);
    this.merchandiseServices
      .startHandleDeliveryRequest(deliveryRequestIds)
      .subscribe(
        (resStart) => {
          if (resStart && resStart.result && resStart.result.success == true) {
            this.showMessage("success", "Bắt đầu thành công", "Thông báo");
          } else {
            this.showMessage("error", "Bắt đầu không thành công", "Thông báo");
          }
          this.loading = false;
        },
        (errStart) => {
          this.showMessage("error", "Bắt đầu không thành công", "Thông báo");
          this.loading = false;
        }
      );
  }

  finish() {
    this.loading = true;
    const deliveryRequestIds = this.requestList
      .filter((request) => request.checked == true)
      .map((request) => request.deliveryRequestId);
    this.merchandiseServices
      .finishHandleDeliveryRequest(deliveryRequestIds)
      .subscribe(
        (resFinish) => {
          if (
            resFinish &&
            resFinish.result &&
            resFinish.result.success == true
          ) {
            this.showMessage("success", "Đã hoàn thành", "Thông báo");
          } else {
            this.showMessage("error", "Có lỗi xảy ra", "Thông báo");
          }
          this.loading = false;
        },
        (errFinish) => {
          this.showMessage("error", "Có lỗi xảy ra", "Thông báo");
          this.loading = false;
        }
      );
  }

  /**
   * Cancel delivery
   */
  cancelDelivery() {
    this.loading = true;
    const deliveryRequestIds = this.requestList
      .filter((request) => request.checked == true)
      .map((request) => request.deliveryRequestId);
    this.merchandiseServices
      .cancelHandleDeliveryRequest(deliveryRequestIds)
      .toPromise()
      .then((res) => {
        if (res.result.success) {
          this.showMessage("success", "Hủy thành công", "Thông báo");
        } else {
          this.showMessage("error", res.result.message, "Thông báo");
        }
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.showMessage("error", "Hủy thất bại", "Thông báo");
      });
  }

  changeSelectedDeliveryRequest($event){
    console.log($event, this.requestListSelected)
    this.requestListSelected =  this.requestList.filter((request) => request.checked == true)
  }


  showMessage(type, message, summary) {
    this.messageService.add({
      key: "toast-message",
      severity: type,
      summary: summary,
      detail: message,
    });
  }

  onPageChange($event) {
    this.currentPage = $event.page;
    window.scrollTo(0, 0);
  }
}
