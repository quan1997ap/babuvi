import { ApDomainType } from 'app/config/app.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiApplication, paging } from 'app/config/app.config';
import { ApiService } from './common/api.service';

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
}

