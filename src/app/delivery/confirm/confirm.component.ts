import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DeliveryRequestType} from 'app/model/delivery-request-type.model';
import {OrderService} from 'app/services/order.service';
import {DeliveryRequest} from 'app/model/body/delivery-request.model';
import {MatTableDataSource} from '@angular/material/table';
import {MerchandiseWarehouse} from 'app/model/merchandise-warehouse.model';
import {MatPaginator} from '@angular/material/paginator';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MerchandiseServices} from 'app/services/merchandise.services';
import {AreaModel} from 'app/model/area.model';
import {ClientProfile} from 'app/model/client-profile.model';
import {RequestModel} from 'app/model/request.model';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
    displayedColumns: string[] = ['position', 'merchandiseId', 'orderId', 'weight'];
    dataSource = new MatTableDataSource<MerchandiseWarehouse>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ViewChild()

    messages: any[] = [];
    delivery: DeliveryRequest = new DeliveryRequest();
    isDisable = false;
    loading = false;
    area: any;
    loadedArea: any;
    shippingMethod: DeliveryRequestType[] = [new DeliveryRequestType()];
    mwIds: any[];
    sumMissingAmount = 0;
    account: ClientProfile;
    customer: ClientProfile;
    userId: number;
    customerId: number;
    requestData: RequestModel = new RequestModel();
    defaultDeliveryAddress: any = {};
    orderId: string;

    constructor(
        private orderService: OrderService,
        private merchandiseServices: MerchandiseServices,
        @Inject(MAT_DIALOG_DATA) private dialogData: any,
        private dialogRef: MatDialogRef<ConfirmComponent>,
    ) {
        this.area = {
            countryList: [new AreaModel()],
            provinceList: [new AreaModel()],
            districtList: [new AreaModel()],
            wardList: [new AreaModel()],
        };
        this.loadedArea = {
            loadedWardList: [new AreaModel()],
            loadedDistrictList: [new AreaModel()],
            loadedProvinceList: [new AreaModel()],
        };

        this.delivery.Type = '1';
    }

    ngOnInit() {
        // this.account = JSON.parse(localStorage.getItem('userData'));
        // this.userId = this.account.userId;
        // this.customer = JSON.parse(localStorage.getItem('customerData'));
        // this.customerId = this.customer.userId;
        if (this.dialogData.mwIds) {
            this.mwIds = this.dialogData.mwIds;
            if (this.mwIds.length > 0) {
                this.getDeliveryRequestType();
                //this.getDefaultDeliveryAddress();
                this.getMerchandiseList(this.mwIds);
                this.getCountry();
            } else {
                this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
                this.isDisable = true;
            }
        } else if (this.dialogData.orderId) {
            this.orderId = this.dialogData.orderId;
            this.getMerchandiseListByOrderId(this.orderId);
            this.getDeliveryRequestType();
            //this.getDefaultDeliveryAddress();
            this.getCountry();
        }
        else {
            this.showMessage('alert-danger', 'Không thể lấy thông tin đơn hàng');
            this.isDisable = true;
        }
    }

    /**
     * Save delivery
     * @param deliveryForm
     */
    saveDelivery(deliveryForm: NgForm) {
        if (deliveryForm.valid) {
            this.toggleLoading(true);
            this.prepareBeforeSave();
            this.merchandiseServices.addDeliveryRequest(this.delivery).toPromise()
                .then((res) => {
                    this.toggleLoading(false);
                    if (res.result.success) {
                        this.dialogRef.close(res);
                    } else {
                        this.showMessage('alert-danger', res.result.message);
                    }
                })
                .catch(() => {
                    this.toggleLoading(false);
                    this.showMessage('alert-danger', 'Lưu yêu cầu giao hàng thất bại');
                });
        }
    }

    /**
     * Prepare lsDetail data before save
     */
    prepareBeforeSave() {
        this.delivery.lsDetail = this.dataSource.data.map(element => {
            return {
                MerchandiseWarehouseId: element.merchandiseWarehouseId,
                WarehouseId: element.warehouseId,
            }
        });
        // this.delivery.CreatedDate = new Date();
        // this.delivery.CreatedUser = this.userId;
        // this.delivery.UserId = this.customerId;
    }

    /**
     * Get merchandise list by merchandise warehouse ids
     * @param mwIds
     */
    getMerchandiseList(mwIds) {
        // this.toggleLoading(true);
        this.merchandiseServices.getLsMerchandiseByMWId(mwIds).toPromise()
            .then((res) => {
                // this.toggleLoading(false);
                if (res.result.success) {
                    this.dataSource.data = res.result.data.lsMerchandiseWarehouse;

                    this.defaultDeliveryAddress = res.result.data.deliveryAddress;
                    this.delivery.ContactName = this.defaultDeliveryAddress.receiver;
                    this.delivery.ContactPhone = this.defaultDeliveryAddress.phone;
                    this.delivery.Description = this.defaultDeliveryAddress.description;
                    this.delivery.Address = this.defaultDeliveryAddress.address;

                    this.dataSource.paginator = this.paginator;
                    this.getSumMissingAmount();
                } else {
                    this.isDisable = true;
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.isDisable = true;
                // this.toggleLoading(false);
                this.showMessage('alert-danger', 'Tải thông tin đơn hàng thất bại');
            });
    }
    /**
     * Get merchandise list by merchandise warehouse ids
     * @param orderId
     */
    getMerchandiseListByOrderId(orderId) {
        // this.toggleLoading(true);
        this.merchandiseServices.getLsMerchandiseInWhByOrderId(orderId).toPromise()
            .then((res) => {
                // this.toggleLoading(false);
                if (res.result.success) {
                    this.dataSource.data = res.result.data;
                    this.dataSource.paginator = this.paginator;
                    this.getSumMissingAmount();
                } else {
                    this.isDisable = true;
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.isDisable = true;
                // this.toggleLoading(false);
                this.showMessage('alert-danger', 'Tải thông tin đơn hàng thất bại');
            });
    }

    /**
     * Ger shipping method
     */
    getDeliveryRequestType() {
        // this.toggleLoading(true);
        this.orderService.getDeliveryRequestType().toPromise()
            .then((res) => {
                // this.toggleLoading(false);
                if (res.result.success) {
                    this.shippingMethod = res.result.data;
                } else {
                    this.isDisable = true;
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                this.isDisable = true;
                // this.toggleLoading(false);
                this.showMessage('alert-danger', 'Tải thông tin phương thức giao hàng thất bại');
            });
    }

    /**
     * Get Sum missing
     */
    getSumMissingAmount() {
        const ids = Array.from(new Set(this.dataSource.data.map(e => e.orderId)));
        this.orderService.sumMissingAmount(ids).toPromise()
            .then((res) => {
                // this.toggleLoading(false);
                if (res.result.success) {
                    this.sumMissingAmount = res.result.data;
                } else {
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                // this.toggleLoading(false);
                this.showMessage('alert-danger', 'Tải thông tin tổng tiền thiếu thất bại');
            });
    }

    /**
     * Get country
     */
    getCountry() {
        this.orderService.getCountry().toPromise()
            .then(async (res) => {
                // this.toggleLoading(false);
                if (res.result.success) {
                    this.area.countryList = res.result.data;
                    this.delivery.Country = this.area.countryList[0].areaId;
                    this.loadProvince(this.delivery.Country);
                } else {
                    this.isDisable = true;
                    this.showMessage('alert-danger', res.result.message);
                }
            })
            .catch(() => {
                // this.toggleLoading(false);
                this.isDisable = true;
                this.showMessage('alert-danger', 'Tải thông tin quốc gia thất bại');
            });
    }

    /**
     * Get area
     * @param parentId - parent id
     * @param targetListName
     * @param loadedTargetListName
     */
    async loadAreaByParentId(parentId, targetListName: string, loadedTargetListName: string) {
        this.area[targetListName] = this.loadedArea[loadedTargetListName].filter(e => +e.parentAreaId === +parentId);
        if (this.area[targetListName].length <= 0) {
            this.toggleLoading(true);
            await this.orderService.getAreaByParent(parentId).toPromise()
                .then((res) => {
                    this.toggleLoading(false);
                    if (res.result.success) {
                        this.area[targetListName] = res.result.data;
                        this.loadedArea[loadedTargetListName] = [...this.loadedArea[loadedTargetListName], ...this.area[targetListName]];
                    } else {
                        this.isDisable = true;
                        this.showMessage('alert-danger', res.result.message);
                    }
                })
                .catch(() => {
                    this.isDisable = true;
                    this.toggleLoading(false);
                    this.showMessage('alert-danger', 'Tải thông tin thành phố, quận huyện thất bại');
                });
        }
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
     * Toggle loading
     * @param isLoading
     */
    toggleLoading(isLoading: boolean) {
        this.loading = isLoading;
        this.dialogRef.disableClose = isLoading;
    }

    /**
     * Load province list by Country
     * @param parentId
     */
    async loadProvince(parentId: any) {
        if (parentId instanceof HTMLSelectElement) {
            parentId = +parentId.value.split(':')[1];
        }
        await this.loadAreaByParentId(parentId, 'provinceList', 'loadedProvinceList');
        this.delivery.City = this.defaultDeliveryAddress.city ? this.defaultDeliveryAddress.city : this.area.provinceList[0].areaId;
        this.loadDistrict(this.delivery.City);
    }

    /**
     * Load District list by Province
     * @param parentId
     */
    async loadDistrict(parentId: any) {
        if (parentId instanceof HTMLSelectElement) {
            parentId = +parentId.value.split(':')[1];
        }
        await this.loadAreaByParentId(parentId, 'districtList', 'loadedDistrictList');
        this.delivery.District = this.defaultDeliveryAddress.district ? this.defaultDeliveryAddress.district : this.area.districtList[0].areaId;
        this.loadWard(this.delivery.District);
    }

    /**
     * Load Ward list by District
     * @param parentId
     */
    async loadWard(parentId: any) {
        if (parentId instanceof HTMLSelectElement) {
            parentId = +parentId.value.split(':')[1];
        }
        await this.loadAreaByParentId(parentId, 'wardList', 'loadedWardList');
        this.delivery.Ward = this.defaultDeliveryAddress.ward ? this.defaultDeliveryAddress.ward : this.area.wardList[0].areaId;
    }

    /**
     * Get default delivery address
     */
    // getDefaultDeliveryAddress() {
    //     this.merchandiseServices.getDeliveryAddressDefault().toPromise()
    //         .then(res => {
    //             if (res.result.success) {
    //                 this.defaultDeliveryAddress = res.result.data;
    //                 this.delivery.ContactName = this.defaultDeliveryAddress.receiver;
    //                 this.delivery.ContactPhone = this.defaultDeliveryAddress.phone;
    //                 this.delivery.Description = this.defaultDeliveryAddress.description;
    //                 this.delivery.Address = this.defaultDeliveryAddress.address;
    //             }
    //         });
    // }
}
