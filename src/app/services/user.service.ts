import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './common/http.service';
import { ApiApplication, paging } from 'app/config/app.config';
import { ApiService } from './common/api.service';
import { User } from '../model/user.model';

// rxjs
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class UserService extends ApiService {

    constructor(http: HttpService, _router: Router ) { 
        super(ApiApplication.user.controller, http, _router);
    }

    getListStorekeeperInWarehouse(warehouseId) {
        const param = '?warehouseId=' + warehouseId;
        return this.get(this.apiBaseController + ApiApplication.user.getListStorekeeperInWarehouse + param);
    }

   GetListWarehouseVN() {
        return this.get(ApiApplication.system.controller + "/" + ApiApplication.system.getWarehouseVN);
    }

    addOrUpdateUserCustomer(customerInfor: User) {
        return this.put(this.apiBaseController + ApiApplication.user.addOrUpdateUserCustomer, customerInfor);
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

    searchUser(name:string){
        return this.get(this.apiBaseController + `searchUser?textSearch=${name}`)
    }

    getInfoUser() {
        return this.get(this.apiBaseController + ApiApplication.user.getInfoUser);
    }

    getInfoUserById(userId: number) {
        return this.get(this.apiBaseController + ApiApplication.user.getInfoUserById + '?userid=' + userId);
    }

    SearchUserCustomer(page:number, perPage:number,data:any) {
        return this.post(this.apiBaseController + ApiApplication.user.SearchUserCustomer + `?perPage=${perPage}&page=${page}`,data);
    }

    getListUserStaff() {
        return this.get(this.apiBaseController + ApiApplication.user.getListUserStaff);
    }

    comfirmFollowZalo(userPhone: string) {
        return this.put(this.apiBaseController + ApiApplication.user.comfirmFollowZalo + '?userPhone=' + userPhone);
    }

    checkConnectedZalo() {
        return this.get(this.apiBaseController + ApiApplication.user.CheckConnectedZalo);
    }

    getUserStaffs() {
        return this.get(this.apiBaseController + ApiApplication.user.getListUserStaff).pipe(map((res: any) => {
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
