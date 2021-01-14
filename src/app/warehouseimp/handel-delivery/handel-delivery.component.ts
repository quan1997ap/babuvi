import { PrintBillComponent } from "./../../merchandise/delivery/print-bill/print-bill.component";
import { DialogService, MessageService } from "primeng/api";
import { MerchandiseServices } from "app/services/merchandise.services";
import { Component, OnInit } from "@angular/core";
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
  loading = false;
  filterByOptions = [{ label: "Theo mã phiếu", value: 1 }];
  filterForm: FormGroup;
  currentPage = 0;
  numOfItemOnPage = 5;
  requestList = [];
  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private merchandiseServices: MerchandiseServices,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      code: ["DlR20218", Validators.required],
      filterBy: [this.filterByOptions[0].value, Validators.required],
    });
  }

  filterRequest() {
    this.requestList.length = 0;
    const code = this.filterForm.getRawValue().code.trim();
    const filterType = this.filterForm.getRawValue().filterBy;
    if (
      this.requestList.map((request) => request.merchandiseCode).includes(code)
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
                listRequest = listRequest.map((request) => {
                  request.checked = false;
                  request.isCollapse = true;
                  return request;
                });
                res.result.data.lsDetail = listRequest;
                console.log(res.result.data)
                this.requestList.push( res.result.data )
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

  print() {}
  start() {}
  finish() {}
  stop() {}

  /**
   * Cancel delivery
   */
  cancelDelivery(deliveryRequestCode) {
    const body = {
      DeliveryRequestCode: deliveryRequestCode,
    };
    this.loading = true;
    this.merchandiseServices
      .cancelDelivery(body)
      .toPromise()
      .then((res) => {
        this.loading = false;
        if (res.result.success) {
          // TODO: reload data after success
          this.showMessage("success", "Hủy thành công", "Thông báo");

          // this.getDeliveryRequestByCode(this.deliveryRequestCode);
        } else {
          this.showMessage("error", res.result.message, "Thông báo");
        }
      })
      .catch(() => {
        this.loading = false;
        this.showMessage("error", "Hủy thất bại", "Thông báo");
      });
  }

  /**
   * Cancel Export
   */
  // cancelExp(warehouseExpCode) {
  //   const body = {
  //     WarehouseExpCode: warehouseExpCode ? warehouseExpCode : null,
  //   };
  //   this.loading = true;
  //   this.warehouseExpService
  //     .cancelWarehouseExp(body)
  //     .toPromise()
  //     .then((res) => {
  //       this.loading = false;
  //       if (res.result.success) {
  //         // TODO: reload data after success
  //         this.showMessage("alert-success", "Hủy xuất hàng thành công");
  //         this.getDeliveryRequestByCode(this.deliveryRequestCode);
  //       } else {
  //         this.showMessage("alert-danger", res.result.message);
  //       }
  //     })
  //     .catch(() => {
  //       this.loading = false;
  //       this.showMessage("alert-danger", "Xuất hàng thất bại");
  //     });
  // }

  /**
   * Print bill
   */
  printExpBill(warehouseExpCode, deliveryRequestCode, deliveryRequestId) {
    const printData = {
      expCode: warehouseExpCode ? warehouseExpCode : null,
      deliveryRequestCode: deliveryRequestCode,
      deliveryRequestId: deliveryRequestId,
    };
    this.dialogService.open(PrintBillComponent, {
      data: printData,
    });
  }

  showMessage(type, message, summary) {
    this.messageService.add({
      key: "notificationPopup",
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
