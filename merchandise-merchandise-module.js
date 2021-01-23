(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchandise-merchandise-module"],{

/***/ "./node_modules/primeng/components/progressspinner/progressspinner.js":
/*!****************************************************************************!*\
  !*** ./node_modules/primeng/components/progressspinner/progressspinner.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ProgressSpinner = /** @class */ (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        core_1.Component({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());
exports.ProgressSpinner = ProgressSpinner;
var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());
exports.ProgressSpinnerModule = ProgressSpinnerModule;
//# sourceMappingURL=progressspinner.js.map

/***/ }),

/***/ "./src/app/merchandise/delivery/merchandise-delivery.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/merchandise/delivery/merchandise-delivery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of messages\" class=\"message alert {{message.messageClass}}\"\r\n     role=\"alert\">{{message.detail}}</div>\r\n\r\n<div class=\"btn-dashboard mb-2 p-2\">\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"createPackage()\">Đóng gói</button>\r\n    </span>\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"sendDelivery()\">Giao hàng</button>\r\n    </span>\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"cancelDelivery()\">Hủy giao</button>\r\n    </span>\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"exportByDeliveryRequest()\">Xuất hàng</button>\r\n    </span>\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"cancelExp()\">Hủy xuất</button>\r\n    </span>\r\n    <span class=\"top-feature\">\r\n        <button mat-raised-button color=\"warn\" (click)=\"printExpBill()\">In phiếu xuất</button>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"row ng-scope m-0\">\r\n    <div class=\"col-left pr-2 pl-2 mb-3 mb-md-0\">\r\n        <div class=\"block mb-3\">\r\n            <div class=\"block-title text-uppercase p-2 font-weight-bold\">Thông tin phiếu yêu cầu</div>\r\n            <div class=\"block-content p-3\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"deliveryRequestCd\">Mã phiếu yêu cầu xuất hàng</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"deliveryRequestCd\" name=\"deliveryRequestCd\"\r\n                           required #deliveryRequestCd=\"ngModel\" ngModel\r\n                           [(ngModel)]=\"deliveryRequestCode\"\r\n                           (keydown.enter)=\"getDeliveryRequestByCode(deliveryRequestCd.value)\">\r\n                    <!--                    <div *ngIf=\"deliveryRequestCd.invalid && (deliveryRequestCd.dirty || deliveryRequestCd.touched)\"-->\r\n                    <!--                         class=\"alert-no-bg\">-->\r\n                    <!--                        <small *ngIf=\"deliveryRequestCd.errors.required\" role=\"alert\">Trường \"Mã kiện hàng\" không-->\r\n                    <!--                            được để trống</small>-->\r\n                    <!--                    </div>-->\r\n                </div>\r\n                <p><span\r\n                        class=\"font-weight-bold\">Ngày tạo: </span>{{deliveryRequest.createdDate | date:'hh:mm dd/mm/yyy' }}\r\n                </p>\r\n                <p>Hình thức giao: <span class=\"font-weight-bold\">{{ deliveryRequest.typeDisplay }}</span></p>\r\n                <p>Kho: <span class=\"font-italic\">[{{ deliveryRequest.warehouseId }}\r\n                    ] {{ deliveryRequest.warehouseName }}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"block mb-3\">\r\n            <div class=\"block-title text-uppercase p-2 font-weight-bold\">Thông tin nhận hàng</div>\r\n            <div class=\"block-content p-3\">\r\n                <p>Người nhận: <span>{{ deliveryRequest.contactName }}</span></p>\r\n                <p>Điện thoại: <span>{{ deliveryRequest.contactPhone }}</span></p>\r\n                <p>Địa chỉ: <span>{{ deliveryRequest.address }} -\r\n                    {{deliveryRequest.wardDisplay }} -\r\n                    {{deliveryRequest.districtDisplay }} -\r\n                    {{deliveryRequest.cityDisplay }} -\r\n                    {{deliveryRequest.countryDisplay }}</span></p>\r\n                <p>Tên nhà xe: <span>{{ deliveryRequest.vehicleName }}</span></p>\r\n                <p>Điện thoại nhà xe: <span>{{ deliveryRequest.vehiclePhone }}</span></p>\r\n                <p>Địa chỉ nhà xe: <span>{{ deliveryRequest.vehicleAddress }}</span></p>\r\n                <p>Ghi chú:\r\n                    <span>{{ deliveryRequest.description ? deliveryRequest.description : 'Chưa có ghi chú' }}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"block\">\r\n            <div class=\"block-title text-uppercase p-2 font-weight-bold\">Thông tin phiếu xuất hàng</div>\r\n            <div class=\"block-content p-3\">\r\n                <p>Mã phiếu xuất: <span\r\n                        class=\"font-weight-bold\">{{ deliveryRequest?.warehouseExp?.warehouseExpCode }}</span></p>\r\n                <p>Ngày xuất: <span>{{ deliveryRequest?.warehouseExp?.expDate | date: 'dd/mm/yyy' }}</span></p>\r\n                <p>Người xuất:\r\n                    <span>{{ deliveryRequest?.warehouseExp?.storekeeperFirstName }} {{deliveryRequest?.warehouseExp?.storekeeperLastName}}</span>\r\n                </p>\r\n                <p>Mã vận đơn: <span class=\"font-weight-bold text-info\">\r\n                    {{ shipmentCodes }}\r\n                </span>\r\n                </p>\r\n                <p>Trạng thái: <span class=\"font-weight-bold\">{{ deliveryRequest?.warehouseExp?.statusDisplay }}</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-right pr-2 pl-2\">\r\n        <div class=\"block\">\r\n            <div class=\"block-title text-uppercase p-2 font-weight-bold\">Danh sách kiện hàng</div>\r\n            <div class=\"block-content p-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"parentMerchandiseCd\">Mã đơn hàng</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"parentMerchandiseCd\" name=\"parentMerchandiseCd\" ngModel\r\n                           #parentMerchandiseCd=\"ngModel\"\r\n                           [(ngModel)]=\"parentMerchandiseCode\" (keydown.enter)=\"applyFilter(parentMerchandiseCd.value)\">\r\n                </div>\r\n                <div class=\"merchandise-table-container\">\r\n                    <div class=\"table-wrapper\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"w-100 merchandise-table\">\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"orderCode\">\r\n                                <th class=\"merchandise-code text-center\" mat-header-cell *matHeaderCellDef>\r\n                                    <span>Mã đơn hàng</span>\r\n                                </th>\r\n                                <td [class.text-center]=\"!element.isParrent\" mat-cell\r\n                                    [attr.colspan]=\"element.isParrent ? 5 : 1\"\r\n                                    *matCellDef=\"let element\">\r\n                            <span *ngIf=\"element.isParrent\" class=\"font-weight-bold\">\r\n                                Mã kiện hàng: {{element.merchandiseCode}}\r\n                                <span *ngIf=\"element.paymentWeight\"> - Cân nặng: {{element.paymentWeight}} kg</span>\r\n                            </span>\r\n                                    <span *ngIf=\"!element.isParrent\">\r\n                            {{element.orderCode}}\r\n                            </span>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"merchandiseCode\">\r\n                                <th class=\"text-center\" mat-header-cell *matHeaderCellDef> Mã kiện</th>\r\n                                <td class=\"text-center\" mat-cell [hidden]=\"element.isParrent\"\r\n                                    *matCellDef=\"let element\"> {{element.merchandiseCode}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"netWeight\">\r\n                                <th class=\"text-center\" mat-header-cell *matHeaderCellDef> Cân nặng</th>\r\n                                <td class=\"text-center\" mat-cell [hidden]=\"element.isParrent\"\r\n                                    *matCellDef=\"let element\"> {{element.netWeight}} kg\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"capacity\">\r\n                                <th class=\"text-center\" mat-header-cell *matHeaderCellDef> Thể tích</th>\r\n                                <td class=\"text-center\" mat-cell [hidden]=\"element.isParrent\"\r\n                                    *matCellDef=\"let element\">\r\n                                    {{element.length}} x {{element.width}}\r\n                                    x {{element.height}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"chargedWeight\">\r\n                                <th class=\"text-center\" mat-header-cell *matHeaderCellDef> Quy đổi</th>\r\n                                <td class=\"text-center\" mat-cell [hidden]=\"element.isParrent\"\r\n                                    *matCellDef=\"let element\">{{element.chargedWeight}} kg\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <div *ngIf=\"dataSource.data.length === 0\" class=\"text-center p-2\">Không có dữ liệu</div>\r\n                        <mat-paginator class=\"mb-2\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\r\n                    </div>\r\n                </div>\r\n                <div class=\"missing-amount\">\r\n                    <div class=\"font-weight-bold mb-2\">Tổng tiền còn thiếu: <span\r\n                            class=\"text-danger\">{{deliveryRequest.missingAmount | currency: 'VND'}}</span></div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <button (click)=\"paymentOrders()\" [disabled]=\"!(deliveryRequest.missingAmount > 0)\"\r\n                                class=\"btn btn-sm btn-danger mr-1\">\r\n                            Thanh toán\r\n                        </button>\r\n                        <button (click)=\"chargeWallet()\" class=\"btn btn-sm btn-info mr-1\">\r\n                            Nạp ví\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"spinner-wrapper\" [hidden]=\"!loading\">\r\n    <div class=\"spinner-container\">\r\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/merchandise/delivery/merchandise-delivery.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/merchandise/delivery/merchandise-delivery.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-left, .col-right {\n  width: 100%; }\n\n.block {\n  background-color: #ffffff; }\n\n.block-content {\n  padding-top: 0 !important; }\n\n.block-title {\n  border-top: 2px solid #f15922;\n  display: table; }\n\n@media (min-width: 768px) {\n  .col-left {\n    width: 40%; }\n  .col-right {\n    width: calc(100% - 40%); } }\n\n.btn-primary {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:active {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:focus {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:hover {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n/deep/ .alert-no-bg {\n  border: none !important;\n  background: transparent;\n  color: #d90000; }\n\n.btn-dashboard .top-feature {\n  margin-right: 5px; }\n\n.btn-dashboard .top-feature button {\n    margin-bottom: 5px; }\n\n.btn-dashboard .top-feature :last-child {\n    margin-right: 0; }\n\n/deep/ .spinner-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n/deep/ .spinner-wrapper .spinner-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    padding: 0 !important;\n    transform: translate(-50%, -50%); }\n\n.mat-row {\n  height: auto; }\n\n.mat-cell {\n  padding: 8px 8px 8px 0; }\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type,\ntd.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\n  padding-left: 0;\n  padding-right: 0; }\n\n/deep/ .merchandise-table thead th {\n  background-color: #f15922;\n  color: #fff;\n  border-right: 1px solid #fff;\n  border-left: 1px solid #fff; }\n\n/deep/ .merchandise-table tr.mat-header-row {\n  height: 35px; }\n\n/deep/ .merchandise-table td.mat-cell {\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n/deep/ .merchandise-table td.mat-cell:first-child {\n    border-left: 1px solid rgba(0, 0, 0, 0.12); }\n\n/deep/ .merchandise-table-container {\n  overflow-x: scroll;\n  webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none; }\n\n/deep/ .merchandise-table-container .table-wrapper {\n    min-width: 370px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbmRpc2UvZGVsaXZlcnkvRjpcXEPDlE5HIFZJ4buGQyAtIEzDgE0gVEjDik1cXEpPQiBBbmd1bGFyXFxiYWJ1dmkvc3JjXFxhcHBcXG1lcmNoYW5kaXNlXFxkZWxpdmVyeVxcbWVyY2hhbmRpc2UtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSw4QkF4QnVCO0VBeUJ2QixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRTtJQUNFLFdBckJtQixFQXNCcEI7RUFDRDtJQUNFLHdCQUF5QyxFQUMxQyxFQUFBOztBQUdIO0VBQ0UsMEJBdEN1QjtFQXVDdkIsc0JBdkN1QixFQXdDeEI7O0FBRUQ7RUFDRSwwQkEzQ3VCO0VBNEN2QixzQkE1Q3VCLEVBNkN4Qjs7QUFFRDtFQUNFLDBCQWhEdUI7RUFpRHZCLHNCQWpEdUIsRUFrRHhCOztBQUVEO0VBQ0UsMEJBckR1QjtFQXNEdkIsc0JBdER1QixFQXVEeEI7O0FBRUQ7RUFFSSx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLGVBckRhLEVBc0RkOztBQUdIO0VBRUksa0JBQWlCLEVBU2xCOztBQVhIO0lBS00sbUJBQWtCLEVBQ25COztBQU5MO0lBU00sZ0JBQWUsRUFDaEI7O0FBSUw7RUFDRSxxQ0FBbUM7RUFDbkMsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsV0FBVSxFQVNYOztBQWhCRDtJQVVJLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsVUFBUztJQUNULHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFDakM7O0FBR0g7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7O0VBRUUsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFJUSwwQkFuSGlCO0VBb0hqQixZQUFXO0VBQ1gsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUM1Qjs7QUFSUDtFQVlNLGFBQVksRUFDYjs7QUFiTDtFQWdCTSw0Q0FBMkMsRUFLNUM7O0FBckJMO0lBbUJRLDJDQUEwQyxFQUMzQzs7QUFwQlA7RUF5QkksbUJBQWtCO0VBQ2xCLGlDQUFnQztFQUNoQyx5QkFBd0IsRUFJekI7O0FBL0JIO0lBNkJNLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lcmNoYW5kaXNlL2RlbGl2ZXJ5L21lcmNoYW5kaXNlLWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNfcHJpbWFyeS1jb2xvcjogI2YxNTkyMjtcclxuJGNfc3RhdHVzLTE2LWJhY2tncm91bmQ6ICNlMTBkMGM7XHJcbiRjX3N0YXR1cy0xNS1iYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiRjX3N0YXR1cy0xNC1iYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiRjX3N0YXR1cy0xLWJhY2tncm91bmQ6IGdyZWVuO1xyXG4kY19zdGF0dXNfZGVmYXVsdDogYmx1ZTtcclxuJGNfd2hpdGU6ICNmZmY7XHJcbiRjX2JvcmRlcjogI2U4ZThlODtcclxuJGNfYWxlcnQ6ICNkOTAwMDA7XHJcbiRjb2wtbGVmdC1tZC13aWR0aDogNDAlO1xyXG5cclxuLmNvbC1sZWZ0LCAuY29sLXJpZ2h0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYmxvY2stY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsb2NrLXRpdGxlIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgJGNfcHJpbWFyeS1jb2xvcjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbC1sZWZ0IHtcclxuICAgIHdpZHRoOiAkY29sLWxlZnQtbWQtd2lkdGg7XHJcbiAgfVxyXG4gIC5jb2wtcmlnaHQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JGNvbC1sZWZ0LW1kLXdpZHRofSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjX3ByaW1hcnktY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuL2RlZXAvIHtcclxuICAuYWxlcnQtbm8tYmcge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAkY19hbGVydDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZGFzaGJvYXJkIHtcclxuICAudG9wLWZlYXR1cmUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuL2RlZXAvIC5zcGlubmVyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuL2RlZXAvIHtcclxuICAubWVyY2hhbmRpc2UtdGFibGUge1xyXG4gICAgdGhlYWQge1xyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkLm1hdC1jZWxsIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lcmNoYW5kaXNlLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB3ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIC50YWJsZS13cmFwcGVyIHtcclxuICAgICAgbWluLXdpZHRoOiAzNzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/merchandise/delivery/merchandise-delivery.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/merchandise/delivery/merchandise-delivery.component.ts ***!
  \************************************************************************/
