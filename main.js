(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./custom-pages/pages.module": [
		"./src/app/custom-pages/pages.module.ts",
		"custom-pages-pages-module"
	],
	"./dashboard/admin-manager.module": [
		"./src/app/dashboard/admin-manager.module.ts",
		"dashboard-admin-manager-module"
	],
	"./ecommerce/ecommerce.module": [
		"./src/app/ecommerce/ecommerce.module.ts",
		"ecommerce-ecommerce-module"
	],
	"./merchandise/merchandise.module": [
		"./src/app/merchandise/merchandise.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~e536ab83",
		"default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~user-users-module",
		"default~merchandise-merchandise-module~warehouseimp-warehouse-imp-module",
		"common",
		"merchandise-merchandise-module"
	],
	"./order-consignment/order-consignment.module": [
		"./src/app/order-consignment/order-consignment.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~e536ab83",
		"default~order-consignment-order-consignment-module~session-session-module~ship-manager-ship-manager-~37e9d644",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~user-users-module",
		"default~order-consignment-order-consignment-module~ship-manager-ship-manager-module",
		"common",
		"order-consignment-order-consignment-module"
	],
	"./session/session.module": [
		"./src/app/session/session.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~e536ab83",
		"default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8",
		"default~order-consignment-order-consignment-module~session-session-module~ship-manager-ship-manager-~37e9d644",
		"default~session-session-module~ship-manager-ship-manager-module~user-users-module",
		"default~session-session-module~ship-manager-ship-manager-module~warehouseimp-warehouse-imp-module",
		"default~session-session-module~ship-manager-ship-manager-module",
		"common",
		"session-session-module"
	],
	"./ship-manager/ship-manager.module": [
		"./src/app/ship-manager/ship-manager.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~e536ab83",
		"default~order-consignment-order-consignment-module~session-session-module~ship-manager-ship-manager-~37e9d644",
		"default~session-session-module~ship-manager-ship-manager-module~user-users-module",
		"default~session-session-module~ship-manager-ship-manager-module~warehouseimp-warehouse-imp-module",
		"default~session-session-module~ship-manager-ship-manager-module",
		"default~order-consignment-order-consignment-module~ship-manager-ship-manager-module",
		"common",
		"ship-manager-ship-manager-module"
	],
	"./space/chartlib.module": [
		"./src/app/space/chartlib.module.ts",
		"default~space-chartlib-module~user-users-module",
		"common",
		"space-chartlib-module"
	],
	"./support/tables.module": [
		"./src/app/support/tables.module.ts",
		"support-tables-module"
	],
	"./user/users.module": [
		"./src/app/user/users.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~e536ab83",
		"default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8",
		"default~order-consignment-order-consignment-module~session-session-module~ship-manager-ship-manager-~37e9d644",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~user-users-module",
		"default~session-session-module~ship-manager-ship-manager-module~user-users-module",
		"default~space-chartlib-module~user-users-module",
		"common",
		"user-users-module"
	],
	"./warehouseexp/warehouse-exp.module": [
		"./src/app/warehouseexp/warehouse-exp.module.ts",
		"common",
		"warehouseexp-warehouse-exp-module"
	],
	"./warehouseimp/warehouse-imp.module": [
		"./src/app/warehouseimp/warehouse-imp.module.ts",
		"default~merchandise-merchandise-module~order-consignment-order-consignment-module~session-session-mo~4313f658",
		"default~merchandise-merchandise-module~session-session-module~user-users-module~warehouseimp-warehou~9e21fda8",
		"default~session-session-module~ship-manager-ship-manager-module~warehouseimp-warehouse-imp-module",
		"default~merchandise-merchandise-module~warehouseimp-warehouse-imp-module",
		"common",
		"warehouseimp-warehouse-imp-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    //thêm load script zalo trong phần component để khi click menu sẽ hiện luôn nút quan tâm mà không phải load lại
    AppComponent.prototype.ngOnInit = function () {
        //this.loadScript('https://sp.zalo.me/plugins/sdk.js');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_messages_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/messages-utils.service */ "./src/app/services/messages-utils.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_common_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_demo_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/demo.module */ "./src/app/shared/demo.module.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _common_share_common_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/share-common.module */ "./src/app/common/share-common.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_lstClient_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/lstClient.service */ "./src/app/services/lstClient.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _services_pass_data_services__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/pass-data.services */ "./src/app/services/pass-data.services.ts");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/common/AuthGuard */ "./src/app/services/common/AuthGuard.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _common_func_data_parse__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./common-func/data-parse */ "./src/app/common-func/data-parse.ts");
/* harmony import */ var _services_common_checkAuthToken_services__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/common/checkAuthToken.services */ "./src/app/services/common/checkAuthToken.services.ts");
/* harmony import */ var _services_common_AuthChildGuard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/common/AuthChildGuard */ "./src/app/services/common/AuthChildGuard.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/interceptor.service */ "./src/app/services/interceptor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























//Component
















// RequestInterceptor


function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_26__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_27__["AuthLayoutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_24__["AppRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _shared_demo_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HttpClient"]]
                    }
                }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_32__["NgxDatatableModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_40__["ConfirmDialogModule"],
                _common_share_common_module__WEBPACK_IMPORTED_MODULE_28__["ShareCommonModule"]
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_41__["ConfirmationService"],
                _services_messages_utils_service__WEBPACK_IMPORTED_MODULE_0__["MessagesUtilsService"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
                _common_func_data_parse__WEBPACK_IMPORTED_MODULE_37__["DataParse"],
                _services_common_service__WEBPACK_IMPORTED_MODULE_31__["CommonService"],
                _services_common_auth_service__WEBPACK_IMPORTED_MODULE_34__["AuthService"],
                _services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"],
                _services_common_AuthChildGuard__WEBPACK_IMPORTED_MODULE_39__["AuthChildGuard"],
                _services_common_checkAuthToken_services__WEBPACK_IMPORTED_MODULE_38__["CheckAuthToken"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HTTP_INTERCEPTORS"],
                    useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_42__["RequestInterceptor"],
                    multi: true
                },
                _services_lstClient_service__WEBPACK_IMPORTED_MODULE_30__["LstClientService"],
                _services_pass_data_services__WEBPACK_IMPORTED_MODULE_33__["PassDataService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_36__["LoginService"],
                _services_common_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
            ],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common/AuthGuard */ "./src/app/services/common/AuthGuard.ts");



var AppRoutes = [{
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: 'ship-manager',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './ship-manager/ship-manager.module#ShipManagerModule'
            }, {
                path: 'admin-tool',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './dashboard/admin-manager.module#AdminManagerModule'
            },
            {
                path: 'tables',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './support/tables.module#TablesModule'
            }, {
                path: 'space',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './space/chartlib.module#ChartlibModule'
            }, {
                path: 'pages',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './custom-pages/pages.module#PagesDemoModule'
            }, {
                path: 'user',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './user/users.module#UsersModule'
            }, {
                path: 'ecommerce',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './ecommerce/ecommerce.module#EcommerceDemoModule'
            },
            {
                path: 'merchandise',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './merchandise/merchandise.module#MerchandiseModule'
            },
            {
                path: 'warehouseimp',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './warehouseimp/warehouse-imp.module#WarehouseImpModule'
            },
            {
                path: 'warehouseexp',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './warehouseexp/warehouse-exp.module#WarehouseExpModule'
            },
            {
                path: 'order-consignment',
                canActivate: [_services_common_AuthGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                loadChildren: './order-consignment/order-consignment.module#OrderConsignmentModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'authentication',
                // canActivate: [AuthChildGuard],
                loadChildren: './session/session.module#SessionModule'
            }]
    }, {
        path: '**',
        redirectTo: 'session/404'
    }];


/***/ }),

/***/ "./src/app/common-func/data-parse.ts":
/*!*******************************************!*\
  !*** ./src/app/common-func/data-parse.ts ***!
  \*******************************************/
/*! exports provided: DataParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataParse", function() { return DataParse; });
var DataParse = /** @class */ (function () {
    function DataParse() {
    }
    DataParse.prototype.formatMoney = function (num) {
        return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    };
    return DataParse;
}());



/***/ }),

/***/ "./src/app/common/InfiniteScrollDirective.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/InfiniteScrollDirective.directive.ts ***!
  \*************************************************************/
/*! exports provided: InfiniteScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective(element) {
        this.element = element;
    }
    InfiniteScrollDirective.prototype.onScroll = function () {
        var scrolled = this.element.nativeElement.scrollTop;
        var height = this.element.nativeElement.offsetHeight;
        console.log(height);
        // // if we have reached the threshold and we scroll down
        // if (height - scrolled < this.scrollThreshold) {
        this.loadMore();
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InfiniteScrollDirective.prototype, "scrollThreshold", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('infiniteScroll'),
        __metadata("design:type", Object)
    ], InfiniteScrollDirective.prototype, "loadMore", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InfiniteScrollDirective.prototype, "onScroll", null);
    InfiniteScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[infiniteScroll]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InfiniteScrollDirective);
    return InfiniteScrollDirective;
}());



/***/ }),

/***/ "./src/app/common/format-date.adapter.ts":
/*!***********************************************!*\
  !*** ./src/app/common/format-date.adapter.ts ***!
  \***********************************************/
