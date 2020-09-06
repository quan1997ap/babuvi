import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from './common/http.service';
import {ApiApplication} from 'app/config/app.config';
import {ApiService} from './common/api.service';
import {Merchandise} from '../model/merchandise.model';
import {DeliveryRequest} from '../model/body/delivery-request.model';

@Injectable()
export class MerchandiseServices extends ApiService {
    constructor(http: HttpService, _router: Router) {
        super(ApiApplication.merchandise.controller, http, _router);
    }

    getMerchandiseViewModel(orderCode: string, perPage, page) {
        const param = '?orderCode=' + orderCode + '&perPage=' + perPage + '&page=' + page;
        return this.get(this.apiBaseController + ApiApplication.merchandise.getMerchandiseViewModel + param);
    }

    getStatus() {
        return this.get(ApiApplication.system.controller + '/' + ApiApplication.system.getOrderStatus);
    }

    saveMerchandise(data: Merchandise) {
        return this.post(this.apiBaseController + ApiApplication.merchandise.addMerchandise, data);
    }

    deleteMerchandise(merchandiseIds: number[]) {
        const body = {
            lsId: merchandiseIds,
        }
        return this.delete(this.apiBaseController + ApiApplication.merchandise.deleteMerchandise, body);
    }

    getMerchandiseHistory(merchandiseId: number, perPage, page) {
        const param = '?merchandiseId=' + merchandiseId + '&perPage=' + perPage + '&page=' + page;
        return this.get(this.apiBaseController + ApiApplication.merchandise.getMerchandiseHistory +  param);
    }

    completeMerchandise(orderCode) {
        return this.put(ApiApplication.order.controller + '/' + ApiApplication.order.completeAddMerchandise + orderCode);
    }

    countSumMerchandiseInWarehouse(userId: number) {
        return this.get(this.apiBaseController + ApiApplication.merchandise.countSumMerchandiseInWarehouse + '?userId=' + userId);
    }

    getMerchandiseInWarehouse(userId, page, perPage) {
        const param = '?userId=' + userId + '&perPage=' + perPage + '&page=' + page;
        return this.get(this.apiBaseController + ApiApplication.merchandise.getMerchandiseInWarehouse + param);
    }

    getLsMerchandiseByMWId(mwIds) {
        const body = {
            lsId : mwIds,
        };
        return this.post(this.apiBaseController + ApiApplication.merchandise.getLsMerchandiseByMWId, body);
    }

    addDeliveryRequest(body: DeliveryRequest) {
        return this.post(this.apiBaseController + ApiApplication.merchandise.addDeliveryRequest, body);
    }

    getDeliveryRequestByCode(code) {
        const param = '?deliveryRequestCode=' + code;
        return this.get(this.apiBaseController + ApiApplication.merchandise.getDeliveryRequestByCode + param);
    }

    createPackage(body) {
        return this.post(this.apiBaseController + ApiApplication.merchandise.createPackage, body);
    }

    sendDelivery(body) {
        return this.post(this.apiBaseController + ApiApplication.merchandise.sendDelivery, body);
    }

    cancelDelivery(body) {
        return this.post(this.apiBaseController + ApiApplication.merchandise.cancelDelivery, body);
    }

    getDeliveryAddressDefault() {
        return this.get(this.apiBaseController + ApiApplication.merchandise.getDeliveryAddressDefault);
    }

    getLsMerchandiseInWhByOrderId(orderId) {
        const param = '?orderId=' + orderId;
        return this.get(this.apiBaseController + ApiApplication.merchandise.getLsMerchandiseInWhByOrderId + param);
    }

    getDeliveryRequestType(){
        return this.get(ApiApplication.system.controller + '/' + ApiApplication.system.getDeliveryRequestType);
    }
    getDeliveryRequestStatus(){
        return this.get(ApiApplication.system.controller + '/getDeliveryRequestStatus');
    }
    searchListDeliveryRequest(page:any,perPage:any,datasearch:any){
        return this.post(this.apiBaseController + `searchListDeliveryRequest/?page=${page}&perPage=${perPage}`,datasearch)
    }
    deleteLsDeliveryRequest(deleteIds:any){
        return this.put(this.apiBaseController + "deleteLsDeliveryRequest/", deleteIds);
    }

    searchMerchandise(page:number,perPage:number,data){
        return this.post(this.apiBaseController + `searchMerchandise?perPage=${perPage}&page=${page}`,data)
    }
}
