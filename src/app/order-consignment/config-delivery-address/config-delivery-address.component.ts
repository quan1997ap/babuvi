import { MessagesUtilsService } from './../../services/messages-utils.service';
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { CartServices } from 'app/services/cart.services';
import { NewAddress } from 'app/model/new-address.model';
import { lstCountry } from 'app/model/country.model';
import * as _ from 'lodash';
import { lstAddress } from 'app/model/lstAddress.model';
import { CommonService } from 'app/services/common.service';
import { ConfirmDialogComponent } from 'app/common-view/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModel } from 'app/model/confirm-dialog.model';
import { MatDialog } from '@angular/material';
import { EditAddressModel } from 'app/model/edit-address.model';
import { PassDataService } from 'app/services/pass-data.services';
import { lstAddressAll } from 'app/model/list-address-all.model';
import { MessageService } from 'primeng/components/common/api';
import { Message } from 'primeng/api';
import { EditAddressDialogComponent } from 'app/common-view/edit-address/edit-address.component';

@Component({
  selector: 'app-config-delivery-address',
  templateUrl: './config-delivery-address.component.html',
  styleUrls: ['./config-delivery-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigDeliveryAddressComponent implements OnInit {

  @Output() closeForm = new EventEmitter<any>();
  @Input() lstAddress: lstAddress[] = [];
  @Input() selectedAddress: lstAddress = new lstAddress();
  userId: number = 0;
  edited: boolean = false;

  allAddress: lstAddressAll;

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

  constructor(
    private messagesUtilsService: MessagesUtilsService,
    private _passData: PassDataService,
    private dialog: MatDialog,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private commonServices: CommonService,
    private _cartServices: CartServices) {

    this.userId = JSON.parse(localStorage.getItem("userData"))['userId'];
  }

  ngOnInit() {
    this.allAddress = new lstAddressAll();
    if (!lstAddress) {
      this.getAllAddress(this.userId);
    }
    this.setSelectedAddress(this.selectedAddress);
    this.getNational();
  }

  setSelectedAddress(selectedAddress) {
    this.lstAddress.map(address => {
      if (address.deliveryAddressId == selectedAddress.deliveryAddressId) {
        address.selected = true;
      } else {
        address.selected = false;
      }
      return address;
    })
  }


  getAllAddress(userId: number) {
    this._passData.loading(true);
    this._cartServices.getAllAddress(userId).subscribe(res => {
      if (res.result.success) {
        this.lstAddress = res.result.data;
      } else {

      }
      this._passData.loading(false);
    }, error => {
      this._passData.loading(false);
    })
  }


  // Hàm load quốc gia
  getNational() {
    this._cartServices.getCountry().subscribe(res => {
      if (res.result.success) {
        this.nation = res.result.data;
        this.allAddress.nation = res.result.data;
      } else {

      }
    }, err => {

    })
  }

  getCountry(id: number) {
    this._cartServices.getOtherDistance(id).subscribe(res => {
      if (res.result.success) {
        this.lstDataCountry = res.result.data;
      } else {

      }
    }, err => {

    })
  }

  getDistrict(id: number) {
    this._cartServices.getOtherDistance(id).subscribe(res => {
      if (res.result.success) {
        this.district = res.result.data;
      } else {

      }
    }, err => {

    })
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
    this._cartServices.getOtherDistance(idDistrict).subscribe(res => {
      if (res.result.success) {
        this.wards = res.result.data;
      } else {

      }
    }, err => {

    })
  }

  receiverWardsDisplay: string = null;
  changeWards(event: any) {
    this.receiverWards = event.areaId;
    this.receiverWardsDisplay = event.areaName;
  }


  changeLocation(deliveryAddressId: any) {
    if (Number(deliveryAddressId) !== -1) {
      let addressSelected = new lstAddress();
      this.lstAddress.map(address => {
        if (address.deliveryAddressId == deliveryAddressId) {
          addressSelected = address;
          address.selected = true;
        } else {
          address.selected = false;
        }
        this.closeForm.emit(emitData)
      })
      const emitData: AddressDataEmitModel = {
        close: true,
        addressSelected: addressSelected,
        addressList: this.lstAddress
      }
      this.closeForm.emit(emitData);
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
    this.upAddress.isDefault = item.isDefault;
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
    this.clear();
    var _self = this;
    _self.setAddress();
    if (_self.lstAddress.length < 5) {
      _self._passData.loading(true);
      _self._cartServices.addNewAddress(_self.newAddress).subscribe(res => {
        if (res.result.success) {
          _self.addNewAddress = res.result.data;
          // push new address => set default address
          _self.lstAddress.map(itemAddress => {
            itemAddress.isDefault = false;
            itemAddress.selected = false
            return itemAddress
          }
          )
          _self.lstAddress.push(_self.addNewAddress);
          _self.lstAddress[_self.lstAddress.length - 1].selected = true;
          _self.reSetAddressForm();
          this.showMessage('Thêm địa chỉ thành công', 'success');
        } else {
          this.showMessage(res.result.message, 'error');
        }
        _self.edited = false;
        _self._passData.loading(false);
      }, error => {
        this.showMessage('Thêm địa chỉ thất bại', 'error');
        _self._passData.loading(false);
        _self.edited = false;
      });
    } else {
      this.showMessage('Bạn chỉ có thể thêm tối đa 5 địa chỉ nhận hàng', 'error');
    }
  }

  checkAddress: boolean = false;
  errorMessAddress: string = '';

  delAddress(itemAddress: lstAddress) {
    this.clear();
    let _self = this;
    this.messagesUtilsService.showCustomConfirm(
      () => {
        this._passData.loading(true);
        _self._cartServices.delAddress(itemAddress.deliveryAddressId).subscribe(res => {
          if (res.result.success) {
            _.remove(_self.lstAddress, function (n) { return n.deliveryAddressId === itemAddress.deliveryAddressId });
            // set address
            if (_self.lstAddress.length > 0) {
              let hasDefault = false;
              _self.lstAddress.forEach(address => {
                if (address.isDefault === true) {
                  address.selected = true;
                  hasDefault = true;
                }
              });
              if (hasDefault === false) {
                _self.lstAddress[0].selected = true;
              }
            }
            this._passData.loading(false);
            this.showMessage('Xóa địa chỉ thành công', 'success');
          } else {
            this._passData.loading(false);
            this.showMessage(res.result.message, 'error');
          }
        })
      },
      () => { },
      "Bạn có muốn xóa"
    )

  }

  updateAddress(itemAddress: lstAddress, inx: number) {
    this.clear();
    var _self = this;
    _self.refactorForUpdate(itemAddress);
    const isDefault = itemAddress.isDefault;
    const selected = itemAddress.selected;
    _self.allAddress.lstItem = _self.upAddress;
    const message = "Thay đổi địa chỉ";
    let dialogOpened = EditAddressDialogComponent;
    _self.dialog.open(dialogOpened, {
      data: {
        item: _self.allAddress,
      },
      width: '600px',
      height: '670px',
      disableClose: true
    }).afterClosed().subscribe(
      (data) => {
        _self._passData.loading(true);
        if (data !== false && data) {
          _self._cartServices.updateAddress(data).subscribe(res => {
            if (res.result.success) {
              // add default after update
              res.result.data.isDefault = isDefault;
              res.result.data.selected = selected;
              _self.lstAddress[inx] = res.result.data;

              _self._passData.loading(false);
              this.showMessage('Cập nhật địa chỉ thành công', 'success');
            } else {
              _self._passData.loading(false);
              this.showMessage(res.result.message, 'error');
            }
          }, err => {
            _self._passData.loading(false);
            this.showMessage('Cập nhật địa chỉ thất bại', 'error');
          })
        } else {
          _self._passData.loading(false);
        }
      }, error => {
        // this.showMessage('Cập nhật địa chỉ thất bại', 'error');
        _self._passData.loading(false);
      });
  }

  setDefaultAddress(itemAddress: lstAddress, inx: number) {
    let _self = this;

    let defaultAddress: any = new Object({});
    defaultAddress = Object.assign({}, itemAddress);
    defaultAddress.isDefault = true;

    this.messagesUtilsService.showCustomConfirm(
      () => {
        this._passData.loading(true);
        _self._cartServices.updateAddress(defaultAddress).subscribe(res => {
          if (res.result.success) {
            _self.lstAddress[inx] = res.result.data;
            _self._passData.loading(false);
            this.showMessage('Cập nhật địa chỉ mặc định thành công', 'success');
          } else {
            this.showMessage(res.result.message, 'error');
          }
        }, err => {
          this.showMessage('Cập nhật địa chỉ thất bại', 'error');
        })
        this._passData.loading(false);
      },
      () => { },
      'Bạn có muốn đặt địa chỉ đang chọn là địa chỉ mặc định?'
    )
  }

  showMessage(str: string, type: string) {
    var _self = this;
    _self.msgs = [];
    _self.msgs.push({ severity: type, summary: str, detail: '' });
    setTimeout(function () {
      _self.clear();
    }, 10000);
  }

  clear() {
    this.msgs = [];
  }

  toWallet() {
    this.router.navigate(['/wallet-manager/client-topup']);
  }

  closeFormConfigAddress() {
    let addressSelected: lstAddress;
    this.lstAddress.forEach(address => {
      if (address.selected == true) {
        addressSelected = _.cloneDeep(address);
      }
    });
    this.closeForm.emit(
      {
        close: true,
        addressSelected: addressSelected
      }
    )
  }
}


export class AddressDataEmitModel {
  close: boolean;
  addressSelected?: lstAddress;
  addressList?: lstAddress[];
}
