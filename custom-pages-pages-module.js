(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-pages-pages-module"],{

/***/ "./src/app/custom-pages/blank/blank.component.html":
/*!*********************************************************!*\
  !*** ./src/app/custom-pages/blank/blank.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-pages/blank/blank.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/custom-pages/blank/blank.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1wYWdlcy9ibGFuay9ibGFuay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-pages/blank/blank.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-pages/blank/blank.component.ts ***!
  \*******************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
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

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/custom-pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/custom-pages/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/custom-pages/contact/contact-component.html":
/*!*************************************************************!*\
  !*** ./src/app/custom-pages/contact/contact-component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"position\">\r\n        <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          <div fxLayout=\"row wrap\" >\r\n            <div class=\"content-info\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n              <div class=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n                 a\r\n              </div>\r\n              <div class=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n                <div>CP73539731</div>\r\n                <div>Shop:</div>\r\n                <div>Số lượng:</div>\r\n                <div>Cân nặng:</div>\r\n                <div>Loại:</div>\r\n              </div>\r\n           \r\n              <div class=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\r\n                <div>Đang vận chuyển TQ-VN</div>\r\n                <div>dffdsgf</div>\r\n                <div>32/32-</div>\r\n                <div>0.3kg</div>\r\n                <div>Mua hàng hộ</div>\r\n              </div>\r\n           </div >\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"weight\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"symbol\">\r\n        <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n      </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator #paginator\r\n                   [pageSize]=\"10\"\r\n                   [pageSizeOptions]=\"[5, 10, 20]\"\r\n                   [showFirstLastButtons]=\"true\">\r\n    </mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/custom-pages/contact/contact-component.scss":
/*!*************************************************************!*\
  !*** ./src/app/custom-pages/contact/contact-component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-w {\n  background-image: url('https://quan1997ap.github.io/babuvi/../../assets/images/contact.jpg'); }\n\n.contact-w.about-w {\n  height: auto;\n  padding: 4rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXBhZ2VzL2NvbnRhY3QvRjpcXEPDlE5HIFZJ4buGQyAtIEzDgE0gVEjDik1cXEpPQiBBbmd1bGFyXFxiYWJ1dmkvc3JjXFxhcHBcXGN1c3RvbS1wYWdlc1xcY29udGFjdFxcY29udGFjdC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZGQUF3RCxFQUN6RDs7QUFDRDtFQUNJLGFBQVk7RUFDWixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1wYWdlcy9jb250YWN0L2NvbnRhY3QtY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC13IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QuanBnXCIpO1xyXG59XHJcbi5jb250YWN0LXcuYWJvdXQtd3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDRyZW0gMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-pages/contact/contact.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-pages/contact/contact.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.displayedColumns = ['position', 'name', 'weight'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContactComponent.prototype, "paginator", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-contact-us',
            template: __webpack_require__(/*! ./contact-component.html */ "./src/app/custom-pages/contact/contact-component.html"),
            styles: [__webpack_require__(/*! ./contact-component.scss */ "./src/app/custom-pages/contact/contact-component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], ContactComponent);
    return ContactComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/custom-pages/pages.module.ts":
/*!**********************************************!*\
  !*** ./src/app/custom-pages/pages.module.ts ***!
  \**********************************************/
/*! exports provided: PagesDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDemoModule", function() { return PagesDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/custom-pages/contact/contact.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/custom-pages/timeline/timeline.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/custom-pages/pricing/pricing.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/custom-pages/blank/blank.component.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages.routing */ "./src/app/custom-pages/pages.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AboutComponent } from '../common-view/account-header/account-header.component';





var PagesDemoModule = /** @class */ (function () {
    function PagesDemoModule() {
    }
    PagesDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_10__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            ],
            declarations: [
                // AboutComponent,
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_9__["BlankComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PagesDemoModule);
    return PagesDemoModule;
}());



/***/ }),

/***/ "./src/app/custom-pages/pages.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/custom-pages/pages.routing.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/custom-pages/contact/contact.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/custom-pages/timeline/timeline.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/custom-pages/pricing/pricing.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/custom-pages/blank/blank.component.ts");
// import { AboutComponent } from '../common-view/account-header/account-header.component';




