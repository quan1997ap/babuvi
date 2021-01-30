import { ApiBaseUrl } from "./../config/app.config";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./common/http.service";
import { ApiApplication, paging } from "app/config/app.config";
import { ApiService } from "./common/api.service";

@Injectable()
export class PaymentService extends ApiService {
  constructor(http: HttpService, _router: Router) {
    super(ApiApplication.shipManager.controller, http, _router);
  }

  searchPaymentRequest(pageIndex, pageSize) {
    // /Merchandise/searchPaymentRequest?page=1&perPage=1
    return this.get(
      ApiApplication.merchandise.controller +
        ApiApplication.merchandise.searchPaymentRequest +
        `?page=${pageIndex}&perPage=${pageSize}`
    );
  }

  getPaymentRequestType() {
    return this.get(
      ApiApplication.system.controller +
        ApiApplication.system.getPaymentRequestType
    );
  }

  getPaymentRequestStatus() {
    return this.get(
      ApiApplication.system.controller +
        ApiApplication.system.getPaymentRequestStatus
    );
  }

  // add
  addPaymentRequest(paymentRequest) {
    return this.post( ApiBaseUrl + `paymentRequest/addPaymentRequest`, paymentRequest);
  }

  paymentRequestFee() {
    return this.post();
  }

  deletePaymentRequest(paymentRequestId) {
    return this.delete(
      ApiBaseUrl +
        `paymentRequest/deletePaymentRequest?paymentRequestId=${paymentRequestId}`
    );
  }
}
