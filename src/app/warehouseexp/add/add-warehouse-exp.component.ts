import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import {ClientProfile} from "../../model/client-profile.model";
import {WarehouseExp} from "../../model/warehouse-exp.model";
import {WarehouseExpDetail} from "../../model/warehouse-exp-detail.model";
import {ApDomain} from "../../model/imp-exp-status.model";
import {Warehouse} from "../../model/warehouse.model";
import {Storekeeper} from "../../model/storekeeper.model";
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common"
//service
import {WarehouseExpService} from "app/services/warehouse-exp.service";
import { SystemService } from 'app/services/system.services';
import { UserService } from 'app/services/user.service';



@Component({
    selector: 'app-add-warehouse-exp',
    templateUrl: './add-warehouse-exp.component.html',
    styleUrls: ['./add-warehouse-exp.component.scss']
})
export class AddWarehouseExpComponent implements OnInit {
    @ViewChild('warehouseExpDetailForm')
    warehouseExpDetailForm: NgForm
    // Const
    // TODO: paging
    page = 1;
    perPage = 5;
    defaultWarehouseStatus = '1';
    defaultStoreKeeper = 1;
    defaultImportWarehouse = 2;
    defaultStatus = '1';
    defaultExpDate = new Date().toISOString().substr(0, 10);
    userId;

    // Something
    messages = [];
    warehouseExpCode: string;
    isLoadByExpId = false;
    account: ClientProfile;

    // Data
    warehouseExp: WarehouseExp = new WarehouseExp();
    warehouseExpDetail: WarehouseExpDetail = new WarehouseExpDetail();
    warehouseExpDetailList: WarehouseExpDetail[] = [];
    warehouseExpStatusList: ApDomain[] = [];
    warehouseList: Warehouse[];
    storekeeperList: Storekeeper[] = [];

    // Ngx Datatable
    tableMessage = {
        emptyMessage: 'Không có dữ liệu'
    };
    columnMode = ColumnMode;
    selectionType = SelectionType;
    selected: WarehouseExpDetail[] = [];
    loading: boolean = false;

    constructor(
        private warehouseExpService: WarehouseExpService,
        private systemService: SystemService,
        private userService: UserService,
        private changeDetectorRef: ChangeDetectorRef,
        private activeRoute: ActivatedRoute,
        private location: Location,
    ) {
    }

    async ngOnInit() {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;
        await this.activeRoute.queryParams.subscribe(async (params) => {
            if (params.warehouseExpId) {
                await this.loadWarehouseExpById(params.warehouseExpId);
            }
        });
        await this.loadWareHouseStatus();
        await this.loadWareHouseList();
        this.warehouseExp.expDate = this.defaultExpDate;
    }

    /**
     * Save ware house imp
     * @param form
     */
    saveWarehouseExp(form) {
        if (form.valid) {
            this.warehouseExp.lsDetail = this.warehouseExpDetailList;
            this.warehouseExp.createdUserId = this.warehouseExp.changeUserId = this.userId;
            this.loading = true;
            this.warehouseExpService.saveWarehouseExp(this.warehouseExp).toPromise()
                .then((res) => {
                    this.loading = false;
                    if (res.result.success) {
                        this.showMessage('alert-success', 'Bạn đã lưu thành công phiếu xuất hàng');
                        this.mapResData(res.result.data);
                        this.isLoadByExpId = true;
                        this.location.go(this.location.path().split('?')[0],"warehouseExpId="+this.warehouseExp.warehouseExpId)
                    } else {
                        this.location.go(this.location.path() .split('?')[0])
                        this.showMessage('alert-danger', res.result.message);
                    }
                })
                .catch(() => {
                    this.loading = false;
                    this.location.go(this.location.path() .split('?')[0])
                    this.showMessage('alert-danger', 'Lưu kiện hàng không thành công');
                })
        }
    }

    /**
     * Save warehouse import info
     * @param form
     * @param event
     */
    saveWarehouseExpDetail(form, event) {
        if (this.checkEditExistingMerchandise()) {
            this.showMessage('alert-danger', 'Kiện hàng đã tồn tại trong danh sách');
            return;
        }
        //const selfPosition = this.warehouseImpDetail.shelfPosition;
        // Push new warehouse import detail data to list and refresh list
        this.warehouseExpDetailList = [this.warehouseExpDetail, ...this.warehouseExpDetailList];
        // Because warehouse import detail data is pass by reference to form data, need to init new warehouse import detail and reset form
        this.warehouseExpDetail = new WarehouseExpDetail();
        // form.resetForm();
        this.selected = [];
    }

