import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderBuy} from 'app/model/body/order-buy.model';
import {ChatDTO} from 'app/model/dto/chat.model';
import {OrderService} from 'app/services/order.service';
import {LOrderDetail, OrderChat} from 'app/model/ro/order-detail.model';
import {OrderDetailService} from 'app/services/order-detail.service';
import {PassDataService } from 'app/services/pass-data.services'
import {FormGroupDirective} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {APP_NAME} from 'app/config/app.config';
import {ClientProfile} from 'app/model/client-profile.model';
import {CurrencyMaskInputMode} from 'ngx-currency';
import { FileManagerServices } from "./../../services/fileManager.services";

@Component({
    selector: 'app-order-buy',
    templateUrl: './order-buy-edit.component.html',
    styleUrls: ['./order-buy-edit.component.scss']
})
export class OrderBuyEditComponent implements OnInit {
    @ViewChild('orderByForm') orderByForm: FormGroupDirective;
    orderBuy: OrderBuy = new OrderBuy();
    chatContent: ChatDTO = new ChatDTO();
    messages = [];
    orderId: number;
    messageSend: string;
    dataChat: OrderChat[] = [];
    // TODO: Get from login data
    inlandFeeBuy: number;
    inlandFee: number;
    inlandFeeType = '7';
    loading: boolean;
    APP_NAME = APP_NAME;
    account: ClientProfile;
    warehouseReceiver: string = "";
    noteChinaText: string ="";
    addressInformation: string = "";
    warehouseAddress: string = "";
    warehousePhone: string = "";
    customCurrencyMaskConfig = {
        prefix: '¥',
        thousands: '.',
        decimal: ',' ,
        precision: 2,
        nullable: true,
        inputMode: CurrencyMaskInputMode.NATURAL
    };

    constructor(
        private _passData: PassDataService,
        private activeRoute: ActivatedRoute,
        private orderService: OrderService,
        private orderDetailService: OrderDetailService,
        public fileManagerServices: FileManagerServices
    ) {
    }

    ngOnInit() {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.activeRoute.queryParams.subscribe(params => {
            if (params.orderid) {
                this.orderId = params.orderid;
                this.getOrderBuy(this.orderId);
            }
        });
    }

