webpackJsonp([1],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(582);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductListPageModule = (function () {
    function ProductListPageModule() {
    }
    return ProductListPageModule;
}());
ProductListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]
        ]
    })
], ProductListPageModule);

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the Entity pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var Entity = (function () {
    function Entity() {
    }
    /*
      Takes a value and makes it lowercase.
     */
    Entity.prototype.transform = function (text) {
        var entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['#x27', '\''],
            ['#x2F', '/'],
            ['#39', '\''],
            ['#47', '/'],
            ['lt', '<'],
            ['gt', '>'],
            ['nbsp', ' '],
            ['quot', '"']
        ];
        for (var i = 0, max = entities.length; i < max; ++i)
            text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
        return text;
    };
    return Entity;
}());
Entity = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'entity'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Entity);

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the OrderBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var OrderBy = (function () {
    function OrderBy() {
    }
    /*
      Takes a value and makes it lowercase.
     */
    OrderBy.prototype.transform = function (value, expression, ex1, ex2, reverse) {
        if (!value) {
            return value;
        }
        var array = value.sort(function (a, b) {
            //console.log(expression);
            //console.log(a[expression][ex1][ex2]);
            //console.log(a['values']['name']['value']);
            return a[expression][ex1][ex2] > b[expression][ex1][ex2] ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    return OrderBy;
}());
OrderBy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderBy);

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trunc__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_ts__ = __webpack_require__(581);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__entity__["a" /* Entity */],
            __WEBPACK_IMPORTED_MODULE_1__trunc__["a" /* Trunc */],
            __WEBPACK_IMPORTED_MODULE_3__order_by_ts__["a" /* OrderBy */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__entity__["a" /* Entity */],
            __WEBPACK_IMPORTED_MODULE_1__trunc__["a" /* Trunc */],
            __WEBPACK_IMPORTED_MODULE_3__order_by_ts__["a" /* OrderBy */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trunc; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the OrderBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var Trunc = (function () {
    function Trunc() {
    }
    /*
      Takes a value and makes it lowercase.
     */
    Trunc.prototype.transform = function (value) {
        return Math.trunc(value);
    };
    return Trunc;
}());
Trunc = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'trunc',
        pure: false
    })
], Trunc);

//# sourceMappingURL=trunc.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListPage = (function () {
    function ProductListPage(navCtrl, service, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.menuItems = [];
        this.items = [];
        this.catId = navParams.get('catId');
        // this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        // if (this.cartItems != null) {
        //   this.noOfItems = this.cartItems.length;
        // }
    }
    ProductListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMenus(this.catId)
            .subscribe(function (response) {
            _this.menuItems = response.restify.rows;
            _this.items = _this.menuItems;
            //console.log(response.restify.rows);
        });
    };
    ProductListPage.prototype.initializeItems = function () {
        this.items = this.menuItems;
    };
    ProductListPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (data) {
                return (data.values.menu_name.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProductListPage.prototype.navigate = function (productId) {
        this.navCtrl.push("ProductDetailsPage", {
            productId: productId
        });
    };
    ProductListPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    return ProductListPage;
}());
ProductListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-product-list',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\product-list\product-list.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>Menu Items</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="navcart()">\n          <ion-icon name="cart"></ion-icon>\n          <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Enter Menu Item">\n    </ion-searchbar>\n  <ion-list *ngFor="let menuItem of items"><!-- list -->\n    <ion-item text-wrap (click)="navigate(menuItem.values.menu_id.value)"><!-- item -->\n      <ion-row class="category"><!-- row -->\n        <ion-col col-3><!-- col with 50  width -->\n          <img src="http://aljedad.com/sforder/assets/images/thumbnail/{{menuItem.values.menu_thumb.value}}" alt="{{menuItem.values.menu_name.value}}"/>\n        </ion-col>\n        <ion-col col-9><!-- col with 50% width -->\n          <p class="item-name">{{menuItem.values.menu_name.value | entity }}</p>\n          <p class="item-detail" text-wrap><span class="">{{menuItem.values.menu_description.value}}</span></p>\n          <p class="item-detail">Price:\n    <span  class="item-price">{{menuItem.values.menu_price.value | trunc }}  QR</span>\n    <!-- <span *ngIf="menuItem.offer" class="item-price">${{}}</span> -->\n          </p>\n        </ion-col>\n      </ion-row><!--end row -->\n    </ion-item><!-- item -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\product-list\product-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ProductListPage);

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map