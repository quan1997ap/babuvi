(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8"],{

/***/ "./node_modules/primeng/components/toast/toast.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/components/toast/toast.js ***!
  \********************************************************/
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
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var messageservice_1 = __webpack_require__(/*! ../common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var ToastItem = /** @class */ (function () {
    function ToastItem() {
        this.onClose = new core_1.EventEmitter();
    }
    ToastItem.prototype.ngAfterViewInit = function () {
        this.initTimeout();
    };
    ToastItem.prototype.initTimeout = function () {
        var _this = this;
        if (!this.message.sticky) {
            this.timeout = setTimeout(function () {
                _this.onClose.emit({
                    index: _this.index,
                    message: _this.message
                });
            }, this.message.life || 3000);
        }
    };
    ToastItem.prototype.clearTimeout = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    ToastItem.prototype.onMouseEnter = function () {
        this.clearTimeout();
    };
    ToastItem.prototype.onMouseLeave = function () {
        this.initTimeout();
    };
    ToastItem.prototype.onCloseIconClick = function (event) {
        this.clearTimeout();
        this.onClose.emit({
            index: this.index,
            message: this.message
        });
        event.preventDefault();
    };
    ToastItem.prototype.ngOnDestroy = function () {
        this.clearTimeout();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ToastItem.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ToastItem.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], ToastItem.prototype, "template", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ToastItem.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ToastItem.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ToastItem.prototype, "onClose", void 0);
    __decorate([
        core_1.ViewChild('container'),
        __metadata("design:type", core_1.ElementRef)
    ], ToastItem.prototype, "containerViewChild", void 0);
    ToastItem = __decorate([
        core_1.Component({
            selector: 'p-toastItem',
            template: "\n        <div #container class=\"ui-toast-message ui-shadow\" [@messageState]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\"\n            [ngClass]=\"{'ui-toast-message-info': message.severity == 'info','ui-toast-message-warn': message.severity == 'warn',\n                'ui-toast-message-error': message.severity == 'error','ui-toast-message-success': message.severity == 'success'}\"\n                (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\">\n            <div class=\"ui-toast-message-content\">\n                <a tabindex=\"0\" class=\"ui-toast-close-icon pi pi-times\" (click)=\"onCloseIconClick($event)\" (keydown.enter)=\"onCloseIconClick($event)\" *ngIf=\"message.closable !== false\"></a>\n                <ng-container *ngIf=\"!template\">\n                    <span class=\"ui-toast-icon pi\"\n                        [ngClass]=\"{'pi-info-circle': message.severity == 'info', 'pi-exclamation-triangle': message.severity == 'warn',\n                            'pi-times': message.severity == 'error', 'pi-check' :message.severity == 'success'}\"></span>\n                    <div class=\"ui-toast-message-text-content\">\n                        <div class=\"ui-toast-summary\">{{message.summary}}</div>\n                        <div class=\"ui-toast-detail\">{{message.detail}}</div>\n                    </div>\n                </ng-container>\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: message}\"></ng-container>\n            </div>\n        </div>\n    ",
            animations: [
                animations_1.trigger('messageState', [
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateY(100%)', opacity: 0 }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            height: 0,
                            opacity: 0,
                            transform: 'translateY(-100%)'
                        }))
                    ])
                ])
            ]
        })
    ], ToastItem);
    return ToastItem;
}());
exports.ToastItem = ToastItem;
var Toast = /** @class */ (function () {
    function Toast(messageService) {
        this.messageService = messageService;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.position = 'top-right';
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.onClose = new core_1.EventEmitter();
    }
    Toast.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
            if (messages) {
                if (messages instanceof Array) {
                    var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                    _this.messages = _this.messages ? _this.messages.concat(filteredMessages) : filteredMessages.slice();
                }
                else if (_this.key === messages.key) {
                    _this.messages = _this.messages ? _this.messages.concat([messages]) : [messages];
                }
                if (_this.modal && _this.messages && _this.messages.length) {
                    _this.enableModality();
                }
            }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
            if (key) {
                if (_this.key === key) {
                    _this.messages = null;
                }
            }
            else {
                _this.messages = null;
            }
            if (_this.modal) {
                _this.disableModality();
            }
        });
    };
    Toast.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'message':
                    _this.template = item.template;
                    break;
                default:
                    _this.template = item.template;
                    break;
            }
        });
    };
    Toast.prototype.onMessageClose = function (event) {
        this.messages.splice(event.index, 1);
        if (this.messages.length === 0) {
            this.disableModality();
        }
        this.onClose.emit({
            message: event.message
        });
    };
    Toast.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
            var maskStyleClass = 'ui-widget-overlay ui-dialog-mask';
            domhandler_1.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
            document.body.appendChild(this.mask);
        }
    };
    Toast.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
    };
    Toast.prototype.onAnimationStart = function (event) {
        if (event.fromState === 'void' && this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
        }
    };
    Toast.prototype.ngOnDestroy = function () {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
        this.disableModality();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Toast.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Toast.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Toast.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Toast.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Toast.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Toast.prototype, "position", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Toast.prototype, "modal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Toast.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Toast.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Toast.prototype, "onClose", void 0);
    __decorate([
        core_1.ViewChild('container'),
        __metadata("design:type", core_1.ElementRef)
    ], Toast.prototype, "containerViewChild", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Toast.prototype, "templates", void 0);
    Toast = __decorate([
        core_1.Component({
            selector: 'p-toast',
            template: "\n        <div #container [ngClass]=\"{'ui-toast ui-widget': true, \n                'ui-toast-top-right': position === 'top-right',\n                'ui-toast-top-left': position === 'top-left',\n                'ui-toast-bottom-right': position === 'bottom-right',\n                'ui-toast-bottom-left': position === 'bottom-left',\n                'ui-toast-top-center': position === 'top-center',\n                'ui-toast-bottom-center': position === 'bottom-center',\n                'ui-toast-center': position === 'center'}\" \n                [ngStyle]=\"style\" [class]=\"styleClass\">\n            <p-toastItem *ngFor=\"let msg of messages; let i=index\" [message]=\"msg\" [index]=\"i\" (onClose)=\"onMessageClose($event)\"\n                    [template]=\"template\" @toastAnimation (@toastAnimation.start)=\"onAnimationStart($event)\" [showTransitionOptions]=\"showTransitionOptions\" [hideTransitionOptions]=\"hideTransitionOptions\"></p-toastItem>\n        </div>\n    ",
            animations: [
                animations_1.trigger('toastAnimation', [
                    animations_1.transition(':enter, :leave', [
                        animations_1.query('@*', animations_1.animateChild())
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [messageservice_1.MessageService])
    ], Toast);
    return Toast;
}());
exports.Toast = Toast;
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    ToastModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Toast, shared_1.SharedModule],
            declarations: [Toast, ToastItem]
        })
    ], ToastModule);
    return ToastModule;
}());
exports.ToastModule = ToastModule;
//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./node_modules/primeng/toast.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/toast.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/toast/toast */ "./node_modules/primeng/components/toast/toast.js"));

