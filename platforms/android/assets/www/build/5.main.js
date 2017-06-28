webpackJsonp([5],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(590);
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
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ]
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 588:
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

/***/ 589:
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

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trunc__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_ts__ = __webpack_require__(589);
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

/***/ 591:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {NgForm} from "@angular/forms";
var CartPage = (function () {
    function CartPage(navCtrl, alertCtrl, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.cartItems = [];
        this.cartData = [];
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
    }
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Your Cart is Empty!',
                message: "Please add item",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            localStorage.removeItem('cartItem');
                            if (_this.navCtrl.canGoBack() == true) {
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.navCtrl.push("HomePage");
                            }
                        }
                    }
                ]
            });
            prompt_1.present();
        }
        else {
            this.noOfItems = this.cartItems.length;
            this.CalculatePrice();
            //console.log(this.cartItems);
        }
    };
    CartPage.prototype.deleteItem = function (data) {
        for (var i = 0; i <= this.cartItems.length - 1; i++) {
            if (this.cartItems[i].id == data.id) {
                this.cartItems.splice(i, 1);
            }
        }
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.SubTotalPrice = 0;
            this.GrandTotal = 0;
        }
        else {
            this.CalculatePrice();
        }
        localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.noOfItems = this.noOfItems - 1;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
    };
    CartPage.prototype.editItem = function (cartItem) {
        //console.log(cartItem);
        this.productId = cartItem.id;
        // let optionModal = this.modalCtrl.create( "ProductOption", {"productId": this.productId});
        // optionModal.onDidDismiss(data => {
        //     console.log(data);
        // });
        // optionModal.present();
        this.navCtrl.push("ProductDetailsPage", {
            productId: this.productId,
            cartStoredItem: cartItem,
        });
    };
    CartPage.prototype.deleteOptionItem = function (data) {
        for (var i = 0; i <= this.cartItems.length - 1; i++) {
            for (var j = 0; j <= this.cartItems[i].extraOption.length - 1; j++) {
                if (this.cartItems[i].extraOption[j].id == data.id) {
                    this.cartItems[i].extraOption.splice(j, 1);
                    console.log(this.cartItems);
                }
            }
        }
        this.CalculatePrice();
        localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.noOfItems = this.noOfItems - 1;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
    };
    CartPage.prototype.onCart = function () {
        this.cartData['comments'] = this.cartData['comments'];
        this.cartData['noofitems'] = this.noOfItems;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
        else {
            this.navCtrl.push("CheckoutPage", this.cartData);
            console.log(this.cartData);
        }
    };
    CartPage.prototype.alert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cart Is Empty!',
            subTitle: 'Please Add Item!',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        localStorage.removeItem('cartItem');
                        _this.navCtrl.push("HomePage");
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.CalculatePrice = function () {
        var proGrandTotalPrice = 0;
        for (var i = 0; i <= this.cartItems.length; i++) {
            if (this.cartItems[i] != null) {
                if (this.cartItems[i].extraOption.length != 0) {
                    for (var j = 0; j <= this.cartItems[i].extraOption.length - 1; j++) {
                        proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].extraOption[j].price;
                    }
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;
                }
                else {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;
                }
                this.SubTotalPrice = proGrandTotalPrice;
            }
        }
        this.GrandTotal = Math.ceil(this.SubTotalPrice);
        this.cartData['orderTotal'] = this.SubTotalPrice;
        // localStorage.setItem('orderTotal', JSON.stringify(this.SubTotalPrice));
    };
    CartPage.prototype.add = function (data) {
        if (data.Quantity < 20) {
            data.Quantity = data.Quantity + 1;
            for (var i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].price);
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    };
    CartPage.prototype.remove = function (data) {
        if (data.Quantity > 1) {
            data.Quantity = data.Quantity - 1;
            for (var i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].price);
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    };
    return CartPage;
}());
CartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\cart\cart.html"*/'<ion-header>\n   <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Cart</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-list class="cart-list" *ngFor="let cartItem of cartItems"><!-- item-list -->\n            <ion-item class="cart-item"><!-- item -->\n                <ion-row>\n                    <ion-col col-2><!-- col-cancel  button -->\n                        <ion-icon class="close-btn" ion-button icon only clear ios="ios-close-circle"\n                                  md="md-close-circle"\n                                   (click)="deleteItem(cartItem)">\n                        </ion-icon>\n                    </ion-col>\n                    <ion-col><!-- col-for item-image and details -->\n                        <ion-row>\n                            <ion-col col-4><!-- item-image -->\n                                <img src="http://aljedad.com/sforder/assets/images/thumbnail/{{cartItem.thumb}}" alt="">\n                            </ion-col>\n                            <ion-col col-6>\n                                <p><span class="item-detail"> {{cartItem.Quantity}} x </span> \n                                   <span class="item-name"> {{ cartItem.name }} </span>                                 \n                                </p>\n                                <!--<p class="item-price"> {{cartItem.price | trunc}} QR </p>-->\n\n                            <div  *ngFor="let option of cartItem.extraOption"> \n                            <p class="item-option-detail">+ {{option.name}} - {{option.price}}QR \n                                <!--<span class="option-delete" (click)="deleteOptionItem(option)"> <strong>x</strong> </span> </p>-->\n                            </div>   \n                                <ion-row><!-- row-for count item -->\n\n                                    <div class="count">\n                                        <span class="item-count" (click)="remove(cartItem)"> - </span>\n                                        <span class="item-count show-count"> {{cartItem.Quantity}}</span>\n                                        <span class="item-count" (click)="add(cartItem)"> + </span>\n                                    </div>\n                                </ion-row>\n                                <ion-row>\n                                    <button  (click)=editItem(cartItem) > Edit </button>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n        <ion-row class="price-details">\n            <ion-col class="calculate">\n                <p class="bill-detail">Subtotal <span> {{SubTotalPrice}} QR</span></p>\n              \n                <!--<p class="bill-detail">Other Taxes (3%)\n                    <span>{{otherTaxes | number}} QR</span></p>-->\n                <hr>\n                <p class="cart-total"><strong>Order Total </strong><span class="price">{{GrandTotal}} QR</span>\n                </p>\n            </ion-col>\n        </ion-row><!-- row-bill-deatails -->\n        <!-- Comments -->\n     <form (ngSubmit)="onCart()" >        \n        <ion-row>\n             <ion-label  class="add-heading">\n                <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n                &nbsp;&nbsp;Instructions / Comments \n            </ion-label>\n            <ion-item class="sub-address" >\n                    <ion-textarea rows="3" [(ngModel)]="cartData.comments" [ngModelOptions]="{standalone: true}" placeholder="Special instructions/comments" name="comments" id="comments"\n                        ng-value="cartData.comments"          ></ion-textarea>\n                </ion-item>\n        </ion-row>    \n    \n\n        <!-- continue button -->\n        <ion-row>\n            <ion-col>\n                <button ion-button block type="submit" class="continue-btn" >Continue</button>\n            </ion-col>\n        </ion-row>\n         </form>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map