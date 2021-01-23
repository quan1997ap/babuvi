(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ship-manager-ship-manager-module"],{

/***/ "./node_modules/primeng/calendar.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./src/app/services/order-detail.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/order-detail.service.ts ***!
  \**************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderDetailService = /** @class */ (function (_super) {
    __extends(OrderDetailService, _super);
    function OrderDetailService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].ODER_DETAIL.get, http, _router) || this;
    }
    OrderDetailService.prototype.getOrderDetail = function (id) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].ODER_DETAIL.get + id);
    };
    OrderDetailService.prototype.postChat = function (chatDTO) {
        return this.post(app_config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].ODER_DETAIL.chat, chatDTO);
    };
    OrderDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrderDetailService);
    return OrderDetailService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));



/***/ }),

/***/ "./src/app/services/ship-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/ship-manager.service.ts ***!
  \**************************************************/
/*! exports provided: ShipManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipManagerService", function() { return ShipManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShipManagerService = /** @class */ (function (_super) {
    __extends(ShipManagerService, _super);
    function ShipManagerService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].shipManager.controller, http, _router) || this;
    }
    // getAllOrders(userId: number, page: number) {
    //     return this.get(this.apiBaseController
    //         + ApiApplication.shipManager.allOrder + '?'
    //         + ApiApplication.userId + '= '+userId + '&'
    //         + ApiApplication.perPage +'= ' + 10 + '&'
    //         + ApiApplication.page + '= ' + page);
    // }
    ShipManagerService.prototype.cancelOrder = function (orderId) {
        return this.put(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].shipManager.cancelOrder
            + '?orderId=' + orderId);
    };
    //API danh sách đơn hàng quản lý
    ShipManagerService.prototype.getListOrdersManager = function (data, page, perPage) {
        return this.post(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].shipManager.searchOrderManager + ("?perPage=" + perPage + "&page=" + page), data);
    };
    //API danh sách đơn hàng
    ShipManagerService.prototype.getListOrders = function (data, page, perPage) {
        return this.post(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].shipManager.searchOrder + ("?perPage=" + perPage + "&page=" + page), data);
    };
    //API danh sách đơn kí gửi
    ShipManagerService.prototype.getConsignmentOrders = function (data, page, perPage) {
        return this.post(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].shipManager.searchOrderConsignment + ("?perPage=" + perPage + "&page=" + page), data);
    };
    ShipManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShipManagerService);
    return ShipManagerService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ }),

/***/ "./src/app/ship-manager/consignment-orders/consignment-orders.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/ship-manager/consignment-orders/consignment-orders.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w100\">\r\n    <p-messages [(value)]=\"msgs\"(click)=\"clear()\"></p-messages>\r\n </div>\r\n <div>\r\n   <form #formFilter=\"ngForm\">\r\n      <input type=\"text\" pInputText class=\"dkloc\" ngModel name=\"OrderCode\" placeholder=\"Mã đơn hàng\">\r\n      <input type=\"text\" pInputText class=\"dkloc\" ngModel name=\"ShopName\" placeholder=\"Tên shop\">\r\n      <span class=\"dklocngay\">\r\n         <p-calendar [(ngModel)]=\"StartDate\" name=\"StartDate\" ngModel placeholder=\"Từ ngày\"\r\n            [style]=\"{'width':'100%'}\" dateFormat=\"dd/mm/yy\" [inputStyle]=\"{'width':'100%'}\"\r\n            [showButtonBar]=\"true\"></p-calendar>\r\n      </span>\r\n      <span class=\"dklocngay\">\r\n         <p-calendar [(ngModel)]=\"EndDate\" name=\"EndDate\" ngModel placeholder=\"Đến ngày\"\r\n            [style]=\"{'width':'100%'}\" dateFormat=\"dd/mm/yy\" [inputStyle]=\"{'width':'100%'}\"\r\n            [showButtonBar]=\"true\"></p-calendar>\r\n      </span>\r\n      <p-button icon=\"fa fa-search\" label=\"Lọc\" class=\"btnSearch\" (click)=\"FuncLoc(formFilter)\"></p-button>\r\n      <p-button icon=\"fa fa-refresh\" label=\"Làm lại\" class=\"btnSearch\" (click)=\"ResetForm(formFilter)\"></p-button>\r\n   </form>\r\n </div>\r\n <div>\r\n   <div class=\"hideInPC hideInPad\" style=\"margin-bottom:15px;\">\r\n        <p-dropdown [options]=\"listBtn\" [(ngModel)]=\"dropdownStatus\" optionLabel=\"statusDisplayMobile\" [style]=\"{'width':'100%'}\"\r\n        (onChange)=\"changeFilter()\" [autoDisplayFirst]=\"true\"></p-dropdown>\r\n   </div>\r\n   <div class=\"hideInMB\">\r\n        <button *ngFor=\"let bton of listBtn\"  [class]=\"currentStatus == bton.status?'btnChoose':'btnFilter'\" \r\n            (click)=\"filter(bton)\">\r\n            {{bton.statusDisplay}} <span [class]=\"bton.count==0?'':'btonCount'\">{{bton.count==0?'':bton.count}}</span>\r\n        </button>\r\n    </div>\r\n </div>\r\n <div style=\"padding-top:15px;padding-bottom:15px;margin-top:12px;font-size:14px;background-color: rgba(224, 224, 224, 0.8);\">\r\n     <span class=\"boldGray\">Số đơn hàng:</span><span class=\"boldOrange\">{{dataItem.dataCount| currencyFormat}}</span> |\r\n     <span class=\"boldGray\">Tổng giá trị đơn:</span><span class=\"boldOrange\">{{dataItem.totalAmount| currencyFormat}}</span> |\r\n     <span class=\"boldGray\">Tổng số tiền còn thiếu:</span><span class=\"boldOrange\">{{dataItem.totalMissing| currencyFormat}}</span>\r\n </div>\r\n <table class=\"w100 tg\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"tg-0pky w45 txt-alignCen\">\r\n                Thông tin đơn hàng\r\n            </th>\r\n            <th *ngIf=\"detectWidthLayout\" class=\"tg-0lax w35 txt-alignCen\">\r\n                Thông tin tài chính\r\n            </th>\r\n            <th *ngIf=\"detectWidthLayout\" class=\"tg-0lax w20 txt-alignCen\">\r\n                Thao tác\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <ng-container *ngFor=\"let item of _shipOrders; let inx = index;\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"tg-0lax\">\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline tung w80\">\r\n                            <div class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10 cur-point cor2b\">\r\n                                    <span (click)=\"redirect(item)\">{{item.orderCode}}</span>\r\n                                </div>\r\n                                <div class=\"content-inline w60\" >\r\n                                    <span style=\"padding: 5px 5px; border-radius: 4px;\" [ngClass]=\" item.status === '14' ?'bgF44335 corffffff':'bg2b corffffff'\">\r\n                                        {{item.statusDisplay}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <!-- kho ký gửi  -->\r\n                            <div class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Kho ký gửi:\r\n                                </div>\r\n                                <div class=\"content-inline w60\">\r\n                                        {{item.warehouseStartedName}}\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <!-- kho nhận  -->\r\n                            <div class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Kho nhận:\r\n                                </div>\r\n                                <div class=\"content-inline w60\">\r\n                                    {{item.warehouseEndName}}\r\n                                </div>\r\n                            </div>\r\n \r\n                               <!-- Cân nặng  -->\r\n                               <div class=\"w100 dp-inBlock\">\r\n                                 <div class=\"content-inline w40 pad-l10\">\r\n                                     Cân nặng:\r\n                                 </div>\r\n                                 <div class=\"content-inline w60\">\r\n                                     {{item.paymentWeight}} kg\r\n                                 </div>\r\n                             </div>\r\n \r\n                                <!-- Giá trị  -->\r\n                            <div class=\"w100 dp-inBlock\">\r\n                             <div class=\"content-inline w40 pad-l10\">\r\n                                 Giá trị:\r\n                             </div>\r\n                             <div class=\"content-inline w60\">\r\n                                 {{item.totalPrice| currencyFormat }} đ\r\n                             </div>\r\n                         </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Tổng giá trị đơn\r\n                                </div>\r\n                                <div class=\"content-inline w60 fw-7 corF44335\">\r\n                                    {{item.amount| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Đã thanh toán\r\n                                </div>\r\n                                <div class=\"content-inline w60 corOF fw-7\">\r\n                                    {{item.paid| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Còn thiếu\r\n                                </div>\r\n                                <div class=\"content-inline w60 fw-7 corF44335\">\r\n                                    {{item.missing| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n \r\n                    <div *ngIf=\"!detectWidthLayout\" class=\"w100 ver-align-mid tung\">\r\n                            <div class=\"content-inline bor txt-alignCen bor-ra3 bgf4 cor8D pb5 pt5 cur-point pad-l10 pad-r10 mar-l10\" (click)=\"redirect(item)\">\r\n                                Chi tiết\r\n                            </div>\r\n                            <div class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bg2b corffffff pad-l10 pad-r10 mar-l10\"\r\n                                *ngIf=\"item.paymentStatus === '1' && item.status !== '14'\"\r\n                                (click)=\"paymentOrders(item.orderId)\">\r\n                                Thanh toán\r\n                            </div>\r\n                            \r\n                            <div *ngIf=\"item.status === '10' && item.status !== '14'\"\r\n                                    class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bg2b corffffff pad-l10 pad-r10 mar-l10\">\r\n                                Yêu cầu giao hàng\r\n                            </div>\r\n                            \r\n                            <div  *ngIf=\"item.status === '2' || item.status === '1' && item.status !== '14'\"\r\n                                    class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bgF44335 corffffff pad-l10 pad-r10 mar-l10\"\r\n                                    (click)=\"cancelOrder(item, inx)\">\r\n                                Hủy\r\n                            </div>\r\n                    </div>\r\n                </td>\r\n                <td *ngIf=\"detectWidthLayout\" class=\"tg-0lax\">\r\n                    <div *ngFor=\"let itemServices of item.lsService; let inx = index;\">\r\n                        <div class=\"w100 dp-inBlock\">\r\n                            <div class=\"content-inline w60 txt-alignRight\">\r\n                                {{itemServices.display}}\r\n                            </div>\r\n                            <div class=\"content-inline w30 txt-alignRight fw-7\">\r\n                                {{itemServices.amount| currencyFormat }} đ\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w60 txt-alignRight\">\r\n                            Tổng giá trị đơn\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7 corF44335\">\r\n                            {{item.amount| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock bor-top pt5\">\r\n                        <div class=\"content-inline w60 txt-alignRight\">\r\n                            Đã thanh toán\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight corOF fw-7\">\r\n                            {{item.paid| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock pt5\" *ngIf=\"item.status === '14'\">\r\n                        <div class=\"content-inline w60 txt-alignRight\">\r\n                            Babuvi trả lại\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight corOF fw-7\">\r\n                            {{item.refundAmount| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w60 txt-alignRight\">\r\n                            Còn thiếu\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7 corF44335\">\r\n                            {{item.missing| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n \r\n                </td>\r\n                <td *ngIf=\"detectWidthLayout\" class=\"tg-0lax ver-align-mid\">\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 bgf4 cor8D pb5 pt5 cur-point\" (click)=\"redirect(item)\">\r\n                            Chi tiết\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.paymentStatus === '1' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bg2b corffffff\"\r\n                        (click)=\"paymentOrders(item.orderId)\">\r\n                            Thanh toán\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.status === '10' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bg2b corffffff\">\r\n                            Yêu cầu giao hàng\r\n                        </div>\r\n                    </div>\r\n \r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.status === '2' || item.status === '1' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bgF44335 corffffff\" (click)=\"cancelOrder(item, inx)\">\r\n                            Hủy\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </ng-container>\r\n </table>\r\n <div style=\"text-align:center;\">\r\n     <button (click)=\"selectPage('f')\" [disabled]=\"numbPage==1?true:false\" class=\"paginator\">\r\n        <i class=\"fa fa-step-backward\"></i>\r\n     </button>\r\n     <button (click)=\"selectPage('p')\" [disabled]=\"numbPage==1?true:false\" class=\"paginator\">\r\n        <i class=\"fa fa-caret-left\"></i>\r\n     </button>\r\n     <button *ngFor=\"let page of pages\" type=\"button\" tabindex=\"-1\" class=\"\" (click)=\"selectPage(page)\"\r\n        [class]=\"numbPage - page === 0 ?'pageActive paginator':'selectpage paginator'\">{{ page }}</button>\r\n     <button (click)=\"selectPage('n')\" [disabled]=\"numbPage==maxPage?true:false\" class=\"paginator\">\r\n        <i class=\"fa fa-caret-right\"></i>\r\n     </button>\r\n     <button (click)=\"selectPage('l')\" [disabled]=\"numbPage==maxPage?true:false\" class=\"paginator\">\r\n        <i class=\"fa fa-step-forward\"></i>\r\n     </button>\r\n  </div>\r\n <!-- <mat-paginator #paginator showFirstLastButtons [length]=\"dataCount\" [hidePageSize]=\"true\" [pageSize]=\"5\" (page)=\"pageEvent($event)\" [pageSizeOptions]=\"[pageSize]\"></mat-paginator> -->\r\n <p-dialog [showHeader]=\"false\" [modal]=\"true\" [(visible)]=\"isOpenLargeImg\" appendTo=\"body\" [dismissableMask]=\"true\">\r\n   <img [src]=\"linkImg\" style=\"text-align: center;\" style=\"width:100%;min-width: 300px;\">\r\n </p-dialog>"