/***/ }),

/***/ "./src/app/services/system.services.ts":
/*!*********************************************!*\
  !*** ./src/app/services/system.services.ts ***!
  \*********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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







var SystemService = /** @class */ (function (_super) {
    __extends(SystemService, _super);
    function SystemService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.controller, http, _router) || this;
    }
    SystemService.prototype.getAllWarehouse = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getAllWarehouse);
    };
    SystemService.prototype.getWarehouseImpStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getWarehouseImpStatus);
    };
    SystemService.prototype.getWarehouseExpStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getWarehouseExpStatus);
    };
    SystemService.prototype.getInfoRating = function (userId) {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getVerticalMenu + '?userId=' + userId);
    };
    SystemService.prototype.GetPaymentStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getPaymentStatus);
    };
    SystemService.prototype.getType = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getWalletTransactionsType);
    };
    SystemService.prototype.GetReceiptType = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getReceiptType);
    };
    SystemService.prototype.GetReasion = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getReasion);
    };
    SystemService.prototype.GetPaymentType = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getPaymentType);
    };
    SystemService.prototype.GetReceiptStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getReceiptStatus);
    };
    SystemService.prototype.GetUserStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getUserStatus);
    };
    SystemService.prototype.getOrderStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getOrderStatus);
    };
    SystemService.prototype.getComplainStatus = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getComplainStatus).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getComplainTypes = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getComplainType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getListSex = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getListSex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getListLevel = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getListLevel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getAttachFileType = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getAttachFileType);
    };
    SystemService.prototype.getAllCountry = function () {
        return this.get(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].system.getCountry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getAreaByParent = function (parentId) {
        return this.get(this.apiBaseController + 'getAreaByParent?parentId=' + parentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getWarehouseVN = function () {
        // kho nhận hàng
        return this.get(this.apiBaseController + 'getWarehouseVN').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getListConsignmentWarehouse = function () {
        // kho kí gửi
        return this.get(this.apiBaseController + 'getConsignmentWarehouse').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService.prototype.getShippingType = function () {
        // danh sách thông tin khai báo
        return this.get(this.apiBaseController + 'getShippingType').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.message === 'successful') {
                // success -->
                return res.result.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('cant get');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    };
    SystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SystemService);
    return SystemService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ })

}]);
//# sourceMappingURL=default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8.js.map