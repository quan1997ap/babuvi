import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiApplication, paging } from 'app/config/app.config';
import { ApiService } from './common/api.service';
import { User } from '../model/user.model';

@Injectable()
export class UserService extends ApiService {

    constructor(http: HttpService, _router: Router ) { 
        super(ApiApplication.user.controller, http, _router);
    }
   GetListWarehouseVN() {
        return this.get(ApiApplication.system.controller + "/" + ApiApplication.system.getWarehouseVN);
    }

    AddNewCustommer(data: User) {
        return this.post(this.apiBaseController + ApiApplication.user.regUserCustomer, data);
    }

    GetUsersById(userId: number){
        return this.get(this.apiBaseController + ApiApplication.user.getUserById + '?userid=' + userId);
    }

    changePass(data:any){
        return this.put(this.apiBaseController + ApiApplication.user.changePass,data);
    }
}