/***/ }),

/***/ "./src/app/ship-manager/consignment-orders/consignment-orders.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ship-manager/consignment-orders/consignment-orders.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ship-orders {\n  width: 100% !important; }\n  .ship-orders mat-footer-row, .ship-orders mat-header-row, .ship-orders mat-row {\n    align-items: normal !important; }\n  .ship-orders .info {\n    width: 100% !important; }\n  .ship-orders .info .img, .ship-orders .info .title, .ship-orders .info .action {\n      width: 100% !important; }\n  .ship-orders .info .title, .ship-orders .info .action {\n      text-align: left; }\n  .ship-orders .info .id {\n      color: green;\n      font-weight: bold; }\n  .ship-orders .content-amount {\n    width: 100% !important; }\n  .ship-orders .content-amount .action {\n      text-align: left; }\n  .ship-orders .content-amount .action, .ship-orders .content-amount .title {\n      width: 100% !important; }\n  .ship-orders .content-amount .title {\n      text-align: end;\n      padding-right: 20px; }\n  .ship-orders .content-amount .action {\n      text-align: left; }\n  .mat-header-cell:first-child,\n.mat-cell:first-child {\n  flex: 35% !important;\n  height: 100% !important; }\n  .mat-header-cell:nth-child(2),\n.mat-cell:nth-child(2) {\n  flex: 35% !important; }\n  .mat-header-cell:last-child,\n.mat-cell:last-child {\n  flex: 10% !important; }\n  /deep/ .spinner-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n  /deep/ .spinner-wrapper .spinner-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    padding: 0 !important; }\n  .w100p {\n  width: 100px !important; }\n  .btnFilter {\n  border-radius: 5px;\n  outline: none;\n  margin: 5px;\n  display: inline-block;\n  padding: 5px 10px 5px 10px;\n  background-color: white;\n  color: #424242;\n  border: gray solid 1px;\n  font-size: 13px; }\n  .btnFilter .btonCount {\n    border-radius: 50%;\n    background-color: #525252;\n    color: white;\n    font-weight: bold;\n    display: inline-block;\n    width: 20px; }\n  .btnFilter .btonCount:hover {\n    opacity: 0.85; }\n  .btnChoose {\n  border-radius: 5px;\n  outline: none;\n  margin: 5px;\n  font-size: 13px;\n  display: inline-block;\n  padding: 5px 10px 5px 10px;\n  background-color: #00a5b1;\n  color: white;\n  border: #00a5b1; }\n  .btnChoose .btonCount {\n    border-radius: 50%;\n    background-color: white;\n    color: #424242;\n    font-weight: bold;\n    display: inline-block;\n    width: 20px; }\n  @media screen and (max-width: 740px) {\n  .dkloc {\n    width: 100%;\n    margin-bottom: 10px; }\n  .dklocngay {\n    width: 100%;\n    display: inline-block;\n    margin-bottom: 10px; }\n  .btnSearch {\n    margin-bottom: 010px;\n    width: 49%;\n    margin-right: 1%;\n    display: inline-block; }\n  :host::ng-deep .ui-button {\n    width: 100%; }\n  .hideInMB {\n    display: none; } }\n  @media screen and (min-width: 740px) and (max-width: 820px) {\n  .hideInPad {\n    display: none; }\n  .dkloc {\n    width: 25%;\n    margin-right: 1%;\n    display: inline-block; }\n  .dklocngay {\n    width: 20%;\n    margin-right: 1%;\n    display: inline-block; }\n  .btnSearch {\n    margin: 20px 20px 5px 20px;\n    display: inline-block; } }\n  @media screen and (min-width: 820px) {\n  .dkloc {\n    width: 20%;\n    margin-right: 1%;\n    display: inline-block; }\n  .dklocngay {\n    width: 15%;\n    margin-right: 1%;\n    display: inline-block; }\n  .btnSearch {\n    margin-right: 1%; }\n  .hideInPC {\n    display: none; } }\n  .boldGray {\n  font-weight: bold;\n  color: #646464;\n  padding-right: 5px; }\n  .boldOrange {\n  font-weight: bold;\n  color: rgba(228, 89, 38, 0.945); }\n  .paginator {\n  outline: none;\n  border: none;\n  color: black;\n  padding: 3px 10px 3px 10px;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15x; }\n  .pageActive {\n  outline: none;\n  border: none;\n  color: white;\n  padding: 3px 10px 3px 10px;\n  font-weight: bold;\n  border-radius: 4px;\n  background-color: rgba(228, 89, 38, 0.945);\n  font-size: 15x; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcC1tYW5hZ2VyL2NvbnNpZ25tZW50LW9yZGVycy9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcc2hpcC1tYW5hZ2VyXFxjb25zaWdubWVudC1vcmRlcnNcXGNvbnNpZ25tZW50LW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFzQixFQWlDdkI7RUFsQ0g7SUFHTSwrQkFBOEIsRUFDL0I7RUFKTDtJQU1NLHVCQUFzQixFQVd2QjtFQWpCTDtNQVFRLHVCQUFzQixFQUN2QjtFQVRQO01BV1EsaUJBQWdCLEVBQ2pCO0VBWlA7TUFjUSxhQUFZO01BQ1osa0JBQWlCLEVBQ2xCO0VBaEJQO0lBbUJNLHVCQUFzQixFQWN2QjtFQWpDTDtNQXFCUSxpQkFBZ0IsRUFDakI7RUF0QlA7TUF3QlEsdUJBQXNCLEVBQ3ZCO0VBekJQO01BMkJRLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3BCO0VBN0JQO01BK0JRLGlCQUFnQixFQUNqQjtFQUlMOztFQUVFLHFCQUFvQjtFQUNwQix3QkFBdUIsRUFDeEI7RUFDRDs7RUFFRSxxQkFBb0IsRUFDckI7RUFDRDs7RUFFRSxxQkFBb0IsRUFDckI7RUFDRDtFQUNFLHFDQUFtQztFQUNuQyxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVUsRUFTWDtFQWhCRDtJQVVJLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsVUFBUztJQUNULHNCQUFxQixFQUV0QjtFQUdIO0VBQ0Usd0JBQXVCLEVBQ3hCO0VBRUQ7RUFDRyxtQkFBaUI7RUFDakIsY0FBWTtFQUNaLFlBQVU7RUFDVixzQkFBb0I7RUFDcEIsMkJBQTBCO0VBQzFCLHdCQUFzQjtFQUN0QixlQUFxQjtFQUNyQix1QkFBcUI7RUFDckIsZ0JBQWUsRUFZakI7RUFyQkQ7SUFXTSxtQkFBa0I7SUFDbEIsMEJBQWlDO0lBQ2pDLGFBQVc7SUFDWCxrQkFBaUI7SUFDakIsc0JBQW9CO0lBQ3BCLFlBQVUsRUFDWjtFQWpCSjtJQW1CTSxjQUFhLEVBQ2Y7RUFFSjtFQUNHLG1CQUFpQjtFQUNqQixjQUFZO0VBQ1osWUFBVTtFQUNWLGdCQUFlO0VBQ2Ysc0JBQW9CO0VBQ3BCLDJCQUEwQjtFQUMxQiwwQkFBa0M7RUFDbEMsYUFBVztFQUNYLGdCQUF3QixFQVMxQjtFQWxCRDtJQVdNLG1CQUFrQjtJQUNsQix3QkFBdUI7SUFDdkIsZUFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLHNCQUFxQjtJQUNyQixZQUFVLEVBQ1o7RUFJSjtFQUNFO0lBQ0UsWUFBVTtJQUNWLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0UsWUFBVTtJQUNWLHNCQUFvQjtJQUNwQixvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLHFCQUFvQjtJQUNwQixXQUFTO0lBQ1QsaUJBQWU7SUFDZixzQkFDRixFQUFDO0VBQ0Q7SUFDRSxZQUFVLEVBQ1g7RUFDRDtJQUNFLGNBQVksRUFDYixFQUFBO0VBRUg7RUFDRTtJQUNFLGNBQVksRUFDYjtFQUNEO0lBQ0UsV0FBUztJQUNULGlCQUFnQjtJQUNoQixzQkFDRixFQUFDO0VBQ0Q7SUFDRSxXQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLHNCQUFvQixFQUNyQjtFQUNEO0lBQ0UsMkJBQTBCO0lBQzFCLHNCQUNGLEVBQUMsRUFBQTtFQUVIO0VBQ0U7SUFDRSxXQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLHNCQUNGLEVBQUM7RUFDRDtJQUNFLFdBQVM7SUFDVCxpQkFBZ0I7SUFDaEIsc0JBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxpQkFBZSxFQUNoQjtFQUNEO0lBQ0UsY0FBWSxFQUNiLEVBQUE7RUFHSDtFQUNDLGtCQUFpQjtFQUNqQixlQUF3QjtFQUN4QixtQkFBa0IsRUFDbkI7RUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQ0FBK0IsRUFDaEM7RUFDRDtFQUNFLGNBQVk7RUFDWixhQUFXO0VBQ1gsYUFBWTtFQUNaLDJCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGVBQWEsRUFDZDtFQUNEO0VBQ0UsY0FBWTtFQUNaLGFBQVc7RUFDWCxhQUFZO0VBQ1osMkJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsMkNBQTBDO0VBQzFDLGVBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3NoaXAtbWFuYWdlci9jb25zaWdubWVudC1vcmRlcnMvY29uc2lnbm1lbnQtb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoaXAtb3JkZXJzIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3cge1xyXG4gICAgICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5pbWcsIC50aXRsZSwgLmFjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUsIC5hY3Rpb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmlkIHtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50LWFtb3VudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbiwgLnRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkLFxyXG4gIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbGV4OiAzNSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcclxuICAubWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZsZXg6IDM1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXHJcbiAgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgZmxleDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC9kZWVwLyAuc3Bpbm5lci13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICBcclxuICAgIC5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLncxMDBwIHtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuRmlsdGVye1xyXG4gICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgIG91dGxpbmU6bm9uZTtcclxuICAgICBtYXJnaW46NXB4O1xyXG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgY29sb3I6cmdiKDY2LCA2NiwgNjYpO1xyXG4gICAgIGJvcmRlcjpncmF5IHNvbGlkIDFweDtcclxuICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgLmJ0b25Db3VudHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgfVxyXG4gICAgIC5idG9uQ291bnQ6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICB9XHJcbiAgfVxyXG4gIC5idG5DaG9vc2V7XHJcbiAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgb3V0bGluZTpub25lO1xyXG4gICAgIG1hcmdpbjo1cHg7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjUsIDE3Nyk7XHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgYm9yZGVyOiByZ2IoMCwgMTY1LCAxNzcpO1xyXG4gICAgIC5idG9uQ291bnR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOnJnYig2NiwgNjYsIDY2KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAuZGtsb2N7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZGtsb2NuZ2F5e1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idG5TZWFyY2h7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAxMHB4O1xyXG4gICAgICB3aWR0aDo0OSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDoxJTtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxuICAgIH1cclxuICAgIDpob3N0OjpuZy1kZWVwIC51aS1idXR0b257XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAuaGlkZUluTUJ7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmhpZGVJblBhZHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmRrbG9je1xyXG4gICAgICB3aWR0aDoyNSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiAgICB9XHJcbiAgICAuZGtsb2NuZ2F5e1xyXG4gICAgICB3aWR0aDoyMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJ0blNlYXJjaHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgyMHB4KSB7XHJcbiAgICAuZGtsb2N7XHJcbiAgICAgIHdpZHRoOjIwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxuICAgIH1cclxuICAgIC5ka2xvY25nYXl7XHJcbiAgICAgIHdpZHRoOjE1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYnRuU2VhcmNoe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MSU7XHJcbiAgICB9XHJcbiAgICAuaGlkZUluUEN7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICB9XHJcbiBcclxuICAuYm9sZEdyYXl7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBjb2xvcjpyZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuIH1cclxuIC5ib2xkT3Jhbmdle1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgY29sb3I6IHJnYmEoMjI4LCA4OSwgMzgsIDAuOTQ1KTtcclxuIH1cclxuIC5wYWdpbmF0b3J7XHJcbiAgIG91dGxpbmU6bm9uZTtcclxuICAgYm9yZGVyOm5vbmU7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgcGFkZGluZzozcHggMTBweCAzcHggMTBweDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgZm9udC1zaXplOjE1eDtcclxuIH1cclxuIC5wYWdlQWN0aXZle1xyXG4gICBvdXRsaW5lOm5vbmU7XHJcbiAgIGJvcmRlcjpub25lO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIHBhZGRpbmc6M3B4IDEwcHggM3B4IDEwcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCA4OSwgMzgsIDAuOTQ1KTtcclxuICAgZm9udC1zaXplOjE1eDtcclxuIH0gIl19 */"

