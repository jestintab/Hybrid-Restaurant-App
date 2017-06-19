webpackJsonp([15],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourite__ = __webpack_require__(694);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function() { return FavouritePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavouritePageModule = (function () {
    function FavouritePageModule() {
    }
    return FavouritePageModule;
}());
FavouritePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__favourite__["a" /* FavouritePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favourite__["a" /* FavouritePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__favourite__["a" /* FavouritePage */]
        ]
    })
], FavouritePageModule);

//# sourceMappingURL=favourite.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritePage = (function () {
    function FavouritePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.favouriteItems = [];
        this.cartItems = [];
        this.storage.get('favourite').then(function (favourite) {
            _this.favouriteItems = favourite;
        });
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
    }
    FavouritePage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    FavouritePage.prototype.buyNow = function (productId) {
        this.navCtrl.push("ProductDetailsPage", {
            productId: productId
        });
    };
    FavouritePage.prototype.isFavourite = function () {
        return this.favouriteItems != null;
    };
    return FavouritePage;
}());
FavouritePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favourite',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\favourite\favourite.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Favourite</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div *ngIf="!isFavourite()">\n        <h3>Wish List is empty!</h3>\n    </div>\n    <ion-card *ngFor="let favouriteItem of favouriteItems">\n        <ion-list>\n            <ion-item>\n                <ion-thumbnail item-left>\n                    <img src={{favouriteItem.pictures}}>\n                </ion-thumbnail>\n                <p class="heading">{{favouriteItem.title}}</p>\n                <p>{{favouriteItem.body}}</p>\n                <button class="add" ion-button (click)="buyNow(favouriteItem.id)">\n                    <ion-icon name="cart"></ion-icon>\n                    &nbsp; Buy Now\n                </button>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\favourite\favourite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], FavouritePage);

//# sourceMappingURL=favourite.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map