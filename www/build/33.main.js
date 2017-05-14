webpackJsonp([33],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(586);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    return CheckoutPageModule;
}());
CheckoutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]
        ]
    })
], CheckoutPageModule);

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.orderDetails = {};
        this.tagHide1 = true;
        this.tagHide2 = true;
        this.OrderedProduct = {
            cartItems: [],
            COD: '',
            orderDetail: {}
        };
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
    }
    CheckoutPage.prototype.onCheckout = function (OrderDetails) {
        this.OrderedProduct.orderDetail = OrderDetails.value;
        this.OrderedProduct.COD = this.COD;
        this.service.postOrderDetails(this.OrderedProduct);
        // .subscribe((res) => {
        //     console.log(res);
        // });
        console.log(JSON.stringify(this.OrderedProduct));
        //this.navCtrl.push(ThankyouPage);
    };
    CheckoutPage.prototype.toggle2 = function () {
        this.tagHide2 = this.tagHide2 ? false : true;
    };
    CheckoutPage.prototype.hide = function () {
        this.tagHide2 = true;
        this.COD = 'cod';
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\checkout\checkout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title">Payment Options\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="checkOut">\n    <form (ngSubmit)="onCheckout(f)" #f="ngForm">\n        <ion-row>\n            <ion-col class="address-header">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;Address\n            </ion-col>\n        </ion-row><!-- row for address -->\n        <ion-list class="adress-line">\n\n            <ion-label  class="add-heading">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;ENTER ADDRESS\n            </ion-label>\n            <div>\n                <ion-item class="sub-address">\n                    <ion-input type="text" placeholder="Name" name="name" id="name"\n                               [(ngModel)]="orderDetails.name"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="email" placeholder="Email" name="email" id="email"\n                               [(ngModel)]="orderDetails.email"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="number" placeholder="Phone" name="phone" id="phone"\n                               [(ngModel)]="orderDetails.phone"></ion-input>\n                </ion-item>\n\n                <ion-item class="sub-address">\n                    <ion-textarea rows="3" placeholder="Address" name="adress" id="adress"\n                                  [(ngModel)]="orderDetails.adress"></ion-textarea>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input ng-disabled type="text" placeholder="City" ngValue="Doha, Qatar" name="city" id="city" \n                               [(ngModel)]="orderDetails.city"></ion-input>\n                </ion-item>\n                \n            </div>\n\n        </ion-list>\n        <ion-row>\n            <ion-col class="payment-header">\n                <ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>\n                &nbsp;&nbsp;Payment\n            </ion-col>\n        </ion-row>\n\n        <!--payment-->\n        <ion-list radio-group class="payment-block">\n            <ion-row>\n                <ion-col width-50 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>COD</ion-label>\n                        <ion-radio checked="true" value="cod" (click)="hide()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col width-50 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>Card </ion-label>\n                        <ion-radio value="pcm" (click)="toggle2()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <!--payment ends-->\n\n        <!--payment input fields-->\n        <ion-row>\n            <ion-list class="card-list" [hidden]="tagHide2">\n                <ion-item class="card-detail">\n                    <ion-row>\n                        <p> Our bike delivery staff will bring a Portable Credit/Debit Card Machine for the payment.</p>\n                    </ion-row>\n                    <!--<ion-row>\n                        <ion-col class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="number" placeholder="Card No:" name="cardNo" id="cardNo"\n                                           [(ngModel)]="orderDetails.cardNo"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width-33 class="no-padd">\n                            <ion-item class="card-item cvv">\n                                <ion-input type="number" placeholder="Cvv:" name="cvv" id="cvv"\n                                           [(ngModel)]="orderDetails.cvv"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col width-67 class="no-padd">\n                            <ion-item class="card-item date">\n                                <ion-datetime class="textbox-n" placeholder="Date" displayFormat="DD/MM/YYYY"\n                                              placeholder="Date:" name="expiryDate"\n                                              id="expiryDate"\n                                              [(ngModel)]="orderDetails.expiryDate"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="text" placeholder="Name on Card:" name="cardHolderName"\n                                           id="cardHolderName"\n                                           [(ngModel)]="orderDetails.cardHolderName"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>-->\n                </ion-item>\n            </ion-list>\n        </ion-row>\n\n        <button class="checkOut-btn" type="submit" ion-button block>\n            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n            &nbsp;&nbsp;Check Out\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\checkout\checkout.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=33.main.js.map