    /**
     * Complete warehouse import
     * @param form
     */
    completeWarehouseExp(form) {
        if (form.valid) {
            this.warehouseExp.lsDetail = this.warehouseExpDetailList;
            this.warehouseExp.changeUserId = this.userId;
            this.loading = true;
            this.warehouseExpService.completeWarehouseExp(this.warehouseExp).toPromise()
                .then((res) => {
                    this.loading = false;
                    if (res.result.success) {
                        this.showMessage(
                            'alert-success',
                            'Bạn đã hoàn tất thành công phiếu xuất hàng'
                        );
                        this.mapResData(res.result.data);
                        this.isLoadByExpId = true;
                        this.location.go(this.location.path().split('?')[0],"warehouseExpId="+this.warehouseExp.warehouseExpId)
                    } else {
                        this.showMessage('alert-danger', res.result.message);
                    }
                })
                .catch(() => {
                    this.loading = false;
                    this.showMessage('alert-danger', 'Hoàn tất phiếu xuất hàng không thành công');
                })
        }
    }

    /**
     * Delete warehouse import details
     */
    delete() {
        if (this.selected.length > 0) {
            if (confirm('Bạn có chắc chắn muốn xóa?')) {
                let deleteApiIds = this.selected.filter(item => item.warehouseExpDetailId)
                    .map(itm => itm.warehouseExpDetailId);
                deleteApiIds = deleteApiIds.filter((v, i) => deleteApiIds.indexOf(v) === i);
                if (deleteApiIds.length > 0) {
                    this.loading = true;
                    this.warehouseExpService.deleteLsExpDetail(deleteApiIds).toPromise()
                        .then((res) => {
                            this.loading = false;
                            if (res.result.success) {
                                this.showMessage('alert-success', 'Đã xóa kiện hàng');
                                const filtered = this.warehouseExpDetailList.filter(element => !this.selected.includes(element));
                                this.warehouseExpDetailList = [...filtered];
                            } else {
                                this.showMessage('alert-danger', 'Xóa kiện hàng không thành công');
                            }
                        }).catch(() => {
                        this.loading = false;
                        this.showMessage('alert-danger', 'Xóa kiện hàng không thành công');
                    });
                } else {
                    this.showMessage('alert-success', 'Đã xóa kiện hàng');
                    const filtered = this.warehouseExpDetailList.filter(element => !this.selected.includes(element));
                    this.warehouseExpDetailList = [...filtered];
                }
            }
        }
    }

