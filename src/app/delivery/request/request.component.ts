import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MerchandiseServices} from 'app/services/merchandise.services';
import {ClientProfile} from 'app/model/client-profile.model';
import {MerchandiseWarehouse} from 'app/model/merchandise-warehouse.model';
import {PaymentOrdersComponent} from '../../payment-orders/payment-orders.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ConfirmComponent} from '../confirm/confirm.component';

@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
    displayedColumns: string[] = ['select', 'merchandiseId', 'weight', 'capacity', 'orderId', 'address', 'warehouse', 'impDate', 'status'];
    dataSource = new MatTableDataSource<MerchandiseWarehouse>();
    selection = new SelectionModel<MerchandiseWarehouse>(true, []);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    countMer: number;
    sumAmount: number;
    userId: number;
    messages: any[] = [];
    account: ClientProfile;
    page = 1;
    perPage = 999;
    loading = false;

    constructor(
        private merchandiseServices: MerchandiseServices,
        public dialog: MatDialog,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;
        this.loadData();
    }

    loadSum() {
        this.loading = true;
        this.merchandiseServices.countSumMerchandiseInWarehouse(this.userId).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.countMer = res.result.data.count;
                    this.sumAmount = res.result.data.sumAmount;
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Tải thông tin tổng số kiện hàng và tổng số tiền thiếu thất bại');
            });
    }

    loadMerchandiseInWarehouse() {
        this.loading = true;
        this.merchandiseServices.getMerchandiseInWarehouse(this.userId, this.page, this.perPage).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.dataSource.data = res.result.data;
                    this.dataSource.paginator = this.paginator;
                    this.selection.clear();
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.showMessage('alert-danger', 'Tải thông tin danh sách kiện hàng thất bại');
            });
    }

    /**
     * Whether the number of selected elements matches the total number of rows.
     * */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /**
     * The label for the checkbox on the passed row
     * */
    checkboxLabel(row?: MerchandiseWarehouse): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.merchandiseWarehouseId + 1}`;
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
     * Payment order selected
     */
    paymentOrders() {
        const selected = this.selection.selected;
        if (selected.length > 0) {
            const orderIds = Array.from(new Set(selected.map(e => e.orderId)));
            const data = {
                orderIds :  orderIds,
            };
            this.dialog.open(PaymentOrdersComponent, {
                data: data,
                panelClass: 'payment-order-dialog',
            }).afterClosed().subscribe((res) => {
                if (res) {
                    this.showMessage('alert-success', 'Thanh toán thành công');
                    this.loadData();
                }
            });
        }
    }

    /**
     * Create request delivery
     */
    requestDelivery() {
        const selected = this.selection.selected;
        if (selected.length > 0) {
            const mwIds = Array.from(new Set(selected.map(e => e.merchandiseWarehouseId)));
            const data = {
                mwIds :  mwIds,
            };
            this.dialog.open(ConfirmComponent, {
                data: data,
                panelClass: 'payment-order-dialog',
            }).afterClosed().subscribe((res) => {
                if (res) {
                    this.showMessage('alert-success', 'Tạo yêu cần giao thành công');
                    this.loadData();
                }
            });
        }
    }

    loadData() {
        this.loadSum();
        this.loadMerchandiseInWarehouse();
    }

    /**
     * Navigate to order detail
     * @param orderId
     */
    goToOrderDetail(orderId: any) {
        this.router.navigate(['ship-manager/detail-orders/'], {queryParams: {orderId: orderId}}).then();
    }
}

