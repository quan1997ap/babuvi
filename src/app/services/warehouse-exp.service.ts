import {ApiApplication} from '../config/app.config';
import {ApiService} from './common/api.service';
import {HttpService} from './common/http.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class WarehouseExpService  extends ApiService {
    constructor(http: HttpService, _router: Router) {
        super(ApiApplication.warehouse.controller, http, _router);
    }

    createWarehouseExpByDeliveryRequest(body) {
        return this.post(this.apiBaseController + ApiApplication.warehouse.createWarehouseExpByDeliveryRequest, body);
    }

    cancelWarehouseExp(body) {
        return this.post(this.apiBaseController + ApiApplication.warehouse.cancelWarehouseExp, body);
    }
}