/***/ }),

/***/ "./src/app/ship-manager/consignment-orders/consignment-orders.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ship-manager/consignment-orders/consignment-orders.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsignmentOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentOrdersComponent", function() { return ConsignmentOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/ship-manager.service */ "./src/app/services/ship-manager.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/pass-data.services */ "./src/app/services/pass-data.services.ts");
/* harmony import */ var app_model_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/confirm-dialog.model */ "./src/app/model/confirm-dialog.model.ts");
/* harmony import */ var app_common_view_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common-view/confirm-dialog/confirm-dialog.component */ "./src/app/common-view/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ConsignmentOrdersComponent = /** @class */ (function () {
    function ConsignmentOrdersComponent(route, _passData, _shipManager, router, dialog) {
        this.route = route;
        this._passData = _passData;
        this._shipManager = _shipManager;
        this.router = router;
        this.dialog = dialog;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['position', 'name', 'symbol'];
        this.msgs = [];
        this.listBtn = [];
        this.currentStatus = null;
        this.linkImg = '';
        this.isOpenLargeImg = false;
        this.StartDate = '';
        this.EndDate = '';
        this.dropdownStatus = { statusDisplay: "Tất cả đơn" };
        this.dataItem = { dataCount: 0, totalAmount: 0, totalMissing: 0 };
        this.pages = [];
        this.numbPage = 1;
        this.detectWidthLayout = true;
        this.detectWidthLayoutSm = true;
        this.nullForm = {
            "OrderCode": null,
            "ShopName": null,
            "StartDate": null,
            "EndDate": null,
            "Status": null
        };
        this._passData.loading(true);
    }
    ConsignmentOrdersComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 800) {
            this.detectWidthLayout = false;
        }
        else {
            this.detectWidthLayout = true;
        }
        if (window.innerWidth <= 800) {
            this.detectWidthLayoutSm = false;
        }
        else {
            this.detectWidthLayoutSm = true;
        }
        this.account = JSON.parse(localStorage.getItem('userData'));
        // this._shipOrders = new ShipOrders();
        this._shipOrders = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.getDataFromServer();
        // this.getFilterBtn();
    };
    ConsignmentOrdersComponent.prototype.onResize = function (event) {
        if (window.innerWidth <= 800) {
            this.detectWidthLayout = false;
        }
        else {
            this.detectWidthLayout = true;
        }
        if (window.innerWidth <= 500) {
            this.detectWidthLayoutSm = false;
        }
        else {
            this.detectWidthLayoutSm = true;
        }
    };
    ConsignmentOrdersComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._passData.loading(true);
        this._shipManager.getConsignmentOrders(this.nullForm, 1, 5).subscribe(function (res) {
            console.log(res);
            if (res.result.success) {
                _this.dataItem = res.result.data;
                // page
                _this.dataCount = _this.dataItem.dataCount;
                // data
                _this._shipOrders = res.result.data.lsData;
                _this.dataSource.data = res.result.data.lsData;
                _this.maxPage = res.result.data.pageCount;
                _this.dataSource.data = res.result.data.lsData;
                if (_this.maxPage > 5) {
                    _this.pages = [1, 2, 3, 4, 5];
                }
                else {
                    for (var i = 1; i <= _this.maxPage; i++) {
                        _this.pages.push(i);
                    }
                }
                //status
                _this.listBtn = res.result.data.groupStatus;
                _this.listBtn.sort(function (a, b) {
                    return a.ord - b.ord;
                });
            }
            else {
                // this.showMessage('Hủy đơn hàng thành công', 'success');
            }
            _this._passData.loading(false);
        }, function (error) {
            _this._passData.loading(false);
        });
    };
    /*filter() và changeFilter() mang hàm ý giống nhau, filter() của button trên PC, changeFilter của Dropdown trên mobile */
    ConsignmentOrdersComponent.prototype.filter = function (status) {
        console.log(status);
        //console.log(status.status)
        this.currentStatus = status.status;
        this.nullForm.Status = status.status;
        this.dropdownStatus = status; //dòng này để đồng bộ các nút với dropdown.nút chỉ hiển thị ở PC, drop dơn hiển thị ở mobile
        this.loadDataFromServerPerPage(1);
    };
    ConsignmentOrdersComponent.prototype.changeFilter = function () {
        this.currentStatus = this.dropdownStatus.status;
        this.nullForm.Status = this.dropdownStatus.status;
        this.loadDataFromServerPerPage(1);
    };
    ConsignmentOrdersComponent.prototype.OpenImage = function (link) {
        this.linkImg = link;
        this.isOpenLargeImg = true;
    };
    ConsignmentOrdersComponent.prototype.FuncLoc = function (formLoc) {
        var form = formLoc.value;
        if (form.StartDate != "") {
            form.StartDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(form.StartDate, 'yyyy-MM-dd', 'en-US');
        }
        if (form.EndDate != "") {
            form.EndDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(form.EndDate, 'yyyy-MM-dd', 'en-US');
        }
        for (var key in form) {
            if (form[key] == "") {
                form[key] = null;
            }
            if (form['StartDate'] == "1970-01-01") {
                form['StartDate'] = "";
            }
            if (form['EndDate'] == "1970-01-01") {
                form['EndDate'] = "";
            }
        }
        form.Status = this.nullForm.Status;
        this.nullForm = form;
        this.loadDataFromServerPerPage(1);
    };
    ConsignmentOrdersComponent.prototype.ResetForm = function (formLoc) {
        formLoc.onReset();
    };
    ConsignmentOrdersComponent.prototype.redirect = function (data) {
        this._passData.loading(true);
        this._passData.setOrders(data);
        this.router.navigate(['ship-manager/detail-orders/'], { queryParams: { orderId: data.orderId } });
    };
    /**
     * Payment order
     */
    ConsignmentOrdersComponent.prototype.paymentOrders = function (id) {
        // const data = {
        //    orderIds: [id],
        // };
        // this.dialog.open(PaymentOrdersComponent, {
        //    data: data,
        //    panelClass: 'payment-order-dialog',
        // }).afterClosed().subscribe((res) => {
        //    if (res) {
        //       this.showMessage('Thanh toán thành công', 'success');
        //       this.loadDataFromServerPerPage(this.numbPage);
        //    }
        // });
    };
    ConsignmentOrdersComponent.prototype.cancelOrder = function (item, inx) {
        var _this = this;
        var message = 'Bạn có muốn Hủy';
        var dialogData = new app_model_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Xóa', message);
        var dialogRef = this.dialog.open(app_common_view_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            data: dialogData,
            panelClass: 'confirm-dialog'
        });
        dialogRef.afterClosed().subscribe(function (dialogresult) {
            _this._passData.loading(true);
            if (dialogresult) {
                _this._shipManager.cancelOrder(item.orderId).subscribe(function (res) {
                    if (res.result.success) {
                        _this.showMessage('Hủy đơn hàng thành công', 'success');
                        _this._shipOrders[inx] = res.result.data;
                    }
                    else {
                        _this.showMessage(res.result.message, 'error');
                    }
                }, function (err) {
                    _this.showMessage('Hủy đơn hàng thất bại', 'error');
                });
            }
            _this._passData.loading(false);
        }, function (error) {
            _this.showMessage('Hủy đơn hàng thất bại', 'error');
            _this._passData.loading(false);
        });
    };
    ConsignmentOrdersComponent.prototype.clear = function () {
        this.msgs = [];
    };
    ConsignmentOrdersComponent.prototype.showMessage = function (str, type) {
        var _self = this;
        _self.msgs = [];
        _self.msgs.push({ severity: type, summary: str, detail: '' });
        setTimeout(function () {
            _self.clear();
        }, 10000);
    };
    ConsignmentOrdersComponent.prototype.selectPage = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var maxPage, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._passData.loading(true);
                        maxPage = this.maxPage;
                        if (!(value > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadDataFromServerPerPage(value)];
                    case 1:
                        _a.sent();
                        this.numbPage = value;
                        _a.label = 2;
                    case 2:
                        if (!(value == 'n')) return [3 /*break*/, 5];
                        if (!(maxPage == this.numbPage)) return [3 /*break*/, 3];
                        this._passData.loading(false);
                        ;
                        return [2 /*return*/];
                    case 3:
                        this.numbPage++;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(this.numbPage)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(value == 'p')) return [3 /*break*/, 8];
                        if (!(this.numbPage == 1)) return [3 /*break*/, 6];
                        this._passData.loading(false);
                        ;
                        return [2 /*return*/];
                    case 6:
                        this.numbPage--;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(this.numbPage)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!(value == 'l')) return [3 /*break*/, 10];
                        this.numbPage = maxPage;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(maxPage)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!(value == 'f')) return [3 /*break*/, 12];
                        this.numbPage = 1;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(1)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, 1];
                    case 13:
                        _a.sent();
                        console.log(this.maxPage);
                        if (this.numbPage > 5) {
                            console.log(1);
                            this.pages = [this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1, this.numbPage + 2];
                            if (this.numbPage + 2 > this.maxPage) {
                                this.pages = [this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1];
                                console.log(this.pages);
                            }
                            if (this.numbPage + 1 > this.maxPage) {
                                this.pages = [this.numbPage - 4, this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage];
                                console.log(this.pages);
                            }
                        }
                        else {
                            this.pages = [];
                            for (i = 1; i <= this.maxPage; i++) {
                                this.pages.push(i);
                            }
                            if (this.maxPage > 4) {
                                this.pages = [];
                                this.pages = [1, 2, 3, 4, 5];
                                if (this.numbPage == 4 && this.maxPage >= 6) {
                                    this.pages = [2, 3, 4, 5, 6];
                                }
                                if (this.numbPage == 5 && this.maxPage >= 7) {
                                    this.pages = [3, 4, 5, 6, 7];
                                }
                            }
                            console.log(this.pages);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ConsignmentOrdersComponent.prototype.loadDataFromServerPerPage = function (numb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(numb);
                        this._passData.loading(true);
                        return [4 /*yield*/, this._shipManager.getConsignmentOrders(this.nullForm, numb, 5).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log(res);
                                            if (!res.result.success) return [3 /*break*/, 2];
                                            this.dataItem = res.result.data;
                                            // page
                                            this.dataCount = this.dataItem.dataCount;
                                            _a = this;
                                            return [4 /*yield*/, this.dataItem.pageCount
                                                // data
                                            ];
                                        case 1:
                                            _a.maxPage = _b.sent();
                                            // data
                                            this._shipOrders = res.result.data.lsData;
                                            this.dataSource.data = res.result.data.lsData;
                                            //status
                                            this.listBtn = res.result.data.groupStatus;
                                            this.listBtn.sort(function (a, b) {
                                                return a.ord - b.ord;
                                            });
                                            return [3 /*break*/, 2];
                                        case 2:
                                            this._passData.loading(false);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this._passData.loading(false);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ConsignmentOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConsignmentOrdersComponent.prototype, "onResize", null);
    ConsignmentOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-orders',
            template: __webpack_require__(/*! ./consignment-orders.component.html */ "./src/app/ship-manager/consignment-orders/consignment-orders.component.html"),
            styles: [__webpack_require__(/*! ./consignment-orders.component.scss */ "./src/app/ship-manager/consignment-orders/consignment-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_4__["PassDataService"],
            app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_1__["ShipManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ConsignmentOrdersComponent);
    return ConsignmentOrdersComponent;
}());



/***/ }),

/***/ "./src/app/ship-manager/custom-url-serializer.ts":
/*!*******************************************************!*\
  !*** ./src/app/ship-manager/custom-url-serializer.ts ***!
  \*******************************************************/
/*! exports provided: CustomUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomUrlSerializer", function() { return CustomUrlSerializer; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var CustomUrlSerializer = /** @class */ (function () {
    function CustomUrlSerializer() {
    }
    CustomUrlSerializer.prototype.parse = function (url) {
        var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"]();
        return dus.parse(url);
    };
    CustomUrlSerializer.prototype.serialize = function (tree) {
        var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"](), path = dus.serialize(tree);
        // use your regex to replace as per your requirement.
        var t1 = path.replace(/%2F/g, '/');
        return path.replace(/%2F/g, '/');
    };
    return CustomUrlSerializer;
}());



/***/ }),