/*! exports provided: MerchandiseDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseDeliveryComponent", function() { return MerchandiseDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/merchandise.services */ "./src/app/services/merchandise.services.ts");
/* harmony import */ var app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/delivery-request.model */ "./src/app/model/delivery-request.model.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var app_services_warehouse_exp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/warehouse-exp.service */ "./src/app/services/warehouse-exp.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-bill/print-bill.component */ "./src/app/merchandise/delivery/print-bill/print-bill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MerchandiseDeliveryComponent = /** @class */ (function () {
    function MerchandiseDeliveryComponent(merchandiseServices, warehouseExpService, dialog) {
        this.merchandiseServices = merchandiseServices;
        this.warehouseExpService = warehouseExpService;
        this.dialog = dialog;
        this.loading = false;
        this.deliveryRequest = new app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__["DeliveryRequest"]();
        this.shipmentCodes = '';
        this.displayedColumns = ['orderCode', 'merchandiseCode', 'netWeight', 'capacity', 'chargedWeight'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    MerchandiseDeliveryComponent.prototype.ngOnInit = function () {
        this.account = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.account.userId;
    };
    /**
     * Get delivery data by code
     * @param code
     */
    MerchandiseDeliveryComponent.prototype.getDeliveryRequestByCode = function (code) {
        var _this = this;
        this.loading = true;
        this.merchandiseServices.getDeliveryRequestByCode(code).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                _this.deliveryRequest = res.result.data;
                if (_this.deliveryRequest && _this.deliveryRequest.shipment && _this.deliveryRequest.shipment.length > 0) {
                    _this.shipmentCodes = _this.deliveryRequest.shipment.map(function (e) { return e.shipmentCode; }).join(', ');
                }
                else {
                    _this.shipmentCodes = '';
                }
                _this.sortMerchandiseLsAndMergeParent();
            }
            else {
                _this.deliveryRequest = new app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__["DeliveryRequest"]();
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.deliveryRequest = new app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__["DeliveryRequest"]();
            _this.showMessage('alert-danger', 'Tải thông tin yêu cầu xuất hàng thất bại');
        });
    };
    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    MerchandiseDeliveryComponent.prototype.showMessage = function (messageClass, detail) {
        var _this = this;
        this.messages = [];
        this.messages.push({ messageClass: messageClass, detail: detail });
        setTimeout(function () {
            _this.messages = [];
        }, 3000);
    };
    /**
     * Sort merchandise list
     */
    MerchandiseDeliveryComponent.prototype.sortMerchandiseLsAndMergeParent = function () {
        var parent;
        parent = this.deliveryRequest.lsParentDetail;
        var nullParent = this.deliveryRequest.lsParentDetail.find(function (e) { return e.merchandiseWarehouseId === null; });
        if (!nullParent) {
            this.deliveryRequest.lsParentDetail = parent = [{ merchandiseWarehouseId: null }].concat(parent);
        }
        this.merchandiseList = [];
        var _loop_1 = function (p) {
            p.isParrent = true;
            var merchandiseLsByParentId = this_1.deliveryRequest.lsDetail.filter(function (e) { return e.parentId === p.merchandiseWarehouseId; });
            if (merchandiseLsByParentId.length > 0) {
                if (p.merchandiseWarehouseId === null) {
                    this_1.merchandiseList = this_1.merchandiseList.concat(merchandiseLsByParentId);
                }
                else {
                    this_1.merchandiseList = this_1.merchandiseList.concat([p], merchandiseLsByParentId);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, parent_1 = parent; _i < parent_1.length; _i++) {
            var p = parent_1[_i];
            _loop_1(p);
        }
        this.dataSource.data = this.merchandiseList;
        this.dataSource.paginator = this.paginator;
    };
    /**
     * Fill merchandise list by parent merchandise code
     * @param value
     */
    MerchandiseDeliveryComponent.prototype.applyFilter = function (value) {
        if (this.deliveryRequest && this.deliveryRequest.lsParentDetail && this.deliveryRequest.lsDetail) {
            if (value) {
                var parent_2 = this.deliveryRequest.lsParentDetail.find(function (p) { return p.merchandiseCode === value; });
                var result = [];
                if (parent_2) {
                    result = this.deliveryRequest.lsDetail.filter(function (e) { return e.parentId === parent_2.merchandiseId; });
                }
                this.dataSource.data = result;
                this.dataSource.paginator = this.paginator;
            }
            else {
                this.sortMerchandiseLsAndMergeParent();
            }
        }
    };
    /**
     * Payment order
     */
    MerchandiseDeliveryComponent.prototype.paymentOrders = function () {
        // const orderIds = Array.from(new Set(this.deliveryRequest.lsDetail.map(e => e.orderId)));
        // const data = {
        //     orderIds :  orderIds,
        // };
        // this.dialog.open(PaymentOrdersComponent, {
        //     data: data,
        //     panelClass: 'payment-order-dialog',
        // }).afterClosed().subscribe((res) => {
        //     if (res) {
        //         this.showMessage('alert-success', 'Thanh toán thành công');
        //         this.getDeliveryRequestByCode(this.deliveryRequestCode);
        //     }
        // });
    };
    /**
     * Charge money to wallet
     */
    MerchandiseDeliveryComponent.prototype.chargeWallet = function () {
        // TODO: Phase 2
    };
    /**
     * Create package
     */
    MerchandiseDeliveryComponent.prototype.createPackage = function () {
        var _this = this;
        var lsDetail = this.deliveryRequest.lsDetail;
        var body = {
            lsId: lsDetail ? lsDetail.map(function (e) { return e.merchandiseWarehouseId; }).filter(function (a, b, self) { return self.indexOf(a) === b; }) : [],
        };
        this.loading = true;
        this.merchandiseServices.createPackage(body).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                // TODO: Load merchandise list
                _this.getDeliveryRequestByCode(_this.deliveryRequestCode);
                _this.showMessage('alert-success', 'Đóng gói thành công');
            }
            else {
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage('alert-danger', 'Đóng gói thất bại');
        });
    };
    /**
     * Send delivery
     */
    MerchandiseDeliveryComponent.prototype.sendDelivery = function () {
        var _this = this;
        var body = {
            DeliveryRequestCode: this.deliveryRequestCode,
        };
        this.loading = true;
        this.merchandiseServices.sendDelivery(body).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                // TODO: set shipment value
                _this.showMessage('alert-success', 'Giao hàng thành công');
                _this.getDeliveryRequestByCode(_this.deliveryRequestCode);
            }
            else {
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage('alert-danger', 'Giao hàng thất bại');
        });
    };
    /**
     * Cancel delivery
     */
    MerchandiseDeliveryComponent.prototype.cancelDelivery = function () {
        var _this = this;
        var body = {
            DeliveryRequestCode: this.deliveryRequestCode,
        };
        this.loading = true;
        this.merchandiseServices.cancelDelivery(body).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                // TODO: reload data after success
                _this.showMessage('alert-success', 'Hủy giao thành công');
                _this.getDeliveryRequestByCode(_this.deliveryRequestCode);
            }
            else {
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage('alert-danger', 'Hủy giao thất bại');
        });
    };
    /**
     * Export
     */
    MerchandiseDeliveryComponent.prototype.exportByDeliveryRequest = function () {
        var _this = this;
        var body = {
            DeliveryRequestCode: this.deliveryRequestCode,
        };
        this.loading = true;
        this.warehouseExpService.createWarehouseExpByDeliveryRequest(body).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                // TODO: reload data after success
                _this.showMessage('alert-success', 'Xuất hàng thành công');
                _this.getDeliveryRequestByCode(_this.deliveryRequestCode);
            }
            else {
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage('alert-danger', 'Xuất hàng thất bại');
        });
    };
    /**
     * Cancel Export
     */
    MerchandiseDeliveryComponent.prototype.cancelExp = function () {
        var _this = this;
        var body = {
            WarehouseExpCode: this.deliveryRequest && this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.warehouseExpCode : null,
        };
        this.loading = true;
        this.warehouseExpService.cancelWarehouseExp(body).toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                // TODO: reload data after success
                _this.showMessage('alert-success', 'Hủy xuất hàng thành công');
                _this.getDeliveryRequestByCode(_this.deliveryRequestCode);
            }
            else {
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage('alert-danger', 'Xuất hàng thất bại');
        });
    };
    /**
     * Print bill
     */
    MerchandiseDeliveryComponent.prototype.printExpBill = function () {
        console.log(this.deliveryRequest.deliveryRequestId);
        var printData = {
            expCode: this.deliveryRequest && this.deliveryRequest.warehouseExp ? this.deliveryRequest.warehouseExp.warehouseExpCode : null,
            deliveryRequestCode: this.deliveryRequestCode,
            deliveryRequestId: this.deliveryRequest.deliveryRequestId,
        };
        this.dialog.open(_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__["PrintBillComponent"], {
            data: printData,
            panelClass: 'print-bill-dialog',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MerchandiseDeliveryComponent.prototype, "paginator", void 0);
    MerchandiseDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchandise-delivery',
            template: __webpack_require__(/*! ./merchandise-delivery.component.html */ "./src/app/merchandise/delivery/merchandise-delivery.component.html"),
            styles: [__webpack_require__(/*! ./merchandise-delivery.component.scss */ "./src/app/merchandise/delivery/merchandise-delivery.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_1__["MerchandiseServices"],
            app_services_warehouse_exp_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseExpService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], MerchandiseDeliveryComponent);
    return MerchandiseDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/merchandise/delivery/print-bill/print-bill.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/merchandise/delivery/print-bill/print-bill.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Thanh toán đơn hàng</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div *ngFor=\"let message of messages\" class=\"message alert {{message.messageClass}}\"\r\n       role=\"alert\">{{message.detail}}</div>\r\n  <button ngxPrint printSectionId=\"print-section-form-1\"\r\n          [styleSheetFile]=\"styleSheetFiles\"\r\n          [printDelay]=\"printDelay\"\r\n          mat-button [disabled]=\"loading['exp']\"\r\n          class=\"btn btn-primary d-block w-100 mb-3\">In phiếu xuất hàng</button>\r\n  <button ngxPrint printSectionId=\"print-section-form-2\"\r\n          [styleSheetFile]=\"styleSheetFiles\"\r\n          [printDelay]=\"printDelay\"\r\n          mat-button [disabled]=\"loading['ship']\" class=\"btn btn-primary d-block w-100 mb-3\">In phiếu vận đơn</button>\r\n  <button ngxPrint printSectionId=\"print-section-form-3\"\r\n          [styleSheetFile]=\"styleSheetFiles\"\r\n          [printDelay]=\"printDelay\"\r\n          mat-button [disabled]=\"loading['request']\" class=\"btn btn-primary d-block w-100 mb-3\">In phiếu yêu cầu giao hàng</button>\r\n  <div id=\"print-section-form-1\">\r\n    <div class=\"print-container\">\r\n      <div class=\"page\">\r\n        <div class=\"subpage\">\r\n          <div class=\"form-1\">\r\n            <h1 class=\"text-center text-uppercase\">Phiếu xuất hàng</h1>\r\n            <ngx-barcode [bc-value]=\"expData.warehouseExpCode\" bc-height=\"30\" bc-font-size=\"15\" bc-width=\"1.8\" [bc-display-value]=\"true\"></ngx-barcode>\r\n            <div class=\"info\">\r\n              <div><strong>Loại:</strong> {{expData?.typeDisplay}} </div>\r\n              <div><strong>Kho xuất:</strong> {{expData?.expWarehouseName}} </div>\r\n              <div><strong>Điện thoại:</strong> {{expData?.expWarehousePhone}}</div>\r\n              <div><strong>Địa chỉ:</strong> {{expData?.expWarehouseAddress + (expData? '-' + expData.expWarehouseDistrict: '') + (expData? '-' + expData.expWarehouseCity : '')}}</div>\r\n              <div class=\"text-center\">**************</div>\r\n              <div><strong>Khách hàng:</strong> {{expData?.customerName}} </div>\r\n              <div><strong>Điện thoại:</strong> {{expData?.customerPhone}}</div>\r\n              <div><strong>Địa chỉ:</strong> {{expData?.customerAddress + (expData ? '-' + expData.customerDistrict : '' ) + (expData? '-' + expData.customerCity : '') }}</div>\r\n            </div>\r\n            <div class=\"list\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>Mã hàng</th>\r\n                  <th>Vị trí</th>\r\n                  <th>Trọng lượng</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let mer of expData?.lsDetail\">\r\n                  <td>{{mer.merchandiseCode}}</td>\r\n                  <td>{{mer.shelfPosition}}</td>\r\n                  <td>{{mer.paymentWeight}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"no-border\">{{expData?.lsDetail?.length}} kiện hàng</td>\r\n                  <td class=\"no-border\"></td>\r\n                  <td class=\"no-border\">{{sumExpWeight}} kg</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"print-footer\">\r\n              <div class=\"text-center\">{{APP_NAME}} - Order </div>\r\n              <div class=\"text-center\">Hotline: 03030203023 </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"print-section-form-2\">\r\n    <div class=\"print-container\">\r\n      <div class=\"page\">\r\n        <div class=\"subpage\">\r\n          <div *ngFor=\"let shipDt of shipData\" class=\"form-2\">\r\n            <ngx-barcode [bc-value]=\"shipDt?.shipCode\" bc-height=\"30\" bc-font-size=\"15\" bc-width=\"1.8\" [bc-display-value]=\"true\"></ngx-barcode>\r\n            <div class=\"text-center\">Vận chuyển: <span>{{shipDt?.transporterName}}</span></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"print-section-form-3\">\r\n    <div class=\"print-container\">\r\n      <div class=\"page\">\r\n        <div class=\"subpage\">\r\n          <div class=\"form-3\">\r\n            <h1 class=\"text-center text-uppercase\"> Phiếu yêu cầu giao hàng </h1>\r\n            <ngx-barcode [bc-value]=\"deliveryRequestCode\" bc-height=\"30\" bc-font-size=\"15\" bc-width=\"1.8\" [bc-display-value]=\"true\"></ngx-barcode>\r\n            <div class=\"info\">\r\n              <div><strong>Loại:</strong> {{deliveryRequest.typeDisplay}} </div>\r\n              <div><strong>Khách hàng:</strong> {{deliveryRequest.contactName}} </div>\r\n              <div><strong>Điện thoại:</strong> {{deliveryRequest.contactPhone}} </div>\r\n              <div><strong>Địa chỉ:</strong> {{deliveryRequest.address\r\n              + '-' + deliveryRequest.wardDisplay\r\n              + '-' + deliveryRequest.districtDisplay\r\n              + '-' + deliveryRequest.cityDisplay\r\n              + '-' + deliveryRequest.countryDisplay}}</div>\r\n              <div class=\"text-center\">**************</div>\r\n              <div><strong>Nhà xe:</strong> {{deliveryRequest.vehicleName}} </div>\r\n              <div><strong>Điện thoại:</strong> {{deliveryRequest.vehiclePhone}}</div>\r\n              <div><strong>Địa chỉ:</strong> {{deliveryRequest.vehicleAddress}}</div>\r\n              <div class=\"text-center\">**************</div>\r\n            </div>\r\n            <div class=\"list\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>Mã hàng</th>\r\n                  <th>Vị trí</th>\r\n                  <th>Trọng lượng</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let mer of deliveryRequest.lsDetail\">\r\n                  <td>{{mer.merchandiseCode}}</td>\r\n                  <td>{{mer.shelfPosition}}</td>\r\n                  <td>{{mer.paymentWeight}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"no-border\">{{deliveryRequest.lsDetail?.length}} kiện hàng</td>\r\n                  <td class=\"no-border\"></td>\r\n                  <td class=\"no-border\">{{sumRequestWeight}} kg</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"print-footer\">\r\n              <div class=\"text-center\">{{APP_NAME}} - Order </div>\r\n              <div class=\"text-center\">Hotline: 03030203023 </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close class=\"btn btn-secondary  mr-2\">Hủy</button>\r\n</mat-dialog-actions>\r\n<div class=\"spinner-wrapper\" [hidden]=\"!(loading['exp'] || loading['ship'] || loading['request'])\">\r\n  <div class=\"spinner-container\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/merchandise/delivery/print-bill/print-bill.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/merchandise/delivery/print-bill/print-bill.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .print-bill-dialog {\n  width: 50vw; }\n\n@media screen and (max-width: 768px) {\n  /deep/ .print-bill-dialog {\n    width: 80vw; }\n    /deep/ .print-bill-dialog .mat-dialog-container .mat-dialog-content {\n      padding: 10px; } }\n\n/deep/ .alert-no-bg {\n  border: none !important;\n  background: transparent;\n  color: #d90000; }\n\n/deep/ .print-container {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbmRpc2UvZGVsaXZlcnkvcHJpbnQtYmlsbC9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcbWVyY2hhbmRpc2VcXGRlbGl2ZXJ5XFxwcmludC1iaWxsXFxwcmludC1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksWUFBVyxFQUNaOztBQUNEO0VBSkY7SUFNTSxZQUFXLEVBT1o7SUFiTDtNQVVVLGNBQWEsRUFDZCxFQUFBOztBQVhUO0VBaUJJLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsZUFyQlksRUFzQmI7O0FBcEJIO0VBdUJJLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21lcmNoYW5kaXNlL2RlbGl2ZXJ5L3ByaW50LWJpbGwvcHJpbnQtYmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjX3ByaW1hcnktY29sb3I6ICNmMTU5MjI7XHJcbiRjX2FsZXJ0OiNkOTAwMDA7XHJcblxyXG4vZGVlcC8ge1xyXG4gIC5wcmludC1iaWxsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcmludC1iaWxsLWRpYWxvZyB7XHJcbiAgICAgIHdpZHRoOiA4MHZ3O1xyXG5cclxuICAgICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtbm8tYmcge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAkY19hbGVydDtcclxuICB9XHJcblxyXG4gIC5wcmludC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/merchandise/delivery/print-bill/print-bill.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/merchandise/delivery/print-bill/print-bill.component.ts ***!
  \*************************************************************************/
/*! exports provided: PrintBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintBillComponent", function() { return PrintBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/delivery-request.model */ "./src/app/model/delivery-request.model.ts");
/* harmony import */ var app_services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/print.service */ "./src/app/services/print.service.ts");
/* harmony import */ var app_model_warehouse_exp_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/warehouse-exp.model */ "./src/app/model/warehouse-exp.model.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PrintBillComponent = /** @class */ (function () {
    function PrintBillComponent(dialogData, printService) {
        this.dialogData = dialogData;
        this.printService = printService;
        this.APP_NAME = app_config_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"];
        this.loading = [];
        this.isDisable = [];
        this.expData = new app_model_warehouse_exp_model__WEBPACK_IMPORTED_MODULE_4__["WarehouseExp"]();
        this.deliveryRequest = new app_model_delivery_request_model__WEBPACK_IMPORTED_MODULE_2__["DeliveryRequest"]();
        this.sumExpWeight = 0;
        this.sumRequestWeight = 0;
        this.styleSheetFiles = "/assets/styles/css/print-bill.css";
        this.printDelay = 0;
    }
    PrintBillComponent.prototype.ngOnInit = function () {
        if (this.dialogData.expCode) {
            this.expCode = this.dialogData.expCode;
            this.printWarehouseExp(this.expCode);
        }
        else {
            this.isDisable['exp'] = true;
        }
        if (this.dialogData.deliveryRequestId) {
            this.deliveryRequestId = this.dialogData.deliveryRequestId;
            this.printShipByDeliveryRequest(this.deliveryRequestId);
        }
        else {
            this.isDisable['ship'] = true;
        }
        if (this.dialogData.deliveryRequestCode) {
            this.deliveryRequestCode = this.dialogData.deliveryRequestCode;
            this.printDeliveryRequest(this.deliveryRequestCode);
        }
        else {
            this.isDisable['request'] = true;
        }
    };
    /**
     * Show message
     * @param messageClass = bootstrap alert class
     * @param detail
     */
    PrintBillComponent.prototype.showMessage = function (messageClass, detail) {
        var _this = this;
        this.messages = [];
        this.messages.push({ messageClass: messageClass, detail: detail });
        setTimeout(function () {
            _this.messages = [];
        }, 3000);
    };
    /**
     * Load export print data by exp code
     * @param expCode
     */
    PrintBillComponent.prototype.printWarehouseExp = function (expCode) {
        var _this = this;
        this.loading['exp'] = true;
        this.printService.printWarehouseExp(expCode).toPromise()
            .then(function (res) {
            _this.loading['exp'] = false;
            if (res.result.success) {
                _this.expData = res.result.data;
                _this.sumExpWeight = _this.sumWeightOfExpList();
            }
            else {
                _this.isDisable['exp'] = true;
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading['exp'] = false;
            _this.isDisable['exp'] = true;
            _this.showMessage('alert-danger', 'Không lấy được thông tin phiếu xuất hàng');
        });
    };
    /**
     * Get shipping information
     * @param expCode
     */
    PrintBillComponent.prototype.printShipByDeliveryRequest = function (deliveryRequestId) {
        var _this = this;
        this.loading['ship'] = true;
        this.printService.printShipByDeliveryRequest(deliveryRequestId).toPromise()
            .then(function (res) {
            _this.loading['ship'] = false;
            if (res.result.success) {
                _this.shipData = res.result.data;
            }
            else {
                _this.isDisable['ship'] = true;
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading['ship'] = false;
            _this.isDisable['ship'] = true;
            _this.showMessage('alert-danger', 'Không lấy được thông tin phiếu vận đơn');
        });
    };
    /**
     * Get delivery information
     * @param deliveryCode
     */
    PrintBillComponent.prototype.printDeliveryRequest = function (deliveryCode) {
        var _this = this;
        this.loading['request'] = true;
        this.printService.printDeliveryRequest(deliveryCode).toPromise()
            .then(function (res) {
            _this.loading['request'] = false;
            if (res.result.success) {
                _this.deliveryRequest = res.result.data;
                _this.sumRequestWeight = _this.sumWeightOfRequestList();
            }
            else {
                _this.isDisable['request'] = true;
                _this.showMessage('alert-danger', res.result.message);
            }
        })
            .catch(function () {
            _this.loading['request'] = false;
            _this.isDisable['request'] = true;
            _this.showMessage('alert-danger', 'Không lấy được thông tin phiếu yêu cầu giao hàng');
        });
    };
    /**
     * Sum weight of ls detail
     */
    PrintBillComponent.prototype.sumWeightOfExpList = function () {
        if (this.expData.lsDetail && this.expData.lsDetail.length > 0) {
            return this.expData.lsDetail.reduce(function (a, b) { return a + (parseInt(b['paymentWeight']) || 0); }, 0);
        }
        else {
            return 0;
        }
    };
    /**
     * Sum weight of ls detail
     */
    PrintBillComponent.prototype.sumWeightOfRequestList = function () {
        if (this.deliveryRequest.lsDetail && this.deliveryRequest.lsDetail.length > 0) {
            return this.deliveryRequest.lsDetail.reduce(function (a, b) { return a + (parseInt(b['paymentWeight']) || 0); }, 0);
        }
        else {
            return 0;
        }
    };
    PrintBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-bill',
            template: __webpack_require__(/*! ./print-bill.component.html */ "./src/app/merchandise/delivery/print-bill/print-bill.component.html"),
            styles: [__webpack_require__(/*! ./print-bill.component.scss */ "./src/app/merchandise/delivery/print-bill/print-bill.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, app_services_print_service__WEBPACK_IMPORTED_MODULE_3__["PrintService"]])
    ], PrintBillComponent);
    return PrintBillComponent;
}());



