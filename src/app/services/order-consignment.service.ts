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

    

    addOrderConsignment(addOrderConsignment) {
        return this.post(ApiApplication.order.controller + '/addOrderConsignment', addOrderConsignment);
    }
}
