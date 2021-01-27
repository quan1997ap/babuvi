import { ChangeDetectorRef } from "@angular/core";
// import { PrintBillComponent } from "./../../merchandise/delivery/print-bill/print-bill.component";
import { DialogService, MessageService } from "primeng/api";
import { MerchandiseServices } from "app/services/merchandise.services";
import { Component, OnInit } from "@angular/core";
import { APP_NAME } from "app/config/app.config";
import * as _ from "lodash";
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
  filterByOptions = [
    { label: "Theo mã phiếu", value: 1 },
    { label: "Theo vị trí", value: 2 },
  ];
  filterForm: FormGroup;
  numOfItemOnPage = 5;
  // using for filterBy code
  requestList = [];
  requestListSelected = []; // for print
  checkedAll = true;
  currentPage = 0;
  // using for filterBy position
  requestListGroupByPosition = {};
  listPosition = [];
  currentPageOfRequestsGrByPosition = 0;
  filterBy = 1;
  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private merchandiseServices: MerchandiseServices,
    public dialogService: DialogService,
    public cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      code: ["DlR20218", Validators.required],
    });
  }

  changeTableSortBy($event, type) {
    if ($event) {
      this.filterBy = $event.value;
    }
    if (type) {
      this.filterBy = type;
    }
    this.createRequestListGroupByPosition();
  }

  createRequestListGroupByPosition() {
    // using for display RequestListGroupByPosition
    let lstAllRequest = [];
    this.requestList.forEach((request) => {
      lstAllRequest = lstAllRequest.concat(request.lsDetail);
    });
    this.requestListGroupByPosition = _(lstAllRequest)
      .groupBy((x) => x.shelfPosition)
      .value();
    this.listPosition = Object.keys(this.requestListGroupByPosition).map(
      (position: string) => {
        let newPosition: any = {};
        newPosition.isCollapse = false;
        newPosition.shelfPosition = position;
        return newPosition;
      }
    );
  }

  checkStatusCheckboxCheckedAll() {
    if (this.requestListSelected.length == this.requestList.length) {
      this.checkedAll = true;
    } else {
      this.checkedAll = false;
    }
  }

  cleanList() {
    if (this.requestListSelected && this.requestListSelected.length > 0) {
      if (
        confirm(
          `Bạn có chắc chắn muốn xóa ${this.requestListSelected.length} request ?`
        )
      ) {
        this.requestList = this.requestList.filter(
          (request) => request.checked == false
        );
        if (this.requestList && this.requestList.length == 1) {
          this.requestList[0].checked = true;
        }
      }
    } else {
      this.showMessage("error", "Bạn phải chọn ít nhất 1 request", "Thông báo");
    }
  }

  filterRequest() {
    const code = this.filterForm.getRawValue().code.trim();
    if (
      this.requestList
        .map((request) => request.deliveryRequestCode)
        .includes(code)
    ) {
      this.showMessage("error", "Mã đã tồn tại", "Thông báo");
    } else {
      this.merchandiseServices.getDeliveryRequestByCode(code).subscribe(
        (res) => {
          if (res && res.result && res.result.success == true) {
            let listRequest =
              res.result.data && res.result.data.lsDetail
                ? res.result.data.lsDetail
                : [];
            res.result.data.numOfItem = res.result.data.lsDetail.length;
            res.result.data.numOfMissingItem = res.result.data.lsDetail.filter(
              (item) => item.status == 1
            ).length;
            res.result.data.checked = true;
            res.result.data.isCollapse = false;
            res.result.sumRequestWeight = this.sumWeightOfRequestList(
              res.result.data.lsDetail
            );
            this.requestList.unshift(res.result.data);
            this.requestListSelected = this.requestList.filter(
              (request) => request.checked == true
            );
            this.changeTableSortBy(null, this.filterBy);
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
    }
  }

  sumWeightOfRequestList(requestList) {
    if (requestList && requestList.length > 0) {
      return requestList.reduce(
        (a, b) => a + (parseInt(b["paymentWeight"]) || 0),
        0
      );
    } else {
      return 0;
    }
  }

  totalPackageOfRequestList() {
    if (this.requestList && this.requestList.length > 0) {
      return this.requestList.reduce(
        (a, b) => a + (parseInt(b["numOfItem"]) || 0),
        0
      );
    } else {
      return 0;
    }
  }

  totalMissingAmountOfRequestList() {
    if (this.requestList && this.requestList.length > 0) {
      return this.requestList.reduce(
        (a, b) => a + (parseInt(b["numOfMissingItem"]) || 0),
        0
      );
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

              // update this.requestList;
              this.requestList.forEach((request) => {
                if (
                  request.deliveryRequestCode ===
                    requestDetail.deliveryRequestCode &&
                  request.lsDetail.length
                ) {
                  request.lsDetail.forEach((requestDetailInfor) => {
                    if (
                      requestDetailInfor.deliveryRequestCode ==
                        request.deliveryRequestCode &&
                      requestDetailInfor.deliveryRequestDetailId ==
                        requestDetail.deliveryRequestDetailId
                    ) {
                      requestDetailInfor.status =
                        requestDetailInfor.status == 1 ? 2 : 1;
                    }
                  });
                }
              });
              if (this.filterBy == 2) {
                // update list request group by selfPosition
                requestDetail.status = oldStatus == 1 ? 2 : 1;
              }
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
    if(this.filterBy == 2){
      this.requestListSelected = Object.assign([], this.requestList );
      this.requestList.forEach( request => {request.checked == true})
    }
    if (this.requestListSelected && this.requestListSelected.length > 0) {
      this.loading = true;
      const deliveryRequestIds = this.requestList
        .filter((request) => request.checked == true)
        .map((request) => request.deliveryRequestId);
      this.merchandiseServices
        .startHandleDeliveryRequest(deliveryRequestIds)
        .subscribe(
          (resStart) => {
            if (
              resStart &&
              resStart.result &&
              resStart.result.success == true
            ) {
              this.upDateListRequestFromRes(resStart.result.data);
              this.checkStatusCheckboxCheckedAll();
              this.showMessage("success", "Bắt đầu thành công", "Thông báo");
            } else {
              this.showMessage(
                "error",
                "Bắt đầu không thành công",
                "Thông báo"
              );
            }
            this.loading = false;
          },
          (errStart) => {
            this.showMessage("error", "Bắt đầu không thành công", "Thông báo");
            this.loading = false;
          }
        );
    } else {
      this.showMessage("error", "Bạn phải chọn ít nhất 1 request", "Thông báo");
    }
  }

  finish() {
    if(this.filterBy == 2){
      this.requestListSelected = Object.assign([], this.requestList );
      this.requestList.forEach( request => {request.checked == true})
    }
    if (this.requestListSelected && this.requestListSelected.length > 0) {
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
              this.upDateListRequestFromRes(resFinish.result.data);
              this.checkStatusCheckboxCheckedAll();
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
    } else {
      this.showMessage("error", "Bạn phải chọn ít nhất 1 request", "Thông báo");
    }
  }

  cancel() {
    if(this.filterBy == 2){
      this.requestListSelected = Object.assign([], this.requestList );
      this.requestList.forEach( request => {request.checked == true})
    }
    if (this.requestListSelected && this.requestListSelected.length > 0) {
      this.loading = true;
      const deliveryRequestIds = this.requestList
        .filter((request) => request.checked == true)
        .map((request) => request.deliveryRequestId);
      this.merchandiseServices
        .cancelHandleDeliveryRequest(deliveryRequestIds)
        .subscribe(
          (res) => {
            if (res.result.success) {
              this.upDateListRequestFromRes(res.result.data);
              this.checkStatusCheckboxCheckedAll();
              this.showMessage("success", "Hủy thành công", "Thông báo");
            } else {
              this.showMessage("error", res.result.message, "Thông báo");
            }
            this.loading = false;
          },
          (err) => {
            this.loading = false;
            this.showMessage("error", "Hủy thất bại", "Thông báo");
          }
        );
    } else {
      this.showMessage("error", "Bạn phải chọn ít nhất 1 request", "Thông báo");
    }
  }

  upDateListRequestFromRes(newRequestList) {
    // Cập nhật các request đã update vào listRequest gốc
    if (newRequestList && newRequestList.length) {
      newRequestList.forEach((newRequest) => {
        this.requestList = this.requestList.map((request) => {
          if (request.deliveryRequestCode == newRequest.deliveryRequestCode) {
            request.status = newRequest.status;
            request.statusDisplay = newRequest.statusDisplay;
          }
          return request;
        });
      });
    }
    this.requestListSelected = this.requestList.filter(
      (request) => request.checked == true
    );
  }

  changeSelectedDeliveryRequest($event, request) {
    setTimeout(() => {
      if (this.requestList && this.requestList.length == 1) {
        this.requestList[0].checked = true;
      }

      this.requestListSelected = this.requestList.filter(
        (request) => request.checked == true
      );

      this.checkStatusCheckboxCheckedAll();
    }, 200);
  }

  toggleCheckAll($event) {
    this.requestList = this.requestList.map((item) => {
      item.checked = $event;
      return item;
    });
    this.requestListSelected = this.requestList.filter(
      (request) => request.checked == true
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

  onPageChange($event) {
    this.currentPage = $event.page;
    window.scrollTo(0, 0);
  }

  onPageGrByPositionChange($event) {
    this.currentPageOfRequestsGrByPosition = $event.page;
    window.scrollTo(0, 0);
  }

  missingCountOfRequestList( requestList ){
    let missingRequest = requestList.filter( request => request.status == 1);
    if(missingRequest && missingRequest.length){
      return missingRequest.length;
    } else {
      return 0;
    }
  }
}
