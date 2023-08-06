import { MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MessageService } from "primeng/api";
import { ConfirmationService,
          DialogService } from "primeng/api";
import { PackingProductBillDataModel } from "../print-bill/packing-product-bill/packing-product-bill.component";

import { AudioService } from "app/common/audio.service";
import { MerchandiseServices } from "./../../../services/merchandise.services";
import { FileManagerServices } from "./../../../services/fileManager.services";

import { CaptureMerchandiseComponent } from './../../../warehouseimp/add/capture-merchandise/capture-merchandise.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-packing-products",
  templateUrl: "./packing-products.component.html",
  styleUrls: ["./packing-products.component.scss"],
  providers: [ConfirmationService, DialogService],
  
})
export class PackingProductsComponent implements OnInit {
  @ViewChild('filterGlobalProduct') filterGlobalProduct: ElementRef;
  searchPrTxt = '';

  styleSheetFile = "assets/styles/css/print-gh-50-50.css";

  isLoading = false;
  selectedProducts = [];
  products = [];

  defaultPackage = {
    sumNetWeight: 0,
    products: [],
    merchandiseWarehouseId: null, // id
    merchandiseCode: null,
  };

  productGrouped = [];
  productGroupedFilter = [];

  packageIndexSelected = null;

  colSelectedTables = [
    { name: "Mã kiện", id: "merchandiseCode" },
    { name: "Cân nặng", id: "netWeight" },

  ];
  loading: boolean = false;
  imgUploadType = "image/jpeg";
  constructor(
    public dialogRef: MatDialogRef<PackingProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private merchandiseServices: MerchandiseServices,
    public cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private audioService: AudioService,
    public dialogService: DialogService,
    public fileManagerServices: FileManagerServices,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService
  ) {
    // console.log(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data && this.data.lsParentDetail) {
      this.products = this.data.lsDetail.filter(
        (product) => product.parentId == null
      );
      let lsParentDetail = this.data.lsParentDetail.sort((a, b) => {
        if (a.merchandiseWarehouseId == null) {
          return -99999;
        } else {
          return 0;
        }
      });
      if (this.products && this.products.length == 0) {
        lsParentDetail = lsParentDetail.filter(
          (parent) => parent.merchandiseWarehouseId != null
        );
      }

      this.productGrouped = lsParentDetail.map((parent) => {
        let defaultParent = JSON.parse(JSON.stringify(this.defaultPackage));
        if (
          this.data &&
          this.data.lsDetail &&
          parent.merchandiseWarehouseId != null
        ) {
          defaultParent.products = this.data.lsDetail.filter(
            (product) => product.parentId == parent.merchandiseWarehouseId
          );
        } else if (parent.merchandiseWarehouseId == null) {
          defaultParent.products = [];
        }
        if (parent.merchandiseWarehouseId == null) {
          return defaultParent;
        } else {
          return { ...defaultParent, ...parent };
        }
      });
      this.checkSumNetWeight();
    }
    this.packageIndexSelected = 0;
    setTimeout(() => {
      this.filterGlobalProduct.nativeElement.focus();
    }, 500);
  }

  addProductToPackage() {
    this.productGrouped[this.packageIndexSelected].products =
      this.productGrouped[this.packageIndexSelected].products.concat(
        this.selectedProducts
      );
    let selectedProductIds = this.selectedProducts.map(
      (item) => item.merchandiseId
    );

    let checkAudio = false;
    //Kiểm tra các vận đơn đang được xử lý có ghi chú hay không
    for (let i = 0; i < this.selectedProducts.length; i++) {
      if(this.selectedProducts[i].description != null){
        this.audioService.playAudio_CoGhiChu();
        checkAudio = true;
      }
    }
    //Kiểm tra nếu đã chay audio 1 lần thì không lặp lại
    if (!checkAudio) {
      this.audioService.playAudio_Co();
    }

    this.products = this.products.filter(
      (item) => !selectedProductIds.includes(item.merchandiseId)
    );
    this.selectedProducts = [];
    this.checkSumNetWeight();
    this.cdr.detectChanges();
  }

  addGroup() {
    this.productGrouped.unshift(
      JSON.parse(JSON.stringify(this.defaultPackage))
    );
    this.packageIndexSelected = 0;
  }

  async saveGr(i: number) {
    this.spinner.show();
    this.isLoading = true;
    
    const uploadSuccess = await this.uploadListImg(i);

    if (uploadSuccess == true) {
      this.saveGrWithImagesUploaded(i);
      this.spinner.hide();
      this.loading = false;
    } else {
      // upload các img còn thiếu không?
      this.spinner.hide();
      this.loading = false;
      if (
        confirm(
          "Một số ảnh Upload bị lỗi. Bạn muốn lưu không ảnh?"
        )
      ) {
        this.saveGrNoImages(i);
      } else {
        this.saveGrWithImagesUploaded(i);
      }
    }
  }

  saveGrWithImagesUploaded(i: number) {
    this.productGrouped[i].lsImage = this.productGrouped[i].lsImage.filter(
        (img) => img.attachLink && img.attachLink.includes("https:")
      );

      let saveParams = {
        DeliveryRequestId: this.data.deliveryRequestId,
        Length: this.productGrouped[i].length,
        Width: this.productGrouped[i].width,
        Height: this.productGrouped[i].height,
        Description: this.productGrouped[i].description,
        lsImage: this.productGrouped[i].lsImage,
        lsId: this.productGrouped[i].products.map(
          (item) => item.merchandiseWarehouseId
        ),
      };

      this.merchandiseServices.createPackage(saveParams).subscribe(
        (res) => {
          if (res && res.result && res.result.success) {
            this.productGrouped[i].merchandiseWarehouseId =
              res.result.data.merchandiseWarehouseId;
            this.productGrouped[i].merchandiseCode =
              res.result.data.merchandiseCode;
            this.productGrouped[i].merchandiseId = res.result.data.merchandiseId;
            this.checkSumNetWeight();
            if (this.products && this.products.length) {
              this.addGroup();
            }
            this.showMessage("success", "Lưu nhóm", "Bạn đã đóng gói kiện hàng thành công");
          } else {
            this.showMessage(
              "error",
              "Lưu nhóm",
              "Không thể đóng gói kiện hàng"
            );
          }
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.showMessage("error", "Lưu nhóm", "Bạn chưa lưu được nhóm");
        }
      );
  }

  saveGrNoImages(i: number) {
      let saveParams = {
        DeliveryRequestId: this.data.deliveryRequestId,
        Length: this.productGrouped[i].length,
        Width: this.productGrouped[i].width,
        Height: this.productGrouped[i].height,
        Description: this.productGrouped[i].description,
        lsId: this.productGrouped[i].products.map(
          (item) => item.merchandiseWarehouseId
        ),
      };
      
      this.merchandiseServices.createPackage(saveParams).subscribe(
        (res) => {
          if (res && res.result && res.result.success) {
            this.productGrouped[i].merchandiseWarehouseId =
              res.result.data.merchandiseWarehouseId;
            this.productGrouped[i].merchandiseCode =
              res.result.data.merchandiseCode;
            this.productGrouped[i].merchandiseId = res.result.data.merchandiseId;
            this.checkSumNetWeight();
            if (this.products && this.products.length) {
              this.addGroup();
            }
            this.showMessage("success", "Lưu nhóm", "Bạn đã đóng gói kiện hàng thành công");
          } else {
            this.showMessage(
              "error",
              "Lưu nhóm",
              "Không thể đóng gói kiện hàng"
            );
          }
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.showMessage("error", "Lưu nhóm", "Bạn chưa lưu được nhóm");
        }
      );
  }

  printGr(i) {
    this.isLoading = false;
  }

  removeProductInGr(i, merchandiseWarehouseId, childMerchandiseWarehouseId, productIndex, countProduct) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xóa kiện đang chọn không ?",
      accept: () => {

        if (merchandiseWarehouseId) {
          this.isLoading = true;
          this.merchandiseServices
            .deletePackageDetail({
              DeliveryRequestId: this.data.deliveryRequestId,
              ParentMerchandiseWarehouseId:
                this.productGrouped[i].merchandiseWarehouseId,
                ChildMerchandiseWarehouseId : childMerchandiseWarehouseId
            })
            .subscribe(
              (res) => {
                if (res && res.result && res.result.success) {
                  this.products.push(this.productGrouped[i].products[productIndex]);
                  this.productGrouped[i].products.splice(productIndex, 1);
                  this.checkSumNetWeight();
                  this.showMessage(
                    "success",
                    "Xóa nhóm",
                    "Bạn đã xóa kiện thành công"
                  );

                  if(countProduct == 1){
                    this.productGrouped.splice(i, 1);
                    if (this.productGrouped && this.productGrouped.length == 0) {
                      this.addGroup();
                    } else if (
                      this.productGrouped.filter(
                        (item) => item.merchandiseWarehouseId == null
                      ).length == 0
                    ) {
                      this.addGroup();
                    }
                  }

                } else {
                  this.showMessage("error", "Xóa kiện", res.result.message);
                }
                this.isLoading = false;
              },
              (error) => {
                this.isLoading = false;
                this.showMessage("error", "Xóa kiện", "Bạn chưa xóa được kiện");
              }
            );
        } else {
          this.products.push(this.productGrouped[i].products[productIndex]);
          this.productGrouped[i].products.splice(productIndex, 1);
          if(countProduct == 1){
            this.productGrouped.splice(i, 1);
            if (this.productGrouped && this.productGrouped.length == 0) {
              this.addGroup();
            } else if (
              this.productGrouped.filter(
                (item) => item.merchandiseWarehouseId == null
              ).length == 0
            ) {
              this.addGroup();
            }
          }
        }
      },
    });
  }

  
  removeGr(i, merchandiseWarehouseId) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xóa gói?",
      accept: () => {
        if (merchandiseWarehouseId) {
          this.isLoading = true;
          this.merchandiseServices
            .deletePackage({
              DeliveryRequestId: this.data.deliveryRequestId,
              ParentMerchandiseWarehouseId:
                this.productGrouped[i].merchandiseWarehouseId,
            })
            .subscribe(
              (res) => {
                if (res && res.result && res.result.success) {
                  this.products = this.products.concat(
                    this.productGrouped[i].products
                  );
                  this.productGrouped.splice(i, 1);
                  if (this.productGrouped && this.productGrouped.length == 0) {
                    this.addGroup();
                  } else if (
                    this.productGrouped.filter(
                      (item) => item.merchandiseWarehouseId == null
                    ).length == 0
                  ) {
                    this.addGroup();
                  }
                  this.checkSumNetWeight();
                  this.showMessage(
                    "success",
                    "Xóa nhóm",
                    "Bạn đã xóa nhóm thành công"
                  );
                } else {
                  this.showMessage("error", "Xóa nhóm", res.result.message);
                }
                this.isLoading = false;
              },
              (error) => {
                this.isLoading = false;
                this.showMessage("error", "Lưu nhóm", "Bạn chưa lưu được nhóm");
              }
            );

        } else {
          this.products = this.products.concat(this.productGrouped[i].products);
          this.productGrouped.splice(i, 1);
          if (this.productGrouped && this.productGrouped.length == 0) {
            this.addGroup();
          } else if (
            this.productGrouped.filter(
              (item) => item.merchandiseWarehouseId == null
            ).length == 0
          ) {
            this.addGroup();
          }
        }
      },
    });
  }

  showMessage(severity, summary, detail) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }

  checkSumNetWeight() {
    this.productGrouped.forEach((group) => {
      if (group && group.products && group.products.length) {
        let sum = 0;
        group.products.forEach((product) => {
          sum += product.netWeight;
        });
        group.sumNetWeight = sum;
      } else {
        group.sumNetWeight = 0;
      }
    });
  }

  addProductToGr(dt, merchandiseCode) {

    let productSelected = this.products.filter(
      (item) => item.merchandiseCode == merchandiseCode
    );

    if (productSelected && productSelected.length) {
      this.productGrouped[this.packageIndexSelected].products =
        this.productGrouped[this.packageIndexSelected].products.concat(
          productSelected
        );

      this.products = this.products.filter(
        (item) => item.merchandiseCode !== merchandiseCode
      );
      this.selectedProducts = this.selectedProducts.filter(
        (item) => item.merchandiseCode !== merchandiseCode
      );
      this.checkSumNetWeight();
      this.cdr.detectChanges();
      this.filterGlobalProduct.nativeElement.value = '';
      dt.filter('', 'merchandiseCode' ,'contains' );

      let checkAudio = false;
      //Kiểm tra các vận đơn đang được xử lý có ghi chú hay không
      for (let i = 0; i < productSelected.length; i++) {
        if(productSelected[i].description != null){
          this.audioService.playAudio_CoGhiChu();
          checkAudio = true;
        }
      }
      //Kiểm tra nếu đã chay audio 1 lần thì không lặp lại
      if (!checkAudio) {
        this.audioService.playAudio_Co();
      }
    }
  }

  nextFocus(event, inputName?) {
    if(inputName && inputName == 'description'){
      const lengthInput = document.getElementById(
        "length"
      ) as HTMLInputElement;
      lengthInput.focus();
      lengthInput.select();
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

  async captureMerchandise(i: number) {
    // add ảnh
    if (this.loading == false) {
      const ref = this.dialogService.open(CaptureMerchandiseComponent, {
        header: "Chụp ảnh kiện hàng",
        width: "100vw",
        style: { "max-width": "700px", "overflow-y": "auto" ,"z-index":9999},
        data: {
          imgLinks: this.productGrouped[i].lsImage
            ? this.productGrouped[i].lsImage
            : [],
          action: "capture",
        },
      });

      ref.onClose.subscribe((capturedImgs: any[]) => {
        if (capturedImgs) {
          this.productGrouped[i].lsImage = capturedImgs;
        }
        const netWeightInput = document.getElementById(
          "netWeight"
        ) as HTMLInputElement;
        netWeightInput.focus();
        netWeightInput.select();
      });
    }
  }

  uploadListImg(i: number) {
    let uploadSuccess = true;
    if (this.productGrouped[i].lsImage != null) {
      return new Promise(async (resolve, reject) => {
        for (
          let imgIndex = 0;
          imgIndex <
          this.productGrouped[i].lsImage.length;
          imgIndex++
        ) {
          const imgAttachLink = this.productGrouped[i]
            .lsImage[imgIndex].attachLink;
          if (imgAttachLink && imgAttachLink.includes("https:") == false) {
            const uploadImgStatus = await this.uploadOneImg(imgAttachLink);
            if (uploadImgStatus) {
              this.productGrouped[i].lsImage[
                imgIndex
              ] = Object.assign({}, uploadImgStatus);
              this.productGrouped[i].lsImage[
                imgIndex
              ].uploadSuccess = true;
            } else {
              this.productGrouped[i].lsImage[
                imgIndex
              ].uploadSuccess = false;
              uploadSuccess = false;
            }
          }
        }
  
        resolve(uploadSuccess);
      });
    }
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

  viewImgs(i: number) {
    if(this.productGrouped[i].lsImage.length > 0)
    {
      const ref = this.dialogService.open(CaptureMerchandiseComponent, {
        header: "Ảnh chụp kiện hàng",
        width: "100vw",
        style: { "max-width": "700px", "overflow-y": "auto" },
        closable: false,
        data: {
          imgLinks: this.productGrouped[i].lsImage,
          action: "viewHistoryImg",
        },
      });
      //cập nhật lại thông tin hình ảnh sau khi đóng view ảnh
      ref.onClose.subscribe((capturedImgs: any[]) => {
        if (capturedImgs) {
          this.productGrouped[i].lsImage = capturedImgs;
          this.cdr.detectChanges();
        }
      });
    }
  }
}