/*! exports provided: FormatDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDateAdapter", function() { return FormatDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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

var FormatDateAdapter = /** @class */ (function (_super) {
    __extends(FormatDateAdapter, _super);
    function FormatDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatDateAdapter.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    FormatDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat == "input") {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else if (displayFormat == "inputMonth") {
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(month) + '/' + year;
        }
        else {
            return date.toDateString();
        }
    };
    FormatDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return FormatDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: 'inputMonth',
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/common/number.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/common/number.pipe.ts ***!
  \***************************************/
/*! exports provided: NumberFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatPipe", function() { return NumberFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberFormatPipe = /** @class */ (function () {
    function NumberFormatPipe() {
    }
    NumberFormatPipe.prototype.transform = function (value) {
        return this.localeString(value);
    };
    NumberFormatPipe.prototype.missingOneDecimalCheck = function (nStr) {
        nStr += '';
        var x = nStr.split(',')[1];
        if (x && x.length === 1)
            return true;
        return false;
    };
    NumberFormatPipe.prototype.missingAllDecimalsCheck = function (nStr) {
        nStr += '';
        var x = nStr.split(',')[1];
        if (!x)
            return true;
        return false;
    };
    NumberFormatPipe.prototype.localeString = function (nStr) {
        if (nStr === '')
            return '';
        var x, x1, x2, rgx, y1, y2;
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? ',' + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        /** If value was inputed by user, it could have many decimals(up to 7)
            so we need to reformat previous x1 results */
        if (x1.indexOf(',') !== -1) {
            y1 = x1.slice(x1.lastIndexOf(',')).replace(/\./g, '');
            y2 = x1.split(',');
            x = y2[0] + y1;
        }
        else {
            x = x1 + x2;
            if (this.missingOneDecimalCheck(x))
                return x += '0';
            if (this.missingAllDecimalsCheck(x))
                return x;
        }
        return x;
    };
    NumberFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'numberFormat'
        })
    ], NumberFormatPipe);
    return NumberFormatPipe;
}());



/***/ }),

/***/ "./src/app/common/pipe-china-money.component.ts":
/*!******************************************************!*\
  !*** ./src/app/common/pipe-china-money.component.ts ***!
  \******************************************************/
/*! exports provided: CurrencyFormatChina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatChina", function() { return CurrencyFormatChina; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormatChina = /** @class */ (function () {
    function CurrencyFormatChina() {
    }
    CurrencyFormatChina.prototype.transform = function (value, chunkLength) {
        if (chunkLength === void 0) { chunkLength = 3; }
        if (value) {
            var num = Number(value);
            var p = num.toFixed(2).split(".");
            //nếu số phần nghìn là 00 thì không hiển thị số phần nghìn
            if (p[1] == '00') {
                p[1] = "";
            }
            else {
                p[1] = "," + p[1];
            }
            return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
                return num == "-" ? "-" + acc : num + (i && !(i % chunkLength) ? "." : "") + acc;
            }, "") + p[1];
        }
        else {
            return '0';
        }
    };
    CurrencyFormatChina = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currencyChina'
        })
    ], CurrencyFormatChina);
    return CurrencyFormatChina;
}());



/***/ }),

/***/ "./src/app/common/pipe-format-money.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/pipe-format-money.component.ts ***!
  \*******************************************************/
/*! exports provided: CurrencyFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormat", function() { return CurrencyFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFormat = /** @class */ (function () {
    function CurrencyFormat() {
    }
    CurrencyFormat.prototype.transform = function (value, currencySign, decimalLength, chunkDelimiter, decimalDelimiter, chunkLength) {
        if (currencySign === void 0) { currencySign = ''; }
        if (decimalLength === void 0) { decimalLength = 0; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (chunkLength === void 0) { chunkLength = 3; }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = Number(value).toFixed(Math.max(0, ~~decimalLength));
        //console.log((decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter) + currencySign);
        return (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter) + currencySign;
    };
    CurrencyFormat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currencyFormat'
        })
    ], CurrencyFormat);
    return CurrencyFormat;
}());



/***/ }),

/***/ "./src/app/common/share-common.module.ts":
/*!***********************************************!*\
  !*** ./src/app/common/share-common.module.ts ***!
  \***********************************************/
