import {Component, OnInit, ViewChild} from '@angular/core';
import {MerchandiseServices} from 'app/services/merchandise.services';
import {DeliveryRequest} from 'app/model/delivery-request.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ClientProfile} from 'app/model/client-profile.model';
import {WarehouseExpService} from 'app/services/warehouse-exp.service';
import {PaymentOrdersComponent} from "../../payment-orders/payment-orders.component";
import {MatDialog} from "@angular/material/dialog";
import {PrintBillComponent} from "./print-bill/print-bill.component";

@Component({
    selector: 'app-merchandise-delivery',
    templateUrl: './merchandise-delivery.component.html',
    styleUrls: ['./merchandise-delivery.component.scss']
})
export class MerchandiseDeliveryComponent implements OnInit {
    merchandiseList: any[];
    messages: any[];
    deliveryRequestCode: string;
    loading = false;
    deliveryRequest = new DeliveryRequest();
    parentMerchandiseCode: string;
    account: ClientProfile;
    userId: any;

    displayedColumns: string[] = ['orderCode', 'merchandiseCode', 'netWeight', 'capacity', 'chargedWeight'];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private merchandiseServices: MerchandiseServices,
        private warehouseExpService: WarehouseExpService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;
    }

    /**
     * Get delivery data by code
     * @param code
     */
    getDeliveryRequestByCode(code) {
        this.loading = true;
        this.merchandiseServices.getDeliveryRequestByCode(code).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.deliveryRequest = res.result.data;
                    this.sortMerchandiseLsAndMergeParent();
                } else {
                    this.deliveryRequest = new DeliveryRequest();
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.deliveryRequest = new DeliveryRequest();
                this.showMessage('alert-danger', 'Tải thông tin yêu cầu xuất hàng thất bại');
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
     * Sort merchandise list
     */
    sortMerchandiseLsAndMergeParent() {
        let parent: any[];
        parent = this.deliveryRequest.lsParentDetail;
        const nullParent = this.deliveryRequest.lsParentDetail.find(e => e.merchandiseId === null);
        if (!nullParent) {
            this.deliveryRequest.lsParentDetail = parent = [{merchandiseId: null}, ...parent];
        }
        this.merchandiseList = [];
        for (const p of parent) {
            p.isParrent = true;
            const merchandiseLsByParentId = this.deliveryRequest.lsDetail.filter(e => e.parentId === p.merchandiseId);
            if (merchandiseLsByParentId.length > 0) {
                if (p.merchandiseId === null) {
                    this.merchandiseList = [...this.merchandiseList, ...merchandiseLsByParentId];
                } else {
                    this.merchandiseList = [...this.merchandiseList, p, ...merchandiseLsByParentId];
                }
            }
        }

        this.dataSource.data = this.merchandiseList;
        this.dataSource.paginator = this.paginator;
    }

    /**
     * Fill merchandise list by parent merchandise code
     * @param value
     */
    applyFilter(value: string) {
        if (this.deliveryRequest && this.deliveryRequest.lsParentDetail && this.deliveryRequest.lsDetail) {
            if (value) {
                const parent = this.deliveryRequest.lsParentDetail.find(p => p.merchandiseCode === value);
                let result = [];
                if (parent) {
                    result = this.deliveryRequest.lsDetail.filter(e => e.parentId === parent.merchandiseId);
                }
                this.dataSource.data = result;
                this.dataSource.paginator = this.paginator;
            } else {
                this.sortMerchandiseLsAndMergeParent();
            }
        }
    }

    /**
     * Payment order
     */
    paymentOrders() {
        const orderIds = Array.from(new Set(this.deliveryRequest.lsDetail.map(e => e.orderId)));
        const data = {
            orderIds :  orderIds,
        };
        this.dialog.open(PaymentOrdersComponent, {
            data: data,
            panelClass: 'payment-order-dialog',
        }).afterClosed().subscribe((res) => {
            if (res) {
                this.showMessage('alert-success', 'Thanh toán thành công');
                this.getDeliveryRequestByCode(this.deliveryRequestCode);
            }
        });
    }

    /**
     * Charge money to wallet
     */
    chargeWallet() {
        // TODO: Phase 2
    }

    /**
     * Create package
     */
    createPackage() {
        const lsDetail = this.deliveryRequest.lsDetail;
        const body = {
            lsId: lsDetail ? lsDetail.map(e => e.merchandiseWarehouseId).filter((a, b, self) => self.indexOf(a) === b) : [],
        };
        this.loading = true;
        this.merchandiseServices.createPackage(body).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    // TODO: Load merchandise list
                    this.getDeliveryRequestByCode(this.deliveryRequestCode);
                    this.showMessage('alert-success', 'Đóng gói thành công');
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Đóng gói thất bại');
            });
    }

    /**
     * Send delivery
     */
    sendDelivery() {
        const body = {
            deliveryRequestCode: this.deliveryRequestCode,
            storekeeperId: this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.storekeeperId : null,
        };
        this.loading = true;
        this.merchandiseServices.sendDelivery(body).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    // TODO: set shipment value
                    this.showMessage('alert-success', 'Giao hàng thành công');
                    this.getDeliveryRequestByCode(this.deliveryRequestCode);
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Giao hàng thất bại');
            });
    }

    /**
     * Cancel delivery
     */
    cancelDelivery() {
        const body = {
            DeliveryRequestCode: this.deliveryRequestCode,
        };
        this.loading = true;
        this.merchandiseServices.cancelDelivery(body).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    // TODO: reload data after success
                    this.showMessage('alert-success', 'Hủy giao thành công');
                    this.getDeliveryRequestByCode(this.deliveryRequestCode);
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Hủy giao thất bại');
            });
    }

    /**
     * Export
     */
    exportByDeliveryRequest() {
        const body = {
            DeliveryRequestCode: this.deliveryRequestCode,
            StorekeeperId: this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.storekeeperId : null,
            UserId: this.userId,
        };
        this.loading = true;
        this.warehouseExpService.createWarehouseExpByDeliveryRequest(body).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    // TODO: reload data after success
                    this.showMessage('alert-success', 'Xuất hàng thành công');
                    this.getDeliveryRequestByCode(this.deliveryRequestCode);
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Xuất hàng thất bại');
            });
    }

    /**
     * Cancel Export
     */
    cancelExp() {
        const body = {
            DeliveryRequestCode: this.deliveryRequestCode,
            StorekeeperId: this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.storekeeperId : null,
            UserId: this.userId,
        };
        this.loading = true;
        this.warehouseExpService.cancelWarehouseExp(body).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    // TODO: reload data after success
                    this.showMessage('alert-success', 'Hủy xuất hàng thành công');
                    this.getDeliveryRequestByCode(this.deliveryRequestCode);
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Xuất hàng thất bại');
            });
    }

    /**
     * Print bill
     */
    printExpBill() {
        const printData = {
            expCode: this.deliveryRequest && this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.WarehouseExpCode : null,
            deliveryRequestCode: this.deliveryRequestCode,
        }
        this.dialog.open(PrintBillComponent, {
            data: printData,
            panelClass: 'print-bill-dialog',
        });
    }
}
