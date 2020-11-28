import {Component, OnInit, Inject} from '@angular/core';
import {OrderService} from 'app/services/order.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RequestModel} from 'app/model/request.model';
import {OrderData} from 'app/model/ro/order-detail.model';
import {ClientProfile} from 'app/model/client-profile.model';

@Component({
    selector: 'app-payment-orders',
    templateUrl: './payment-orders.component.html',
    styleUrls: ['./payment-orders.component.scss']
})
export class PaymentOrdersComponent implements OnInit {
    orderIds: number[];
    password: string;
    order: OrderData[] = [];
    isDisable = false;
    loading = false;
    messages = [];
    passInvalid = false;
    paymentData: RequestModel = new RequestModel();
    account: ClientProfile;

    constructor(
        private orderService: OrderService,
        @Inject(MAT_DIALOG_DATA) private dialogData: any,
        private dialogRef: MatDialogRef<PaymentOrdersComponent>,
    ) {
    }

    ngOnInit() {
        if (this.dialogData.orderIds) {
            this.account = JSON.parse(localStorage.getItem('userData'));
            this.orderIds = this.dialogData.orderIds;
            if (this.orderIds.length > 0) {
                if (this.orderIds.length === 1) {
                    this.loadOrderInfo(this.orderIds[0]);
                } else {
                    // TODO: fix pay multi orders - api get order list
                    this.loadOrderInfoByIds(this.orderIds);
                }
            }
        } else {
            this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
            this.isDisable = true;
        }
    }

    paymentOrder() {
        if (this.password) {
            this.toggleLoading(true);
            this.isDisable = true;
            this.paymentData.lsId = this.orderIds;
            this.paymentData.loginData.username = this.account.username;
            this.paymentData.loginData.password = this.password;
            this.orderService.payListOrder(this.paymentData).toPromise()
                .then((res) => {
                    this.toggleLoading(false);
                    if (res.result.success) {
                        this.dialogRef.close(res);
                    } else {
                        this.isDisable = false;
                        this.showMessage('alert-danger', res.result.message);
                    }
                }).catch(() => {
                this.toggleLoading(false);
                this.isDisable = false;
                this.showMessage('alert-danger', 'Không thể thanh toán đơn hàng');
            })
        } else {
            this.passInvalid = true;
        }
    }

    loadOrderInfo(orderId: number) {
        this.toggleLoading(true);
        this.orderService.getOrderViewModelById(orderId).toPromise()
            .then((res) => {
                this.toggleLoading(false);
                if (res.result.success) {
                    if (res.result.data) {
                        this.order.push(res.result.data);
                    } else {
                        this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
                        this.isDisable = true;
                    }
                } else {
                    this.showMessage('alert-danger', res.result.message);
                    this.isDisable = true;
                }
            }).catch(() => {
            this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
            this.isDisable = true;
            this.toggleLoading(false);
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

    private loadOrderInfoByIds(orderIds: number[]) {
        this.toggleLoading(true);
        this.orderService.getLsOrderPay(orderIds).toPromise()
            .then((res) => {
                this.toggleLoading(false);
                if (res.result.success) {
                    if (res.result.data) {
                        this.order = res.result.data;
                    } else {
                        this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
                        this.isDisable = true;
                    }
                } else {
                    this.showMessage('alert-danger', res.result.message);
                    this.isDisable = true;
                }
            }).catch(() => {
            this.toggleLoading(false);
            this.isDisable = true;
            this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
        });
    }

    /**
     * Get total missing
     * @return number
     */
    getTotal(): number {
        let total = 0;
        for (const order of this.order) {
            total += order.missing;
        }
        return total;
    }

    /**
     * Toggle loading
     * @param isLoading
     */
    toggleLoading(isLoading: boolean) {
        this.loading = isLoading;
        this.dialogRef.disableClose = isLoading;
    }
}