/*! exports provided: ShareCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCommonModule", function() { return ShareCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipe_format_money_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe-format-money.component */ "./src/app/common/pipe-format-money.component.ts");
/* harmony import */ var _number_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.pipe */ "./src/app/common/number.pipe.ts");
/* harmony import */ var _InfiniteScrollDirective_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfiniteScrollDirective.directive */ "./src/app/common/InfiniteScrollDirective.directive.ts");
/* harmony import */ var _pipe_china_money_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe-china-money.component */ "./src/app/common/pipe-china-money.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _format_date_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format-date.adapter */ "./src/app/common/format-date.adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShareCommonModule = /** @class */ (function () {
    function ShareCommonModule() {
    }
    ShareCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _pipe_format_money_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyFormat"],
                _number_pipe__WEBPACK_IMPORTED_MODULE_2__["NumberFormatPipe"],
                _InfiniteScrollDirective_directive__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"],
                _pipe_china_money_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyFormatChina"],
            ],
            exports: [
                _pipe_format_money_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyFormat"],
                _number_pipe__WEBPACK_IMPORTED_MODULE_2__["NumberFormatPipe"],
                _InfiniteScrollDirective_directive__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"],
                _pipe_china_money_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyFormatChina"],
            ],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _format_date_adapter__WEBPACK_IMPORTED_MODULE_6__["FormatDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: _format_date_adapter__WEBPACK_IMPORTED_MODULE_6__["APP_DATE_FORMATS"]
                }
            ]
        })
    ], ShareCommonModule);
    return ShareCommonModule;
}());



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: Module, ApiBaseUrl, APP_NAME, MessageType, ApDomainType, paging, usersetting, ShiftStatus, ReceiptStatus, PageSize, ApiApplication, NavigateRouting, HttpStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBaseUrl", function() { return ApiBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApDomainType", function() { return ApDomainType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paging", function() { return paging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersetting", function() { return usersetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftStatus", function() { return ShiftStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptStatus", function() { return ReceiptStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSize", function() { return PageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiApplication", function() { return ApiApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateRouting", function() { return NavigateRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpStatus", function() { return HttpStatus; });
var Module = "babuvi";
// export const ApiBaseUrl = "https:backendhuy.babuvi.com/api/";
var ApiBaseUrl = "https:backendhuy.babuvi.com/api/";
//export const ApiBaseUrl = "http://localhost:5000/api/";
var APP_NAME = "Babuvi";
var MessageType = {
    Default: "default",
    Info: "info",
    Success: "success",
    Wait: "wait",
    Error: "error",
    Warning: "warning",
};
var ApDomainType = {
    AllType: "00",
    UserSetting: "01",
    LevelUser: "02",
    UserType: "03",
    ReceiptType: "04",
    PaymentType: "05",
    ReceiptStatus: "06",
    OrderStatus: "07",
    SystemSetting: "08",
    TaskType: "09",
    TaskStatus: "10",
    AssignStatus: "11",
    CartItemStatus: "12",
    PaymentStatus: "13",
    OrderType: "14",
    WalletTransactionsType: "15",
    StatusBasic: "16",
    AmGenCodeType: "17",
    WithdrawalRequestStatus: "18",
    IsDefault: "19",
    FeeType: "20",
    ExchangeRateType: "21",
    ShippingType: "22",
    OrderSource: "23",
    MerchandiseWarehouseStatus: "24",
    ServiceGroupType: "25",
    IsOption: "26",
    Reasion: "27",
    IsAdmin: "28",
    WarehouseLocation: "29",
    UserStatus: "30",
    ControlType: "31",
    ChatRole: "32",
    TransactionStatus: "33",
    AreaType: "34",
    SymbolsLocation: "35",
    ComplainStatus: "36",
    ComplainType: "37",
    MerchandiseType: "38",
    DeliveryRequestType: "39",
    ServiceLocationDisplay: "40",
    WarehouseImpStatus: "41",
    WarehouseImpType: "42",
    DeliveryRequestStatus: "43",
    AttachFileType: "44",
    WarehouseExpStatus: "45",
    WarehouseExpType: "46",
    CompanyProfile: "47",
    ShipmentStatus: "48",
    ShipmentType: "49",
    WarehouseExpDetailStatus: "50",
};
var paging = {
    perPage: 15,
    page: 1,
};
var usersetting = {
    Kho_Nhan_Hang: "1",
    Level: "2",
    CareStaff: "3",
    OrderStaff: "4",
    DeliveryAddressDefault: "5",
    Ty_Le_Quy_Doi_Can_Nang: "6",
};
var ShiftStatus = {
    STATUS_APPROVED: 1,
    STATUS_WAITING_APPROVE: 2,
    STATUS_EDIT_REQUESTED: 3,
    STATUS_DELETE_REQUESTED: 4,
};
var ReceiptStatus = {
    CHOXACNHAN: 1,
    XACNHAN: 2,
    HUY: 3,
};
var PageSize = 20;
var ApiApplication = {
    lstUserItem: {
        controller: ApiBaseUrl + "user/",
        lstUser: "getListUserCustomer/",
        page: "page",
        perPage: "perPage",
        common: ApiBaseUrl + "control/",
        actionAccess: "controlInForm?",
        actionParam1: "usercode",
        actionParam2: "path",
    },
    common: {
        menuUser: ApiBaseUrl + "control/menuUserCode/15682",
    },
    login: ApiBaseUrl + "user/login",
    logout: ApiBaseUrl + "user/logout",
    infoUser: ApiBaseUrl + "user/getUserById/",
    walletByUserId: ApiBaseUrl + "wallet/getWalletByUserId/",
    page: "page",
    perPage: "perPage",
    userId: "userId",
    lServiceId: "lServiceId",
    lCartId: "lCartId",
    lCartServiceId: "lCartServiceId",
    lCartItemId: "lCartItemId",
    deliveryAddressId: "deliveryAddressId",
    clientAppCode: "exo-r9045HKopew8mnGj",
    //api/Extension/
    Extension: {
        controller: ApiBaseUrl + "Extension",
        exchangerate: "exchangerate",
    },
    receipt: {
        controller: ApiBaseUrl + "Receipt",
    },
    right: {
        controller: ApiBaseUrl + "Right",
        getListRight: "getListRight",
    },
    receiptTopup: {
        controller: ApiBaseUrl + "Receipt/lsReceiptTopup/",
        page: "page",
        perPage: "perPage",
        destroy: ApiBaseUrl + "wallet/destroyTopup/",
    },
    ODER_DETAIL: {
        get: ApiBaseUrl + "Order/getDataOrderFull/",
        chat: ApiBaseUrl + "Order/addNewChat",
    },
    shipManager: {
        controller: ApiBaseUrl + "order",
        // allOrder: 'allorder/',
        cancelOrder: "customerCancelOrder",
        searchOrderManager: "searchOrderManager",
        searchOrder: "searchOrder",
        searchOrderConsignment: "searchOrderConsignment",
    },
    cart: {
        controller: ApiBaseUrl + "cart",
        getCountry: ApiBaseUrl + "System/GetCountry/",
        getAreaOther: ApiBaseUrl + "System/getAreaByParent/",
        lstAllServicesOption: "getLsServiceOrder/",
        lstCart: "getListCart/",
        addFeeServices: "CalFeeInCart",
        delPriceServices: "deleteCartServiceById",
        deleteShopItem: "deleteShopItem",
        deleteShop: "deleteShop",
        getListDeliveryAddressByUserId: "getListDeliveryAddressByUserId",
        addDeliveryAddress: "addDeliveryAddress/",
        deactiveDeliveryAddressById: "deactiveDeliveryAddressById",
        DepositListOrder: "DepositListOrder/",
        getAllArea: "getAllArea",
        depositLsProduct: "depositLsProduct",
        UpdateNoteItem: "UpdateNoteItem/",
        UpdateNoteCart: "UpdateNoteCart/",
        UpdateQuanlity: "UpdateQuantity/",
        updateDeliveryAddress: "updateDeliveryAddress/",
        AddToCartBasic: "AddToCartBasic",
    },
    task: {
        controller: ApiBaseUrl + "task",
    },
    fileManager: {
        controller: ApiBaseUrl + "fileManager",
        upLoadImageOneDrive: "upLoadImageOneDrive",
        upLoadAttachFileOneDrive: "upLoadAttachFileOneDrive",
    },
    compplain: {
        controller: ApiBaseUrl + "complain",
    },
    // Use for Merchandise Component
    merchandise: {
        controller: ApiBaseUrl + "Merchandise",
        addMerchandise: "addmerchandise/",
        getMerchandiseViewModel: "getmerchandiseviewmodel/",
        getMerchandiseHistory: "getmerchandisehistory/",
        deleteMerchandise: "deleteLsMerchandise/",
        countSumMerchandiseInWarehouse: "countSumMerchandiseInWarehouse/",
        getMerchandiseInWarehouse: "getMerchandiseInWarehouse/",
        getMerchandiseInWarehouseManager: "getMerchandiseInWarehouseManager/",
        getLsMerchandiseByMWId: "GetLsMerchandiseByMWId/",
        addDeliveryRequest: "adddeliveryrequest/",
        getDeliveryRequestByCode: "getDeliveryRequestByCode",
        createPackage: "createPackage/",
        sendDelivery: "sendDelivery/",
        cancelDelivery: "cancelDelivery/",
        getDeliveryAddressDefault: "getDeliveryAddressDefault/",
        getLsMerchandiseInWhByOrderId: "getLsMerchandiseInWhByOrderId/",
        getMerchandiseByCode: "getMerchandiseByCode/",
        //quandev
        startHandleDeliveryRequest: "/startHandleDeliveryRequest/",
        finishHandleDeliveryRequest: "/finishHandleDeliveryRequest/",
        cancelHandleDeliveryRequest: "/cancelHandleDeliveryRequest",
        changeStatusDeliveryRequestDetail: "/changeStatusDeliveryRequestDetail",
    },
    system: {
        controller: ApiBaseUrl + "system",
        getOrderStatus: "getorderstatus/",
        getWarehouseImpStatus: "getWarehouseImpStatus/",
        getWarehouseExpStatus: "getWarehouseExpStatus/",
        getAllWarehouse: "getallwarehouse",
        getDeliveryRequestType: "getDeliveryRequestType",
        getAllArea: "getallarea",
        GetCountry: "getcountry",
        getAreaByParent: "getareabyparent",
        getVerticalMenu: "getVerticalMenu",
        getWarehouseVN: "getWarehouseVN/",
        getPaymentType: "getPaymentType/",
        getPaymentStatus: "getPaymentStatus/",
        getWalletTransactionsType: "getWalletTransactionsType/",
        getReceiptType: "getReceiptType",
        getReasion: "getReasion",
        getReceiptStatus: "getReceiptStatus",
        getComplainStatus: "getComplainStatus",
        getComplainType: "getComplainType",
        getListSex: "getListSex",
        getCountry: "getCountry",
        getListLevel: "getListLevel",
        getAttachFileType: "getAttachFileType",
        getUserStatus: "getUserStatus",
    },
    order: {
        controller: ApiBaseUrl + "order",
        completeAddMerchandise: "completeaddmerchandise/",
        getOrderViewModelById: "getOrderViewModelById",
        payListOrder: "paylistorder",
        getOrderBuy: "getorderbuy/",
        addNewOrderService: "addNewOrderService",
        deleteOrderService: "deleteOrderService",
        saveOrderAfterBuy: "saveorderafterbuy",
        completedBuyOrder: "completedbuyorder",
        editOrderAfterCompleted: "editOrderAfterCompleted",
        orderBuyRework: "orderBuyRework",
        orderFinish: "orderFinish",
        startBuy: "startbuy",
        getLsOrderPay: "getlsorderpay",
        sumMissingAmount: "sumMissingAmount",
        staffCancelOrder: "staffCancelOrder",
        cancelOrderAfterBuy: "cancelOrderAfterBuy",
    },
    warehouse: {
        controller: ApiBaseUrl + "warehouse",
        saveWarehouseImp: "savewarehouseimp",
        completeWarehouseImp: "completewarehouseimp",
        getWarehouseExpByCode: "getwarehouseexpbycode",
        getWarehouseImpViewById: "getwarehouseimpviewbyid",
        deleteLsImpDetail: "deletelsimpdetail",
        createWarehouseExpByDeliveryRequest: "createWarehouseExpByDeliveryRequest/",
        cancelWarehouseExp: "cancelWarehouseExp/",
        saveWarehouseExp: "saveWarehouseExp",
        getWarehouseExpById: "getWarehouseExpById",
        deleteLsExpDetail: "deleteLsExpDetail",
        completeWarehouseExp: "completeWarehouseExp",
    },
    user: {
        controller: ApiBaseUrl + "user",
        getListStorekeeperInWarehouse: "getliststorekeeperinwarehouse",
        regUserCustomer: "regUserCustomer/",
        addOrUpdateUserCustomer: "addOrUpdateUserCustomer",
        refreshToken: "/refreshToken",
        getUserById: "getUserById",
        changePass: "changePass",
        getInfoUser: "getInfoUser",
        getInfoUserById: "getInfoUserById",
        getListUserStaff: "getListUserStaff",
        comfirmFollowZalo: "comfirmFollowZalo",
        CheckConnectedZalo: "CheckConnectedZalo",
        SearchUserCustomer: "searchUserCustomer",
    },
    wallet: {
        controller: ApiBaseUrl + "wallet",
        //load số tiền trong ví
        getWalletInforById: "getWalletInforById/",
        //Hàm load danh sách giao dịch
        getWalletTransaction: "getWalletTransaction/",
        getWalletByUserId: "getWalletByUserId",
        getTopupCode: "getTopupCode",
        Topup: "Topup",
        searchWalletTransaction: "searchWalletTransaction/",
    },
    print: {
        controller: ApiBaseUrl + "print",
        printWarehouseExp: "printWarehouseExp",
        printDeliveryRequest: "printDeliveryRequest",
        printShipByDeliveryRequest: "printShipByDeliveryRequest",
    },
};
var NavigateRouting = {
    Relative: "relative",
    Admin: "admin",
    ChooseCompany: "choose-company",
    NotFound: "404",
};
var HttpStatus = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    AMBIGUOUS: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    I_AM_A_TEAPOT: 418,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
};


/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-wrapper\" *ngIf=\"loading\" style=\"z-index: 1000;\">\r\n   <div class=\"bg-spiner w100 h100\" ></div>\r\n   <div class=\"spinner-container w100 h100\">\r\n       <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"app search-i\" [dir]=\"layoutDir\"\r\n   [ngClass]=\"[ menuLayout, selectedSidebarImage, selectedSidebarColor, selectedHeaderColor, collapsedClass]\"\r\n   [class.app-dark]=\"dark\" [class.boxed]=\"boxed\" [class.collapsed-sidebar]=\"collapseSidebar\"\r\n   [class.compact-sidebar]=\"compactSidebar\" [class.bg-img-disable]=\"!sidebarBg\">\r\n   <mat-sidenav-container class=\"app-inner\">\r\n      <mat-sidenav #sidemenu class=\"sidebar-panel\" id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\"\r\n         [opened]=\"!isOver()\" (mouseover)=\"menuMouseOver()\" (mouseout)=\"menuMouseOut()\">\r\n      <div class=\"opt-side relative \">\r\n         <div class=\"sidebar-container \">\r\n            <div class=\"branding text-center\">\r\n               <!-- <h2><i class=\"fa fa-superpowers\" aria-hidden=\"true\"></i> <span> Ricohc</span>\r\n               </h2> -->\r\n               <img  src=\"assets/babuvi.png\"  />\r\n            </div>\r\n            <div class=\"main-nav\">\r\n               <mat-nav-list appAccordion class=\"navigation relative\">\r\n                  <mat-list-item appAccordionLink *ngFor=\"let menuitem of _menu\">\r\n                     <a appAccordionToggle class=\"relative\" mat-ripple\r\n                     *ngIf=\"menuitem.type === 'link'\"\r\n                     [routerLink]=\"menuitem.state == null|| menuitem.state.indexOf('http') == 0 ?[]:'/'+menuitem.state\" \r\n                     (click)=\"goToExternalUrl(menuitem.state)\">\r\n                     <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n                     <span>{{ menuitem.name | translate }}</span>\r\n                     <span fxFlex></span>\r\n                     <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n                     </a>\r\n                    \r\n                     <a appAccordionToggle class=\"relative\" mat-ripple href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\r\n                        <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n                        <span>{{ menuitem.name | translate }}</span>\r\n                        <span fxFlex></span>\r\n                        <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n                        <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\r\n                     </a>\r\n                     <mat-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\r\n                        <div *ngIf=\"menuitem.link\">\r\n                           <mat-list-item outerLinkActive=\"open\">\r\n                              <a [routerLink]=\"['/', menuitem.state, menuitem.state]\" class=\"relative\" mat-ripple>{{ menuitem.name | translate }}</a>\r\n                           </mat-list-item>\r\n                        </div>\r\n                        <div *ngIf=\"!menuitem.link\">\r\n                           <mat-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\r\n                             <!-- Thẻ <a> bên dưới, check nếu pathFile là routerLink thì điều hướng như spa, \r\n                                 nếu pathFile là Url web thì mở trang web trong tab mới -->\r\n                                 <a [routerLink]=\"childitem.state == null|| childitem.state.indexOf('http') == 0 ?[]:'/'+childitem.state\" \r\n                                 (click)=\"goToExternalUrl(childitem.state)\"\r\n                                 class=\"relative\" mat-ripple><mat-icon>{{ childitem.icon }}</mat-icon>{{ childitem.name | translate }}</a>\r\n                                 <!-- <a *ngIf=\"!childitem.state\" [routerLink]=\"['/', menuitem.state ]\" class=\"relative\" mat-ripple>{{ childitem.name | translate }}</a> -->\r\n                           </mat-list-item>\r\n                        </div>\r\n                     </mat-nav-list>\r\n                  </mat-list-item>\r\n                  <mat-divider></mat-divider>\r\n               </mat-nav-list>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"bg-overlay\"></div>\r\n      </mat-sidenav>\r\n      <mat-toolbar class=\"main-header\">\r\n         <div class=\"horizontal-top-bar w-100\">\r\n           <div fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" fxFlex=\"100\">\r\n            <div class=\"search-bar\" fxFlex>\r\n               <form class=\"search-form\">\r\n                  <mat-icon>search</mat-icon>\r\n                  <input type=\"text\" placeholder=\"Search\" autofocus=\"true\" />\r\n               </form>\r\n            </div>\r\n            </div>\r\n            <div fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" fxFlex=\"100\">\r\n             <div class=\"horizontal-logo\">\r\n               <div class=\"branding text-center\">\r\n                  <h2><i class=\"fa fa-superpowers\" aria-hidden=\"true\"></i> <span> OPTIMA</span>\r\n                  </h2>\r\n               </div>\r\n            </div>\r\n            </div>\r\n            <div fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"33.33\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" fxFlex=\"100\">\r\n            <div class=\"menu-links\">\r\n               <button appToggleFullscreen mat-icon-button>\r\n                  <mat-icon>fullscreen</mat-icon>\r\n               </button>\r\n               <!-- <button [mat-menu-trigger-for]=\"user2\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n                  <mat-icon>message</mat-icon>\r\n               </button> -->\r\n               <!-- <mat-menu #user2=\"matMenu\" class=\"opt-menu\" x-position=\"after\">\r\n                  <div mat-menu-item class=\"head-menu grad-blue\">\r\n                     Message Menu\r\n                  </div>\r\n                  <button mat-menu-item>\r\n                  <img width=\"40\" src=\"assets/images/user-1.jpg\" alt=\"\">\r\n                  Next Update for angular 5\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                  <img width=\"40\" src=\"assets/images/user-2.jpg\" alt=\"\">\r\n                  Check out our new admin theme\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                  <img width=\"40\" src=\"assets/images/user-3.jpg\" alt=\"\">\r\n                  Expedita quo, laboriosam officia.\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                  <img width=\"40\" src=\"assets/images/user-4.jpg\" alt=\"\">\r\n                  Lorem ipsum dolor sit amet consectetur.\r\n                  </button>\r\n               </mat-menu> -->\r\n               <!-- <button [mat-menu-trigger-for]=\"user1\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n                  <mat-icon>reorder</mat-icon>\r\n                  <span class=\"notification-label\">3</span>\r\n               </button> -->\r\n               <!-- <mat-menu #user1=\"matMenu\" class=\"opt-menu\" x-position=\"before\">\r\n                  <div mat-menu-item class=\"head-menu grad-blue\">\r\n                     User Menu\r\n                  </div>\r\n                  <button mat-menu-item>\r\n                     <mat-icon>show_chart</mat-icon>\r\n                     Charts\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                     <mat-icon>navigation</mat-icon>\r\n                     Maps\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                     <mat-icon>web</mat-icon>\r\n                     Calendar Settings\r\n                  </button>\r\n               </mat-menu> -->\r\n               <button (click)=\"end.toggle()\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n                  <mat-icon>notifications</mat-icon>\r\n                  <span class=\"notification-label\">2</span>\r\n               </button>\r\n               <button [mat-menu-trigger-for]=\"user\" mat-icon-button class=\"ml-xs\">\r\n                  <mat-icon>person</mat-icon>\r\n               </button>\r\n               <mat-menu #user=\"matMenu\" class=\"opt-menu\" x-position=\"before\">\r\n                  <button mat-menu-item (click)=\"logout()\">\r\n                     <mat-icon>exit_to_app</mat-icon>\r\n                     Sign Out\r\n                  </button>\r\n               </mat-menu>\r\n            </div>\r\n           </div>\r\n         </div>\r\n         <div class=\"vertical-menu w-100\">\r\n         <button (click)=\"menuToggleFunc()\" mat-icon-button class=\"lines-btn\">\r\n            <mat-icon>menu</mat-icon>\r\n         </button>\r\n\r\n         <div class=\"search-bar\" fxFlex>\r\n            <form class=\"search-form txt-size15\" fxShow=\"false\" fxShow.gt-xs>\r\n               Tỷ giá: \r\n               <span class=\"corF44335\">{{rating| currencyFormat}}</span>\r\n            </form>\r\n         </div>\r\n\r\n         <span fxFlex></span>\r\n         \r\n          <!--<span class=\"ml-xs overflow-visible txt-size15 corF44335\" >{{balance| currencyFormat}}đ</span>-->\r\n         <span class=\"ml-xs overflow-visible txt-size15 corF44335\">\r\n            <span [innerHTML]=\"symbolsLocation=== '2' ? symbolsDisplay : ''\" ></span>\r\n            <span>\r\n               {{balance| currencyChina}}\r\n            </span>\r\n            <span [innerHTML]=\"symbolsLocation === '1' ? symbolsDisplay : ''\" ></span>\r\n         </span>\r\n         <button (click)=\"moveToCart()\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n            <mat-icon>shopping_cart</mat-icon>\r\n            <span *ngIf=\"showItemCart\" class=\"notification-label\">{{itemCartCount}}</span>\r\n         </button>\r\n         <mat-menu #user1=\"matMenu\" class=\"opt-menu\" x-position=\"before\">\r\n            <div mat-menu-item class=\"head-menu grad-blue\">\r\n               User Menu\r\n            </div>\r\n            <button mat-menu-item>\r\n               <mat-icon>show_chart</mat-icon>\r\n               Charts\r\n            </button>\r\n            <button mat-menu-item>\r\n               <mat-icon>navigation</mat-icon>\r\n               Maps\r\n            </button>\r\n            <button mat-menu-item>\r\n               <mat-icon>web</mat-icon>\r\n               Calendar Settings\r\n            </button>\r\n         </mat-menu>\r\n         <button  mat-icon-button class=\"ml-xs overflow-visible\">\r\n            <mat-icon>notifications</mat-icon>\r\n            <span *ngIf=\"showNotify\" class=\"notification-label\" [innerHTML]=\"notificationCount\"></span>\r\n         </button>\r\n\r\n         <div [mat-menu-trigger-for]=\"user\" mat-icon-button class=\"ml-xs cur-point\">\r\n            <mat-icon class=\"ver-align-mid\">person</mat-icon> \r\n            <span class=\"txt-size15 cor5F6368\">{{firstName}}</span>\r\n            <span>&nbsp;&nbsp;&nbsp;</span>\r\n         </div>\r\n         \r\n         <mat-menu #user=\"matMenu\" class=\"opt-menu\" x-position=\"before\">\r\n            <button mat-menu-item class=\"user-infor\">\r\n               <div class=\"summary-info\">\r\n                  <div class=\"avatar\">\r\n                     <img *ngIf=\"currentUser && currentUser.avatarUrl\" [src]=\"currentUser.avatarUrl\" class=\"avatar-img\">\r\n                     <img *ngIf=\"!currentUser || !currentUser.avatarUrl\"\r\n                         src=\"assets/images/default_avatar.png\" class=\"avatar-img\">\r\n\r\n                 </div>\r\n                  <span class=\"name\">{{firstName}}</span>\r\n               </div>\r\n            </button>\r\n            <button mat-menu-item>\r\n               <div class=\"rating\">\r\n                  <i class=\"rating-icon pi pi-money-bill\"></i>\r\n                  <span>Số dư &nbsp;</span>\r\n                  <span class=\"rating-number\"> {{balance}} </span>\r\n                  <span class=\"deposit-btn\" (click)=\"moveToTopup()\"> Nạp tiền </span>\r\n               </div>\r\n            </button>\r\n            <button mat-menu-item routerLink=\"/user/userprofile\">\r\n               <mat-icon class=\"ver-align-mid\">person</mat-icon>\r\n               Thông tin cá nhân\r\n            </button>\r\n            <button mat-menu-item (click)=\"logout()\">\r\n               <mat-icon>exit_to_app</mat-icon>\r\n               Thoát\r\n            </button>\r\n         </mat-menu>\r\n          </div>\r\n      </mat-toolbar>\r\n      <div class=\"horizontal-menu text-center\">\r\n         <nav>\r\n            <ul class=\"main-h-list\">\r\n               <li *ngFor=\"let menuitem of _menu\">\r\n                  <a [routerLink]=\"['/'+menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n                  <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n                  <span>{{ menuitem.name | translate }}</span>\r\n                  </a>\r\n                  <a [routerLink]=\"['/'+menuitem.state]\" *ngIf=\"menuitem.type === 'sub'\">\r\n                  <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n                  <span>{{ menuitem.name | translate }}</span>\r\n                  </a>\r\n                  <ul class=\"dropdown\" *ngIf=\"menuitem.type === 'sub'\">\r\n                     <li *ngFor=\"let childitem of menuitem.children\">\r\n                        <a [routerLink]=\"['/'+childitem.state ]\">{{ childitem.name | translate }}</a>\r\n                        <ul class=\"dropdown\" *ngIf=\"childitem.type === 'super-sub'\">\r\n                           <li *ngFor=\"let subchild of childitem.subchildren\">\r\n                              <a [routerLink]=\"['/'+subchild.state ]\">{{subchild.name | translate}}</a>\r\n                           </li>\r\n                        </ul>\r\n                     </li>\r\n                  </ul>\r\n               </li>\r\n            </ul>\r\n         </nav>\r\n      </div>\r\n      <div class=\"body-container\">\r\n         <p-confirmDialog header=\"Xác nhận\" icon=\"pi pi-exclamation-triangle\" width=\"425\" appendTo=\"body\" #cd [baseZIndex]=\"50000\">\r\n            <p-footer>\r\n                <button type=\"button\" class=\"ui-button-secondary\" pButton icon=\"pi pi-times\" label=\"NO\" (click)=\"cd.reject()\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-check\" label=\"YES\" (click)=\"cd.accept()\"></button>\r\n            </p-footer>\r\n        </p-confirmDialog>\r\n         <router-outlet></router-outlet>\r\n      </div>\r\n      <!-- <mat-sidenav #end position=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\r\n         <mat-tab-group [selectedIndex]=\"1\" mat-stretch-tabs>\r\n            <mat-tab>\r\n               <ng-template mat-tab-label>Today</ng-template>\r\n               <div class=\"scroll\">\r\n                  <mat-list class=\"pt-1 pb-1\">\r\n                     <mat-list-item>\r\n                        <div fxLayout=\"column\">\r\n                           <h2 class=\"ma-0\">{{ today | date:'EEEE' }}</h2>\r\n                           <h6 class=\"mat-text-muted ma-0\"><span>{{ today | date:'dd' }}</span>&nbsp;<span>{{ today | date:'MMMM' }}</span></h6>\r\n                        </div>\r\n                     </mat-list-item>\r\n                  </mat-list>\r\n                  <mat-nav-list>\r\n                     <mat-divider></mat-divider>\r\n                     <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Projects Stats</h3>\r\n                     <mat-list-item>\r\n                        <p class=\"text-mat\" mat-line>Project A</p>\r\n                        <mat-progress-bar mat-line mode=\"determinate\" color=\"warn\" value=\"20\"></mat-progress-bar>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <p class=\"text-mat\" mat-line>Project B </p>\r\n                        <mat-progress-bar mat-line mode=\"determinate\" color=\"accent\" value=\"80\"></mat-progress-bar>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <p class=\"text-mat\" mat-line>Project C</p>\r\n                        <mat-progress-bar mat-line mode=\"determinate\" value=\"30\"></mat-progress-bar>\r\n                     </mat-list-item>\r\n                     <mat-divider></mat-divider>\r\n                     <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Todo</h3>\r\n                     <mat-list-item>\r\n                        <a mat-line href=\"javascript:;\">Consectetur adipisicing elit. Nemo omnis.</a>\r\n                        <p mat-line class=\"mat-text-muted text-mat\">2:45PM</p>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <a mat-line href=\"javascript:;\"> Temporibus cumque cupiditate </a>\r\n                        <p mat-line class=\"mat-text-muted text-mat\">3:20PM</p>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <a mat-line href=\"javascript:;\">Libero voluptatibus harum quis accusamus</a>\r\n                        <p mat-line class=\"mat-text-muted text-mat\">16:00PM</p>\r\n                     </mat-list-item>\r\n                  </mat-nav-list>\r\n               </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n               <ng-template mat-tab-label>Notifications</ng-template>\r\n               <div class=\"scroll\">\r\n                  <mat-nav-list>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar class=\"mat-text-primary\">people</mat-icon>\r\n                        <h4 mat-line>Social</h4>\r\n                        <p mat-line> 5 new members joined today</p>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar class=\"mat-text-warn\">local_offer</mat-icon>\r\n                        <h4 mat-line>Promotions</h4>\r\n                        <p mat-line>Updated your email\r\n                        </p>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar class=\"mat-text-accent\">info</mat-icon>\r\n                        <h4 mat-line>Updates</h4>\r\n                        <p mat-line> 15 new product added</p>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar class=\"mat-deep-purple\">delete_sweep</mat-icon>\r\n                        <h4 mat-line> 2 order cancelled</h4>\r\n                        <span class=\"text-mat mat-text-muted\" mat-line>{{ 1427207139000 | date: 'fullDate' }}</span>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar>check_circle</mat-icon>\r\n                        <h4 mat-line>System Scan completed</h4>\r\n                        <span class=\"text-mat mat-text-muted\" mat-line>{{ 1427412725000 | date: 'fullDate' }}</span>\r\n                     </mat-list-item>\r\n                     <mat-list-item>\r\n                        <mat-icon mat-list-avatar>person_add</mat-icon>\r\n                        <h4 mat-line>4 Users connected</h4>\r\n                        <span class=\"text-mat mat-text-muted\" mat-line>{{ 1428275520000 | date: 'fullDate' }}</span>\r\n                     </mat-list-item>\r\n                  </mat-nav-list>\r\n               </div>\r\n            </mat-tab>\r\n         </mat-tab-group>\r\n      </mat-sidenav> -->\r\n   </mat-sidenav-container>\r\n   <!-- /Demo Purposes Only -->\r\n   </div>\r\n   \r\n   "

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-infor {\n  min-height: 130px; }\n  .user-infor .summary-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .user-infor .summary-info .name {\n      font-size: 16px; }\n  .user-infor .summary-info .avatar {\n      display: flex;\n      justify-content: center;\n      margin: 10px auto 10px auto; }\n  .user-infor .summary-info .avatar .avatar-img {\n        max-height: 60px;\n        border-radius: 50%;\n        box-shadow: 1px 2px 10px #999;\n        padding: 2px; }\n  .rating {\n  display: flex;\n  align-items: center; }\n  .rating .rating-icon {\n    width: 30px;\n    font-size: 30px;\n    color: #707070; }\n  .rating .rating-number {\n    color: #f44335; }\n  .rating .deposit-btn {\n    padding: 0 8px;\n    border: 1px solid #c3c2c2;\n    border-radius: 3px;\n    background: #fcfcfc;\n    margin-left: 5px;\n    height: 30px;\n    line-height: 30px; }\n  button:focus {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcbGF5b3V0c1xcYWRtaW5cXGFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQXFCbkI7RUF0QkY7SUFHSyxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUN2QixvQkFBbUIsRUFlcEI7RUFyQko7TUFRTyxnQkFBZSxFQUNoQjtFQVROO01BV08sY0FBYTtNQUNiLHdCQUF1QjtNQUN2Qiw0QkFBMkIsRUFPNUI7RUFwQk47UUFlUyxpQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ2xCLDhCQUE2QjtRQUM3QixhQUFZLEVBQ2I7RUFJUDtFQUNHLGNBQWE7RUFDYixvQkFBbUIsRUFrQnBCO0VBcEJGO0lBSUssWUFBVztJQUNYLGdCQUFlO0lBQ2YsZUFBYyxFQUNmO0VBUEo7SUFTSyxlQUFjLEVBQ2Y7RUFWSjtJQVlLLGVBQWM7SUFDZCwwQkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUNuQixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGtCQUFpQixFQUNsQjtFQUVKO0VBQ0Usd0JBQXVCO0VBQ3ZCLHlCQUF3QjtFQUN4Qiw0QkFBMkIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2FkbWluL2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWluZm9yIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAuc3VtbWFyeS1pbmZvIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAubmFtZSB7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgfVxyXG4gICAgIC5hdmF0YXIge1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICAgLmF2YXRhci1pbWcge1xyXG4gICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjOTk5O1xyXG4gICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiB9XHJcbiAucmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnJhdGluZy1pY29uIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICB9XHJcbiAgICAucmF0aW5nLW51bWJlciB7XHJcbiAgICAgIGNvbG9yOiAjZjQ0MzM1O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXQtYnRuIHtcclxuICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MyYzI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiBidXR0b246Zm9jdXMge1xyXG4gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/horizontal-menu-items */ "./src/app/shared/menu-items/horizontal-menu-items.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/pass-data.services */ "./src/app/services/pass-data.services.ts");
/* harmony import */ var app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var app_common_func_data_parse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/common-func/data-parse */ "./src/app/common-func/data-parse.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, _passData, _login, cdref, _commonServices, router, route, _dataParse, menuItems, horizontalMenuItems, translate) {
        this._passData = _passData;
        this._login = _login;
        this.cdref = cdref;
        this._commonServices = _commonServices;
        this.router = router;
        this.route = route;
        this._dataParse = _dataParse;
        this.menuItems = menuItems;
        this.horizontalMenuItems = horizontalMenuItems;
        this.translate = translate;
        this.today = Date.now();
        this.showSettings = false;
        this.horizontal = false;
        this.sidebarBg = true;
        this.currentLang = 'en';
        this.layoutDir = 'ltr';
        this.menuLayout = 'vertical-menu';
        this.selectedSidebarImage = 'bg-1';
        this.selectedSidebarColor = 'sidebar-default';
        this.selectedHeaderColor = 'header-default';
        this.collapsedClass = 'side-panel-opened';
        this.config = {};
        this.lstMenuRoot = [];
        this._menu = [];
        this.firstName = null;
        this.rating = null;
        this.itemCartCount = null;
        this.balance = null;
        this.symbolsLocation = null;
        this.symbolsDisplay = null;
        this.notificationCount = null;
        this.loading = false;
        this.showNotify = false;
        this.showItemCart = false;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // location.onPopState(() => {
        //   alert(window.location);
        // });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-container ');
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar, {
                wheelSpeed: 2,
                suppressScrollX: true
            });
        }
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.url = event.url;
            // const isExist = localStorage.getItem("token");
            // if(isExist && this.url === '/authentication/login') {
            //   this.router.navigate(['/admin-tool']);
            // }
            if (_this.isOver()) {
                _this.sidemenu.close();
            }
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar && _this.layoutDir != 'rtl') {
                // Ps.update(elemContent);
            }
        });
    };
    AdminLayoutComponent.prototype.listenerData = function (time) {
        var _self = this;
        var refreshId = setInterval(function () {
            _self.infoRating = JSON.parse(localStorage.getItem("ratingInfo"));
            if (_self.infoRating) {
                clearInterval(refreshId);
                //_self.rating = _self._dataParse.formatMoney(_self.infoRating.exchangeRate);
                _self.rating = _self.infoRating.exchangeRate;
                _self.balance = _self.infoRating.cashBalance;
                _self.symbolsLocation = _self.infoRating.symbolsLocation;
                _self.symbolsDisplay = _self.infoRating.symbolsDisplay;
                _self.notificationCount = _self.infoRating.notificationCount;
                _self.itemCartCount = _self.infoRating.cartItemCount;
                _self.showNotify = _self.notificationCount !== 0;
                _self.showItemCart = _self.itemCartCount !== 0;
            }
        }, time);
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loading = false;
        this.filterMenu(JSON.parse(localStorage.getItem("lMenu")));
        this.listenerData(100);
        this.firstName = JSON.parse(localStorage.getItem("userData")).username;
        this.currentUser = JSON.parse(localStorage.getItem("userData"));
        this.detectChangeSubscript = this._passData.loaded().subscribe(function (res) {
            _this.loading = res;
            _this.cdref.detectChanges();
        });
    };
    AdminLayoutComponent.prototype.logout = function () {
        var _this = this;
        var jsonData = JSON.parse(localStorage.getItem("token"));
        if (jsonData) {
            this.loading = true;
            var logout = {
                Accesstoken: jsonData.accessToken,
                Refreshtokencode: jsonData.refreshTokenCode,
                ClientAppCode: 'exo-r9045HKopew8mnGj'
            };
            this._login.logout(logout).subscribe(function (res) {
                if (res.result.success) {
                    localStorage.clear();
                    _this.router.navigate(['/authentication/login']);
                }
                else {
                }
                _this.loading = false;
            }, function (err) {
                _this.loading = false;
            });
        }
    };
    AdminLayoutComponent.prototype.ngAfterContentChecked = function () {
    };
    AdminLayoutComponent.prototype.moveToCart = function () {
        this.router.navigate(['/cart/pharse1']);
    };
    AdminLayoutComponent.prototype.moveToTopup = function () {
        this.router.navigate(['/wallet-manager/client-topup']);
    };
    AdminLayoutComponent.prototype.filterMenu = function (lstMenu) {
        this.lstMenuRoot = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](lstMenu, function (o) { return o.parentId == 0; });
        var _loop_1 = function (entry) {
            var r2 = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](lstMenu, function (o) { return o.parentId == entry.controlId; });
            this_1._subMenu = [];
            for (var _i = 0, r2_1 = r2; _i < r2_1.length; _i++) {
                var child = r2_1[_i];
                this_1._subMenu.push({ state: child.pathFile, name: child.name, icon: child.icon == null ? "label_important" : child.icon });
            }
            if (this_1._subMenu.length === 0) {
                var child = {
                    state: entry.pathFile,
                    name: entry.name,
                    link: true,
                    type: "link",
                    icon: entry.icon == null ? "explore" : entry.icon,
                };
                this_1._menu.push(child);
            }
            else {
                var child = {
                    state: entry.pathFile,
                    name: entry.name,
                    link: false,
                    type: 'sub',
                    icon: entry.icon == null ? "explore" : entry.icon,
                    children: this_1._subMenu
                };
                this_1._menu.push(child);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.lstMenuRoot; _i < _a.length; _i++) {
            var entry = _a[_i];
            _loop_1(entry);
        }
        ;
    };
    AdminLayoutComponent.prototype.goToExternalUrl = function (url) {
        if (url == null) {
            return false;
        }
        if (url.indexOf("http") == 0) {
            window.open(url, "_blank");
        }
        else if ('/' + url == this.router.url) {
            this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['./'], { relativeTo: this.route });
        }
    };
    AdminLayoutComponent.prototype.onClick = function (e) {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-container ');
        setTimeout(function () {
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar && _this.layoutDir != 'rtl') {
                var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar, {
                    wheelSpeed: 2,
                    suppressScrollX: true
                });
            }
        }, 350);
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this.detectChangeSubscript.unsubscribe();
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
            return true;
        }
        else {
            return window.matchMedia("(max-width: 960px)").matches;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.menuToggleFunc = function () {
        this.sidemenu.toggle();
        if (this.collapsedClass == 'side-panel-opened') {
            this.collapsedClass = 'side-panel-closed';
        }
        else {
            this.collapsedClass = 'side-panel-opened';
        }
    };
    AdminLayoutComponent.prototype.changeMenuLayout = function (value) {
        console.log(value);
        if (value) {
            this.menuLayout = 'top-menu';
        }
        else {
            this.menuLayout = 'vertical-menu';
            this.menuToggleFunc();
        }
    };
    AdminLayoutComponent.prototype.onSelectSidebarImage = function (selectedClass, event) {
        this.selectedSidebarImage = selectedClass;
    };
    AdminLayoutComponent.prototype.onSelectedSidebarColor = function (selectedClass) {
        this.selectedSidebarColor = selectedClass;
    };
    AdminLayoutComponent.prototype.onSelectedHeaderColor = function (selectedClass) {
        this.selectedHeaderColor = selectedClass;
    };
    AdminLayoutComponent.prototype.isBgActive = function (value) {
        if (value == this.selectedSidebarImage) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isSidebarActive = function (value) {
        if (value == this.selectedSidebarColor) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isHeaderActive = function (value) {
        if (value == this.selectedHeaderColor) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidemenu'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onClick", null);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"],
            app_services_pass_data_services__WEBPACK_IMPORTED_MODULE_9__["PassDataService"],
            app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_common_func_data_parse__WEBPACK_IMPORTED_MODULE_11__["DataParse"],
            _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"],
            _shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_3__["HorizontalMenuItems"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <router-outlet></router-outlet>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.url = null;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            styles: [':host /deep/ .mat-sidenav-content {padding: 0;} .mat-sidenav-container {z-index: 1000}'],
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/layouts/auth/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
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





var CommonService = /** @class */ (function (_super) {
    __extends(CommonService, _super);
    function CommonService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.controller, http, _router) || this;
    }
    CommonService.prototype.getLstUser = function (page) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.controller
            + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.lstUser
            + "?" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.perPage + "=" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["paging"].perPage
            + "&" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.page + "=" + page);
    };
    CommonService.prototype.getInfoUser = function (userId) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].infoUser + userId);
    };
    CommonService.prototype.getWalletByUserId = function (userId) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].walletByUserId + userId);
    };
    CommonService.prototype.getLstButton = function (usercode, path) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.common
            + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.actionAccess
            + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.actionParam1 + '=' + usercode + '&'
            + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.actionParam2 + '=' + path);
    };
    CommonService.prototype.getRating = function () {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].Extension.controller + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].Extension.exchangerate);
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommonService);
    return CommonService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ }),

