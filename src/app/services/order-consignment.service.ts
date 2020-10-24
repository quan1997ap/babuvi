import { ApiBaseUrl, ApiApplication, paging } from './../config/app.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiService } from './common/api.service';
import { User } from '../model/user.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class OrderConsignmentService extends ApiService {

    constructor(http: HttpService, _router: Router) {
        super(ApiApplication.user.controller, http, _router);
    }

    getListConsignmentWarehouse() {
        // kho kí gửi
        return this.get(ApiBaseUrl + '/system/getConsignmentWarehouse').pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }


    getgetWarehouseVN() {
        // kho nhận hàng
        return this.get(ApiBaseUrl + '/system/getWarehouseVN').pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    getLsServiceConsignment() {
        // danh sách dịch vụ
        return this.get(ApiApplication.cart.controller + '/getLsServiceConsignment').pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    getListClassification() {
        // danh sách thông tin khai báo
        return this.get(ApiApplication.cart.controller + '/getListClassification').pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    getShippingType() {
        // danh sách thông tin khai báo
        return this.get(ApiBaseUrl + '/system/getShippingType').pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    getListDeliveryAddressByUserId(userId) {
        // danh sách địa chỉ nhận hàng
        return this.get(ApiApplication.cart.controller + '/getListDeliveryAddressByUserId/?userId=' + userId).pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    addDeliveryAddress(params) {
        // lưu địa chỉ nhận hàng
        return this.post(ApiApplication.cart.controller + 'ddDeliveryAddress', params).pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    deactiveDeliveryAddressById(deliveryAddressId) {
        // lưu địa chỉ nhận hàng
        const url = ApiApplication.cart.controller + 'deactiveDeliveryAddressById/?deliveryAddressId' + deliveryAddressId;
        return this.post(url, deliveryAddressId).pipe(map((res: any) => {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            } else {
                return throwError('cant get');
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    addOrderConsignment(addOrderConsignment) {
        return this.post(ApiApplication.order.controller + '/addOrderConsignment', addOrderConsignment);
    }
}