    /**
     * Get order buy info
     * @param orderId
     */
    getOrderBuy(orderId) {
        this.loading = true;
        this.orderService.getOrderBuy(orderId).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.orderBuy = res.result.data;
                    this.prepareBuyQuantityAndPrice(this.orderBuy.lsOrderDetail);
                    this.dataChat = res.result.data.lsOrderChat;
                    this.sortByDueDate();
                    this.setDefaultWarehouseReceive();
                    const serviceInland = this.orderBuy.lsService.find(e => e.feeType === this.inlandFeeType)
                    this.inlandFee = serviceInland ? serviceInland.amountCny : null;
                    this.inlandFeeBuy = serviceInland ? serviceInland.amountCnyBuy : null;
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            }).catch(() => {
            this.loading = false;
            this.showMessage('alert-danger', 'Không thể tải thông tin đơn hàng');
        });
    }

    /**
     * Sort message data
     */
    public sortByDueDate(): void {
        this.dataChat.sort((a: OrderChat, b: OrderChat) => {
            return new Date(a.chatTime).getTime() - new Date(b.chatTime).getTime();
        });
    }

    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    showMessage(messageClass: string, detail: string): void {
        this.messages = [];
        this.messages.push({messageClass: messageClass, detail});
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }

    /**
     * Send message
     */
    sendMessage() {
        if (this.messageSend) {
            this.chatContent.orderId = this.orderBuy.orderData.orderId;
            this.chatContent.userId = this.account.userId;
            this.chatContent.content = this.messageSend;
            this.messageSend = '';
            this.orderDetailService.postChat(this.chatContent).toPromise()
                .then((res) => {
                    this.dataChat.push(res.result.data);
                })
        }
    }

    /**
     * prepare data before save
     */
    prepareDataBeforeSave() {
        const service = this.orderBuy.lsService.find(e => e.feeType === this.inlandFeeType);
        if (service) {
            service.amountCny = this.inlandFee;
            service.amountCnyBuy = this.inlandFeeBuy;
        }
    }

    /**
     * Save order
     */
     saveOrderForm() {
         this.prepareDataBeforeSave();
         this.loading = true;
         this.orderService.editOrderAfterCompleted(this.orderBuy).toPromise()
             .then((res) => {
                 this.loading = false;
                 if (res.result.success) {
                     this.getOrderBuy(this.orderId);
                     this.showMessage('alert-success', 'Lưu đơn hàng thành công');
                 } else {
                     this.showMessage('alert-danger', res.result.message);
             }
            })
             .catch(() => {
                 this.loading = false;
                this.showMessage('alert-danger', 'Không thể lưu đơn hàng');
             });
     }

     /**
     * Edit DepositOrder
     */
    editDepositOrderAfterBuy() {
        this.prepareDataBeforeSave();
        this.loading = true;
        this.orderService.editDepositOrderAfterBuy(this.orderBuy).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.getOrderBuy(this.orderId);
                    this.showMessage('alert-success', 'Điều chỉnh tiền cọc thành công');
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Không thể điều chỉnh tiền cọc đơn hàng');
            });
    }

    /**
     * Complete order
     */
    /*completeOrderForm() {
        this.prepareDataBeforeSave();
        this.loading = true;
        this.orderService.completedBuyOrder(this.orderBuy).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.getOrderBuy(this.orderId);
                    this.showMessage('alert-success', 'Hoàn tất đơn hàng thành công');
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Không thể hoàn tất đơn hàng');
            });
    }*/

    /**
     * start by order
     */
    /*startBuy() {
        this.loading = true;
        this.orderService.startBuy(this.orderId).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.getOrderBuy(this.orderId);
                    this.showMessage('alert-success', 'Bắt đầu mua hàng thành công thành công');
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            }).catch(() => {
            this.loading = false;
            this.showMessage('alert-danger', 'Không thể bắt đầu mua hàng hàng');
        });
    }*/

    /**
     * Set data order to data buy
     * @param lsOrderDetail
     */
    prepareBuyQuantityAndPrice(lsOrderDetail: LOrderDetail[]) {
        lsOrderDetail.map(e => {
            e.quantityBuy = null ? e.quantityOrder : e.quantityBuy;
            e.buyOriginalPrice = null ? e.orderOriginalPrice :  e.buyOriginalPrice;
        });
    }

    /**
     * Set default warehouseReceive
     */
    setDefaultWarehouseReceive() {
        let selectedWarehouseId = this.orderBuy.orderData.warehouseStartedId;
        if (this.orderBuy.orderData.warehouseStartedId === null) {
            const selected = this.orderBuy.lsWarehouseReceive.find(e => e.isDefault);
            selectedWarehouseId = selected.warehouseId;
        }
        this.orderBuy.orderData.warehouseStartedId = selectedWarehouseId;
        this.changeWarehouseReceive(this.orderBuy.orderData.warehouseStartedId);
    }

    /**
     * On change warehouse receive
     */
    changeWarehouseReceive(value) {
        const selected = this.orderBuy.lsWarehouseReceive.find(e => e.warehouseId === parseInt(value));
        this.warehouseReceiver = selected.receiver;
        this.addressInformation = selected.addressInformation;
        this.warehouseAddress = selected.address;
        this.warehousePhone = selected.phone;
        this.noteChinaText = "你帮我在盒子外面写: " + selected.receiver;
    }

    /**
     * Cancel order by staff
     */
    cancelOrder() {
        if (confirm("Bạn có chắc muốn hủy?")) {
            this.loading = true;
            this.orderService.cancelOrderAfterBuy(this.orderId).toPromise()
                .then((res) => {
                    this.loading = false;
                    if (res.result.success) {
                        this.getOrderBuy(this.orderId);
                        this.showMessage('alert-success', 'Hủy đơn hàng thành công');
                    } else {
                        this.showMessage('alert-danger', res.result.message);
                    }
                }).catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Hủy đơn hàng thất bại');
            });
        }
    }

    isSelectedServices (event: any, inx: number, data: OrderBuy) {
        if (event.currentTarget.checked) {
          let ServiceId = data.lsService[inx].serviceId;
          let OrderId = data.orderData.orderId;
          this._passData.loading(true);
          this.orderService.addNewOrderService(ServiceId, OrderId).subscribe(
            res => {
              if (res.result.success) {
                //data.lsService[inx] = res.result.data;
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
          let serviceOrderId = data.lsService[inx].serviceOrderId;
          this._passData.loading(true);
          this.orderService.delOrderService(serviceOrderId).subscribe(
            res => {
              if (res.result.success) {
                //data.lsService[inx] = res.result.data;
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

    refreshImageAttachFile() {
        //this.refreshingImg = true;
        this.fileManagerServices
            .refreshImageByOrderId(this.orderId)
            .subscribe(
              (resRefreshImage) => {
                if (resRefreshImage && resRefreshImage.result.success) {
                }
                //this.refreshingImg = false;
                this.getOrderBuy(this.orderId);
              },
              (err) => {
                //this.refreshingImg = false;
              }
            );
      }
}
