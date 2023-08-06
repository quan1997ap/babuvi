import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from './common/http.service';
import {ApiApplication} from 'app/config/app.config';
import {ApiService} from './common/api.service';

@Injectable()
export class FileManagerServices extends ApiService {
    constructor(http: HttpService, _router: Router) {
        super(ApiApplication.fileManager.controller, http, _router);
    }

    uploadImg(data:any){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.upLoadImageOneDrive,data)
    }

    uploadFile(data:any){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.upLoadAttachFileOneDrive,data)
    }
    
    refreshImageAttachFile(data:any[]){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.refreshImageAttachFile, data)
    }

    refreshImageByOrderId(orderId:number){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.refreshImageByOrderId + `?orderId=${orderId}`)
    }

    refreshImageByCartId(CartId:number){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.refreshImageByCartId + `?cartId=${CartId}`)
    }

    refreshImageByDeliveryCode(deliveryCode:string){
        return this.postNoConvert(this.apiBaseController + ApiApplication.fileManager.refreshImageByDeliveryCode + `?deliveryCode=${deliveryCode}`)
    }
}