/***/ "./src/app/ship-manager/orders/orders.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ship-manager/orders/orders.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w100\">\r\n    <p-messages [(value)]=\"msgs\"(click)=\"clear()\"></p-messages>\r\n</div>\r\n<div>\r\n    <form #formFilter=\"ngForm\">\r\n       <input type=\"text\" pInputText class=\"dkloc\" ngModel name=\"OrderCode\" placeholder=\"Mã đơn hàng\">\r\n       <input type=\"text\" pInputText class=\"dkloc\" ngModel name=\"ShopName\" placeholder=\"Tên shop\">\r\n       <span class=\"dklocngay\">\r\n          <p-calendar [(ngModel)]=\"StartDate\" name=\"StartDate\" ngModel placeholder=\"Từ ngày\"\r\n             [style]=\"{'width':'100%'}\" dateFormat=\"dd/mm/yy\" [inputStyle]=\"{'width':'100%'}\"\r\n             [showButtonBar]=\"true\"></p-calendar>\r\n       </span>\r\n       <span class=\"dklocngay\">\r\n          <p-calendar [(ngModel)]=\"EndDate\" name=\"EndDate\" ngModel placeholder=\"Đến ngày\"\r\n             [style]=\"{'width':'100%'}\" dateFormat=\"dd/mm/yy\" [inputStyle]=\"{'width':'100%'}\"\r\n             [showButtonBar]=\"true\"></p-calendar>\r\n       </span>\r\n       <p-button icon=\"fa fa-search\" label=\"Lọc\" class=\"btnSearch\" (click)=\"FuncLoc(formFilter)\"></p-button>\r\n       <p-button icon=\"fa fa-refresh\" label=\"Làm lại\" class=\"btnSearch\" (click)=\"ResetForm(formFilter)\"></p-button>\r\n    </form>\r\n </div>\r\n <div>\r\n    <div class=\"hideInPC hideInPad\" style=\"margin-bottom:15px;\">\r\n         <p-dropdown [options]=\"listBtn\" [(ngModel)]=\"dropdownStatus\" optionLabel=\"statusDisplayMobile\" [style]=\"{'width':'100%'}\"\r\n         (onChange)=\"changeFilter()\" [autoDisplayFirst]=\"true\"></p-dropdown>\r\n    </div>\r\n    <div class=\"hideInMB\">\r\n         <button *ngFor=\"let bton of listBtn\"  [class]=\"currentStatus == bton.status?'btnChoose':'btnFilter'\" \r\n             (click)=\"filter(bton)\">\r\n             {{bton.statusDisplay}} <span [class]=\"bton.count==0?'':'btonCount'\">{{bton.count==0?'':bton.count}}</span>\r\n         </button>\r\n     </div>\r\n </div>\r\n <div style=\"padding-top:15px;padding-bottom:15px;margin-top:12px;font-size:14px;background-color: rgba(224, 224, 224, 0.8);\">\r\n     <span class=\"boldGray\">Số đơn hàng:</span><span class=\"boldOrange\">{{dataItem.dataCount| currencyFormat}}</span> |\r\n     <span class=\"boldGray\">Tổng giá trị đơn:</span><span class=\"boldOrange\">{{dataItem.totalAmount| currencyFormat}}</span> |\r\n     <span class=\"boldGray\">Tổng số tiền còn thiếu:</span><span class=\"boldOrange\">{{dataItem.totalMissing| currencyFormat}}</span>\r\n </div>\r\n<table class=\"w100 tg\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"tg-0pky w45 txt-alignCen\">\r\n                Thông tin đơn hàng\r\n            </th>\r\n            <th *ngIf=\"detectWidthLayout\" class=\"tg-0lax w35 txt-alignCen\">\r\n                Thông tin tài chính\r\n            </th>\r\n            <th *ngIf=\"detectWidthLayout\" class=\"tg-0lax w20 txt-alignCen\">\r\n                Thao tác\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <ng-container *ngFor=\"let item of _shipOrders; let inx = index;\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"tg-0lax\">\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <img class=\"lazy w20 loaded bor-gray pad5 content-inline\" alt=\"\" src=\"{{item.orderImage}}\" >\r\n                        <div class=\"content-inline tung w80\">\r\n                            <div class=\"w100 dp-inBlock\">\r\n                               <div class=\"content-inline w40 pad-l10 cur-point cor2b\">\r\n                                    <a (mousedown)=\"redirectAtag(item)\" target=\"_blank\" href=\"{{returnLinkOrder}}\">\r\n                                        {{item.orderCode}}\r\n                                     </a>\r\n                                </div>\r\n                                <div class=\"content-inline w60\" >\r\n                                    <span style=\"padding: 5px 5px; border-radius: 4px;\" [ngClass]=\" item.status === '14' ?'bgF44335 corffffff':'bg2b corffffff'\">\r\n                                        {{item.statusDisplay}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <!-- shop  -->\r\n                            <div class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Shop:\r\n                                </div>\r\n                                <div class=\"content-inline w60\">\r\n                                    <a href=\"{{item.senderLink}}\" target=\"_blank\">\r\n                                        {{item.sender}}\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <!-- số lượng  -->\r\n                            <div class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Số lượng:\r\n                                </div>\r\n                                <div class=\"content-inline w60\">\r\n                                    {{item.totalQuantityOrder ? item.totalQuantityOrder : 0}} /  \r\n                                    {{item.totalQuantityBuy ? item.totalQuantityBuy : 0}} / \r\n                                    {{item.totalQuantityReceived ? item.totalQuantityReceived : 0}}\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Tổng giá trị đơn\r\n                                </div>\r\n                                <div class=\"content-inline w60 fw-7 corF44335\">\r\n                                    {{item.amount| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Đã thanh toán\r\n                                </div>\r\n                                <div class=\"content-inline w60 corOF fw-7\">\r\n                                    {{item.paid| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div *ngIf=\"!detectWidthLayout\" class=\"w100 dp-inBlock\">\r\n                                <div class=\"content-inline w40 pad-l10\">\r\n                                    Còn thiếu\r\n                                </div>\r\n                                <div class=\"content-inline w60 fw-7 corF44335\">\r\n                                    {{item.missing| currencyFormat }} đ\r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"!detectWidthLayout\" class=\"w100 ver-align-mid tung\">\r\n                            <div class=\"content-inline bor txt-alignCen bor-ra3 bgf4 cor8D pb5 pt5 cur-point pad-l10 pad-r10 mar-l10\" \r\n                            (click)=\"redirect(item)\">\r\n                                Chi tiết\r\n                            </div>\r\n                            <div class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bg2b corffffff pad-l10 pad-r10 mar-l10\"\r\n                                *ngIf=\"item.paymentStatus === '1' && item.status !== '14'\"\r\n                                (click)=\"paymentOrders(item.orderId)\">\r\n                                Thanh toán\r\n                            </div>\r\n                            \r\n                            <div *ngIf=\"item.status === '10' && item.status !== '14'\"\r\n                                    class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bg2b corffffff pad-l10 pad-r10 mar-l10\">\r\n                                Yêu cầu giao hàng\r\n                            </div>\r\n                            \r\n                            <div  *ngIf=\"item.status === '2' || item.status === '1' && item.status !== '14'\"\r\n                                    class=\"content-inline bor txt-alignCen bor-ra3 pb5 pt5 cur-point bgF44335 corffffff pad-l10 pad-r10 mar-l10\"\r\n                                    (click)=\"cancelOrder(item, inx)\">\r\n                                Hủy\r\n                            </div>\r\n                    </div>\r\n                </td>\r\n                <td *ngIf=\"detectWidthLayout\" class=\"tg-0lax\">\r\n                    <div class=\"w100 dp-inBlock pt5\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Tiền hàng\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7\">\r\n                            {{item.totalPrice| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n                    <div *ngFor=\"let itemServices of item.lsService; let inx = index;\">\r\n                        <div class=\"w100 dp-inBlock\">\r\n                            <div class=\"content-inline w50 txt-alignRight\">\r\n                                {{itemServices.shortDisplay}}\r\n                            </div>\r\n                            <div class=\"content-inline w30 txt-alignRight fw-7\">\r\n                                {{itemServices.amount| currencyFormat }} đ\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Tổng giá trị đơn\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7 corF44335\">\r\n                            {{item.amount| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock bor-top pt5\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Đã thanh toán\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight corOF fw-7\">\r\n                            {{item.paid| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Khuyến mãi\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7 corF44335\">\r\n                            {{item.promotion| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock pt5\" *ngIf=\"item.status === '14'\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Babuvi trả lại\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight corOF fw-7\">\r\n                            {{item.refundAmount| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w50 txt-alignRight\">\r\n                            Còn thiếu\r\n                        </div>\r\n                        <div class=\"content-inline w30 txt-alignRight fw-7 corF44335\">\r\n                            {{item.missing| currencyFormat }} đ\r\n                        </div>\r\n                    </div>\r\n\r\n                </td>\r\n                <td *ngIf=\"detectWidthLayout\" class=\"tg-0lax ver-align-mid\">\r\n                    <div class=\"w100 dp-inBlock\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 bgf4 cor8D pb5 pt5 cur-point\" (click)=\"redirect(item)\">\r\n                            Chi tiết\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.paymentStatus === '1' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bg2b corffffff\"\r\n                        (click)=\"paymentOrders(item.orderId)\">\r\n                            Thanh toán\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.status === '10' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bg2b corffffff\">\r\n                            Yêu cầu giao hàng\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"w100 dp-inBlock\" *ngIf=\"item.status === '2' || item.status === '1' && item.status !== '14'\">\r\n                        <div class=\"content-inline w80 bor txt-alignCen ml-per10 mr-per10 bor-ra3 pb5 pt5 cur-point bgF44335 corffffff\" (click)=\"cancelOrder(item, inx)\">\r\n                            Hủy\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </ng-container>\r\n</table>\r\n<div style=\"text-align:center;\">\r\n    <button (click)=\"selectPage('f')\" [disabled]=\"numbPage==1?true:false\" class=\"paginator\">\r\n       <i class=\"fa fa-step-backward\"></i>\r\n    </button>\r\n    <button (click)=\"selectPage('p')\" [disabled]=\"numbPage==1?true:false\" class=\"paginator\">\r\n       <i class=\"fa fa-caret-left\"></i>\r\n    </button>\r\n    <button *ngFor=\"let page of pages\" type=\"button\" tabindex=\"-1\" class=\"\" (click)=\"selectPage(page)\"\r\n       [class]=\"numbPage - page === 0 ?'pageActive paginator':'selectpage paginator'\">{{ page }}</button>\r\n    <button (click)=\"selectPage('n')\" [disabled]=\"numbPage==maxPage?true:false\" class=\"paginator\">\r\n       <i class=\"fa fa-caret-right\"></i>\r\n    </button>\r\n    <button (click)=\"selectPage('l')\" [disabled]=\"numbPage==maxPage?true:false\" class=\"paginator\">\r\n       <i class=\"fa fa-step-forward\"></i>\r\n    </button>\r\n </div>\r\n<!-- <mat-paginator #paginator showFirstLastButtons [length]=\"dataCount\" [hidePageSize]=\"true\" [pageSize]=\"5\" (page)=\"pageEvent($event)\" [pageSizeOptions]=\"[pageSize]\"></mat-paginator> -->\r\n<p-dialog [showHeader]=\"false\" [modal]=\"true\" [(visible)]=\"isOpenLargeImg\" appendTo=\"body\" [dismissableMask]=\"true\">\r\n   <img [src]=\"linkImg\" style=\"text-align: center;\" style=\"width:100%;min-width: 300px;\">\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/ship-manager/orders/orders.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ship-manager/orders/orders.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ship-orders {\n  width: 100% !important; }\n  .ship-orders mat-footer-row, .ship-orders mat-header-row, .ship-orders mat-row {\n    align-items: normal !important; }\n  .ship-orders .info {\n    width: 100% !important; }\n  .ship-orders .info .img, .ship-orders .info .title, .ship-orders .info .action {\n      width: 100% !important; }\n  .ship-orders .info .title, .ship-orders .info .action {\n      text-align: left; }\n  .ship-orders .info .id {\n      color: green;\n      font-weight: bold; }\n  .ship-orders .content-amount {\n    width: 100% !important; }\n  .ship-orders .content-amount .action {\n      text-align: left; }\n  .ship-orders .content-amount .action, .ship-orders .content-amount .title {\n      width: 100% !important; }\n  .ship-orders .content-amount .title {\n      text-align: end;\n      padding-right: 20px; }\n  .ship-orders .content-amount .action {\n      text-align: left; }\n  .mat-header-cell:first-child,\n.mat-cell:first-child {\n  flex: 35% !important;\n  height: 100% !important; }\n  .mat-header-cell:nth-child(2),\n.mat-cell:nth-child(2) {\n  flex: 35% !important; }\n  .mat-header-cell:last-child,\n.mat-cell:last-child {\n  flex: 10% !important; }\n  /deep/ .spinner-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n  /deep/ .spinner-wrapper .spinner-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    padding: 0 !important; }\n  .w100p {\n  width: 100px !important; }\n  .btnFilter {\n  border-radius: 5px;\n  outline: none;\n  margin: 5px 10px 5px 0;\n  display: inline-block;\n  padding: 5px 10px 5px 10px;\n  background-color: white;\n  color: #424242;\n  border: gray solid 1px;\n  font-size: 13px; }\n  .btnFilter .btonCount {\n    border-radius: 50%;\n    background-color: #525252;\n    color: white;\n    font-weight: bold;\n    display: inline-block;\n    width: 20px; }\n  .btnFilter .btonCount:hover {\n    opacity: 0.85; }\n  .btnChoose {\n  border-radius: 5px;\n  outline: none;\n  font-size: 13px;\n  display: inline-block;\n  padding: 5px 10px 5px 10px;\n  margin: 5px 10px 5px 0;\n  background-color: #00a5b1;\n  color: white;\n  border: #00a5b1; }\n  .btnChoose .btonCount {\n    border-radius: 50%;\n    background-color: white;\n    color: #424242;\n    font-weight: bold;\n    display: inline-block;\n    width: 20px; }\n  @media screen and (max-width: 740px) {\n  .dkloc {\n    width: 100%;\n    margin-bottom: 10px; }\n  .dklocngay {\n    width: 100%;\n    display: inline-block;\n    margin-bottom: 10px; }\n  .btnSearch {\n    margin-bottom: 010px;\n    width: 49%;\n    margin-right: 1%;\n    display: inline-block; }\n  :host::ng-deep .ui-button {\n    width: 100%; }\n  .hideInMB {\n    display: none; } }\n  @media screen and (min-width: 740px) and (max-width: 820px) {\n  .hideInPad {\n    display: none; }\n  .dkloc {\n    width: 25%;\n    margin-right: 1%;\n    display: inline-block; }\n  .dklocngay {\n    width: 20%;\n    margin-right: 1%;\n    display: inline-block; }\n  .btnSearch {\n    margin: 20px 20px 5px 20px;\n    display: inline-block; } }\n  @media screen and (min-width: 820px) {\n  .dkloc {\n    width: 20%;\n    margin-right: 1%;\n    display: inline-block; }\n  .dklocngay {\n    width: 15%;\n    margin-right: 1%;\n    display: inline-block; }\n  .btnSearch {\n    margin-right: 1%; }\n  .hideInPC {\n    display: none; } }\n  .boldGray {\n  font-weight: bold;\n  color: #646464;\n  padding-right: 5px; }\n  .boldOrange {\n  font-weight: bold;\n  color: rgba(228, 89, 38, 0.945); }\n  .paginator {\n  outline: none;\n  border: none;\n  color: black;\n  padding: 3px 10px 3px 10px;\n  font-weight: bold;\n  border-radius: 4px;\n  font-size: 15x; }\n  .pageActive {\n  outline: none;\n  border: none;\n  color: white;\n  padding: 3px 10px 3px 10px;\n  font-weight: bold;\n  border-radius: 4px;\n  background-color: rgba(228, 89, 38, 0.945);\n  font-size: 15x; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcC1tYW5hZ2VyL29yZGVycy9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcc2hpcC1tYW5hZ2VyXFxvcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQWlDdkI7RUFsQ0Q7SUFHSSwrQkFBOEIsRUFDL0I7RUFKSDtJQU1JLHVCQUFzQixFQVd2QjtFQWpCSDtNQVFNLHVCQUFzQixFQUN2QjtFQVRMO01BV00saUJBQWdCLEVBQ2pCO0VBWkw7TUFjTSxhQUFZO01BQ1osa0JBQWlCLEVBQ2xCO0VBaEJMO0lBbUJJLHVCQUFzQixFQWN2QjtFQWpDSDtNQXFCTSxpQkFBZ0IsRUFDakI7RUF0Qkw7TUF3Qk0sdUJBQXNCLEVBQ3ZCO0VBekJMO01BMkJNLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3BCO0VBN0JMO01BK0JNLGlCQUFnQixFQUNqQjtFQUlMOztFQUVFLHFCQUFvQjtFQUNwQix3QkFBdUIsRUFDeEI7RUFDRDs7RUFFRSxxQkFBb0IsRUFDckI7RUFDRDs7RUFFRSxxQkFBb0IsRUFDckI7RUFDRDtFQUNFLHFDQUFtQztFQUNuQyxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVUsRUFTWDtFQWhCRDtJQVVJLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsVUFBUztJQUNULHNCQUFxQixFQUV0QjtFQUdIO0VBQ0Usd0JBQXVCLEVBQ3hCO0VBR0Q7RUFDRSxtQkFBaUI7RUFDakIsY0FBWTtFQUNaLHVCQUFxQjtFQUNyQixzQkFBb0I7RUFDcEIsMkJBQTBCO0VBQzFCLHdCQUFzQjtFQUN0QixlQUFxQjtFQUNyQix1QkFBcUI7RUFDckIsZ0JBQWUsRUFZaEI7RUFyQkQ7SUFXSyxtQkFBa0I7SUFDbEIsMEJBQWlDO0lBQ2pDLGFBQVc7SUFDWCxrQkFBaUI7SUFDakIsc0JBQW9CO0lBQ3BCLFlBQVUsRUFDWjtFQWpCSDtJQW1CSyxjQUFhLEVBQ2Y7RUFFSDtFQUNFLG1CQUFpQjtFQUNqQixjQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBb0I7RUFDcEIsMkJBQTBCO0VBQzFCLHVCQUFxQjtFQUNyQiwwQkFBa0M7RUFDbEMsYUFBVztFQUNYLGdCQUF3QixFQVN6QjtFQWxCRDtJQVdLLG1CQUFrQjtJQUNsQix3QkFBdUI7SUFDdkIsZUFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLHNCQUFxQjtJQUNyQixZQUFVLEVBQ1o7RUFJSDtFQUNDO0lBQ0UsWUFBVTtJQUNWLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0UsWUFBVTtJQUNWLHNCQUFvQjtJQUNwQixvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLHFCQUFvQjtJQUNwQixXQUFTO0lBQ1QsaUJBQWU7SUFDZixzQkFDRixFQUFDO0VBQ0Q7SUFDRSxZQUFVLEVBQ1g7RUFDRDtJQUNFLGNBQVksRUFDYixFQUFBO0VBRUY7RUFDQztJQUNFLGNBQVksRUFDYjtFQUNEO0lBQ0UsV0FBUztJQUNULGlCQUFnQjtJQUNoQixzQkFDRixFQUFDO0VBQ0Q7SUFDRSxXQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLHNCQUFvQixFQUNyQjtFQUNEO0lBQ0UsMkJBQTBCO0lBQzFCLHNCQUNGLEVBQUMsRUFBQTtFQUVGO0VBQ0M7SUFDRSxXQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLHNCQUNGLEVBQUM7RUFDRDtJQUNFLFdBQVM7SUFDVCxpQkFBZ0I7SUFDaEIsc0JBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxpQkFBZSxFQUNoQjtFQUNEO0lBQ0UsY0FBWSxFQUNiLEVBQUE7RUFHRjtFQUNDLGtCQUFpQjtFQUNqQixlQUF3QjtFQUN4QixtQkFBa0IsRUFDbEI7RUFDRDtFQUNDLGtCQUFpQjtFQUNqQixnQ0FBK0IsRUFDL0I7RUFDRDtFQUNDLGNBQVk7RUFDWixhQUFXO0VBQ1gsYUFBWTtFQUNaLDJCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGVBQWEsRUFDYjtFQUNEO0VBQ0MsY0FBWTtFQUNaLGFBQVc7RUFDWCxhQUFZO0VBQ1osMkJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsMkNBQTBDO0VBQzFDLGVBQWEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoaXAtbWFuYWdlci9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoaXAtb3JkZXJzIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAuaW1nLCAudGl0bGUsIC5hY3Rpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLCAuYWN0aW9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5pZCB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW50LWFtb3VudCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgLmFjdGlvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLCAudGl0bGUge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkLFxyXG4ubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gIGZsZXg6IDM1JSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxyXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICBmbGV4OiAzNSUgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXHJcbi5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICBmbGV4OiAxMCUgIWltcG9ydGFudDtcclxufVxyXG4vZGVlcC8gLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAuc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi53MTAwcCB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYnRuRmlsdGVye1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBtYXJnaW46NXB4IDEwcHggNXB4IDA7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBjb2xvcjpyZ2IoNjYsIDY2LCA2Nik7XHJcbiAgYm9yZGVyOmdyYXkgc29saWQgMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAuYnRvbkNvdW50e1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgd2lkdGg6MjBweDtcclxuICB9XHJcbiAgLmJ0b25Db3VudDpob3ZlcntcclxuICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxufVxyXG4uYnRuQ2hvb3Nle1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgbWFyZ2luOjVweCAxMHB4IDVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjUsIDE3Nyk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyOiByZ2IoMCwgMTY1LCAxNzcpO1xyXG4gIC5idG9uQ291bnR7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIGNvbG9yOnJnYig2NiwgNjYsIDY2KTtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgd2lkdGg6MjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gLmRrbG9je1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfVxyXG4gLmRrbG9jbmdheXtcclxuICAgd2lkdGg6MTAwJTtcclxuICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiB9XHJcbiAuYnRuU2VhcmNoe1xyXG4gICBtYXJnaW4tYm90dG9tOiAwMTBweDtcclxuICAgd2lkdGg6NDklO1xyXG4gICBtYXJnaW4tcmlnaHQ6MSU7XHJcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiB9XHJcbiA6aG9zdDo6bmctZGVlcCAudWktYnV0dG9ue1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gfVxyXG4gLmhpZGVJbk1Ce1xyXG4gICBkaXNwbGF5Om5vbmU7XHJcbiB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gLmhpZGVJblBhZHtcclxuICAgZGlzcGxheTpub25lO1xyXG4gfVxyXG4gLmRrbG9je1xyXG4gICB3aWR0aDoyNSU7XHJcbiAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiB9XHJcbiAuZGtsb2NuZ2F5e1xyXG4gICB3aWR0aDoyMCU7XHJcbiAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gfVxyXG4gLmJ0blNlYXJjaHtcclxuICAgbWFyZ2luOiAyMHB4IDIwcHggNXB4IDIwcHg7XHJcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcclxuIC5ka2xvY3tcclxuICAgd2lkdGg6MjAlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG4gfVxyXG4gLmRrbG9jbmdheXtcclxuICAgd2lkdGg6MTUlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuIH1cclxuIC5idG5TZWFyY2h7XHJcbiAgIG1hcmdpbi1yaWdodDoxJTtcclxuIH1cclxuIC5oaWRlSW5QQ3tcclxuICAgZGlzcGxheTpub25lO1xyXG4gfVxyXG59XHJcblxyXG4uYm9sZEdyYXl7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGNvbG9yOnJnYigxMDAsIDEwMCwgMTAwKTtcclxuIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uYm9sZE9yYW5nZXtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gY29sb3I6IHJnYmEoMjI4LCA4OSwgMzgsIDAuOTQ1KTtcclxufVxyXG4ucGFnaW5hdG9ye1xyXG4gb3V0bGluZTpub25lO1xyXG4gYm9yZGVyOm5vbmU7XHJcbiBjb2xvcjogYmxhY2s7XHJcbiBwYWRkaW5nOjNweCAxMHB4IDNweCAxMHB4O1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiBmb250LXNpemU6MTV4O1xyXG59XHJcbi5wYWdlQWN0aXZle1xyXG4gb3V0bGluZTpub25lO1xyXG4gYm9yZGVyOm5vbmU7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiBwYWRkaW5nOjNweCAxMHB4IDNweCAxMHB4O1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgODksIDM4LCAwLjk0NSk7XHJcbiBmb250LXNpemU6MTV4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ship-manager/orders/orders.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ship-manager/orders/orders.component.ts ***!
  \*********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/ship-manager.service */ "./src/app/services/ship-manager.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/pass-data.services */ "./src/app/services/pass-data.services.ts");
