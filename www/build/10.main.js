webpackJsonp([10],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer__ = __webpack_require__(616);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferPageModule = (function () {
    function OfferPageModule() {
    }
    return OfferPageModule;
}());
OfferPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]
        ]
    })
], OfferPageModule);

//# sourceMappingURL=offer.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfferPage = (function () {
    function OfferPage(navCtrl, navParams, offerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.offerProducts = [];
    }
    OfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.offerService.getData()
            .subscribe(function (response) {
            for (var i = 0; i <= response.menuItems.length - 1; i++) {
                if (response.menuItems[i].offer != null) {
                    _this.offerProducts.push(response.menuItems[i]);
                }
            }
        });
    };
    OfferPage.prototype.gotoNextSlide = function () {
        this.slides.slideNext();
    };
    OfferPage.prototype.gotoPrevSlide = function () {
        this.slides.slidePrev();
    };
    OfferPage.prototype.buyNow = function (productId) {
        this.navCtrl.push("ProductDetailsPage", {
            productId: productId
        });
    };
    return OfferPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], OfferPage.prototype, "slides", void 0);
OfferPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-offer',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\offer\offer.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Offers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="full-slide"><!-- first row -->\n        <ion-slides initialSlide=0 speed=1000 loop=true>\n            <ion-slide *ngFor="let product of offerProducts">\n                <div class="overlay">\n                    <img src="{{product.pictures}}" class="slider-img">\n                    <div class="offer-label">\n                        <span class="square text-center light assertive-bg ng-binding">{{product.offer}}</span>\n                        <i class="triangle"></i>\n                    </div>\n                    <div class="card-title">\n                        <ion-icon name="arrow-dropleft" (click)="gotoPrevSlide()"></ion-icon>\n                        &nbsp;&nbsp;&nbsp; {{product.title}} &nbsp;&nbsp;&nbsp;\n                        <ion-icon name="arrow-dropright" (click)="gotoNextSlide()"></ion-icon>\n                    </div>\n                </div>\n\n                <p class="price"><b>Original Price : </b> <span class="total line"> ${{product.price[0].value}}</span></p>\n                <p class="price"><b>Offer Price : </b><span class="total"> ${{product.price[0].offerValue}}</span></p>\n                <p class="desc"><b>Product Description : </b> {{product.body}}</p>\n                <a (click)="buyNow(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                    <ion-icon name="cart">\n                    </ion-icon>\n                    Buy Now\n                </a>\n            </ion-slide>\n        </ion-slides>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\offer\offer.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], OfferPage);

//# sourceMappingURL=offer.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map