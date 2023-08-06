import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ViewEncapsulation,
} from "@angular/core";
import * as $ from "jquery";
import { ItemsOnShop } from "app/model/items-on-shop.model";
import { Router } from "@angular/router";
import { NewAddress } from "app/model/new-address.model";
import { lstCountry } from "app/model/country.model";
import * as _ from "lodash";
import { lstAddress } from "app/model/lstAddress.model";
import { WalletByUserId } from "app/model/wallet-by-userid.model";
import { BookingProductModel } from "app/model/booking-product.model";
import { ConfirmDialogComponent } from "app/common-view/confirm-dialog/confirm-dialog.component";
import { ConfirmDialogModel } from "app/model/confirm-dialog.model";
import { MatDialog } from "@angular/material";
import { EditAddressModel } from "app/model/edit-address.model";
import { InfoRating } from "app/model/info-rating.model";
import { lstAddressAll } from "app/model/list-address-all.model";
import { MessageService } from "primeng/components/common/api";
import { Message } from "primeng/api";
import { EditAddressDialogComponent } from "app/common-view/edit-address/edit-address.component";
import { DetailCouponComponent } from "./../../payment/detail-coupon/detail-coupon.component";
import { ListCouponComponent } from "./../../payment/list-coupon/list-coupon.component";
//service
import { CommonService } from "app/services/common.service";
import { CartServices } from "app/services/cart.services";
import { ItemsCartService } from "app/services/items-cart.service";
import { PassDataService } from "app/services/pass-data.services";
import { WalletService } from "app/services/wallet.services";
import { AppInforRatingService } from "./../../services/app-state/app-infor-rating.service";
import { DialogService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-part2",
  templateUrl: "./part2.component.html",
  styleUrls: ["./part2.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class Part2Component implements OnInit {
  _allItemsSelect: ItemsOnShop[] = [];
  _countShop: number = 0;
  userId: number = 0;

  isHiddenSpinner: boolean = false;
  deposits: number = 0;
  infoRating: InfoRating;
  rating: number = null;
  edited: boolean = false;

  totalPromotionVoucher: number = 0;

  totalPriceWithNdt: number = 0;
  isBill: boolean = false;

  allAddress: lstAddressAll;
  lstAddress: lstAddress[] = [];

  bookingProduct: BookingProductModel;
  checkedAddress: lstAddress[];

  // country: lstCountry[] = [];
  district: lstCountry[] = [];
  lstDataCountry: lstCountry[] = [];
  nation: lstCountry[] = [];

  newAddress: NewAddress;
  receiverName: string = "";
  receiverPhone: string = "";
  receiverEmail: string = "";
  receiverCity: number = null;
  receiverDistrict: number = null;
  receiverAddress: string = "";
  receiverDescription: string = "";

  addNewAddress: lstAddress;
  msgs: Message[] = [];

  currentCoupon: any;

  userLevelValue: number = 0; // % đặt cọc

  constructor(
    private _passData: PassDataService,
    private dialog: MatDialog,
    private _sendItemsData: ItemsCartService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private commonServices: CommonService,
    private walletService: WalletService,
    private dialogService: DialogService,
    private _cartServices: CartServices,
    private messageService: MessageService,
    private appInforRatingService: AppInforRatingService,
    private spinner: NgxSpinnerService
  ) {
    this.userId = JSON.parse(localStorage.getItem("userData"))["userId"];
    this.isHiddenSpinner = false;
    this.userLevelValue =
      Number(JSON.parse(localStorage.getItem("userLevel"))["value"]) / 100;
    this.deposits =
      Number(JSON.parse(localStorage.getItem("userLevel"))["value"]) / 100;
    this.bookingProduct = new BookingProductModel();
    this.infoRating = JSON.parse(localStorage.getItem("ratingInfo"));
    if (this.infoRating.exchangeRate)
      this.rating = Number(this.infoRating.exchangeRate);
  }

  ngOnInit() {
    this.allAddress = new lstAddressAll();
  }

  ngAfterViewInit() {
    this.getItemsCart();
    this.cdref.detectChanges();
    this.getAllAddress(this.userId);
    this.getNational();
    this.getLstWallet();
  }

  getItemsCart() {
    var _self = this;
    let oldShopName: string;
    _self._sendItemsData.currentMessage.subscribe((message) => {
      if (message.length === 0) _self.router.navigate(["/cart/pharse1"]);
      else {
        _self._allItemsSelect = message;
        _.forEach(_self._allItemsSelect, function (value) {
          _self.totalPriceWithNdt += value.itemPriceNdt * value.quantity;

          //tính xem list item gửi lên của bao nhiêu shop
          if (value.shopName !== oldShopName) {
            _self._countShop++;
            oldShopName = value.shopName;
          }
        });
        _self.totalPriceWithNdt = _self.rating * _self.totalPriceWithNdt;
        _self.deposits = _self.deposits * _self.totalPriceWithNdt;
        if (String(_self.deposits).split(".").length === 2)
          _self.deposits =
            Number(String(_self.deposits).split(".")[1].charAt(0)) > 5
              ? Math.ceil(_self.deposits)
              : Math.floor(_self.deposits);
      }
    });
  }

  setItemBooking() {
    this.bookingProduct = new BookingProductModel();
    this.bookingProduct.UserId = this.userId;
    this.bookingProduct.CustomerId = this.userId;
    if (this.currentCoupon && this.currentCoupon.couponCode) {
      this.bookingProduct.Coupon = this.currentCoupon.couponCode;
    }

    this.bookingProduct.DeliveryAddressId = Number(
      this.checkedAddress[0].deliveryAddressId
    );
    this.bookingProduct.lsProduct = this._allItemsSelect;
  }

  public validateFunc(): boolean {
    this.checkedAddress = [];
    this.checkedAddress = _.filter(this.lstAddress, function (o) {
      return o.isDefault;
    });
    if (this.checkedAddress.length === 0) {
      this.bookingProduct.validate.errAddress = true;
      this.bookingProduct.validate.messAddress =
        "bạn chưa chọn địa chỉ nhận hàng";
      return false;
    }

    return true;
  }

  // đặt cọc
  funcDeposit() {
    let checkingValidate = this.validateFunc();
    if (checkingValidate) {
      this._passData.loading(true);
      this.setItemBooking();
      this._cartServices.checkDepositListOrder(this.bookingProduct).subscribe(
        (res) => {
          if (res.result.success) {
            this.appInforRatingService.getNewInfor();
            this.router.navigate(["/cart/pharse3"]);
          } else {
            this.showMessage(res.result.message, "error");
          }
          this._passData.loading(false);
        },
        (err) => {
          this.showMessage("Đặt cọc thất bại", "error");
          this._passData.loading(false);
        }
      );
    }
  }

  getAllAddress(userId: number) {
    this._passData.loading(true);
    this._cartServices.getAllAddress(userId).subscribe(
      (res) => {
        if (res.result.success) {
          this.lstAddress = res.result.data;
        } else {
        }
        this._passData.loading(false);
      },
      (error) => {
        this._passData.loading(false);
      }
    );
  }

  // Hàm load quốc gia
  getNational() {
    this._cartServices.getCountry().subscribe(
      (res) => {
        if (res.result.success) {
          this.nation = res.result.data;
          this.allAddress.nation = res.result.data;
        } else {
        }
      },
      (err) => {}
    );
  }

  getCountry(id: number) {
    this._cartServices.getOtherDistance(id).subscribe(
      (res) => {
        if (res.result.success) {
          this.lstDataCountry = res.result.data;
        } else {
        }
      },
      (err) => {}
    );
  }

  getDistrict(id: number) {
    this._cartServices.getOtherDistance(id).subscribe(
      (res) => {
        if (res.result.success) {
          this.district = res.result.data;
        } else {
        }
      },
      (err) => {}
    );
  }

  receiverNation: number = null;
  receiverNationDisplay: string = null;

  changeNational(event: any) {
    this.getCountry(event.areaId);
    this.receiverNation = event.areaId;
    this.receiverNationDisplay = event.areaName;
  }

  receiverCityDisplay: string = null;
  changeCity(event: any) {
    this.getDistrict(event.areaId);
    this.receiverCity = event.areaId;
    this.receiverCityDisplay = event.areaName;
  }

  receiverDistrictDisplay: string = null;
  changeDistrict(event: any) {
    this.getWards(event.areaId);
    this.receiverDistrict = event.areaId;
    this.receiverDistrictDisplay = event.areaName;
  }

  wards: lstCountry[] = [];
  getWards(idDistrict: number) {
    this._cartServices.getOtherDistance(idDistrict).subscribe(
      (res) => {
        if (res.result.success) {
          this.wards = res.result.data;
        } else {
        }
      },
      (err) => {}
    );
  }

  receiverWardsDisplay: string = null;
  changeWards(event: any) {
    this.receiverWards = event.areaId;
    this.receiverWardsDisplay = event.areaName;
  }

  changeLocation(event: any) {
    if (Number(event) !== -1) {
      this.lstAddress.map((res) => {
        if (res.deliveryAddressId === Number(event)) {
          res.isDefault = true;
        } else {
          res.isDefault = false;
        }
      });
      this.edited = false;
    } else {
      this.edited = true;
      this.reSetAddressForm();
    }
  }

  receiverWards: number = 0;

  setAddress() {
    this.newAddress = new NewAddress();
    this.newAddress.UserId = this.userId;
    this.newAddress.Receiver = this.receiverName;
    this.newAddress.Phone = this.receiverPhone;
    this.newAddress.Email = this.receiverEmail;
    this.newAddress.country = this.receiverNation;
    this.newAddress.countryDisplay = this.receiverNationDisplay;
    this.newAddress.City = this.receiverCity;
    this.newAddress.cityDisplay = this.receiverCityDisplay;
    this.newAddress.District = this.receiverDistrict;
    this.newAddress.districtDisplay = this.receiverDistrictDisplay;
    this.newAddress.ward = this.receiverWards;
    this.newAddress.wardDisplay = this.receiverWardsDisplay;
    this.newAddress.Address = this.receiverAddress;
    this.newAddress.Description = this.receiverDescription;
    this.newAddress.deliveryAddressCode = "";
    this.newAddress.deliveryAddressId = 0;
  }

  upAddress: NewAddress;
  refactorForUpdate(item: lstAddress) {
    this.upAddress = new NewAddress();
    this.upAddress.UserId = item.userId;
    this.upAddress.Receiver = item.receiver;
    this.upAddress.Phone = item.phone;
    this.upAddress.Email = item.email;
    this.upAddress.country = item.country;
    this.upAddress.countryDisplay = item.countryDisplay;
    this.upAddress.City = item.city;
    this.upAddress.cityDisplay = item.cityDisplay;
    this.upAddress.District = item.district;
    this.upAddress.districtDisplay = item.districtDisplay;
    this.upAddress.ward = item.ward;
    this.upAddress.wardDisplay = item.wardDisplay;
    this.upAddress.Address = item.address;
    this.upAddress.Description = item.description;
    this.upAddress.deliveryAddressCode = item.deliveryAddressCode;
    this.upAddress.deliveryAddressId = item.deliveryAddressId;
  }

  reSetAddressForm() {
    this.receiverName = "";
    this.receiverPhone = "";
    this.receiverEmail = "";
    this.receiverNation = null;
    this.receiverNationDisplay = "";
    this.receiverCity = null;
    this.receiverCityDisplay = "";
    this.receiverDistrict = null;
    this.receiverDistrictDisplay = "";
    this.receiverWards = null;
    this.receiverWardsDisplay = "";
    this.receiverAddress = "";
    this.receiverDescription = "";
  }

  btnAddNewAdrress() {
    var _self = this;
    _self.setAddress();
    if (_self.lstAddress.length < 5) {
      _self._passData.loading(true);
      _self._cartServices.addNewAddress(_self.newAddress).subscribe(
        (res) => {
          if (res.result.success) {
            _self.lstAddress.map((item) => {
              item.isDefault = false;
            });
            _self.addNewAddress = res.result.data;
            _self.addNewAddress.isDefault = true;
            _self.lstAddress.push(_self.addNewAddress);
            _self.reSetAddressForm();
            this.showMessage("Thêm địa chỉ thành công", "success");
            _self.edited = false;
          } else {
            this.showMessage(res.result.message, "error");
          }
          _self._passData.loading(false);
        },
        (error) => {
          this.showMessage("Thêm địa chỉ thất bại", "error");
          _self._passData.loading(false);
          _self.edited = false;
        }
      );
    } else {
      this.showMessage(
        "Bạn chỉ có thể thêm tối đa 5 địa chỉ nhận hàng",
        "error"
      );
    }
  }

  checkAddress: boolean = false;
  errorMessAddress: string = "";

  delAddress(itemAddress: lstAddress) {
    var _self = this;
    const message = "Bạn có muốn xóa";
    const dialogData = new ConfirmDialogModel("Xóa", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      panelClass: "confirm-dialog",
    });

    dialogRef.afterClosed().subscribe(
      (dialogresult) => {
        this._passData.loading(true);
        if (dialogresult) {
          this._passData.loading(false);
          _self._cartServices
            .delAddress(itemAddress.deliveryAddressId)
            .subscribe((res) => {
              if (res.result.success) {
                _.remove(_self.lstAddress, function (n) {
                  return n.deliveryAddressId === itemAddress.deliveryAddressId;
                });
                this.showMessage("Xóa địa chỉ thành công", "success");
              } else {
                this.showMessage(res.result.message, "error");
              }
            });
        } else {
          this.showMessage("Xóa địa chỉ thất bại", "error");
        }
        this._passData.loading(false);
      },
      (error) => {
        this.showMessage("Xóa địa chỉ thất bại", "error");
        this._passData.loading(false);
      }
    );
  }

  updateAddress(itemAddress: lstAddress, inx: number) {
    var _self = this;
    _self.refactorForUpdate(itemAddress);
    _self.allAddress.lstItem = _self.upAddress;
    const message = "Thay đổi địa chỉ";
    let dialogOpened = EditAddressDialogComponent;
    _self.dialog
      .open(dialogOpened, {
        data: {
          item: _self.allAddress,
        },
        width: "600px",
        height: "670px",
        disableClose: true,
      })
      .afterClosed()
      .subscribe(
        (data) => {
          _self._passData.loading(true);
          if (data) {
            _self._passData.loading(false);
            _self._cartServices.updateAddress(data).subscribe(
              (res) => {
                if (res.result.success) {
                  _self.lstAddress[inx] = res.result.data;
                  this.showMessage("Cập nhật địa chỉ thành công", "success");
                } else {
                  this.showMessage(res.result.message, "error");
                }
              },
              (err) => {
                this.showMessage("Cập nhật địa chỉ thất bại", "error");
              }
            );
          } else {
            this.showMessage("Cập nhật địa chỉ thất bại", "error");
          }
          _self._passData.loading(false);
        },
        (error) => {
          this.showMessage("Cập nhật địa chỉ thất bại", "error");
          _self._passData.loading(false);
        }
      );
  }

  availablePrice: number = 0;
  getWalletInfo(walletId: number) {
    var _self = this;
    _self.walletService.getInfoWallet(walletId).subscribe(
      (res) => {
        if (res.result.success) {
          _self.walletItem = res.result.data;
          _self.availablePrice = Number(_self.walletItem.availableAmount);
          _self.isBill =
            Number(_self.walletItem.availableAmount) >= _self.deposits;
        }
      },
      (err) => {}
    );
  }

  lstWallet: WalletByUserId[] = [];
  walletItem: WalletByUserId;

  getLstWallet() {
    var _self = this;
    _self.commonServices.getLsWallet().subscribe(
      (res) => {
        if (res.result.success) {
          _self.lstWallet = res.result.data;
          _self.walletItem = _.find(_self.lstWallet, function (o) {
            return o.isDefault + "" === "1";
          });
          _self.getWalletInfo(_self.walletItem.walletId);
        } else {
        }
      },
      (err) => {}
    );
  }

  back() {
    this.router.navigate(["/cart/pharse1"]);
  }

  clear() {
    this.msgs = [];
  }

  showMessage(str: string, type: string) {
    var _self = this;
    _self.msgs = [];
    _self.msgs.push({ severity: type, summary: str, detail: "" });
    setTimeout(function () {
      _self.clear();
    }, 10000);
  }

  showToastMessage(type, message, summary?) {
    this.messageService.clear();
    this.messageService.add({
      key: "toast-message",
      severity: type,
      summary: summary ? summary : '',
      detail: message ? message : '',
    });
  }

  toWallet() {
    this.router.navigate(["/wallet-manager/client-topup"]);
  }

  selectCoupon() {
    if (this.currentCoupon) {
      // đã có thì hiển thị detail
      const refDetail = this.dialogService.open(DetailCouponComponent, {
        header: "Chi tiết mã khuyến mại",
        style: {
          "max-width": "400px",
          "min-width": "300px",
          "overflow-y": "auto",
        },
        data: Object.assign(this.currentCoupon, { inUse: true }),
      });
      refDetail.onClose.subscribe((resCouponSelected) => {
        if (resCouponSelected) {
           
          if (resCouponSelected.cancelUseCoupon == false) {
            if (
              resCouponSelected.quantityRemaining >= this._countShop
            ) {
              this.addCouponAndRecalculate(resCouponSelected);
            } else {
              
              this.showToastMessage(
                "error",
                `Mã giảm giá còn ${resCouponSelected.quantityRemaining} lượt sử dụng. Không đủ để sử dụng`,
                "Error"
              );
            }
          } else if (resCouponSelected.cancelUseCoupon == true) {
            this.addCouponAndRecalculate(null);
          }
        }
      });
    } else {
      // chưa có thì hiển thị list
      const ref = this.dialogService.open(ListCouponComponent, {
        header: "Mã khuyến mại của bạn",
        style: {
          "max-width": "500px",
          "min-width": "300px",
          "overflow-y": "auto",
        },
      });
      ref.onClose.subscribe((couponSelected) => {
        if (couponSelected) {
          if (
            couponSelected &&
            couponSelected.quantityRemaining >= this._countShop
          ) {
            this.addCouponAndRecalculate(couponSelected);
          } else {
            this.showToastMessage(
              "error",
              `Mã giảm giá còn ${couponSelected.quantityRemaining} lượt sử dụng. Không đủ để sử dụng`,
              "Error"
            );
          }
        }
      });
    }
  }

  addCouponAndRecalculate(couponSelected) {
    this.spinner.show();
    let couponCode = couponSelected && couponSelected.couponCode ? couponSelected.couponCode : null;
    this._cartServices
      .addCouponCart(couponCode, this._allItemsSelect)
      .subscribe(
        (resAddCoupon) => {
          this.totalPromotionVoucher = 0;
          if(resAddCoupon && resAddCoupon.result && resAddCoupon.result.success == false){
            this.showToastMessage( "error", resAddCoupon.result.message, "Error");
          }
          else if (resAddCoupon && resAddCoupon.result && resAddCoupon.result.success == true && resAddCoupon.result.data) {
            if (
              resAddCoupon.result.data &&
              resAddCoupon.result.data.lsCart &&
              resAddCoupon.result.data.lsCart.length
            ) {
              let oldShopName: string;
              resAddCoupon.result.data.lsCart.forEach((cart) => {
                //cộng tiền giảm giá theo shop
                if (cart.shopName !== oldShopName) {
                  this.totalPromotionVoucher += cart.totalPromotionVoucher;
                  oldShopName = cart.shopName;
                }
              });
            }
            // totalPriceWithNdt đã được nhân hệ số rồi
            this.deposits = this.userLevelValue * this.totalPriceWithNdt;
            this.currentCoupon = couponSelected;
          }
          this.spinner.hide();
        },
        (errAddCoupon) => {
          this.showToastMessage("error", "Không thể thêm coupon", "Error");
          this.spinner.hide();
        }
      );
  }
}
