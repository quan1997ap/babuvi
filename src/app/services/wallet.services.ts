import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiApplication, paging } from 'app/config/app.config';
import { ApiService } from './common/api.service';
import { Topup } from '../model/topup.model';
import { searchTransactionModel } from 'app/model/search-transaction.model';

@Injectable()
export class WalletService extends ApiService {

    constructor(http: HttpService, _router: Router ) { 
        super(ApiApplication.wallet.controller, http, _router);
    }

    getWalletTransaction(perPage: number, page: number, search: searchTransactionModel) {
        return this.post(ApiApplication.wallet.controller + ApiApplication.wallet.searchWalletTransaction
        + "?" + ApiApplication.lstUserItem.perPage + "=" + perPage
        + "&" + ApiApplication.lstUserItem.page + "=" + page, search);
    }

    GetListWalletByUser(userId: number){
        return this.get(ApiApplication.wallet.controller + ApiApplication.wallet.getWalletByUserId + '?userid=' + userId);
    }
    GetTopupCodeByUser(userId: number) {
        return this.get(ApiApplication.wallet.controller + ApiApplication.wallet.getTopupCode + '?userid=' + userId);
    }

    SaveTopup(data: Topup) {
        return this.post(this.apiBaseController + ApiApplication.wallet.Topup, data);
    }
}
