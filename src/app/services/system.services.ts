import { ApDomainType } from 'app/config/app.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiApplication, paging } from 'app/config/app.config';
import { ApiService } from './common/api.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class SystemService extends ApiService {
    constructor(http: HttpService, _router: Router ) { 
        super(ApiApplication.system.controller, http, _router);
    }

    GetPaymentStatus() {
        return this.get(this.apiBaseController + ApiApplication.system.getPaymentStatus);
    }

    getType() {
        return this.get(this.apiBaseController + ApiApplication.system.getWalletTransactionsType);
    }

    GetReceiptType(){
        return this.get(this.apiBaseController + ApiApplication.system.getReceiptType)
    }

    GetReasion(){
        return this.get(this.apiBaseController + ApiApplication.system.getReasion)
    }

    GetPaymentType(){
        return this.get(this.apiBaseController + ApiApplication.system.getPaymentType)
    }

    GetReceiptStatus(){
        return this.get(this.apiBaseController + ApiApplication.system.getReceiptStatus)
    }

    getOrderStatus(){
        return this.get(this.apiBaseController + ApiApplication.system.getOrderStatus)
    }

    getComplainStatus() {
        return this.get(this.apiBaseController + ApiApplication.system.getComplainStatus).pipe(map((res: any) => {
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

    getComplainTypes() {
        return this.get(this.apiBaseController + ApiApplication.system.getComplainType).pipe(map((res: any) => {
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
}