/***/ "./src/app/services/common/AuthChildGuard.ts":
/*!***************************************************!*\
  !*** ./src/app/services/common/AuthChildGuard.ts ***!
  \***************************************************/
/*! exports provided: AuthChildGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthChildGuard", function() { return AuthChildGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthChildGuard = /** @class */ (function () {
    function AuthChildGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthChildGuard.prototype.canActivate = function (route) {
        console.log(route.url);
        var isExist = localStorage.getItem("token") === null;
        if (!isExist) {
            this._router.navigate(['/ship-manager/orders']);
            return true;
        }
        else if (!isExist && route.url[0].path !== 'authentication') {
            return true;
        }
        else {
            this._router.navigate(['/authentication/login']);
            return false;
        }
    };
    AuthChildGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthChildGuard);
    return AuthChildGuard;
}());



/***/ }),

/***/ "./src/app/services/common/AuthGuard.ts":
/*!**********************************************!*\
  !*** ./src/app/services/common/AuthGuard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        var isExist = localStorage.getItem("token") === null;
        if (!isExist) {
            return true;
        }
        else {
            this._router.navigate(['/authentication/login']);
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/common/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/common/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ApiService = /** @class */ (function () {
    // private findToken: boolean = false;
    function ApiService(urlController, http, router) {
        this.apiBaseController = urlController + '/';
        this.http = http;
        this.router = router;
    }
    /**
      * Funtion get: Get data by parameter
      * @param apiUrl
      * @param parameter
      */
    ApiService.prototype.get = function (apiUrl, parameter) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        if (parameter === void 0) { parameter = []; }
        parameter.forEach(function (p) {
            apiUrl += ('/' + p);
        });
        return this.http.get(apiUrl, this.getOptions()).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    ApiService.prototype.postNoConvert = function (apiUrl, condition) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post,
            url: apiUrl,
            headers: this.getformHeaders(),
            body: condition
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /**
      * Funtion get: Get data by parameter
      * @param apiUrl
      * @param parameter
      */
    ApiService.prototype.postWithObservable = function (apiUrl, parameter) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        if (parameter === void 0) { parameter = []; }
        parameter.forEach(function (p) {
            apiUrl += ('/' + p);
        });
        return this.http.post(apiUrl, this.getOptions()).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion post: post data
     * @apiUrl URL reference to API
     */
    ApiService.prototype.post = function (apiUrl, condition) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: condition === undefined ? '' : JSON.stringify(condition),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion put: put data
     * @apiUrl URL reference to API
     */
    ApiService.prototype.put = function (apiUrl, condition, parameter) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        if (parameter) {
            parameter.forEach(function (p) {
                apiUrl += ('/' + p);
            });
        }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Put,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: condition === undefined ? '' : JSON.stringify(condition),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion post: post file
     * @apiUrl URL reference to API
     */
    ApiService.prototype.postFiles = function (apiUrl, files) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            // 'Authorization': LocalStorageHelper.getToken(),
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_2__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
        });
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post,
            url: apiUrl,
            headers: headers,
            body: formData,
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions))
            .map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion add: Add new data
     * @whale Model used add new
     * @apiUrl URL reference to API
     */
    ApiService.prototype.add = function (apiUrl, whale) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post,
            url: (this.apiBaseController + apiUrl),
            headers: this.getJsonHeaders(),
            body: JSON.stringify(whale),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion update: Add new data
     * @whale Model used updated
     * @apiUrl URL reference to API
     */
    ApiService.prototype.update = function (apiUrl, whale) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Put,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: JSON.stringify(whale),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestOptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /** Funtion delete: Delete data by key
     * @apiUrl URL reference to API, this is contain key
     */
    ApiService.prototype.delete = function (apiUrl, whale) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Delete,
            url: (apiUrl),
            headers: this.getJsonHeaders(),
            body: (whale ? JSON.stringify(whale) : ''),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(function (error) {
            return _this.forwardError(error);
        });
    };
    ApiService.prototype.deleteWithParams = function (apiUrl, whale) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Delete,
            url: (apiUrl + '/' + whale),
            headers: this.getJsonHeaders(),
            params: __assign({}, whale),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        })
            .catch(this._serverError);
    };
    /** Funtion delete: Delete data by key
     * @apiUrl URL reference to API, this is contain key
     */
    ApiService.prototype.delete_custom = function (apiUrl, whale) {
        var _this = this;
        if (apiUrl === void 0) { apiUrl = ''; }
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Delete,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: (whale ? JSON.stringify(whale) : ''),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).map(function (res) {
            return _this.forwardData(res);
        }).catch(this._serverError);
    };
    ApiService.prototype._serverError = function (err) {
        // this.postLogException(err);
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"]) {
            if (Number(err.status) === _config_app_config__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].UNAUTHORIZED || Number(err.status) === _config_app_config__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].FORBIDDEN) {
                // this.router.navigate([NavigateRouting.NotFound]);
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(err.json().error || 'backend server error');
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(err || 'backend server error');
    };
    /** Funtion search: Get data with condition from API
     * @apiUrl URL reference to API
     * @condition Search condition
     */
    ApiService.prototype.search = function (apiUrl, condition) {
        var _this = this;
        var requestoptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post,
            url: (this.apiBaseController + apiUrl),
            headers: this.getJsonHeaders(),
            body: JSON.stringify(condition),
        });
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Request"](requestoptions)).timeout(10000)
            .pipe().map(function (res) {
            return _this.forwardData(res);
        })
            .catch(function (error) {
            return _this.forwardError(error);
        });
    };
    /**
     * Get all model with paging
     * @param page Page index (begin index: 0)
     * @param size Number of records on one page
     * @param filterDeleted Not get deleted data if equals "true"
     * @param args[] custom parameter
     * @example this.{controller}Service.getList(0, 20).subscribe( (res)
     * => {console.log(res); let data = res.content;}, error {});
     */
    ApiService.prototype.getList = function (apiUrl, page, size, args) {
        if (args === void 0) { args = []; }
        return this.get(apiUrl, [size, page].concat(args));
    };
    /**
     * Get all model
     * @param condition Search condition
     * @param page Page index (begin index: 0)
     * @param size Number of records on one page
     * @param filterDeleted Not get deleted data if equals "true"
     * @example this.{controller}Service.seach(condition, 0, 20).subscribe( (res) => {console.log(res);}, error {});
     */
    ApiService.prototype.seachPaging = function (apiUrl, condition, page, size) {
        var url = apiUrl + size + '/' + page;
        return this.get(url, condition);
    };
    /**
     *
     * @param res
     * @param status
     */
    ApiService.prototype.forwardData = function (res) {
        if (Number(res.status) === 200) { // OK
            return this.convertResultData(res);
        }
        else if (Number(res.status) === 203) { // Redirect
            return this.convertResultData(res);
        }
        else { // Accept / Create
            return this.convertResultData(res);
        }
    };
    /**
     * Try to convert callback data to json/text/plain
     * @param {Response} res
     * @returns {any}
     */
    ApiService.prototype.convertResultData = function (res) {
        try {
            return { result: res.json(), status: res.status, message: 'successful' };
        }
        catch (e) {
            return { result: '', status: res.status, message: res.text };
        }
    };
    /**
    * Request Error handler
    * @param {Response} error
    * @param status
    * @returns {ErrorObservable}
    */
    ApiService.prototype.forwardError = function (error) {
        // this.postLogException(error);
        if (Number(error.status) === _config_app_config__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].FORBIDDEN) {
            // this.router.navigate([NavigateRouting.NotFound]);
            return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(error.statusText);
        }
        else if (Number(error.status) === _config_app_config__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].UNAUTHORIZED) {
            this.refreshToken();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(error);
        }
    };
    ApiService.prototype.refreshToken = function () {
        var _this = this;
        var jsonData = JSON.parse(localStorage.getItem("token"));
        if (jsonData) {
            var refesh = {
                accesstoken: jsonData.accessToken,
                refreshtokencode: jsonData.refreshTokenCode,
                ClientAppCode: 'exo-r9045HKopew8mnGj'
            };
            this.post(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["ApiApplication"].user.controller + _config_app_config__WEBPACK_IMPORTED_MODULE_2__["ApiApplication"].user.refreshToken, refesh).subscribe(function (res) {
                if (res.result.success) {
                    localStorage.setItem('token', JSON.stringify(res.result.data));
                    window.location.reload();
                    console.log("reload page");
                }
                else {
                    localStorage.clear();
                    _this.router.navigate(['/authentication/login']);
                }
            }, function (err) {
                localStorage.clear();
                _this.router.navigate(['/authentication/login']);
            });
        }
    };
    /**
     *
     */
    ApiService.prototype.getOptions = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_2__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
        });
        if (localStorage.getItem("token")) {
            headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem("token")).accessToken);
        }
        return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
    };
    /**
     *
     */
    ApiService.prototype.getJsonHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json',
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_2__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
        });
        var t1 = localStorage.getItem("token");
        if (localStorage.getItem("token")) {
            headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem("token")).accessToken);
        }
        return headers;
    };
    ApiService.prototype.getformHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_2__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
        });
        var t1 = localStorage.getItem("token");
        if (localStorage.getItem("token")) {
            headers.append('Authorization', 'bearer ' + JSON.parse(localStorage.getItem("token")).accessToken);
        }
        return headers;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [String, _http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/common/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/common/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/common/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, _router) {
        var _this = _super.call(this, '', http, _router) || this;
        _this._router = _router;
        return _this;
        // this.urlController = ApiApplication.API_TEMP.controller;
    }
    // loadMenu() {
    // }
    // async login(loginModel: AuthModel): Promise<any> {
    //     return await this.post(ApiApplication.API_TEMP.controller + '/' + ApiApplication.API_TEMP.login,
    //         {
    //             email: loginModel.email.toString().trim(),
    //             password: loginModel.password,
    //             // organizationCode: loginModel.organizationCode,
    //         }).toPromise();
    // }
    AuthService.prototype.logggedIn = function () {
        // const isExist = localStorage.getItem("token") === null;
        // return !isExist;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}(_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));



/***/ }),

