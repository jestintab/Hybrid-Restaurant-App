webpackJsonp([3],{

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(585);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], CartPageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 583:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'entity'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Entity);

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ 584:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderBy',
        pure: false
    })
], OrderBy);

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trunc__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_ts__ = __webpack_require__(584);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

/***/ 586:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'trunc',
        pure: false
    })
], Trunc);

//# sourceMappingURL=trunc.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.categories = [];
        this.featured = [];
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
        this.service.getData()
            .subscribe(function (response) {
            // this.categories = response.categories;
            _this.featured = response.featured;
        });
        this.service.getCategory()
            .subscribe(function (response) {
            _this.categories = response.restify.rows;
        });
    }
    HomePage.prototype.navigate = function (catId) {
        this.navCtrl.push("ProductListPage", { catId: catId });
    };
    HomePage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Sandwich Factory</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="grid">\n        <ion-row><!-- first row -->\n            <ion-slides initialSlide=0 speed=1000 loop=true pager=true>\n                <ion-slide *ngFor="let feature of featured">\n                    <div class="overlay">\n                        <img src={{feature.thumb}} class="slider-img">\n                    </div><!--overlay-->\n                    <div class="card-title">Featured Products</div>\n                </ion-slide>\n            </ion-slides>\n        </ion-row><!-- first row -->\n        <!-- second-row -->\n        <h2 text-center>Categories</h2>\n        <ion-row class="categories">\n            <ion-col width-6 *ngFor="let categorie of categories" (click)="navigate(categorie.values.category_id.value)">\n                <img src="https://order.sandwichfactory.qa/assets/images/{{categorie.values.image.value}}">\n                <p class="text-over-img">{{categorie.values.name.value | entity  }}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map