    /**
     * On select warehouse import details
     * @param selected
     */
    onSelect({selected}) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    /**
     * Load warehouse status
     */
    loadWareHouseStatus() {
        this.loading = true;
        this.systemService.getWarehouseExpStatus().toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.warehouseExpStatusList = res.result.data;
                    if (!this.warehouseExp.status) {
                        this.warehouseExp.status = this.defaultWarehouseStatus;
                    }
                } else {
                    this.warehouseExpStatusList = [];
                }
            })
            .catch(() => {
                this.loading = false;
                this.warehouseExpStatusList = [];
            });
    }

    /**
     * Load warehouse list
     */
    loadWareHouseList() {
        this.loading = true;
        this.systemService.getAllWarehouse().toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.warehouseList = res.result.data;
                    if (!this.warehouseExp.warehouseId) {
                        this.warehouseExp.warehouseId = this.defaultImportWarehouse;
                    }
                    this.loadListStorekeeperInWarehouse(this.warehouseExp.warehouseId);
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
        this.userService.getListStorekeeperInWarehouse(value).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    this.storekeeperList = res.result.data;
                    if (!this.warehouseExp.storekeeperId) {
                        this.warehouseExp.storekeeperId = this.defaultStoreKeeper;
                    }
                    const storekeeper = this.storekeeperList.find(item => item.userId === this.warehouseExp.storekeeperId);
                    if (!storekeeper) {
                        this.warehouseExp.storekeeperId = this.storekeeperList[0].userId;
                    }
                } else {
                    this.storekeeperList = [];
                }
            }).catch(() => {
            this.loading = false;
            this.storekeeperList = [];
        });
    }

    /**
     * Load warehouse import by export code
     * @param expCode
     */
    // async loadWarehouseImpByExpCode(expCode) {
    //     if (expCode) {
    //         this.loading = true;
    //         this.warehouseImpService.getWarehouseExpByCode(expCode).toPromise()
    //             .then((res) => {
    //                 this.loading = false;
    //                 if (res.result.success) {
    //                     this.mapResData(res.result.data, true);
    //                     this.loadListStorekeeperInWarehouse(this.warehouseImp.warehouseId);
    //                 } else {
    //                     this.warehouseImpDetailList = [];
    //                     this.warehouseImp = new WarehouseImp();
    //                     this.showMessage('alert-danger', res.result.message);
    //                 }
    //             }).catch(() => {
    //             this.loading = false;
    //             this.warehouseImp = new WarehouseImp();
    //             this.warehouseImpDetailList = [];
    //             this.showMessage('alert-success', 'Không lấy được thông tin');
    //         });
    //     }
    // }

    /**
     * load warehouse import info by warehouse import id
     * @param warehouseExpId
     */
    async loadWarehouseExpById(warehouseExpId) {
        this.loading = true;
        this.warehouseExpService.getWarehouseExpById(warehouseExpId).toPromise()
            .then((res) => {
                this.loading = false;
                if (res.result.success) {
                    console.log(res.result.data);
                    this.warehouseExp = res.result.data;
                    this.warehouseExp.expDate = this.warehouseExp.expDate ?
                        new Date(this.warehouseExp.expDate).toISOString().substr(0, 10) :
                        new Date().toISOString().substr(0, 10);
                    this.warehouseExpDetailList = this.warehouseExp.lsDetail;
                    this.isLoadByExpId = true;
                } else {
                    this.warehouseExp = new WarehouseExp();
                    this.warehouseExpDetailList = [];
                }
            }).catch(() => {
            this.loading = false;
            this.warehouseExp = new WarehouseExp();
            this.warehouseExpDetailList = [];
        });
    }

    /**
     * Focus next input
     * @param event
     */
    nextFocus(event) {
        event.preventDefault();
        const inputs =
            Array.prototype.slice.call(document.querySelectorAll('button[tabindex],input[tabindex]'));
        const index =
            (inputs.indexOf(document.activeElement) + 1) % inputs.length;
        const input = inputs[index];
        input.focus();
        if (input.nodeName === 'INPUT') {
            input.select();
        }
    }

    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    showMessage(messageClass: string, detail: string): void {
        // this.messages = [];
        this.messages.push({messageClass: messageClass, detail});
        setTimeout(() => {
            this.messages = [];
        }, 3000);
    }

    /**
     * Check is editing existing merchandise
     * If merchandise code just entered is existing Merchandise list => edit
     */
    checkEditExistingMerchandise() {
        const mCode = this.warehouseExpDetail.merchandiseCode.trim().toLowerCase();
        const editingM = this.warehouseExpDetailList.find(e => e.merchandiseCode.toLowerCase() === mCode);
        return !!editingM;
    }

    /**
     * Map response merchandise exp data
     * @param data
     * @param isLoadFromExpCode
     */
    mapResData(data, isLoadFromExpCode = false) {
        this.warehouseExp.warehouseExpId = data.warehouseExpId;
        this.warehouseExp.expWarehouseId = data.expWarehouseId;
        this.warehouseExp.warehouseExpCode = data.warehouseExpCode;
        this.warehouseExp.warehouseId = data.warehouseId;
        this.warehouseExp.status = isLoadFromExpCode ? this.defaultStatus : data.status;
        this.warehouseExpDetailList = data.lsDetail.map( item => {
            const warehouseExpDetail = new WarehouseExpDetail();
            warehouseExpDetail.merchandiseCode = item.merchandiseCode;
            warehouseExpDetail.warehouseExpDetailId = item.warehouseExpDetailId;
            warehouseExpDetail.netWeight = item.netWeight;
            warehouseExpDetail.chargedWeight = item.chargedWeight;
            warehouseExpDetail.paymentWeight = item.paymentWeight;
            warehouseExpDetail.length = item.length;
            warehouseExpDetail.width = item.width;
            warehouseExpDetail.height = item.height;
            warehouseExpDetail.shelfPosition = item.shelfPosition;
            return warehouseExpDetail;
        });
    }

    /**
     * Check valid size
     */
    // isValidSize() {
    //     return (!this.warehouseImpDetail.length
    //         && !this.warehouseImpDetail.width
    //         && !this.warehouseImpDetail.height)
    //         || (this.warehouseImpDetail.length
    //         && this.warehouseImpDetail.width
    //         && this.warehouseImpDetail.height);
    // }
}