/***/ "./src/app/services/common/checkAuthToken.services.ts":
/*!************************************************************!*\
  !*** ./src/app/services/common/checkAuthToken.services.ts ***!
  \************************************************************/
/*! exports provided: CheckAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAuthToken", function() { return CheckAuthToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckAuthToken = /** @class */ (function () {
    function CheckAuthToken(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    CheckAuthToken.prototype.canActivate = function (route) {
        var isExist = localStorage.getItem("token") === null;
        if (isExist) {
            this._router.navigate(['/authentication/login']);
            localStorage.setItem('token', 'Login');
            return false;
        }
    };
    CheckAuthToken = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckAuthToken);
    return CheckAuthToken;
}());



/***/ }),

/***/ "./src/app/services/common/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/common/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/app.config */ "./src/app/config/app.config.ts");
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








var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.get = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.get.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.post = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.post.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.getOptions = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ',
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_7__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
        });
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
    };
    HttpService.prototype.getJsonHeaders = function () {
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ',
            'Module': _config_app_config__WEBPACK_IMPORTED_MODULE_7__["Module"],
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
        });
    };
    HttpService.prototype.catchErrors = function () {
        return function (res) {
            if (res.status === _config_app_config__WEBPACK_IMPORTED_MODULE_7__["HttpStatus"].UNAUTHORIZED) {
                // this.router.navigate(['authentication/login']);
                // this.refreshToken();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res);
        };
    };
    HttpService.prototype.setHeaders = function (objectToSetHeadersTo) {
        //objectToSetHeadersTo.headers.set('Token', this.authService.token);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["XHRBackend"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpService);
    return HttpService;
}(_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));



