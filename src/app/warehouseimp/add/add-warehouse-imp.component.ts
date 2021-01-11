import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  ConfirmationService,
  DialogService,
  MessageService,
} from "primeng/api";
import { ClientProfile } from "../../model/client-profile.model";
import { WarehouseImp } from "../../model/warehouse-imp.model";
import { WarehouseImpDetail } from "../../model/warehouse-imp-detail.model";
import { ApDomain } from "../../model/imp-exp-status.model";
import { Warehouse } from "../../model/warehouse.model";
import { Storekeeper } from "../../model/storekeeper.model";
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
//Service
import { WarehouseImpService } from "app/services/warehouse-imp.service";
import { SystemService } from "app/services/system.services";
import { UserService } from "app/services/user.service";
import { MerchandiseServices } from "app/services/merchandise.services";
// Model
import { MerchandiseAddPrams } from "./../../model/merchandise.model";
// Component
import { CaptureMerchandiseComponent } from "./capture-merchandise/capture-merchandise.component";

@Component({
  selector: "app-add-warehouse-imp",
  templateUrl: "./add-warehouse-imp.component.html",
  styleUrls: ["./add-warehouse-imp.component.scss"],
  providers: [DialogService],
})
export class AddWarehouseImpComponent implements OnInit {
  @ViewChild("warehouseImpDetailForm")
  warehouseImpDetailForm: NgForm;
  // Const
  // TODO: paging
  page = 1;
  perPage = 5;
  defaultWarehouseStatus = "1";
  defaultStoreKeeper = 1;
  defaultImportWarehouse = 2;
  defaultStatus = "1";
  defaultImpDate = new Date().toISOString().substr(0, 10);
  userId;

  // Something
  isEditWarehouseImpDetails = false;
  warehouseExpCode: string;
  isLoadByImpId = false;
  account: ClientProfile;

  // Data
  warehouseImp: WarehouseImp = new WarehouseImp();
  warehouseImpDetail: WarehouseImpDetail = new WarehouseImpDetail();
  newMerchandiseCode = ""; // using for declare new Merchandise
  warehouseImpDetailList: WarehouseImpDetail[] = [];
  warehouseImpStatusList: ApDomain[] = [];
  warehouseList: Warehouse[];
  storekeeperList: Storekeeper[] = [];

  // Ngx Datatable
  tableMessage = {
    emptyMessage: "Không có dữ liệu",
  };
  columnMode = ColumnMode;
  selectionType = SelectionType;
  selected: WarehouseImpDetail[] = [];
  loading: boolean = false;

  constructor(
    private warehouseImpService: WarehouseImpService,
    private merchandiseServices: MerchandiseServices,
    private systemService: SystemService,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) {}

  async ngOnInit() {
    this.account = JSON.parse(localStorage.getItem("userData"));
    this.userId = this.account.userId;
    await this.activeRoute.queryParams.subscribe(async (params) => {
      if (params.warehouseImpId) {
        await this.loadWarehouseById(params.warehouseImpId);
      }
    });
    await this.loadWareHouseStatus();
    await this.loadWareHouseList();
    this.warehouseImp.impDate = this.defaultImpDate;
  }

