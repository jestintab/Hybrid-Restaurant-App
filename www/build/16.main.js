webpackJsonp([16],{

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(608);
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

/***/ 608:
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
        this.order_delivery = false;
        this.gatemall = true;
        this.OrderedProduct = {
            cartItems: [],
            COD: '',
            orderType: '',
            orderDetail: {},
            orderTotal: {},
        };
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.OrderedProduct.orderTotal = JSON.parse(localStorage.getItem('orderTotal'));
        this.orderDetails.city = 'Doha, Qatar';
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
    CheckoutPage.prototype.delivery = function () {
        this.order_delivery = false;
        this.gatemall = true;
        this.orderDetails.city = 'Doha, Qatar';
        this.orderType = 'Delivery';
    };
    CheckoutPage.prototype.gateMall = function () {
        this.gatemall = false;
        this.order_delivery = true;
        this.orderDetails.city = 'The Gate Mall, Doha, Qatar';
    };
    CheckoutPage.prototype.takeaway = function () {
        this.order_delivery = true;
        this.gatemall = true;
        this.orderDetails.city = 'Doha, Qatar';
    };
    CheckoutPage.prototype.hide = function () {
        this.tagHide2 = true;
        //this.tag = true;
        this.COD = 'cod';
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\checkout\checkout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title">Payment Options\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="checkOut">\n\n    <form (ngSubmit)="onCheckout(f)" #f="ngForm">        \n            <ion-row>\n            <ion-col class="payment-header">\n                <ion-icon ios="ios-paper-plane" md="md-paper-plane"></ion-icon>\n                &nbsp;&nbsp;Delivery / TakeAway\n            </ion-col>\n        </ion-row>\n            <!--Delivery -->\n        <ion-list radio-group class="ordertype-block">\n          \n                <ion-col col-4 class="col-card no-padd">\n                    <ion-item class="sub-address">\n                        <ion-label>Delivery <span>in 50 mins</span></ion-label>                      \n                        <ion-radio checked="true" value="delivery" (click)="delivery()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 class="col-card no-padd">\n                    <ion-item class="sub-address">\n                        <ion-label>TakeAway <span>in 15 mins</span></ion-label>\n                      \n                        <ion-radio value="pickup"  (click)="takeaway()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 class="no-padd">\n                    <ion-item class="sub-address">\n                        <ion-label>Free Delivery <span>(only gatemall)</span></ion-label>\n                        <ion-label> </ion-label>\n                        <ion-radio value="free" (click)="gateMall()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n           \n        </ion-list>\n        <!--delivery ends-->\n        <ion-row>\n              <ion-col col-12 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>Order Total  </ion-label>\n                        <ion-label>  {{OrderedProduct.orderTotal}}  QR   </ion-label>\n                    </ion-item>\n                </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class="address-header">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;Address\n            </ion-col>\n        </ion-row><!-- row for address -->\n        <ion-list class="adress-line">\n\n            <ion-label  class="add-heading">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;ENTER ADDRESS\n            </ion-label>\n            <div>\n                <ion-item class="sub-address">\n                    <ion-input type="text" placeholder="Name" name="name" id="name"\n                               [(ngModel)]="orderDetails.name"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="email" placeholder="Email" name="email" id="email"\n                               [(ngModel)]="orderDetails.email"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="number" placeholder="Phone" name="phone" id="phone"\n                               [(ngModel)]="orderDetails.phone"></ion-input>\n                </ion-item>\n\n                <ion-item class="sub-address" [hidden]="order_delivery">\n                    <ion-textarea rows="3" placeholder="Address" name="adress" id="adress"\n                                  [(ngModel)]="orderDetails.adress"></ion-textarea>\n                </ion-item>\n\n                <div [hidden]="gatemall"> \n\n                <ion-item class="sub-address" >\n                    <ion-textarea rows="3" placeholder="Company/Shop Name" name="adress" id="adress"\n                                  [(ngModel)]="orderDetails.address"></ion-textarea>\n                </ion-item>\n                <ion-item class="sub-address">\n                <ion-label>Select Tower</ion-label>\n                <ion-select [(ngModel)]="orderDetails.tower" name="tower" id="tower">\n                    <ion-option value="G">Mall Area</ion-option>\n                    <ion-option value="T1">Tower 1</ion-option>\n                    <ion-option value="T2">Tower 2</ion-option>\n                    <ion-option value="T3">Tower 3</ion-option>\n                    <ion-option value="T4">Tower 4</ion-option>\n                </ion-select>\n                </ion-item>\n                <ion-item class="sub-address" >\n                <ion-label>Floor</ion-label>\n                <ion-input type="number" placeholder="Enter your Floor No" name="floor" id="floor"\n                               [(ngModel)]="orderDetails.floor"></ion-input>\n                </ion-item>\n                </div>\n                <ion-item class="sub-address" >\n                    <ion-label >City</ion-label>\n                    <ion-input disabled="true" type="text" placeholder="City" ngValue="Doha, Qatar" name="city" id="city" \n                               [(ngModel)]="orderDetails.city"></ion-input>\n                </ion-item>               \n            </div>\n\n        </ion-list>\n        <ion-row>\n            <ion-col class="payment-header">\n                <ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>\n                &nbsp;&nbsp;Payment\n            </ion-col>\n        </ion-row>\n\n        <!--payment-->\n        <ion-list radio-group class="payment-block">\n            <ion-row>\n                <ion-col col-6 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>COD</ion-label>\n                        <ion-radio checked="true" value="cod" (click)="hide()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>Card </ion-label>\n                        <ion-radio value="pcm" (click)="toggle2()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <!--payment ends-->\n\n        <!--payment input fields-->\n        <ion-row>\n            <ion-list class="card-list" [hidden]="tagHide2">\n                <ion-item class="card-detail">\n                    <ion-row>\n                        <ion-col col-12>\n                        <p> Our bike delivery staff will bring a <br>Portable Credit/Debit Card Machine for the payment.\n\n                        </p>\n                        </ion-col>\n                    </ion-row>\n                    <!--<ion-row>\n                        <ion-col class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="number" placeholder="Card No:" name="cardNo" id="cardNo"\n                                           [(ngModel)]="orderDetails.cardNo"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width-33 class="no-padd">\n                            <ion-item class="card-item cvv">\n                                <ion-input type="number" placeholder="Cvv:" name="cvv" id="cvv"\n                                           [(ngModel)]="orderDetails.cvv"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col width-67 class="no-padd">\n                            <ion-item class="card-item date">\n                                <ion-datetime class="textbox-n" placeholder="Date" displayFormat="DD/MM/YYYY"\n                                              placeholder="Date:" name="expiryDate"\n                                              id="expiryDate"\n                                              [(ngModel)]="orderDetails.expiryDate"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="text" placeholder="Name on Card:" name="cardHolderName"\n                                           id="cardHolderName"\n                                           [(ngModel)]="orderDetails.cardHolderName"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>-->\n                </ion-item>\n            </ion-list>\n        </ion-row>\n\n        <button class="checkOut-btn" type="submit" ion-button block>\n            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n            &nbsp;&nbsp;Check Out\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\checkout\checkout.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]) === "function" && _b || Object])
], CheckoutPage);

var _a, _b;
//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map