/***/ }),

/***/ "./src/app/merchandise/merchandise.module.ts":
/*!***************************************************!*\
  !*** ./src/app/merchandise/merchandise.module.ts ***!
  \***************************************************/
/*! exports provided: MerchandiseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseModule", function() { return MerchandiseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _merchandise_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merchandise.routing */ "./src/app/merchandise/merchandise.routing.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var app_services_print_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/print.service */ "./src/app/services/print.service.ts");
/* harmony import */ var app_services_warehouse_exp_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/warehouse-exp.service */ "./src/app/services/warehouse-exp.service.ts");
/* harmony import */ var app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/merchandise.services */ "./src/app/services/merchandise.services.ts");
/* harmony import */ var app_services_system_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/system.services */ "./src/app/services/system.services.ts");
/* harmony import */ var _delivery_merchandise_delivery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delivery/merchandise-delivery.component */ "./src/app/merchandise/delivery/merchandise-delivery.component.ts");
/* harmony import */ var _delivery_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delivery/print-bill/print-bill.component */ "./src/app/merchandise/delivery/print-bill/print-bill.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//service



//component


//primeng service


//primeng







var MerchandiseModule = /** @class */ (function () {
    function MerchandiseModule() {
    }
    MerchandiseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_merchandise_routing__WEBPACK_IMPORTED_MODULE_3__["MerchandiseRoutes"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_12__["NgxBarcodeModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_25__["ToastModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__["ProgressSpinnerModule"]
            ],
            declarations: [
                _delivery_merchandise_delivery_component__WEBPACK_IMPORTED_MODULE_17__["MerchandiseDeliveryComponent"],
                _delivery_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_18__["PrintBillComponent"],
            ],
            providers: [
                app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_15__["MerchandiseServices"],
                app_services_warehouse_exp_service__WEBPACK_IMPORTED_MODULE_14__["WarehouseExpService"],
                app_services_print_service__WEBPACK_IMPORTED_MODULE_13__["PrintService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_19__["ConfirmationService"],
                app_services_system_services__WEBPACK_IMPORTED_MODULE_16__["SystemService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_19__["MessageService"]
            ],
            entryComponents: [
                _delivery_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_18__["PrintBillComponent"]
            ]
        })
    ], MerchandiseModule);
    return MerchandiseModule;
}());