/***/ }),

/***/ "./src/app/services/interceptor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var frontAppUrl = "http://ordertaobao1.babuvi.com/";
        var newUrl = req.url;
        console.log(req.url);
        if (req.url.includes(frontAppUrl)) {
            newUrl = req.url.replace(frontAppUrl, _config_app_config__WEBPACK_IMPORTED_MODULE_0__["ApiBaseUrl"]);
        }
        var dupReq = req.clone({ url: newUrl });
        return next.handle(req);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
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





var LoginService = /** @class */ (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].login, http, _router) || this;
    }
    LoginService.prototype.getLogin = function (login) {
        return this.post(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].login, login);
    };
    LoginService.prototype.logout = function (logout) {
        return this.post(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].logout, logout);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginService);
    return LoginService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ }),

/***/ "./src/app/services/lstClient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/lstClient.service.ts ***!
  \***********************************************/
/*! exports provided: LstClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LstClientService", function() { return LstClientService; });
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





var LstClientService = /** @class */ (function (_super) {
    __extends(LstClientService, _super);
    function LstClientService(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.controller, http, _router) || this;
    }
    LstClientService.prototype.getLstUser = function (page) {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.controller
            + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.lstUser
            + "?" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.perPage + "=" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["paging"].perPage
            + "&" + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].lstUserItem.page + "=" + page);
    };
    LstClientService.prototype.tes = function () {
        return this.get(app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].user.controller + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].user.refreshToken);
    };
    LstClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LstClientService);
    return LstClientService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ }),