var PagesRoutes = [{
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    }, {
        path: '',
        children: [{
                //   path: 'about',
                //   component: AboutComponent
                // }, {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"]
            }, {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"]
            }, {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__["PricingComponent"]
            }, {
                path: 'blank',
                component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/custom-pages/pricing/pricing.component.html":
/*!*************************************************************!*\
  !*** ./src/app/custom-pages/pricing/pricing.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"pricing-table\">\r\n<div fxLayout=\"row wrap\" >\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">important_devices</i>\r\n         <h1>Ui design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">199 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">perm_identity</i>\r\n         <h1>Ux design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">399 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">art_track</i>\r\n         <h1>Print design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">999 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">art_track</i>\r\n         <h1>Mega design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">999 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">art_track</i>\r\n         <h1>Premium design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">999 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\" class=\"m-gap p-gap\">\r\n      <div class=\"pricing-option p-2\">\r\n         <i class=\"material-icons\">art_track</i>\r\n         <h1>Advanced design</h1>\r\n         <hr />\r\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>\r\n         <hr />\r\n         <div class=\"price\">\r\n            <div class=\"front\">\r\n               <span class=\"price\">999 <b>$</b></span>\r\n            </div>\r\n            <div class=\"back\">\r\n               <a href=\"#\" class=\"button\">Purchase now</a>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/custom-pages/pricing/pricing.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/custom-pages/pricing/pricing.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-table {\n  display: table;\n  width: 100%; }\n  .pricing-table .pricing-option {\n    background: white;\n    text-align: center;\n    transition: all .3s ease-in-out; }\n  .pricing-table .pricing-option:nth-child(even) {\n      margin: 0 2%; }\n  .pricing-table .pricing-option:hover {\n      cursor: pointer;\n      box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.3);\n      transform: scale(1.04); }\n  .pricing-table .pricing-option:hover i, .pricing-table .pricing-option:hover h1, .pricing-table .pricing-option:hover span, .pricing-table .pricing-option:hover b {\n        color: #f44336; }\n  .pricing-table .pricing-option:hover .front {\n        opacity: 0;\n        visibility: hidden; }\n  .pricing-table .pricing-option:hover .back {\n        opacity: 1 !important;\n        visibility: visible !important; }\n  .pricing-table .pricing-option:hover .back a.button {\n          transform: translateY(0px) !important; }\n  .pricing-table .pricing-option hr {\n      border: none;\n      border-bottom: 1px solid #F0F0F0; }\n  .pricing-table .pricing-option i {\n      font-size: 3rem;\n      color: #D8D8D8;\n      transition: all .3s ease-in-out; }\n  .pricing-table .pricing-option h1 {\n      margin: 10px 0;\n      color: #212121;\n      transition: all .3s ease-in-out; }\n  .pricing-table .pricing-option p {\n      color: #999;\n      padding: 0 10px;\n      line-height: 1.3; }\n  .pricing-table .pricing-option .price {\n      position: relative; }\n  .pricing-table .pricing-option .price .front span.price {\n        font-size: 2rem;\n        text-transform: uppercase;\n        margin-top: 20px;\n        display: block;\n        font-weight: 700;\n        position: relative; }\n  .pricing-table .pricing-option .price .front span.price b {\n          position: absolute;\n          font-size: 1rem;\n          margin-left: 2px;\n          font-weight: 600; }\n  .pricing-table .pricing-option .price .back {\n        opacity: 0;\n        visibility: hidden;\n        transition: all .3s ease-in-out; }\n  .pricing-table .pricing-option .price .back a.button {\n          background: #f44336;\n          padding: 15px 20px;\n          display: inline-block;\n          text-decoration: none;\n          color: white;\n          position: absolute;\n          font-size: 13px;\n          top: -5px;\n          left: 0;\n          right: 0;\n          width: 150px;\n          margin: auto;\n          text-transform: uppercase;\n          transform: translateY(20px);\n          transition: all .3s ease-in-out; }\n  .pricing-table .pricing-option .price .back a.button:hover {\n            background: #ea1c0d; }\n  @media screen and (max-width: 600px) {\n  .pricing-table .pricing-option {\n    padding: 5%; }\n    .pricing-table .pricing-option:nth-child(even) {\n      margin: 30px 0 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXBhZ2VzL3ByaWNpbmcvRjpcXEPDlE5HIFZJ4buGQyAtIEzDgE0gVEjDik1cXEpPQiBBbmd1bGFyXFxiYWJ1dmkvc3JjXFxhcHBcXGN1c3RvbS1wYWdlc1xccHJpY2luZ1xccHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGVBQWM7RUFDZCxZQUFXLEVBNkZkO0VBL0ZEO0lBS1Esa0JBQWdCO0lBRWhCLG1CQUFrQjtJQUNsQixnQ0FBK0IsRUFzRmxDO0VBOUZMO01BVVksYUFBWSxFQUNmO0VBWFQ7TUFhWSxnQkFBZTtNQUNmLDRDQUF3QztNQUN4Qyx1QkFBc0IsRUFlekI7RUE5QlQ7UUFpQmdCLGVBcEJJLEVBcUJQO0VBbEJiO1FBb0JnQixXQUFVO1FBQ1YsbUJBQWtCLEVBQ3JCO0VBdEJiO1FBd0JnQixzQkFBcUI7UUFDckIsK0JBQThCLEVBSWpDO0VBN0JiO1VBMkJvQixzQ0FBcUMsRUFDeEM7RUE1QmpCO01BZ0NZLGFBQVc7TUFDWCxpQ0FBZ0MsRUFDbkM7RUFsQ1Q7TUFvQ1ksZ0JBekNJO01BMENKLGVBekNRO01BMENSLGdDQUErQixFQUNsQztFQXZDVDtNQXlDWSxlQUFjO01BQ2QsZUFBYztNQUNkLGdDQUErQixFQUNsQztFQTVDVDtNQThDWSxZQUFXO01BQ1gsZ0JBQWU7TUFDZixpQkFBZ0IsRUFDbkI7RUFqRFQ7TUFtRFksbUJBQWtCLEVBMENyQjtFQTdGVDtRQXNEb0IsZ0JBQWU7UUFDZiwwQkFBeUI7UUFDekIsaUJBQWdCO1FBQ2hCLGVBQWM7UUFDZCxpQkFBZ0I7UUFDaEIsbUJBQWtCLEVBT3JCO0VBbEVqQjtVQTZEd0IsbUJBQWtCO1VBQ2xCLGdCQUFlO1VBQ2YsaUJBQWdCO1VBQ2hCLGlCQUFnQixFQUNuQjtFQWpFckI7UUFxRWdCLFdBQVU7UUFDVixtQkFBa0I7UUFDbEIsZ0NBQStCLEVBcUJsQztFQTVGYjtVQXlFb0Isb0JBNUVBO1VBNkVBLG1CQUFrQjtVQUNsQixzQkFBcUI7VUFDckIsc0JBQXFCO1VBQ3JCLGFBQVk7VUFDWixtQkFBa0I7VUFDbEIsZ0JBQWU7VUFDZixVQUFTO1VBQ1QsUUFBTztVQUNQLFNBQVE7VUFDUixhQUFZO1VBQ1osYUFBWTtVQUNaLDBCQUF5QjtVQUN6Qiw0QkFBMkI7VUFDM0IsZ0NBQStCLEVBSWxDO0VBM0ZqQjtZQXlGd0Isb0JBQW9DLEVBQ3ZDO0VBU3JCO0VBQ0k7SUFFUSxZQUFXLEVBSWQ7SUFOTDtNQUlZLDBCQUF5QixFQUM1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLXBhZ2VzL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gdmFyaWFibGVzXHJcbiRpY29uLXNpemU6IDNyZW07XHJcbiRpY29uLWNvbG9yOiAjRDhEOEQ4O1xyXG4kbWFpbi1jb2xvcjogI2Y0NDMzNjtcclxuXHJcbi8vIFByaWNpbmcgdGFibGVcclxuLnByaWNpbmctdGFibGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5wcmljaW5nLW9wdGlvbiB7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDIlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDMwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgICAgICAgICBpLCBoMSwgc3BhbiwgYiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYS5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGMEYwRjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRpY29uLXNpemU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaWNvbi1jb2xvcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5mcm9udCB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICBhLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG1haW4tY29sb3IsIDEwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gUmVzcG9uc2l2ZVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnByaWNpbmctdGFibGUge1xyXG4gICAgICAgIC5wcmljaW5nLW9wdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/custom-pages/pricing/pricing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-pages/pricing/pricing.component.ts ***!
  \***********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
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

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/custom-pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/app/custom-pages/pricing/pricing.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/custom-pages/timeline/timeline-component.html":
/*!***************************************************************!*\
  !*** ./src/app/custom-pages/timeline/timeline-component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-card>\r\n\r\n  <mat-card-title>Timeline</mat-card-title>\r\n            <mat-card-subtitle></mat-card-subtitle>\r\n            <hr>\r\n   <div class=\"timeline\">\r\n      <div class=\"timeline-event\">\r\n         <div class=\"card timeline-content\">\r\n            <mat-card >\r\n               <div class=\"card-image waves-effect waves-block waves-light\">\r\n                  <img class=\"activator\" src=\"assets/images/notfound.jpg\">\r\n               </div>\r\n               <div class=\"card-content p-2\">\r\n                  <span class=\"text-xl\">\r\n                  It is a long established fact<span fxFlex></span> <i class=\"material-icons right\">more_vert</i></span>\r\n                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<a href=\"#\">This is a link</a></p>\r\n               </div>\r\n            </mat-card>\r\n         </div>\r\n         <div class=\"timeline-badge blue white-text\"><i class=\"material-icons\">language</i></div>\r\n      </div>\r\n      <div class=\"timeline-event\">\r\n         <div class=\"card timeline-content\">\r\n            <mat-card >\r\n               <div class=\"card-image waves-effect waves-block waves-light\">\r\n                  <img class=\"activator\" src=\"assets/images/blog-1.jpg\">\r\n               </div>\r\n               <div class=\"card-content p-2\">\r\n                  <span class=\"text-xl\">\r\n                  It is a long established fact<span fxFlex></span> <i class=\"material-icons right\">more_vert</i></span>\r\n                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<a href=\"#\">This is a link</a></p>\r\n               </div>\r\n            </mat-card>\r\n         </div>\r\n         <div class=\"timeline-badge red white-text\"><i class=\"material-icons\">work</i></div>\r\n      </div>\r\n      <div class=\"timeline-event\">\r\n         <div class=\"card timeline-content\">\r\n            <mat-card >\r\n               <div class=\"card-image waves-effect waves-block waves-light\">\r\n                  <img class=\"activator\" src=\"assets/images/night.jpg\">\r\n               </div>\r\n               <div class=\"card-content p-2\">\r\n                  <span class=\"text-xl\">\r\n                  It is a long established fact<span fxFlex></span> <i class=\"material-icons right\">more_vert</i></span>\r\n                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<a href=\"#\">This is a link</a></p>\r\n               </div>\r\n            </mat-card>\r\n         </div>\r\n         <div class=\"timeline-badge green white-text\"><i class=\"material-icons\">person</i></div>\r\n      </div>\r\n   </div>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/custom-pages/timeline/timeline-component.scss":
/*!***************************************************************!*\
  !*** ./src/app/custom-pages/timeline/timeline-component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative; }\n  .timeline .timeline-event {\n    position: relative;\n    padding-top: 5px;\n    padding-bottom: 5px; }\n  .timeline .timeline-event .timeline-content {\n      position: relative;\n      width: calc(50% - 50px); }\n  .timeline .timeline-event:first-child::before {\n      display: none; }\n  .timeline .timeline-event:last-child::after {\n      display: none; }\n  .timeline .timeline-event:nth-child(even) .timeline-content {\n      margin-left: calc(50% +50px); }\n  .timeline .timeline-event:nth-child(odd) .timeline-content {\n      margin-left: 0; }\n  .timeline .timeline-event::before {\n    display: block;\n    content: \"\";\n    width: 2px;\n    height: calc(50% - 30px);\n    position: absolute;\n    background: #d2d2d2;\n    left: calc(50% - 1px);\n    top: 0; }\n  .timeline .timeline-event::after {\n    display: block;\n    content: \"\";\n    width: 2px;\n    height: calc(50% - 30px);\n    position: absolute;\n    background: #d2d2d2;\n    left: calc(50% - 1px);\n    top: calc(50% +30px); }\n  .timeline .timeline-badge {\n    display: block;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    background: #d2d2d2;\n    top: calc(50% - 20px);\n    right: calc(50% - 20px);\n    border-radius: 50%;\n    text-align: center;\n    cursor: default; }\n  .timeline .timeline-badge i {\n      font-size: 25px;\n      line-height: 40px; }\n  @media (max-width: 600px) {\n  .timeline .timeline-event .timeline-content {\n    width: calc(100% - 70px); }\n  .timeline .timeline-event:nth-child(even) .timeline-content {\n    margin-left: 70px; }\n  .timeline .timeline-event:nth-child(odd) .timeline-content {\n    margin-left: 70px; }\n  .timeline .timeline-event::before {\n    left: 19px; }\n  .timeline .timeline-event::after {\n    left: 19px; }\n  .timeline .timeline-badge {\n    left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXBhZ2VzL3RpbWVsaW5lL0Y6XFxDw5RORyBWSeG7hkMgLSBMw4BNIFRIw4pNXFxKT0IgQW5ndWxhclxcYmFidXZpL3NyY1xcYXBwXFxjdXN0b20tcGFnZXNcXHRpbWVsaW5lXFx0aW1lbGluZS1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLG1CQUFrQixFQTJEbEI7RUE1REQ7SUFHRSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQWlCbkI7RUF0QkY7TUFPRyxtQkFBa0I7TUFDbEIsd0JBQXVCLEVBQ3ZCO0VBVEg7TUFXRyxjQUFhLEVBQ2I7RUFaSDtNQWNHLGNBQWEsRUFDYjtFQWZIO01BaUJHLDZCQUE0QixFQUM1QjtFQWxCSDtNQW9CRyxlQUFjLEVBQ2Q7RUFyQkg7SUF3QkUsZUFBYztJQUNkLFlBQVc7SUFDWCxXQUFVO0lBQ1YseUJBQXdCO0lBQ3hCLG1CQUFrQjtJQUNsQixvQkEvQitCO0lBZ0MvQixzQkFBcUI7SUFDckIsT0FBTSxFQUNOO0VBaENGO0lBa0NFLGVBQWM7SUFDZCxZQUFXO0lBQ1gsV0FBVTtJQUNWLHlCQUF3QjtJQUN4QixtQkFBa0I7SUFDbEIsb0JBekMrQjtJQTBDL0Isc0JBQXFCO0lBQ3JCLHFCQUFvQixFQUNwQjtFQTFDRjtJQTRDRSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxhQUFZO0lBQ1osb0JBbEQrQjtJQW1EL0Isc0JBQXFCO0lBQ3JCLHdCQUF1QjtJQUV2QixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBS2Y7RUEzREY7TUF3REcsZ0JBQWU7TUFDZixrQkFBaUIsRUFDakI7RUFHSDtFQUNDO0lBR0cseUJBQXdCLEVBQ3hCO0VBSkg7SUFNRyxrQkFBaUIsRUFDakI7RUFQSDtJQVNHLGtCQUFpQixFQUNqQjtFQVZIO0lBYUUsV0FBVSxFQUNWO0VBZEY7SUFnQkUsV0FBVSxFQUNWO0VBakJGO0lBbUJFLFFBQU8sRUFDUCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLXBhZ2VzL3RpbWVsaW5lL3RpbWVsaW5lLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnNcclxuJGNvbG9yX3F1aWxsX2dyYXlfYXBwcm94OiAjZDJkMmQyO1xyXG5cclxuLnRpbWVsaW5lIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LnRpbWVsaW5lLWV2ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG5cdFx0fVxyXG5cdFx0JjpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHRcdCY6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdFx0JjpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogY2FsYyg1MCUgKzUwcHgpO1xyXG5cdFx0fVxyXG5cdFx0JjpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQudGltZWxpbmUtZXZlbnQ6OmJlZm9yZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHR3aWR0aDogMnB4O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDUwJSAtIDMwcHgpO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0YmFja2dyb3VuZDogJGNvbG9yX3F1aWxsX2dyYXlfYXBwcm94O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAxcHgpO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHQudGltZWxpbmUtZXZlbnQ6OmFmdGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHdpZHRoOiAycHg7XHJcblx0XHRoZWlnaHQ6IGNhbGMoNTAlIC0gMzBweCk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRiYWNrZ3JvdW5kOiAkY29sb3JfcXVpbGxfZ3JheV9hcHByb3g7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XHJcblx0XHR0b3A6IGNhbGMoNTAlICszMHB4KTtcclxuXHR9XHJcblx0LnRpbWVsaW5lLWJhZGdlIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAkY29sb3JfcXVpbGxfZ3JheV9hcHByb3g7XHJcblx0XHR0b3A6IGNhbGMoNTAlIC0gMjBweCk7XHJcblx0XHRyaWdodDogY2FsYyg1MCUgLSAyMHB4KTtcclxuXHRcdC8vSW5zdGVhZCBvZiB0aGUgbGluZSBiZWxvdyB5b3UgY291bGQgdXNlIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHJhZGl1cywgJHZlcnRpY2FsLXJhZGl1cylcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHRcdGkge1xyXG5cdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdC50aW1lbGluZSB7XHJcblx0XHQudGltZWxpbmUtZXZlbnQge1xyXG5cdFx0XHQudGltZWxpbmUtY29udGVudCB7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogNzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogNzBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnRpbWVsaW5lLWV2ZW50OjpiZWZvcmUge1xyXG5cdFx0XHRsZWZ0OiAxOXB4O1xyXG5cdFx0fVxyXG5cdFx0LnRpbWVsaW5lLWV2ZW50OjphZnRlciB7XHJcblx0XHRcdGxlZnQ6IDE5cHg7XHJcblx0XHR9XHJcblx0XHQudGltZWxpbmUtYmFkZ2Uge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-pages/timeline/timeline.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom-pages/timeline/timeline.component.ts ***!
  \*************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-timeline',
            template: __webpack_require__(/*! ./timeline-component.html */ "./src/app/custom-pages/timeline/timeline-component.html"),
            styles: [__webpack_require__(/*! ./timeline-component.scss */ "./src/app/custom-pages/timeline/timeline-component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-pages-pages-module.js.map