/***/ }),

/***/ "./src/app/merchandise/merchandise.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/merchandise/merchandise.routing.ts ***!
  \****************************************************/
/*! exports provided: MerchandiseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseRoutes", function() { return MerchandiseRoutes; });
/* harmony import */ var _delivery_merchandise_delivery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery/merchandise-delivery.component */ "./src/app/merchandise/delivery/merchandise-delivery.component.ts");

var MerchandiseRoutes = [
    {
        path: 'delivery',
        component: _delivery_merchandise_delivery_component__WEBPACK_IMPORTED_MODULE_0__["MerchandiseDeliveryComponent"]
    }
];


/***/ }),

/***/ "./src/app/model/delivery-request.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/delivery-request.model.ts ***!
  \*************************************************/
/*! exports provided: DeliveryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRequest", function() { return DeliveryRequest; });
var DeliveryRequest = /** @class */ (function () {
    function DeliveryRequest() {
    }
    return DeliveryRequest;
}());



/***/ }),

/***/ "./src/app/services/print.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
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





var PrintService = /** @class */ (function (_super) {
    __extends(PrintService, _super);
    function PrintService(http, _router) {
        return _super.call(this, _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].print.controller, http, _router) || this;
    }
    PrintService.prototype.printWarehouseExp = function (expCode) {
        var param = '?expCode=' + expCode;
        return this.get(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].print.printWarehouseExp + '/' + param);
    };
    PrintService.prototype.printShipByDeliveryRequest = function (deliveryRequestId) {
        var param = '?deliveryRequestId=' + deliveryRequestId;
        return this.get(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].print.printShipByDeliveryRequest + '/' + param);
    };
    PrintService.prototype.printDeliveryRequest = function (deliveryCode) {
        var param = '?deliveryCode=' + deliveryCode;
        return this.get(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].print.printDeliveryRequest + '/' + param);
    };
    PrintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PrintService);
    return PrintService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));



/***/ })

}]);
//# sourceMappingURL=merchandise-merchandise-module.js.map