/***/ "./src/app/services/messages-utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/messages-utils.service.ts ***!
  \****************************************************/
/*! exports provided: MessagesUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesUtilsService", function() { return MessagesUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular




var MessagesUtilsService = /** @class */ (function () {
    function MessagesUtilsService(messageService, translateService, confirmationService) {
        this.messageService = messageService;
        this.translateService = translateService;
        this.confirmationService = confirmationService;
    }
    /**
     * show custom message
     * @param severity
     * @param summaryKey
     * @param detailMessageKey
     * @param additionalDetail
     */
    MessagesUtilsService.prototype.showCustomMessage = function (severity, summaryKey, detailMessageKey, additionalDetail) {
        this.messageService.clear();
        var summaryMessage = this.translateService.instant(summaryKey);
        var detailMessage = this.translateService.instant(detailMessageKey);
        // do show message
        if (additionalDetail === undefined) {
            this.messageService.add({ key: 'toast', severity: severity, summary: summaryMessage, detail: detailMessage });
        }
        else {
            this.messageService.add({ key: 'toast', severity: severity, summary: summaryMessage, detail: detailMessage + ' ' + additionalDetail });
        }
    };
    // show delete success message
    MessagesUtilsService.prototype.showDeleteSuccessMessage = function () {
        this.showCustomMessage('success', 'ACTION.DELETE', 'ACTION.MESSAGES.DELETE_SUCCEED');
    };
    /**
     * show delete failed message
     * @param detailMessage
     */
    MessagesUtilsService.prototype.showDeleteFailedMessage = function (detailMessage) {
        this.showCustomMessage('error', 'ACTION.DELETE', 'ACTION.MESSAGES.DELETE_FAILED', detailMessage);
    };
    // show update success message
    MessagesUtilsService.prototype.showUpdateSuccessMessage = function () {
        this.showCustomMessage('success', 'ACTION.UPDATE', 'ACTION.MESSAGES.UPDATE_SUCCEED');
    };
    /**
     * show update failed message
     * @param detailMessage
     */
    MessagesUtilsService.prototype.showUpdateFailedMessage = function (detailMessage) {
        this.showCustomMessage('error', 'ACTION.UPDATE', 'ACTION.MESSAGES.UPDATE_FAILED', detailMessage);
    };
    // show confirmation dialog
    MessagesUtilsService.prototype.showDeleteConfirm = function (accepFunction, rejectFunction) {
        this.confirmationService.confirm({
            message: this.translateService.instant('ACTION.MESSAGES.CONFIRM_DELETE'),
            accept: accepFunction,
            reject: rejectFunction
        });
    };
    // show confirmation dialog
    MessagesUtilsService.prototype.showActiveConfirm = function (accepFunction, rejectFunction) {
        this.confirmationService.confirm({
            message: this.translateService.instant('ACTION.MESSAGES.CONFIRM_ACTIVE'),
            accept: accepFunction,
            reject: rejectFunction
        });
    };
    // show custom confirmation dialog
    MessagesUtilsService.prototype.showCustomConfirm = function (accepFunction, rejectFunction, msg) {
        var translateMessage = this.translateService.instant(msg);
        this.confirmationService.confirm({
            message: translateMessage,
            accept: accepFunction,
            reject: rejectFunction
        });
    };
    MessagesUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], MessagesUtilsService);
    return MessagesUtilsService;
}());



