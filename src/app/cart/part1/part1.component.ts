import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core'
import * as $ from 'jquery'
import { CartServices } from 'app/services/cart.services'
import { LstServiceCart } from 'app/model/lstServiceCart.model'
import { AllLstCart } from 'app/model/lstCart.model'
import { ProductServicesOption } from 'app/model/product-services-option.model'
import { Observable } from 'rxjs'
import * as _ from 'lodash'
import { ItemsOnShop } from 'app/model/items-on-shop.model'
import { ItemsCartService } from 'app/services/items-cart.service'
import { ClientProfile } from 'app/model/client-profile.model'
import { InfoRating } from 'app/model/info-rating.model'
import { PassDataService } from 'app/services/pass-data.services'
import { MessageService } from 'primeng/components/common/api'
import { Message } from 'primeng/api'
import { ConfirmDialogModel } from 'app/model/confirm-dialog.model'
import { MatDialog } from '@angular/material'
import { ConfirmDialogComponent } from 'app/common-view/confirm-dialog/confirm-dialog.component'
import { FileManagerServices } from "./../../services/fileManager.services";

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  _allServicesCart: ProductServicesOption[];
  _allItemsCart: AllLstCart[];
  checked: Boolean = false;
  userId;
  account: ClientProfile;
  detectWidthLayout: boolean = true;
  infoRating: InfoRating;
  rating: number = null;
  totalMoney: string = null;
  loading: boolean = true;
  isDefault: boolean = false;
  msgs: Message[] = [];
  page: number;
  isScroll: boolean = true;
  totalPage: number;
  lastScrollTop: number = 0;
  oldItemServicesCart: ProductServicesOption;
  _allItemsSelect: ItemsOnShop[];

  constructor (
    private _passData: PassDataService,
    private _cartServices: CartServices,
    private dialog: MatDialog,
    private _sendItemsData: ItemsCartService,
    public fileManagerServices: FileManagerServices
  ) {
    this._allServicesCart = new Array<ProductServicesOption>()
    this._allItemsCart = new Array<AllLstCart>()
    this.page = 1;
    this.isScroll = true;
    this.totalPage = 0;
    this.lastScrollTop = 0;
  }

  ngOnInit () {
    if (window.innerWidth <= 800) {
      this.detectWidthLayout = false
    } else {
      this.detectWidthLayout = true
    }
    this.account = JSON.parse(localStorage.getItem('userData'))
    this.userId = this.account.userId
    this.infoRating = JSON.parse(localStorage.getItem('ratingInfo'))
    if (this.infoRating.exchangeRate)
      this.rating = Number(this.infoRating.exchangeRate)
    this.checked = true;
    this._allItemsCart = [];
  }

  ngAfterViewInit () {
    this.getAllItemsOnCart(20, this.page);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 800) {
      this.detectWidthLayout = false;
    } else {
      this.detectWidthLayout = true;
    }
  }

  public getAllItemsOnCart(perPage: number, page: number) {
    var _self = this;
    this._passData.loading(true);
    this._cartServices
      .getAllItemsListCart(this.userId, perPage, page)
      .subscribe(
        resAll => {
          if (resAll.result.success) {
            this.totalPage = resAll.result.pageCount;
            if (this.totalPage >= this.page) {
              this.page++;
            }
            resAll.result.data.map(rs => {
              rs.items.map(e => {
                const newItem = e.itemPriceNdt * e.quantity;
                e.itemPriceNdtWithQuan = newItem.toFixed(2);
              })
              _self._allItemsCart.push(rs);
            });
            this.findCheck();
          } else {
          }
          this._passData.loading(false);
        },
        error => {
          this._passData.loading(false);
        }
      )
  }

  getAllBudgetProduct (item: AllLstCart) {
    let t2 = 0;
    item.items.map((res: ItemsOnShop) => {
      t2 += res.itemPriceNdt * this.rating * res.quantity;
    })
  }

  getAllPrice (item: AllLstCart): number {
    let itemPrice = Number(item.totalPrice) * this.rating;
    item.lstServiceCart.map((itemServices: LstServiceCart) => {
      if (itemServices.isOption === 1 || itemServices.amount) {
        itemPrice += itemServices.amount;
      }
    })

    return itemPrice;
  }

  focusItem (data, txt: string, inx?: number) {
    if (txt === 'cart') {
      this._passData.loading(true);
      // update note cart
      this._cartServices.updateNoteCart(data).subscribe(
        res => {
          if (res.result.success) {
            this.showMessage('Cập nhật thành công', 'success');
          } else {
            this.showMessage(res.result.message, 'error');
          }
          this._passData.loading(false);
        },
        error => {
          this.showMessage('Cập nhật thất bại', 'error');
          this._passData.loading(false);
        }
      )
    } else if (txt === 'item') {
      this._passData.loading(true);
      // update note cart
      this._cartServices.updateNoteItem(data).subscribe(
        res => {
          if (res.result.success) {
            this.showMessage('Cập nhật thành công', 'success');
          } else {
            this.showMessage(res.result.message, 'error');
          }
          this._passData.loading(false);
        },
        error => {
          this.showMessage('Cập nhật thất bại', 'error');
          this._passData.loading(false);
        }
      )
    } else {
      if(data.oldQuanlity !== data.quantity) {
        this._passData.loading(true);
        // update quanlity
        this._cartServices.updateQuanlityItem(data).subscribe(
          res => {
            if (res.result.success) {
              this._allItemsCart[inx] = res.result.data;
              this._allItemsCart[inx].items.map(e => {
                const newItem = e.itemPriceNdt * e.quantity;
                e.itemPriceNdtWithQuan = newItem.toFixed(2);
              });
              this.showMessage('Cập nhật thành công', 'success');
            } else {
              this.showMessage(res.result.message, 'error');
            }
            this._passData.loading(false);
          },
          error => {
            this.showMessage('Cập nhật thành công', 'error');
            this._passData.loading(false);
          }
        )
      }
    }
  }

  showMessage (str: string, type: string) {
    this.msgs = [];
    this.msgs.push({ severity: type, summary: str, detail: '' });
    setTimeout(function () {
      this.clear();
    }, 10000)
  }

  public refreshPage () {
    this._allItemsCart = [];
    this.getAllItemsOnCart(20, 1);
  }

  checkAllOrUn (event: any, data: AllLstCart) {
    const checkedItem = event.currentTarget.checked;
    if (!checkedItem) {
      this.isDefault = false;
    }
    this.findCheck();
  }

  removeItemShop (inx: number, cartShop: AllLstCart, inxCart: number) {
    if (cartShop.items.length === 1) {
      this.removeShop(cartShop);
    } else {
      const message = 'Bạn có muốn xóa'
      const dialogData = new ConfirmDialogModel('Xóa', message)
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: dialogData,
        panelClass: 'confirm-dialog'
      });
      dialogRef.afterClosed().subscribe(
        dialogresult => {
          if (dialogresult) {
            this._passData.loading(true);
            this._cartServices
              .delShopItem(cartShop.items[inx].cartItemId)
              .subscribe(
                res => {
                  if (res.result.success) {
                    //this._allItemsCart[inxCart] = res.result.data;
                    this._allItemsCart[inxCart] = res.result.data;
                    this._allItemsCart[inxCart].items.map(e => {
                      const newItem = e.itemPriceNdt * e.quantity;
                      e.itemPriceNdtWithQuan = newItem.toFixed(2);
                    });
                    this.showMessage('Cập nhật thành công', 'success');
                    this._passData.loading(false);
                  } else {
                    this.showMessage(res.result.message, 'error');
                    this._passData.loading(false);
                  };
                },
                error => {
                  this.showMessage('Xóa thất bại', 'error');
                  this._passData.loading(false);
                }
              )
          }
        },
        error => {
          this.showMessage('Xóa thất bại', 'error');
          this._passData.loading(false);
        }
      )
    }
  }

  // remove shop
  removeShop (cartShop: AllLstCart) {
    const message = 'Bạn có muốn xóa';
    const dialogData = new ConfirmDialogModel('Xóa', message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      panelClass: 'confirm-dialog'
    })

    dialogRef.afterClosed().subscribe(
      dialogresult => {
        if (dialogresult) {
          this._passData.loading(true);
          this._cartServices.delShop(cartShop.cartId).subscribe(
            res => {
              if(res.result.success) {
                var cardId = cartShop.cartId;
                _.remove(this._allItemsCart, function (n) {
                  return n.cartId == cardId;
                })
                this._passData.loading(false);
                this.showMessage('Cập nhật thành công', 'success');
              } else {
                this.showMessage(res.result.message, 'error');
                this._passData.loading(false);
              }
            },
            error => {
              this.showMessage('Xóa shop thất bại', 'error');
              this._passData.loading(false);
            }
          )
        }
      },
      error => {
        this.showMessage('Xóa địa chỉ thất bại', 'error');
        this._passData.loading(false);
      }
    )
  }

  isSelectedServices (event: any, inx: number, data: AllLstCart) {
    if (event.currentTarget.checked) {
      let lServices = data.lstServiceCart[inx].serviceId;
      let lCart = data.cartId;
      this._passData.loading(true);
      this._cartServices.callFeeServicesInCart(lServices, lCart).subscribe(
        res => {
          if (res.result.success) {
            data.lstServiceCart[inx] = res.result.data;
            this.showMessage('Cập nhật thành công', 'success');
          } else {
            this.showMessage(res.result.message, 'error');
          }
          this._passData.loading(false);
        },
        error => {
          this.showMessage('Cập nhật thành công', 'error');
          this._passData.loading(false);
        }
      )
    } else {
      let cartServicesId = data.lstServiceCart[inx].serviceCartId;
      this._passData.loading(true);
      this._cartServices.delFeeServicesInCart(cartServicesId).subscribe(
        res => {
          if (res.result.success) {
            data.lstServiceCart[inx] = res.result.data;
            this.showMessage('Cập nhật thành công', 'success');
          } else {
            this.showMessage(res.result.message, 'error');
          }
          this._passData.loading(false);
        },
        error => {
          this.showMessage('Cập nhật thành công', 'error');
          this._passData.loading(false);
        }
      )
    }
  }

  isSelect (event: any, itemProducts: ItemsOnShop) {
    const checkedItem = event.currentTarget.checked;
    itemProducts.isChecked = checkedItem;
    this.findCheck();
  }

  convertToAllItems () {
    var _self = this;
    _self._allItemsSelect = [];
    _.forEach(_self._allItemsCart, function (value, key) {
      _.forEach(value.items, function (item, k) {
        if (item.isChecked === true) {
          _self._allItemsSelect.push(item);
        }
      })
    })
    this._sendItemsData.changeMessage(_self._allItemsSelect);
  }

  convertToItems (cart: AllLstCart) {
    var _self = this;
    _self._allItemsSelect = [];
    _.forEach(cart.items, function (item, k) {
      if (item.isChecked === true) {
        _self._allItemsSelect.push(item);
      }
    })
    this._sendItemsData.changeMessage(_self._allItemsSelect);
  }

  removeWhiteSpace (str: string): string {
    return str ? str.trim() : '';
  }

  public formatNum (num: string | number): string {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  checkAll (event) {
    const checkAll = event;
    this._allItemsCart.map(res => {
      res.items.map(item => {
        item.isChecked = checkAll;
      })
      res.isCheckedShop = checkAll;
    })
  }

  findCheck () {
    var _self = this;
    let checkAll = false;
    _self._allItemsCart.map((res, inx) => {
      let checkShop = false;
      res.items.map(item => {
        item.oldQuanlity = item.quantity;
        if (!item.isChecked) {
          res.isCheckedShop = false;
          _self.isDefault = false;
          if (!checkAll) {
            checkAll = true;
          }
          if (!checkShop) {
            checkShop = true;
          }
          return;
        }
      })
      if (!checkShop) {
        res.isCheckedShop = true;
      }
    })
    if (!checkAll) {
      _self.isDefault = true;
    }
  }

  clear () {
    this.msgs = [];
  }

  // checkLink(url){
  //   url = url ? url : '';
  //   if(url.includes('taobao') || url.includes('TAOBAO') ){
  //     return 'TAOBAO';
  //   } else if(url.includes('tmall') || url.includes('TMALL')){
  //     return 'TMALL';
  //   } else if(url.includes('cn1688') ||url.includes('CN1688') ){
  //     return 'CN1688';
  //   } else {
  //     return 'OTHER'
  //   }
  // }

  refreshImageCart(cartId: number) {
    //this.refreshingImg = true;
    this.fileManagerServices
        .refreshImageByCartId(cartId)
        .subscribe(
          (resRefreshImage) => {
            if (resRefreshImage && resRefreshImage.result.success) {
            }
            this._allItemsCart = new Array<AllLstCart>()
            this.getAllItemsOnCart(20, 1);
          },
          (err) => {
            //this.refreshingImg = false;
          }
        );
  }
}