/* harmony import */ var app_model_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/confirm-dialog.model */ "./src/app/model/confirm-dialog.model.ts");
/* harmony import */ var app_common_view_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common-view/confirm-dialog/confirm-dialog.component */ "./src/app/common-view/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(route, _passData, _shipManager, router, dialog) {
        this.route = route;
        this._passData = _passData;
        this._shipManager = _shipManager;
        this.router = router;
        this.dialog = dialog;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['position', 'name', 'symbol'];
        this.msgs = [];
        this.listBtn = [];
        this.currentStatus = null;
        this.linkImg = '';
        this.isOpenLargeImg = false;
        this.StartDate = '';
        this.EndDate = '';
        this.dropdownStatus = { statusDisplay: "Tất cả đơn" };
        this.dataItem = { dataCount: 0, totalAmount: 0, totalMissing: 0 };
        this.pages = [];
        this.numbPage = 1;
        this.detectWidthLayout = true;
        this.detectWidthLayoutSm = true;
        this.nullForm = {
            "OrderCode": null,
            "ShopName": null,
            "StartDate": null,
            "EndDate": null,
            "Status": null
        };
        this._passData.loading(true);
    }
    OrdersComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 800) {
            this.detectWidthLayout = false;
        }
        else {
            this.detectWidthLayout = true;
        }
        if (window.innerWidth <= 800) {
            this.detectWidthLayoutSm = false;
        }
        else {
            this.detectWidthLayoutSm = true;
        }
        this.account = JSON.parse(localStorage.getItem('userData'));
        // this._shipOrders = new ShipOrders();
        this._shipOrders = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.getDataFromServer();
    };
    OrdersComponent.prototype.onResize = function (event) {
        if (window.innerWidth <= 800) {
            this.detectWidthLayout = false;
        }
        else {
            this.detectWidthLayout = true;
        }
        if (window.innerWidth <= 500) {
            this.detectWidthLayoutSm = false;
        }
        else {
            this.detectWidthLayoutSm = true;
        }
    };
    OrdersComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._passData.loading(true);
        this._shipManager.getListOrders(this.nullForm, 1, 5).subscribe(function (res) {
            if (res.result.success) {
                _this.dataItem = res.result.data;
                // page
                _this.dataCount = _this.dataItem.dataCount;
                // data
                _this._shipOrders = res.result.data.lsData;
                _this.maxPage = res.result.data.pageCount;
                _this.dataSource.data = res.result.data.lsData;
                if (_this.maxPage > 5) {
                    _this.pages = [1, 2, 3, 4, 5];
                }
                else {
                    for (var i = 1; i <= _this.maxPage; i++) {
                        _this.pages.push(i);
                    }
                }
                //status
                _this.listBtn = res.result.data.groupStatus;
                _this.listBtn.sort(function (a, b) {
                    return a.ord - b.ord;
                });
            }
            else {
                _this.showMessage(res.result.message, 'danger');
            }
            _this._passData.loading(false);
        }, function (error) {
            _this._passData.loading(false);
        });
    };
    /*filter() và changeFilter() mang hàm ý giống nhau, filter() của button trên PC, changeFilter của Dropdown trên mobile */
    OrdersComponent.prototype.filter = function (status) {
        //console.log(status.status)
        this.currentStatus = status.status;
        this.nullForm.Status = status.status;
        this.dropdownStatus = status; //dòng này để đồng bộ các nút với dropdown.nút chỉ hiển thị ở PC, drop dơn hiển thị ở mobile
        this.loadDataFromServerPerPage(1);
    };
    OrdersComponent.prototype.changeFilter = function () {
        console.log(this.dropdownStatus);
        this.currentStatus = this.dropdownStatus.status;
        this.nullForm.Status = this.dropdownStatus.status;
        this.loadDataFromServerPerPage(1);
    };
    OrdersComponent.prototype.OpenImage = function (link) {
        this.linkImg = link;
        this.isOpenLargeImg = true;
    };
    OrdersComponent.prototype.FuncLoc = function (formLoc) {
        var form = formLoc.value;
        if (form.StartDate != "") {
            form.StartDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(form.StartDate, 'yyyy-MM-dd', 'en-US');
        }
        if (form.EndDate != "") {
            form.EndDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(form.EndDate, 'yyyy-MM-dd', 'en-US');
        }
        for (var key in form) {
            if (form[key] == "") {
                form[key] = null;
            }
            if (form['StartDate'] == "1970-01-01") {
                form['StartDate'] = "";
            }
            if (form['EndDate'] == "1970-01-01") {
                form['EndDate'] = "";
            }
        }
        form.Status = this.nullForm.Status;
        this.nullForm = form;
        this.loadDataFromServerPerPage(1);
    };
    OrdersComponent.prototype.ResetForm = function (formLoc) {
        formLoc.onReset();
    };
    OrdersComponent.prototype.redirectAtag = function (data) {
        //this._passData.loading(true);
        //this._passData.setOrders(data);
        //console.log(data);
        //this.router.navigate(['ship-manager/detail-orders/'], { queryParams: { orderId: data.orderId } });
        this.returnLinkOrder = window.location.href.replace(this.router.url, "/ship-manager/detail-orders?orderId=" + data.orderId);
    };
    OrdersComponent.prototype.redirect = function (data) {
        this._passData.loading(true);
        this._passData.setOrders(data);
        this.router.navigate(['ship-manager/detail-orders/'], { queryParams: { orderId: data.orderId } });
        //this.returnLinkOrder = window.location.href.replace(this.router.url,`/ship-manager/detail-orders?orderId=${data.orderId}`);
    };
    /**
     * Payment order
     */
    OrdersComponent.prototype.paymentOrders = function (id) {
        // const data = {
        //   orderIds: [id],
        // };
        // this.dialog.open(PaymentOrdersComponent, {
        //   data: data,
        //   panelClass: 'payment-order-dialog',
        // }).afterClosed().subscribe((res) => {
        //   if (res) {
        //     this.showMessage('Thanh toán thành công', 'success');
        //     this.loadDataFromServerPerPage(this.numbPage);
        //   }
        // });
    };
    OrdersComponent.prototype.cancelOrder = function (item, inx) {
        var _this = this;
        var message = 'Bạn có muốn Hủy';
        var dialogData = new app_model_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Xóa', message);
        var dialogRef = this.dialog.open(app_common_view_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            data: dialogData,
            panelClass: 'confirm-dialog'
        });
        dialogRef.afterClosed().subscribe(function (dialogresult) {
            _this._passData.loading(true);
            if (dialogresult) {
                _this._shipManager.cancelOrder(item.orderId).subscribe(function (res) {
                    if (res.result.success) {
                        _this.showMessage('Hủy đơn hàng thành công', 'success');
                        _this._shipOrders[inx] = res.result.data;
                    }
                    else {
                        _this.showMessage(res.result.message, 'error');
                    }
                }, function (err) {
                    _this.showMessage('Hủy đơn hàng thất bại', 'error');
                });
            }
            _this._passData.loading(false);
        }, function (error) {
            _this.showMessage('Hủy đơn hàng thất bại', 'error');
            _this._passData.loading(false);
        });
    };
    OrdersComponent.prototype.clear = function () {
        this.msgs = [];
    };
    OrdersComponent.prototype.showMessage = function (str, type) {
        var _self = this;
        _self.msgs = [];
        _self.msgs.push({ severity: type, summary: str, detail: '' });
        setTimeout(function () {
            _self.clear();
        }, 10000);
    };
    OrdersComponent.prototype.selectPage = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var maxPage, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._passData.loading(true);
                        maxPage = this.maxPage;
                        if (!(value > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadDataFromServerPerPage(value)];
                    case 1:
                        _a.sent();
                        this.numbPage = value;
                        _a.label = 2;
                    case 2:
                        if (!(value == 'n')) return [3 /*break*/, 5];
                        if (!(maxPage == this.numbPage)) return [3 /*break*/, 3];
                        this._passData.loading(false);
                        ;
                        return [2 /*return*/];
                    case 3:
                        this.numbPage++;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(this.numbPage)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(value == 'p')) return [3 /*break*/, 8];
                        if (!(this.numbPage == 1)) return [3 /*break*/, 6];
                        this._passData.loading(false);
                        ;
                        return [2 /*return*/];
                    case 6:
                        this.numbPage--;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(this.numbPage)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!(value == 'l')) return [3 /*break*/, 10];
                        this.numbPage = maxPage;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(maxPage)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!(value == 'f')) return [3 /*break*/, 12];
                        this.numbPage = 1;
                        return [4 /*yield*/, this.loadDataFromServerPerPage(1)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, 1];
                    case 13:
                        _a.sent();
                        console.log(this.maxPage);
                        if (this.numbPage > 5) {
                            console.log(1);
                            this.pages = [this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1, this.numbPage + 2];
                            if (this.numbPage + 2 > this.maxPage) {
                                this.pages = [this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage, this.numbPage + 1];
                                console.log(this.pages);
                            }
                            if (this.numbPage + 1 > this.maxPage) {
                                this.pages = [this.numbPage - 4, this.numbPage - 3, this.numbPage - 2, this.numbPage - 1, this.numbPage];
                                console.log(this.pages);
                            }
                        }
                        else {
                            this.pages = [];
                            for (i = 1; i <= this.maxPage; i++) {
                                this.pages.push(i);
                            }
                            if (this.maxPage > 4) {
                                this.pages = [];
                                this.pages = [1, 2, 3, 4, 5];
                                if (this.numbPage == 4 && this.maxPage >= 6) {
                                    this.pages = [2, 3, 4, 5, 6];
                                }
                                if (this.numbPage == 5 && this.maxPage >= 7) {
                                    this.pages = [3, 4, 5, 6, 7];
                                }
                            }
                            console.log(this.pages);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    OrdersComponent.prototype.loadDataFromServerPerPage = function (numb) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._passData.loading(true);
                        return [4 /*yield*/, this._shipManager.getListOrders(this.nullForm, numb, 5).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!res.result.success) return [3 /*break*/, 2];
                                            this.dataItem = res.result.data;
                                            // page
                                            this.dataCount = this.dataItem.dataCount;
                                            _a = this;
                                            return [4 /*yield*/, this.dataItem.pageCount
                                                // data
                                            ];
                                        case 1:
                                            _a.maxPage = _b.sent();
                                            // data
                                            this._shipOrders = res.result.data.lsData;
                                            this.dataSource.data = res.result.data.lsData;
                                            //status
                                            this.listBtn = res.result.data.groupStatus;
                                            this.listBtn.sort(function (a, b) {
                                                return a.ord - b.ord;
                                            });
                                            return [3 /*break*/, 3];
                                        case 2:
                                            this.showMessage(res.result.message, 'danger');
                                            _b.label = 3;
                                        case 3:
                                            this._passData.loading(false);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this._passData.loading(false);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrdersComponent.prototype, "onResize", null);
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/ship-manager/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/ship-manager/orders/orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_4__["PassDataService"],
            app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_1__["ShipManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/ship-manager/ship-manager.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ship-manager/ship-manager.module.ts ***!
  \*****************************************************/
/*! exports provided: ShipManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipManagerModule", function() { return ShipManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ship_manager_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship-manager.routing */ "./src/app/ship-manager/ship-manager.routing.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/ship-manager/orders/orders.component.ts");
/* harmony import */ var app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/ship-manager.service */ "./src/app/services/ship-manager.service.ts");
/* harmony import */ var app_services_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/order-detail.service */ "./src/app/services/order-detail.service.ts");
/* harmony import */ var _common_share_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/share-common.module */ "./src/app/common/share-common.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var app_common_view_common_view_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/common-view/common-view.module */ "./src/app/common-view/common-view.module.ts");
/* harmony import */ var _custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-url-serializer */ "./src/app/ship-manager/custom-url-serializer.ts");
/* harmony import */ var _consignment_orders_consignment_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./consignment-orders/consignment-orders.component */ "./src/app/ship-manager/consignment-orders/consignment-orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ShipManagerModule = /** @class */ (function () {
    function ShipManagerModule() {
    }
    ShipManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ship_manager_routing__WEBPACK_IMPORTED_MODULE_5__["ShipManagerRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _common_share_common_module__WEBPACK_IMPORTED_MODULE_9__["ShareCommonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["MessagesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                app_common_view_common_view_module__WEBPACK_IMPORTED_MODULE_16__["CommonViewModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"]
            ],
            declarations: [
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"],
                _consignment_orders_consignment_orders_component__WEBPACK_IMPORTED_MODULE_18__["ConsignmentOrdersComponent"],
            ],
            providers: [
                app_services_ship_manager_service__WEBPACK_IMPORTED_MODULE_7__["ShipManagerService"],
                app_services_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"], useClass: _custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__["CustomUrlSerializer"] },
            ],
        })
    ], ShipManagerModule);
    return ShipManagerModule;
}());



/***/ }),

/***/ "./src/app/ship-manager/ship-manager.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/ship-manager/ship-manager.routing.ts ***!
  \******************************************************/
/*! exports provided: ShipManagerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipManagerRoutes", function() { return ShipManagerRoutes; });
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/ship-manager/orders/orders.component.ts");
/* harmony import */ var _consignment_orders_consignment_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consignment-orders/consignment-orders.component */ "./src/app/ship-manager/consignment-orders/consignment-orders.component.ts");


var ShipManagerRoutes = [
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__["OrdersComponent"]
    },
    {
        path: 'consignment-orders',
        component: _consignment_orders_consignment_orders_component__WEBPACK_IMPORTED_MODULE_1__["ConsignmentOrdersComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=ship-manager-ship-manager-module.js.map