/***/ }),

/***/ "./src/app/services/pass-data.services.ts":
/*!************************************************!*\
  !*** ./src/app/services/pass-data.services.ts ***!
  \************************************************/
/*! exports provided: PassDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassDataService", function() { return PassDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassDataService = /** @class */ (function () {
    function PassDataService() {
        this.dataStringSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        // ==========================================================================================
        this.loadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        // ==========================================================================================
        this.loadingOrdersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    PassDataService.prototype.setInfo = function (user) {
        this.dataStringSource.next(user);
    };
    PassDataService.prototype.getInfo = function () {
        return this.dataStringSource.asObservable();
    };
    PassDataService.prototype.loading = function (flag) {
        this.loadingSource.next(flag);
    };
    PassDataService.prototype.loaded = function () {
        return this.loadingSource.asObservable();
    };
    PassDataService.prototype.setOrders = function (user) {
        this.loadingOrdersSource.next(user);
    };
    PassDataService.prototype.getOrders = function () {
        return this.loadingOrdersSource.asObservable();
    };
    PassDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PassDataService);
    return PassDataService;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
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


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
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


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/demo.module.ts":
/*!***************************************!*\
  !*** ./src/app/shared/demo.module.ts ***!
  \***************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/horizontal-menu-items.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/menu-items/horizontal-menu-items.ts ***!
  \************************************************************/
/*! exports provided: HorizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuItems", function() { return HorizontalMenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HORIZONTALMENUITEMS = [];
var HorizontalMenuItems = /** @class */ (function () {
    function HorizontalMenuItems() {
    }
    HorizontalMenuItems.prototype.getAll = function () {
        return HORIZONTALMENUITEMS;
    };
    HorizontalMenuItems.prototype.add = function (menu) {
        // HORIZONTALMENUITEMS.push(Menu);
    };
    HorizontalMenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HorizontalMenuItems);
    return HorizontalMenuItems;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        console.log(MENUITEMS);
        return MENUITEMS;
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/horizontal-menu-items */ "./src/app/shared/menu-items/horizontal-menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullscreenDirective"]
            ],
            exports: [
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullscreenDirective"]
            ],
            providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"], _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\CÔNG VIỆC - LÀM THÊM\JOB Angular\babuvi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map