  /**
   * Save ware house imp
   * @param form
   */
  saveWarehouseImp(form) {
    if (form.valid) {
      this.warehouseImp.lsDetail = this.warehouseImpDetailList;
      this.warehouseImp.createdUserId = this.warehouseImp.changeUserId = this.userId;
      this.loading = true;
      this.warehouseImpService
        .saveWarehouseImp(this.warehouseImp)
        .toPromise()
        .then((res) => {
          this.loading = false;
          if (res.result.success) {
            this.messageService.add({
              key: "notificationPopup",
              severity: "success",
              summary: "Thông báo",
              detail: "Bạn đã lưu thành công phiếu nhập hàng",
            });
            this.mapResData(res.result.data);
            this.isLoadByImpId = true;
            this.location.go(
              this.location.path().split("?")[0],
              "warehouseImpId=" + this.warehouseImp.warehouseImpId
            );
          } else {
            this.location.go(this.location.path().split("?")[0]);
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: res.result.message,
            });
          }
        })
        .catch(() => {
          this.loading = false;
          this.location.go(this.location.path().split("?")[0]);
          this.messageService.add({
            key: "notificationPopup",
            severity: "error",
            summary: "Thông báo",
            detail: "Lưu kiện hàng không thành công",
          });
        });
    }
  }

  /**
   * Save warehouse import info
   * @param form
   * @param event
   */
  saveWarehouseImpDetail(form, event) {
    console.log(form.value);
    this.merchandiseServices
      .getMerchandiseByCode(form.value.merchandiseCode)
      .subscribe((resCheck) => {
        if (resCheck.result.success) {
          // check tồn tại trong danh list chưa
          if (this.checkEditExistingMerchandise()) {
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: "Kiện hàng đã tồn tại trong danh sách",
            });
            return;
          }
          const selfPosition = this.warehouseImpDetail.shelfPosition;
          if (this.isEditWarehouseImpDetails) {
            // Because warehouse import detail data is pass by reference to form data, just refresh list with this way
            this.warehouseImpDetailList = [...this.warehouseImpDetailList];
          } else {
            // Push new warehouse import detail data to list and refresh list
            this.warehouseImpDetailList = [
              this.warehouseImpDetail,
              ...this.warehouseImpDetailList,
            ];
          }
          // Because warehouse import detail data is pass by reference to form data, need to init new warehouse import detail and reset form
          this.warehouseImpDetail = new WarehouseImpDetail();
          // form.resetForm();
          this.warehouseImpDetail.shelfPosition = selfPosition;
          this.isEditWarehouseImpDetails = false;
          this.selected = [];
          this.nextFocus(event);
        } else {
          this.messageService.add({
            key: "notificationPopup",
            severity: "error",
            summary: "Thông báo",
            detail: "Kiện hàng chưa được khai báo",
          });
        }
      });
  }

  deleteAllWarehouseImpDetail() {
    this.delete(this.warehouseImpDetailList);
  }

  deleteOneWarehouseImpDetail(warehouseImp, index) {
    console.log(warehouseImp);
    if (warehouseImp && warehouseImp.warehouseImpDetailId) {
      this.delete([warehouseImp]);
    } else {
      this.warehouseImpDetailList.splice(index, 1);
    }
  }

  sumWeight() {
    let sum = 0;
    this.warehouseImpDetailList.forEach((warehouseImp) => {
      if (warehouseImp.netWeight && warehouseImp.netWeight > 0) {
        sum += warehouseImp.netWeight;
      }
    });
    return sum;
  }

  /**
   * Complete warehouse import
   * @param form
   */
  completeWarehouseImp(form) {
    if (form.valid) {
      console.log(this.warehouseImp);
      this.warehouseImp.lsDetail = this.warehouseImpDetailList;
      this.warehouseImp.changeUserId = this.userId;
      this.loading = true;
      this.warehouseImpService
        .completeWarehouseImp(this.warehouseImp)
        .toPromise()
        .then((res) => {
          this.loading = false;
          if (res.result.success) {
            this.messageService.add({
              key: "notificationPopup",
              severity: "success",
              summary: "Thông báo",
              detail: "Bạn đã hoàn tất thành công phiếu nhập hàng",
            });
            this.mapResData(res.result.data);
            this.isLoadByImpId = true;
            this.location.go(
              this.location.path().split("?")[0],
              "warehouseImpId=" + this.warehouseImp.warehouseImpId
            );
          } else {
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: res.result.message,
            });
          }
        })
        .catch(() => {
          this.loading = false;
          this.messageService.add({
            key: "notificationPopup",
            severity: "error",
            summary: "Thông báo",
            detail: "Hoàn tất kiện hàng không thành công",
          });
        });
    }
  }

  /**
   * Delete warehouse import details
   */
  delete(warehouseImpDetailList) {
    this.selected = Object.assign([], warehouseImpDetailList);
    if (this.selected.length > 0) {
      if (confirm("Bạn có chắc chắn muốn xóa?")) {
        let deleteApiIds = this.selected
          .filter((item) => item.warehouseImpDetailId)
          .map((itm) => itm.warehouseImpDetailId);
        deleteApiIds = deleteApiIds.filter(
          (v, i) => deleteApiIds.indexOf(v) === i
        );
        if (deleteApiIds.length > 0) {
          this.loading = true;
          this.warehouseImpService
            .deleteLsImpDetail(deleteApiIds)
            .toPromise()
            .then((res) => {
              this.loading = false;
              if (res.result.success) {
                this.messageService.add({
                  key: "notificationPopup",
                  severity: "success",
                  summary: "Thông báo",
                  detail: "Đã xóa kiện hàng",
                });
                const filtered = this.warehouseImpDetailList.filter(
                  (element) => !this.selected.includes(element)
                );
                this.warehouseImpDetailList = [...filtered];
              } else {
                this.messageService.add({
                  key: "notificationPopup",
                  severity: "error",
                  summary: "Thông báo",
                  detail: "Xóa kiện hàng không thành công",
                });
              }
            })
            .catch(() => {
              this.loading = false;
              this.messageService.add({
                key: "notificationPopup",
                severity: "error",
                summary: "Thông báo",
                detail: "Xóa kiện hàng không thành công",
              });
            });
        } else {
          this.messageService.add({
            key: "notificationPopup",
            severity: "success",
            summary: "Thông báo",
            detail: "Đã xóa kiện hàng",
          });
          const filtered = this.warehouseImpDetailList.filter(
            (element) => !this.selected.includes(element)
          );
          this.warehouseImpDetailList = [...filtered];
        }
      }
    }
  }

  /**
   * On select warehouse import details
   * @param selected
   */
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * Load warehouse status
   */
  loadWareHouseStatus() {
    this.loading = true;
    this.systemService
      .getWarehouseImpStatus()
      .toPromise()
      .then((res) => {
        this.loading = false;
        if (res.result.success) {
          this.warehouseImpStatusList = res.result.data;
          if (!this.warehouseImp.status) {
            this.warehouseImp.status = this.defaultWarehouseStatus;
          }
        } else {
          this.warehouseImpStatusList = [];
        }
      })
      .catch(() => {
        this.loading = false;
        this.warehouseImpStatusList = [];
      });
  }

  /**
   * Load warehouse list
   */
  loadWareHouseList() {
    this.loading = true;
    this.systemService
      .getAllWarehouse()
      .toPromise()
      .then((res) => {
        this.loading = false;
        if (res.result.success) {
          this.warehouseList = res.result.data;
          if (!this.warehouseImp.warehouseId) {
            this.warehouseImp.warehouseId = this.defaultImportWarehouse;
          }
          this.loadListStorekeeperInWarehouse(this.warehouseImp.warehouseId);
        } else {
          this.warehouseList = [];
        }
      })
      .catch(() => {
        this.loading = false;
        this.warehouseList = [];
      });
  }

  /**
   * Load storekeeper list by warehouse import id
   */
  loadListStorekeeperInWarehouse(value) {
    this.loading = true;
    this.userService
      .getListStorekeeperInWarehouse(value)
      .toPromise()
      .then((res) => {
        this.loading = false;
        if (res.result.success) {
          this.storekeeperList = res.result.data;
          if (!this.warehouseImp.storekeeperId) {
            this.warehouseImp.storekeeperId = this.defaultStoreKeeper;
          }
          const storekeeper = this.storekeeperList.find(
            (item) => item.userId === this.warehouseImp.storekeeperId
          );
          if (!storekeeper) {
            this.warehouseImp.storekeeperId = this.storekeeperList[0].userId;
          }
        } else {
          this.storekeeperList = [];
        }
      })
      .catch(() => {
        this.loading = false;
        this.storekeeperList = [];
      });
  }

  /**
   * Load warehouse import by export code
   * @param expCode
   */
  async loadWarehouseImpByExpCode(expCode) {
    if (expCode) {
      this.loading = true;
      this.warehouseImpService
        .getWarehouseExpByCode(expCode)
        .toPromise()
        .then((res) => {
          this.loading = false;
          if (res.result.success) {
            this.mapResData(res.result.data, true);
            this.loadListStorekeeperInWarehouse(this.warehouseImp.warehouseId);
          } else {
            this.warehouseImpDetailList = [];
            this.warehouseImp = new WarehouseImp();
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: res.result.message,
            });
          }
        })
        .catch(() => {
          this.loading = false;
          this.warehouseImp = new WarehouseImp();
          this.warehouseImpDetailList = [];
          this.messageService.add({
            key: "notificationPopup",
            severity: "error",
            summary: "Thông báo",
            detail: "Không lấy được thông tin",
          });
        });
    }
  }

  /**
   * load warehouse import info by warehouse import id
   * @param warehouseImpId
   */
  async loadWarehouseById(warehouseImpId) {
    this.loading = true;
    this.warehouseImpService
      .getWarehouseImpViewById(warehouseImpId)
      .toPromise()
      .then((res) => {
        this.loading = false;
        if (res.result.success) {
          this.warehouseImp = res.result.data;
          this.warehouseExpCode = this.warehouseImp.warehouseExpCode;
          this.warehouseImp.impDate = this.warehouseImp.impDate
            ? new Date(this.warehouseImp.impDate).toISOString().substr(0, 10)
            : new Date().toISOString().substr(0, 10);
          this.warehouseImpDetailList = this.warehouseImp.lsDetail;
          this.isLoadByImpId = true;
        } else {
          this.warehouseImp = new WarehouseImp();
          this.warehouseImpDetailList = [];
        }
      })
      .catch(() => {
        this.loading = false;
        this.warehouseImp = new WarehouseImp();
        this.warehouseImpDetailList = [];
      });
  }

  async captureMerchandise() {
    const ref = this.dialogService.open(CaptureMerchandiseComponent, {
      header: "Chụp ảnh kiện hàng",
      width: "700px",
    });
  }

  async checkMerchandiseCode(event, merchandiseCode) {
    if (merchandiseCode != null) {
      await this.merchandiseServices
        .getMerchandiseByCode(merchandiseCode)
        .toPromise()
        .then(async (res) => {
          if (res.result.success) {
            if (res.result.data != null) {
              // hiển thị dữ liệu đơn hàng của kiện hàng
              // Next sang control tiếp theo
              this.nextFocus(event);
            } else {
              //hiển thị thông báo đơn hàng chưa được map vào kiện hàng
              this.newMerchandiseCode = '';
              await this.confirmationService.confirm({
                key: "comfirmOrder",
                header: "Xác nhận",
                message: `Kiện hàng chưa được khai báo.`,
                acceptLabel: "Khai báo",
                rejectLabel: "Bỏ qua",
                accept: () => {
                  const params: MerchandiseAddPrams = {
                    merchandiseCode: this.newMerchandiseCode,
                    createdUserId: this.userId,
                  };
                  this.loading = true;
                  this.merchandiseServices
                    .addMerchandise(params)
                    .subscribe((resAddAddMerchandise) => {
                      if (resAddAddMerchandise.result.success) {
                        this.messageService.add({
                          key: "notificationPopup",
                          severity: "success",
                          summary: "Thông báo",
                          detail: "Cập nhật thành công!",
                        });
                      } else {
                        this.messageService.add({
                          key: "notificationPopup",
                          severity: "error",
                          summary: "Thông báo",
                          detail: resAddAddMerchandise.result.message,
                        });
                      }
                      this.loading = false;
                    });
                },
                reject: () => {
                  this.loading = false;
                  this.messageService.add({
                    key: "notificationPopup",
                    severity: "error",
                    summary: "Thông báo",
                    detail: "Có lỗi xảy ra",
                  });
                },
              });
            }
          } else {
          }
        })
        .catch(() => {});
    } else {
      //Hiển thị thông báo bắt buộc phải nhập mã vận đơn
    }
  }

  /**
   * Focus next input
   * @param event
   */
  nextFocus(event) {
    event.preventDefault();
    const inputs = Array.prototype.slice.call(
      document.querySelectorAll("button[tabindex],input[tabindex]")
    );
    const index = (inputs.indexOf(document.activeElement) + 1) % inputs.length;
    const input = inputs[index];
    input.focus();
    if (input.nodeName === "INPUT") {
      input.select();
    }
  }

  /**
   * Check is editing existing merchandise
   * If merchandise code just entered is existing Merchandise list => edit
   */
  checkEditExistingMerchandise() {
    const mCode = this.warehouseImpDetail.merchandiseCode.trim().toLowerCase();
    const editingM = this.warehouseImpDetailList.find(
      (e) => e.merchandiseCode.toLowerCase() === mCode
    );
    return !!editingM;
  }

  /**
   * Map response merchandise exp data
   * @param data
   * @param isLoadFromExpCode
   */
  mapResData(data, isLoadFromExpCode = false) {
    this.warehouseImp.warehouseExpId = data.warehouseExpId;
    this.warehouseImp.expWarehouseId = data.expWarehouseId;
    this.warehouseImp.warehouseImpCode = data.warehouseImpCode;
    this.warehouseImp.warehouseImpId = data.warehouseImpId;
    this.warehouseImp.warehouseId = data.warehouseId;
    this.warehouseImp.status = isLoadFromExpCode
      ? this.defaultStatus
      : data.status;
    if (!isLoadFromExpCode) {
      this.warehouseImpDetailList = data.lsDetail.map((item) => {
        const warehouseImpDetail = new WarehouseImpDetail();
        warehouseImpDetail.merchandiseCode = item.merchandiseCode;
        warehouseImpDetail.warehouseImpDetailId = item.warehouseImpDetailId;
        warehouseImpDetail.netWeight = item.netWeight;
        warehouseImpDetail.chargedWeight = item.chargedWeight;
        warehouseImpDetail.paymentWeight = item.paymentWeight;
        warehouseImpDetail.length = item.length;
        warehouseImpDetail.width = item.width;
        warehouseImpDetail.height = item.height;
        warehouseImpDetail.shelfPosition = this.warehouseImpDetail.shelfPosition;
        return warehouseImpDetail;
      });
    }
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Check valid size
   */
  isValidSize() {
    return (
      (!this.warehouseImpDetail.length &&
        !this.warehouseImpDetail.width &&
        !this.warehouseImpDetail.height) ||
      (this.warehouseImpDetail.length &&
        this.warehouseImpDetail.width &&
        this.warehouseImpDetail.height)
    );
  }
}
