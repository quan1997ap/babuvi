import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {HistoryDialogComponent} from './history-dialog/history-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from "@angular/common";
import {Merchandise} from "../../model/merchandise.model";
import {OrderStatus} from "../../model/order-status.model";
import {ClientProfile} from "../../model/client-profile.model";
import {MerchandiseServices} from "../../services/merchandise.services";
import {Page} from "../../model/page.model";
import { SystemSetting} from "app/config/app.config";

@Component({
    selector: 'app-add',
    templateUrl: './add-merchandise.component.html',
    styleUrls: ['./add-merchandise.component.scss']
})
export class AddMerchandiseComponent implements OnInit {
    merchandisesList: Merchandise[];
    selected: Merchandise[];
    merchandises = new Merchandise();
    orderStatus: OrderStatus[];
    tableMessage = {
        emptyMessage: 'Không có dữ liệu'
    };
    columnMode = ColumnMode;
    selectionType = SelectionType;
    messages = [];
    page = new Page();
    // TODO: need to handler get weightConversionRatio
    weightConversionRatio = 5;
    defaultStatusId = '6';
    account: ClientProfile;
    lSystemSettings: any;
    loading: boolean;

    constructor(
        private merchandiseServices: MerchandiseServices,
        public dialog: MatDialog,
        private activeRoute: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef,
        private location: Location
    ) {
        this.merchandisesList = [];
        this.selected = [];
        this.orderStatus = [];
        // TODO: Currently, client side paging
        this.page.pageNumber = 0;
        this.page.size = 999;
    }

    async ngOnInit() {
        await this.activeRoute.queryParams.subscribe(params => {
            if (params.ordercode) {
                this.merchandises.orderCode = params.ordercode;
                this.loadMerchandiseList(this.merchandises.orderCode, this.page.size, this.page.pageNumber + 1);
            }
        });
        this.loadMerchandiseStatus();
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.lSystemSettings = JSON.parse(localStorage.getItem('lSystemSettings'));
        if (this.lSystemSettings && this.lSystemSettings.length) {
            let volumetricDivisor = this.lSystemSettings.find(
              (config) => config.code == SystemSetting.VolumetricDivisor
            );
            if (volumetricDivisor) {
                this.lSystemSettings.forEach((setting) => {
                if (setting.code == SystemSetting.VolumetricDivisor) {
                    this.weightConversionRatio = setting.value;
                }
              });
            } else {
              console.log("Không có config VolumetricDivisor");
            }
          }
        this.merchandises.createdUserId = this.account.userId;
    }

    /**
     * On select merchandise
     * @param selected
     */
    onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    /**
     * On edit merchandise
     */
    edit() {
        if (this.selected.length > 0) {
            const orderCode = this.merchandises.orderCode;
            this.merchandises = this.selected[this.selected.length - 1];
            this.merchandises.orderCode = orderCode;
        }
    }

    /**
     * On delete merchandise
     */
    delete() {
        // TODO: waiting for api
        if (this.selected.length > 0) {
            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                let deleteApiIds = this.selected.filter(item => item.merchandiseId)
                    .map(itm => itm.merchandiseId);
                deleteApiIds = deleteApiIds.filter((v, i) => deleteApiIds.indexOf(v) === i);
                this.loading = true;
                this.merchandiseServices.deleteMerchandise(deleteApiIds).toPromise()
                    .then((res) => {
                        this.loading = false;
                        if (res.result.success) {
                            this.showMessage('alert-success', 'Bạn đã xóa thành công kiện hàng');
                            const filtered = this.merchandisesList.filter(element => !this.selected.includes(element));
                            this.selected = [];
                            this.merchandisesList = [...filtered];
                        } else {
                            this.showMessage('alert-danger', 'Xóa kiện hàng không thành công');
                        }
                    }).catch(() => {
                    this.loading = false;
                    this.showMessage('alert-danger', 'Xóa kiện hàng không thành công');
                });
            }
        }
    }

    /**
     * On view history merchandise
     */
    viewHistory() {
        if (this.selected.length > 0) {
            this.dialog.open(HistoryDialogComponent, {
                data: this.selected[this.selected.length - 1],
                width: '90%',
                height: 'auto'
            })
        }
    }

    /**
     * On add merchandise form submit
     * @param merchandiseForm
     * @param event
     */
    saveMerchandise(merchandiseForm: NgForm, event) {
        if (merchandiseForm.valid) {
            this.loading = true;
            this.merchandiseServices.saveMerchandise(this.merchandises).toPromise()
                .then((res) => {
                    this.loading = false;
                    if (res.result.success) {
                        this.loadMerchandiseList(this.merchandises.orderCode, this.page.size, this.page.pageNumber + 1);
                        this.showMessage('alert-success', 'Bạn đã lưu thành công kiện hàng' + this.merchandises.merchandiseCode);
                        const orderCode = this.merchandises.orderCode;
                        this.merchandises = new Merchandise();
                        merchandiseForm.resetForm();
                        this.changeDetectorRef.detectChanges();
                        this.merchandises.orderCode = orderCode;
                        this.nextFocus(event, true)
                    } else {
                        this.showMessage('alert-danger', res.result.message);
                    }

                })
                .catch(() => {
                    this.loading = false;
                    this.showMessage('alert-danger', 'Lưu kiện hàng ' + this.merchandises.merchandiseCode + ' thất bại');
                });
        }
    }

    /**
     * Load merchandise list by order id
     * @param orderCode
     * @param perPage
     * @param page
     */
    loadMerchandiseList(orderCode: string, perPage, page) {
        this.loading = true;
        this.merchandiseServices.getMerchandiseViewModel(orderCode, perPage, page).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.merchandisesList = res.result.data;
                    this.location.go(this.location.path().split('?')[0],"ordercode="+orderCode)
                } else {
                    this.location.go(this.location.path() .split('?')[0])
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.loading = false;
                this.location.go(this.location.path().split('?')[0])
                this.showMessage('alert-danger', "Tải thông tin kiện hàng không thành công");
                this.merchandisesList = [];
            });
    }

    /**
     * Load merchandise status
     */
    loadMerchandiseStatus() {
        this.loading = true;
        this.merchandiseServices.getStatus().toPromise()
            .then((res) => {
                this.loading = false;
                this.orderStatus = res.result.data;
                this.merchandises.status = this.defaultStatusId;
            })
            .catch(() => {
                this.loading = false;
                this.orderStatus = []
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
     * Complete Merchandise
     */
    completeMerchandise() {
        this.loading = true;
        this.merchandiseServices.completeMerchandise(this.merchandises.orderCode).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.showMessage('alert-success', 'Hoàn tất đơn hàng ' + this.merchandises.orderCode + ' thành công');
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            }).catch(() => {
            this.loading = false;
            this.showMessage('alert-danger', 'Hoàn tất đơn hàng ' + this.merchandises.orderCode + ' thất bại');
        })
    }

    /**
     * Focus next input
     * @param event
     * @param isEnd
     */
    nextFocus(event, isEnd = false) {
        event.preventDefault();
        const inputs =
            Array.prototype.slice.call(document.querySelectorAll('button[tabindex],input[tabindex],select[tabindex]'));
        let index =
            (inputs.indexOf(document.activeElement) + 1) % inputs.length;
        index = isEnd ? index + 1 : index;
        const input = inputs[index];
        input.focus();
        if (input.nodeName === 'INPUT') {
            input.select();
        }
    }
}
