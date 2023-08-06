import { Component, OnInit, ViewChild, ChangeDetectorRef ,HostListener } from "@angular/core";
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
import { FileManagerServices } from "./../../services/fileManager.services";
import { AudioService } from "app/common/audio.service";

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
  confirmType = 0 ; // 1 is accept, 2 is reject, 3 is cancel
  imgUploadType = "image/jpeg";
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
  orderCodeMapping = ""; // using for declare new Merchandise
  warehouseImpDetailList: WarehouseImpDetail[] = [];
  warehouseImpStatusList: ApDomain[] = [];
  warehouseList: Warehouse[];
  storekeeperList: Storekeeper[] = [];
  merchandiseCheckPartner: WarehouseImpDetail = new WarehouseImpDetail();

  // Ngx Datatable
  tableMessage = {
    emptyMessage: "Không có dữ liệu",
  };
  columnMode = ColumnMode;
  selectionType = SelectionType;
  selected: WarehouseImpDetail[] = [];
  loading: boolean = false;
  isCheckingNetWeight: boolean = false;

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
    public dialogService: DialogService,
    public fileManagerServices: FileManagerServices,
    private audioService: AudioService,
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

  //Hỏi trước khi load lại page tránh mất dữ liệu
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    // Do more processing...
    event.returnValue = false;
}   

  /**
   * Save ware house imp
   * @param form
   */
  async saveWarehouseImp(form) {
    if (form.valid) {
      this.warehouseImp.lsDetail = this.warehouseImpDetailList;
      this.warehouseImp.createdUserId = this.warehouseImp.changeUserId = this.userId;
      this.loading = true;
      const uploadSuccess = await this.uploadListImg();
      if (uploadSuccess == true) {
        this.saveWarehouseImpWithImgsUploaded();
      } else {
        // upload các img còn thiếu không?
        this.loading = false;
        if (
          confirm(
            "Một số ảnh Upload bị lỗi. Bạn muốn lưu không ảnh?"
          )
        ) {
          this.saveWarehouseImp(form);
        } else {
          this.saveWarehouseImpWithImgsUploaded();
        }
      }
    }
  }

  saveWarehouseImpWithImgsUploaded() {
    this.warehouseImp.lsDetail.forEach((details) => {
      details.lsImage = details.lsImage.filter(
        (img) => img.attachLink && img.attachLink.includes("https:")
      );
    });
    // this.warehouseImpService
    //   .saveWarehouseImp(this.warehouseImp)
    //   .toPromise()
    //   .then((res) => {
    //     if (res.result.success) {
    //       this.messageService.add({
    //         key: "notificationPopup",
    //         severity: "success",
    //         summary: "Thông báo",
    //         detail: "Bạn đã lưu thành công phiếu nhập hàng",
    //       });
    //       this.mapResData(res.result.data);
    //       this.isLoadByImpId = true;
    //       this.location.go(
    //         this.location.path().split("?")[0],
    //         "warehouseImpId=" + this.warehouseImp.warehouseImpId
    //       );
    //       this.loading = false;
    //     } else {
    //       this.location.go(this.location.path().split("?")[0]);
    //       this.messageService.add({
    //         key: "notificationPopup",
    //         severity: "error",
    //         summary: "Thông báo",
    //         detail: res.result.message,
    //       });
    //       this.loading = false;
    //     }
    //   })
    //   .catch(() => {
    //     this.loading = false;
    //     this.location.go(this.location.path().split("?")[0]);
    //     this.messageService.add({
    //       key: "notificationPopup",
    //       severity: "error",
    //       summary: "Thông báo",
    //       detail: "Lưu kiện hàng không thành công",
    //     });
    //   });
  }

  uploadOneImg(imageAsDataUrl) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const imgBlob = this.DataURIToBlob(imageAsDataUrl);
      const fileName = new Date().getTime();
      formData.append("file", imgBlob, fileName.toString());
      this.fileManagerServices.uploadImg(formData).subscribe(
        (resultUploadImg) => {
          if (
            resultUploadImg &&
            resultUploadImg.result &&
            resultUploadImg.result.success &&
            resultUploadImg.result.data
          ) {
            resolve(resultUploadImg.result.data);
          } else {
            resolve(false);
          }
        },
        (uploadErr) => {
          resolve(false);
        }
      );
    });
  }

  uploadListImg() {
    // upload and update img uploaded response to this.warehouseImpDetailList
    let uploadSuccess = true;
    return new Promise(async (resolve, reject) => {
      for (
        let warehouseImpIndex = 0;
        warehouseImpIndex < this.warehouseImpDetailList.length;
        warehouseImpIndex++
      ) {
        for (
          let imgIndex = 0;
          imgIndex <
          this.warehouseImpDetailList[warehouseImpIndex].lsImage.length;
          imgIndex++
        ) {
          const imgAttachLink = this.warehouseImpDetailList[warehouseImpIndex]
            .lsImage[imgIndex].attachLink;
          if (imgAttachLink && imgAttachLink.includes("https:") == false) {
            const uploadImgStatus = await this.uploadOneImg(imgAttachLink);
            if (uploadImgStatus) {
              this.warehouseImpDetailList[warehouseImpIndex].lsImage[
                imgIndex
              ] = Object.assign({}, uploadImgStatus);
              this.warehouseImpDetailList[warehouseImpIndex].lsImage[
                imgIndex
              ].uploadSuccess = true;
            } else {
              this.warehouseImpDetailList[warehouseImpIndex].lsImage[
                imgIndex
              ].uploadSuccess = false;
              uploadSuccess = false;
            }
          }
        }
      }
      resolve(uploadSuccess);
    });
  }
  /**
   * Save warehouse import info
   * @param form
   * @param event
   */
  saveWarehouseImpDetail(form, event) {
    this.loading = true;
    this.merchandiseServices
      .getMerchandiseByCode(form.value.merchandiseCode)
      .subscribe(
        (resCheck) => {
          if (resCheck.result.success) {
            // check tồn tại trong danh list chưa
            if (this.checkEditExistingMerchandise()) {
              this.messageService.add({
                key: "notificationPopup",
                severity: "error",
                summary: "Thông báo",
                detail: "Kiện hàng đã tồn tại trong danh sách",
              });
              const merchandiseCodeInput = document.getElementById(
                "merchandiseCode"
              ) as HTMLInputElement;
              merchandiseCodeInput.focus();
              merchandiseCodeInput.select();
              return;
            } else {
              this.loading = false;
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
            this.loading = false;
          } else {
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: "Kiện hàng chưa được khai báo",
            });
            this.loading = false;
          }
        },
        (err) => {
          this.loading = false;
        }
      );
  }

  deleteAllWarehouseImpDetail() {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      this.delete(this.warehouseImpDetailList);
    }
  }

  deleteOneWarehouseImpDetail(warehouseImp, index) {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      if (warehouseImp && warehouseImp.warehouseImpDetailId) {
        
        this.delete([warehouseImp]);
      } else {
        this.warehouseImpDetailList = this.warehouseImpDetailList.filter(
          (item) => item.merchandiseCode !== warehouseImp.merchandiseCode
        );
        this.changeDetectorRef.detectChanges();
      }
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
  async completeWarehouseImp(form) {
    if (form.valid) {
      this.loading = true;
      const uploadSuccess = await this.uploadListImg();
      if (uploadSuccess == true) {
        this.completeWarehouseImpWithImgsUploaded(form);
      } else {
        // upload các img còn thiếu không?
        this.loading = false;
        if (
          confirm(
            "Một số ảnh đã bị upload lỗi. Tiếp tục và bỏ lưu các ảnh lỗi?"
          )
        ) {
          this.completeWarehouseImpWithImgsUploaded(form);
        } else {
          this.completeWarehouseImp(form);
        }
      }
    }
  }

  completeWarehouseImpWithImgsUploaded(form) {
    // if (form.valid) {
    //   this.warehouseImp.lsDetail = this.warehouseImpDetailList;
    //   this.warehouseImp.lsDetail.forEach((details) => {
    //     details.lsImage = details.lsImage.filter(
    //       (img) => img.attachLink && img.attachLink.includes("https:")
    //     );
    //   });
    //   this.warehouseImp.changeUserId = this.userId;
    //   this.loading = true;
    //   this.warehouseImpService
    //     .completeWarehouseImp(this.warehouseImp)
    //     .toPromise()
    //     .then((res) => {
    //       this.loading = false;
    //       if (res.result.success) {
    //         this.messageService.add({
    //           key: "notificationPopup",
    //           severity: "success",
    //           summary: "Thông báo",
    //           detail: "Bạn đã hoàn tất thành công phiếu nhập hàng",
    //         });
    //         this.mapResData(res.result.data);
    //         this.isLoadByImpId = true;
    //         this.location.go(
    //           this.location.path().split("?")[0],
    //           "warehouseImpId=" + this.warehouseImp.warehouseImpId
    //         );
    //       } else {
    //         this.messageService.add({
    //           key: "notificationPopup",
    //           severity: "error",
    //           summary: "Thông báo",
    //           detail: res.result.message,
    //         });
    //       }
    //     })
    //     .catch(() => {
    //       this.loading = false;
    //       this.messageService.add({
    //         key: "notificationPopup",
    //         severity: "error",
    //         summary: "Thông báo",
    //         detail: "Hoàn tất kiện hàng không thành công",
    //       });
    //     });
    // }
  }

  /**
   * Delete warehouse import details
   */
  delete(warehouseImpDetailList) {
    this.selected = Object.assign([], warehouseImpDetailList);
    if (this.selected.length > 0) {
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

  merchandiseCodeChange(event, merchandiseCode) {
    if(this.warehouseImpDetail.lsImage && this.warehouseImpDetail.lsImage.length){
      this.warehouseImpDetail.lsImage.length = 0;
    }
    if (merchandiseCode.indexOf("BBV-") == 0) {
      this.warehouseImpDetail.shelfPosition = merchandiseCode;
      this.warehouseImpDetail.merchandiseCode = "";
      document.getElementById("merchandiseCode").focus();
    }
  }

  /*
    event when input merchandiseCode lost focus
  */
  merchandiseCodeCheckExist() {
    if (this.checkEditExistingMerchandise()) {
      return false;
    } else {
      return true;
    }
  }

  /*
    Capture img
  */
  createFormImgsData(imgs) {
    const formData = new FormData();
    if (imgs.length > 0) {
      for (let i = 0; i < imgs.length; i++) {
        const imgBlob = this.DataURIToBlob(imgs[i].attachLink);
        const fileName = new Date().getTime().toString();
        formData.append("file", imgBlob, fileName.toString());
      }
    }
    return formData;
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    // { type: mimeString }
    return new Blob([ia], { type: this.imgUploadType });
  }

  async captureMerchandise() {
    // add ảnh
    if (this.loading == false) {
      const ref = this.dialogService.open(CaptureMerchandiseComponent, {
        header: "Chụp ảnh kiện hàng",
        width: "100vw",
        style: { "max-width": "700px", "overflow-y": "auto" },
        data: {
          imgLinks: this.warehouseImpDetail.lsImage
            ? this.warehouseImpDetail.lsImage
            : [],
          action: "capture",
        },
      });

      ref.onClose.subscribe((capturedImgs: any[]) => {
        if (capturedImgs) {
          this.warehouseImpDetail.lsImage = capturedImgs;
        }
        const netWeightInput = document.getElementById(
          "netWeight"
        ) as HTMLInputElement;
        netWeightInput.focus();
        netWeightInput.select();
      });
    }
  }

  editListImgOfMerchandise(imgs, indexMerchandise) {
    // edit from gird
    if (this.loading == false) {
      const ref = this.dialogService.open(CaptureMerchandiseComponent, {
        header: "Ảnh kiện hàng",
        width: "100vw",
        style: { "max-width": "700px", "overflow-y": "auto"},
        data: {
          imgLinks: imgs,
          action: "viewImg",
        },
      });
      ref.onClose.subscribe((capturedImgs: any[]) => {
        if (capturedImgs) {
          this.warehouseImpDetailList[indexMerchandise].lsImage = capturedImgs;
        }
      });
    }
  }

  focusAndSelectMerchandiseCode(){
    const merchandiseCodeInput = document.getElementById(
      "merchandiseCode"
    ) as HTMLInputElement;
    merchandiseCodeInput.focus();
    merchandiseCodeInput.select();
  }

  async checkMerchandiseCode(event, merchandiseCode, type) {
    this.messageService.clear();
    if(!this.loading){
      this.loading = true;
      const merchandiseCodeInput = document.getElementById(
        "merchandiseCode"
      ) as HTMLInputElement;
      if (!merchandiseCode) {
        this.messageService.add({
          key: "notificationPopup",
          severity: "error",
          summary: "Thông báo",
          detail: "Bắt buộc phải nhập mã vận đơn",
        });
        this.loading = false;
        this.focusAndSelectMerchandiseCode();
      } else if (this.merchandiseCodeCheckExist() == false) {
        this.loading = false;
        this.messageService.add({
          key: "notificationPopup",
          severity: "error",
          summary: "Thông báo",
          detail: "Kiện hàng đã tồn tại trong danh sách",
        });
        this.focusAndSelectMerchandiseCode();
      } else if (merchandiseCode && this.merchandiseCodeCheckExist() == true ) {
        await this.merchandiseServices
          .checkMerchandiseByCode(merchandiseCode)
          .toPromise()
          .then(async (res) => {


            //Nếu có dữ liệu kiện hàng từ phía đối tác --> hiển thị thông tin của đối tác
            if(res.result.success && res.result.data != null)
            {
              //Gán dữ liệu kiện hàng của đối tác lên giao diện
             this.merchandiseCheckPartner.volume = res.result.data.volume;
             this.merchandiseCheckPartner.netWeight = res.result.data.netWeight;
             this.merchandiseCheckPartner.length = res.result.data.length;
             this.merchandiseCheckPartner.width = res.result.data.width;
             this.merchandiseCheckPartner.height = res.result.data.height;
            }

            if (res.result.success && res.result.data != null && res.result.data.merchandiseId !== 0) {
              // hiển thị dữ liệu đơn hàng của kiện hàng
              // Next sang control tiếp theo
              merchandiseCodeInput.blur();

              //clear ghi chú của kiện hàng cũ
              this.merchandiseCheckPartner.description = null;
              var checkVol = false;
              //Nếu kiện hàng có ghi chú để xử lý thì hiển thị và bất sound
             if ( res.result.data.description != null) {
              this.merchandiseCheckPartner.description = res.result.data.description;
              this.audioService.playAudio_CoGhiChu();
              checkVol = true;
             } 
             if((res.result.data.volume != null && res.result.data.volume !== 0) ||
                    (res.result.data.length != null && res.result.data.length !== 0) ||
                    (res.result.data.width != null && res.result.data.width !== 0) ||
                    (res.result.data.height != null && res.result.data.height !== 0) ) {
               this.audioService.playAudio_DoKhoiLuong();
               checkVol = true;
             }
             //Nếu kiện hàng không có thông báo gì thì mới thông báo có
             if(!checkVol) {
              this.audioService.playAudio_Co();
             }

              this.loading = false;
              this.captureMerchandise();

            } else {
              // hiển thị thông báo đơn hàng chưa được map vào kiện hàng
              this.orderCodeMapping = "";
              setTimeout(() => {
                const orderCodeMappingInput = document.getElementById(
                  "orderCodeMapping"
                ) as HTMLInputElement;
                orderCodeMappingInput.focus();
                this.audioService.playAudio_ChuaKhaiBao();
                this.loading = false;
              }, 300);
              await this.confirmationService.confirm({
                key: "comfirmOrder",
                header: "Xác nhận",
                message: `Kiện hàng chưa được khai báo.`,
                acceptLabel: "Khai báo",
                rejectLabel: "Bỏ qua",
                accept: () => {
                  const params: MerchandiseAddPrams = {
                    merchandiseCode: merchandiseCode,
                    OrderCode: this.orderCodeMapping,
                    createdUserId: this.userId,
                  };
                  this.loading = true;
                  this.merchandiseServices.addMerchandise(params).subscribe(
                    (resAddAddMerchandise) => {
                      if (resAddAddMerchandise.result.success == true) {
                        this.messageService.add({
                          key: "notificationPopup",
                          severity: "success",
                          summary: "Thông báo",
                          detail: "Cập nhật thành công!",
                        });
                        merchandiseCodeInput.blur();
                        this.loading = false;
                        this.captureMerchandise();
                      } else {
                        this.messageService.add({
                          key: "notificationPopup",
                          severity: "error",
                          summary: "Thông báo",
                          detail: resAddAddMerchandise.result.message,
                        });
                        this.focusAndSelectMerchandiseCode();
                        this.loading = false;
                      }
                    },
                    (err) => {
                      this.loading = false;
                    }
                  );
                },
                reject: (  ) => {
                  if(this.confirmType == 2){
                    this.loading = false;
                    this.orderCodeMapping = null;
                    this.captureMerchandise();
                  } else if(this.confirmType == 3){
                    this.loading = false;
                    this.orderCodeMapping = null;
                  }
                },
              });
            }
          })
          .catch(() => {
            this.loading = false;
            this.messageService.add({
              key: "notificationPopup",
              severity: "error",
              summary: "Thông báo",
              detail: "Có lỗi xảy ra. Hãy thử lại",
            });
          });
      } else {
        this.messageService.add({
          key: "notificationPopup",
          severity: "error",
          summary: "Thông báo",
          detail: "Có lỗi xảy ra",
        });
        this.loading = false;
      }
    }
  }

  confirmDialogEvent(cd, type){
    if( type == 1){
      this.confirmType = type;
      cd.accept();
    } else if( type == 2){
      this.confirmType = type;
      cd.reject();
    } else if( type == 3){
      this.confirmType = type;
      cd.reject();
    }
  }

  /**
   * Focus next input
   * @param event
   */
  nextFocus(event, inputName?) {
    if(inputName && inputName == 'height' && this.warehouseImpDetail.merchandiseCode && this.isValidSize() && this.warehouseImpDetail.lsImage.length){
      const addBtn = document.getElementById(
        "add-btn"
      ) as HTMLInputElement;
      addBtn.focus();
    } else {
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
  }

  /**
   * Check is editing existing merchandise
   * If merchandise code just entered is existing Merchandise list => edit
   */
  checkEditExistingMerchandise() {
    if (this.warehouseImpDetail.merchandiseCode) {
      const mCode = this.warehouseImpDetail.merchandiseCode
        .trim()
        .toLowerCase();
      const editingM = this.warehouseImpDetailList.find(
        (e) => e.merchandiseCode.toLowerCase() === mCode
      );
      return !!editingM;
    } else {
      return false;
    }
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
        warehouseImpDetail.lsImage = item.lsImage;
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

  /*
    prevent next tab when merchandiseCode = null || netWeight == null
  */
  checkNextControlMerchandiseCode($event, merchandiseCode) {
    if (
      merchandiseCode == undefined ||
      merchandiseCode == null ||
      merchandiseCode == ""
    ) {
      setTimeout(() => {
        const merchandiseCodeInput = document.getElementById(
          "merchandiseCode"
        ) as HTMLInputElement;
        merchandiseCodeInput.focus();
      }, 200);
    }
  }

  checkNextControlNetWeight($event, netWeight, type) {
    if(this.isCheckingNetWeight == false){
      if (netWeight == undefined || netWeight == null || netWeight == "") {
        this.isCheckingNetWeight = true;
        setTimeout(() => {
          const merchandiseCodeInput = document.getElementById(
            "netWeight"
          ) as HTMLInputElement;
          merchandiseCodeInput.focus();
          merchandiseCodeInput.select();
          this.isCheckingNetWeight = false;
        }, 200);
      } else{
        if(type == 'keyupEnter'){
          this.nextFocus($event);
        }
      }
    }
  }
}
