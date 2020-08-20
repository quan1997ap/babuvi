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
    GetPaymentType() {
        return this.get(ApiApplication.system.controller + "/" + ApiApplication.system.getPaymentType);
    }

    GetPaymentStatus() {
        return this.get(ApiApplication.system.controller + "/" + ApiApplication.system.getPaymentStatus);
    }

    getType() {
        return this.get(ApiApplication.system.controller + ApiApplication.system.getWalletTransactionsType);
    }
}

