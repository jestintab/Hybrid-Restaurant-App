webpackJsonp([0],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(582);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    return ProductDetailsPageModule;
}());
ProductDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ]
    })
], ProductDetailsPageModule);

//# sourceMappingURL=product-details.module.js.map

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

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_locutus_php_var_unserialize__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_locutus_php_var_unserialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_locutus_php_var_unserialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_locutus_php_strings_html_entity_decode__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_locutus_php_strings_html_entity_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_locutus_php_strings_html_entity_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, alertCtrl, toastCtrl, navParams, storage, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.service = service;
        this.count = 1;
        this.ExtraOptions = [];
        this.itemInCart = [];
        this.Cart = [];
        this.prices = [{ value: '' }];
        this.product = {
            extraOption: []
        };
        this.productDetails = [];
        //Add favourite
        this.visible = true;
        this.favourites = [];
        this.favourite = [];
        this.favouriteItems = [];
        this.productId = navParams.get('productId');
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
        this.storage.get('favourite').then(function (favourite) {
            _this.favourites = favourite;
        });
        // this.storage.get('favourite').then((favourites) => {
        //     this.favouriteItems = favourites;
        // })
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
        // this.service.getData()
        //     .subscribe((response) => {
        //         for (let i = 0; i <= response.menuItems.length - 1; i++) {
        //             if (response.menuItems[i].id == this.productId) {
        //                 this.productDetails = response.menuItems[i];
        //                 this.product.id = response.menuItems[i].id;
        //                 this.prices = response.menuItems[i].price;
        //                 this.ExtraOptions = response.menuItems[i].extraOptions;
        //                 this.product.name = response.menuItems[i].title;
        //                 this.product.image = response.menuItems[i].pictures;
        var _this = this;
        //         }
        //     })
        this.service.getMenuItem(this.productId)
            .subscribe(function (response) {
            _this.itemDetails = response.restify.rows;
            _this.itemDetails.forEach(function (itemdetail) {
                // this.itemdetail_name = itemdetail.values.menu_name.value;
                // this.itemdetail_description = itemdetail.values.menu_description.value;
                // this.itemdetail_image = itemdetail.values.menu_photo.value;
                // this.itemdetail_price = itemdetail.values.menu_price.value;
                // this.itemdetail_id = itemdetail.values.menu_id.value;      
                _this.product.name = itemdetail.values.menu_name.value;
                _this.product.description = itemdetail.values.menu_description.value;
                _this.product.image = itemdetail.values.menu_photo.value;
                _this.product.price = itemdetail.values.menu_price.value;
                _this.product.id = itemdetail.values.menu_id.value;
                _this.product.thumb = itemdetail.values.menu_thumb.value;
            });
        });
        // console.log(this.product);
        // console.log(this.productDetails);
        this.service.getMenuOptions(this.productId)
            .subscribe(function (res) {
            _this.menuOptions = res.restify.rows;
            _this.optionLength = _this.menuOptions.length;
            if (_this.menuOptions.length != 0) {
                _this.menuOptions.forEach(function (menuOption) {
                    _this.menuOptionJson = menuOption.values.option_values.value;
                    _this.menuOptionId = menuOption.values.option_id.value;
                });
                _this.menuOptionJson = __WEBPACK_IMPORTED_MODULE_4_locutus_php_var_unserialize___default()(__WEBPACK_IMPORTED_MODULE_5_locutus_php_strings_html_entity_decode___default()(_this.menuOptionJson));
                for (var _i = 0, _a = Object.keys(_this.menuOptionJson); _i < _a.length; _i++) {
                    var i = _a[_i];
                    _this.service.getOptionName(_this.menuOptionJson[i].option_value_id, _this.menuOptionId)
                        .subscribe(function (resp) {
                        for (var _i = 0, _a = Object.keys(resp.restify.rows); _i < _a.length; _i++) {
                            var j = _a[_i];
                            _this.ExtraOptions.push({ 'option_value_id': resp.restify.rows[j].values.option_value_id.value,
                                'option_id': resp.restify.rows[j].values.option_id.value,
                                'name': resp.restify.rows[j].values.value.value,
                                'price': parseInt(resp.restify.rows[j].values.price.value)
                            });
                        }
                    });
                }
            }
        });
    };
    ProductDetailsPage.prototype.addToCart = function (productId) {
        // if (this.product.sizeOption.name == null) {
        //     let alert = this.alertCtrl.create({
        //         title: 'Please!',
        //         subTitle: 'Select Size and Price!',
        //         buttons: ['OK']
        //     });
        //     alert.present();
        // }
        // else {
        this.Cart = JSON.parse(localStorage.getItem("cartItem"));
        if (this.Cart == null) {
            this.product.Quantity = this.count;
            this.product.itemTotalPrice = this.product.Quantity * this.product.price;
            var proExtraPrice = 0;
            for (var i = 0; i <= this.product.extraOption.length - 1; i++) {
                proExtraPrice = proExtraPrice + parseInt(this.product.extraOption[i].price);
                //this.product.extraPrice =  proExtraPrice;
            }
            this.itemInCart.push(this.product);
            localStorage.setItem('cartItem', JSON.stringify(this.itemInCart));
        }
        else {
            for (var i = 0; i <= this.Cart.length - 1; i++) {
                if (this.Cart[i].id == productId) {
                    this.Cart.splice(i, 1);
                }
            }
            this.product.Quantity = this.count;
            this.product.itemTotalPrice = this.product.Quantity * this.product.price;
            var proExtraPrice = 0;
            for (var i = 0; i <= this.product.extraOption.length - 1; ++i) {
                proExtraPrice = proExtraPrice + this.product.extraOption[i].value;
                this.product.extraPrice = proExtraPrice;
            }
            this.Cart.push(this.product);
            localStorage.setItem('cartItem', JSON.stringify(this.Cart));
        }
        this.navCtrl.push("CartPage");
    };
    ProductDetailsPage.prototype.checkOptions = function (option) {
        if (this.product.extraOption.length !== 0) {
            for (var i = 0; i <= this.product.extraOption.length - 1; i++) {
                if (this.product.extraOption[i].name == option.name) {
                    this.product.extraOption.splice(i, 1);
                    break;
                }
                else {
                    this.product.extraOption.push(option);
                    break;
                }
            }
        }
        else {
            this.product.extraOption.push(option);
        }
    };
    // sizeOptions(price) {
    //     this.product.sizeOption = price;
    // }
    ProductDetailsPage.prototype.add = function () {
        if (this.count < 10) {
            this.count = this.count + 1;
        }
    };
    ProductDetailsPage.prototype.remove = function () {
        if (this.count > 1) {
            this.count = this.count - 1;
        }
    };
    ProductDetailsPage.prototype.home = function () {
        this.navCtrl.push("HomePage");
    };
    ProductDetailsPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    ProductDetailsPage.prototype.toggleFavourite = function () {
        this.visible = !this.visible;
    };
    ProductDetailsPage.prototype.addToFavourite = function (productId) {
        this.createToaster('Added to favourites', '3000');
        if (this.favourites == null) {
            this.favourite.push(this.productDetails);
            this.storage.set('favourite', this.favourite);
        }
        else {
            for (var i = 0; i <= this.favourites.length - 1; i++) {
                if (this.favourites[i].id == productId) {
                    this.favourites.splice(i, 1);
                }
            }
            this.favourites.push(this.productDetails);
            this.storage.set('favourite', this.favourites);
        }
    };
    ProductDetailsPage.prototype.removeFromFavourite = function (productId) {
        var _this = this;
        this.storage.get('favourite').then(function (favourites) {
            _this.favouriteItems = favourites;
            _this.createToaster('Removed from favourites', '3000');
            for (var i = 0; i <= _this.favouriteItems.length - 1; i++) {
                if (_this.favouriteItems[i].id == productId) {
                    _this.favouriteItems.splice(i, 1);
                }
            }
            _this.storage.set('favourite', _this.favouriteItems);
        });
    };
    ProductDetailsPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\product-details\product-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ product.name }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row class="productImage" >\n        <img src="http://aljedad.com/sforder/assets/images/{{product.image}}" alt="">\n        <!--<p class="text-over-image">{{product.name }} &nbsp;<span class="prod-price">\n        ({{product.price | trunc }} QR)</span></p>-->\n        <span clear text-center (click)="toggleFavourite()">\n        <ion-icon class="fav" name="heart" *ngIf="!visible"\n                  (click)="removeFromFavourite(product.id)"></ion-icon>\n        <ion-icon class="fav heart-clicked" name="heart" *ngIf="visible"\n                  (click)="addToFavourite(product.id)"></ion-icon>\n    </span>\n    </ion-row>\n<!-- size and price check box -->\n    <ion-row>\n        <!--<ion-list-header class="size-list-header" text-center>\n            Size and prices\n        </ion-list-header>-->\n        <ion-item class="menu-item">\n            <ion-label class="item-name" col-6><strong>{{product.name}}</strong></ion-label>\n            <ion-label class="item-price prod-price" col-6><strong>{{product.price | trunc}} QR</strong></ion-label>\n            <!--<ion-label *ngIf="price.offerValue">{{price.name}} ${{price.offerValue}}</ion-label>-->\n            <!--<ion-radio class="checked" checked (ionSelect)="sizeOptions(itemdetail_price)"></ion-radio>\n            -->\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-col col-6>\n            <div class="count">\n            <span class="item-count" (click)="remove()">\n              -\n            </span>\n                <span class="item-count show-count">\n              {{count}}\n            </span>\n                <span class="item-count" (click)="add()">\n              +\n            </span>\n            </div>\n        </ion-col>\n\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                ADD TO CART\n            </a>\n        </ion-col>\n    </ion-row>\n   \n\n    <ion-list class="extra-list" *ngIf="optionLength" >\n        <ion-list-header class="header" text-center>Add extra choice</ion-list-header>\n        <ion-item *ngFor="let option of ExtraOptions" class="list-item">\n            <ion-label>{{option.name}} ({{option.price | trunc }} QR)</ion-label>\n            <ion-toggle (ionChange)="checkOptions(option)"></ion-toggle>\n        </ion-item>\n    </ion-list>\n\n \n    <ion-row>\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                CHECKOUT\n            </a>\n        </ion-col>\n        <ion-col col-6>\n            <a (click)="home()" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="basket"></ion-icon>\n                KEEP SHOPPING\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\product-details\product-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function get_html_translation_table(table, quoteStyle) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/get_html_translation_table/
  // original by: Philip Peterson
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: noname
  // bugfixed by: Alex
  // bugfixed by: Marco
  // bugfixed by: madipta
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: T.Wild
  // improved by: KELAN
  // improved by: Brett Zamir (http://brett-zamir.me)
  //    input by: Frank Forte
  //    input by: Ratheous
  //      note 1: It has been decided that we're not going to add global
  //      note 1: dependencies to Locutus, meaning the constants are not
  //      note 1: real constants, but strings instead. Integers are also supported if someone
  //      note 1: chooses to create the constants themselves.
  //   example 1: get_html_translation_table('HTML_SPECIALCHARS')
  //   returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

  var entities = {};
  var hashMap = {};
  var decimal;
  var constMappingTable = {};
  var constMappingQuoteStyle = {};
  var useTable = {};
  var useQuoteStyle = {};

  // Translate arguments
  constMappingTable[0] = 'HTML_SPECIALCHARS';
  constMappingTable[1] = 'HTML_ENTITIES';
  constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
  constMappingQuoteStyle[2] = 'ENT_COMPAT';
  constMappingQuoteStyle[3] = 'ENT_QUOTES';

  useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';

  useQuoteStyle = !isNaN(quoteStyle) ? constMappingQuoteStyle[quoteStyle] : quoteStyle ? quoteStyle.toUpperCase() : 'ENT_COMPAT';

  if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
    throw new Error('Table: ' + useTable + ' not supported');
  }

  entities['38'] = '&amp;';
  if (useTable === 'HTML_ENTITIES') {
    entities['160'] = '&nbsp;';
    entities['161'] = '&iexcl;';
    entities['162'] = '&cent;';
    entities['163'] = '&pound;';
    entities['164'] = '&curren;';
    entities['165'] = '&yen;';
    entities['166'] = '&brvbar;';
    entities['167'] = '&sect;';
    entities['168'] = '&uml;';
    entities['169'] = '&copy;';
    entities['170'] = '&ordf;';
    entities['171'] = '&laquo;';
    entities['172'] = '&not;';
    entities['173'] = '&shy;';
    entities['174'] = '&reg;';
    entities['175'] = '&macr;';
    entities['176'] = '&deg;';
    entities['177'] = '&plusmn;';
    entities['178'] = '&sup2;';
    entities['179'] = '&sup3;';
    entities['180'] = '&acute;';
    entities['181'] = '&micro;';
    entities['182'] = '&para;';
    entities['183'] = '&middot;';
    entities['184'] = '&cedil;';
    entities['185'] = '&sup1;';
    entities['186'] = '&ordm;';
    entities['187'] = '&raquo;';
    entities['188'] = '&frac14;';
    entities['189'] = '&frac12;';
    entities['190'] = '&frac34;';
    entities['191'] = '&iquest;';
    entities['192'] = '&Agrave;';
    entities['193'] = '&Aacute;';
    entities['194'] = '&Acirc;';
    entities['195'] = '&Atilde;';
    entities['196'] = '&Auml;';
    entities['197'] = '&Aring;';
    entities['198'] = '&AElig;';
    entities['199'] = '&Ccedil;';
    entities['200'] = '&Egrave;';
    entities['201'] = '&Eacute;';
    entities['202'] = '&Ecirc;';
    entities['203'] = '&Euml;';
    entities['204'] = '&Igrave;';
    entities['205'] = '&Iacute;';
    entities['206'] = '&Icirc;';
    entities['207'] = '&Iuml;';
    entities['208'] = '&ETH;';
    entities['209'] = '&Ntilde;';
    entities['210'] = '&Ograve;';
    entities['211'] = '&Oacute;';
    entities['212'] = '&Ocirc;';
    entities['213'] = '&Otilde;';
    entities['214'] = '&Ouml;';
    entities['215'] = '&times;';
    entities['216'] = '&Oslash;';
    entities['217'] = '&Ugrave;';
    entities['218'] = '&Uacute;';
    entities['219'] = '&Ucirc;';
    entities['220'] = '&Uuml;';
    entities['221'] = '&Yacute;';
    entities['222'] = '&THORN;';
    entities['223'] = '&szlig;';
    entities['224'] = '&agrave;';
    entities['225'] = '&aacute;';
    entities['226'] = '&acirc;';
    entities['227'] = '&atilde;';
    entities['228'] = '&auml;';
    entities['229'] = '&aring;';
    entities['230'] = '&aelig;';
    entities['231'] = '&ccedil;';
    entities['232'] = '&egrave;';
    entities['233'] = '&eacute;';
    entities['234'] = '&ecirc;';
    entities['235'] = '&euml;';
    entities['236'] = '&igrave;';
    entities['237'] = '&iacute;';
    entities['238'] = '&icirc;';
    entities['239'] = '&iuml;';
    entities['240'] = '&eth;';
    entities['241'] = '&ntilde;';
    entities['242'] = '&ograve;';
    entities['243'] = '&oacute;';
    entities['244'] = '&ocirc;';
    entities['245'] = '&otilde;';
    entities['246'] = '&ouml;';
    entities['247'] = '&divide;';
    entities['248'] = '&oslash;';
    entities['249'] = '&ugrave;';
    entities['250'] = '&uacute;';
    entities['251'] = '&ucirc;';
    entities['252'] = '&uuml;';
    entities['253'] = '&yacute;';
    entities['254'] = '&thorn;';
    entities['255'] = '&yuml;';
  }

  if (useQuoteStyle !== 'ENT_NOQUOTES') {
    entities['34'] = '&quot;';
  }
  if (useQuoteStyle === 'ENT_QUOTES') {
    entities['39'] = '&#39;';
  }
  entities['60'] = '&lt;';
  entities['62'] = '&gt;';

  // ascii decimals to real symbols
  for (decimal in entities) {
    if (entities.hasOwnProperty(decimal)) {
      hashMap[String.fromCharCode(decimal)] = entities[decimal];
    }
  }

  return hashMap;
};
//# sourceMappingURL=get_html_translation_table.js.map

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function html_entity_decode(string, quoteStyle) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/html_entity_decode/
  // original by: john (http://www.jd-tech.net)
  //    input by: ger
  //    input by: Ratheous
  //    input by: Nick Kolosov (http://sammy.ru)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: marc andreu
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Fox
  //   example 1: html_entity_decode('Kevin &amp; van Zonneveld')
  //   returns 1: 'Kevin & van Zonneveld'
  //   example 2: html_entity_decode('&amp;lt;')
  //   returns 2: '&lt;'

  var getHtmlTranslationTable = __webpack_require__(598);
  var tmpStr = '';
  var entity = '';
  var symbol = '';
  tmpStr = string.toString();

  var hashMap = getHtmlTranslationTable('HTML_ENTITIES', quoteStyle);
  if (hashMap === false) {
    return false;
  }

  // @todo: &amp; problem
  // http://locutus.io/php/get_html_translation_table:416#comment_97660
  delete hashMap['&'];
  hashMap['&'] = '&amp;';

  for (symbol in hashMap) {
    entity = hashMap[symbol];
    tmpStr = tmpStr.split(entity).join(symbol);
  }
  tmpStr = tmpStr.split('&#039;').join("'");

  return tmpStr;
};
//# sourceMappingURL=html_entity_decode.js.map

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = function unserialize(data) {
  //  discuss at: http://locutus.io/php/unserialize/
  // original by: Arpad Ray (mailto:arpad@php.net)
  // improved by: Pedro Tainha (http://www.pedrotainha.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Chris
  // improved by: James
  // improved by: Le Torbi
  // improved by: Eli Skeggs
  // bugfixed by: dptr1988
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: philippsimon (https://github.com/philippsimon/)
  //  revised by: d3x
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Martin (http://www.erlenwiese.de/)
  //    input by: kilops
  //    input by: Jaroslaw Czarniak
  //    input by: lovasoa (https://github.com/lovasoa/)
  //      note 1: We feel the main purpose of this function should be
  //      note 1: to ease the transport of data between php & js
  //      note 1: Aiming for PHP-compatibility, we have to translate objects to arrays
  //   example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}')
  //   returns 1: ['Kevin', 'van', 'Zonneveld']
  //   example 2: unserialize('a:2:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";}')
  //   returns 2: {firstName: 'Kevin', midName: 'van'}
  //   example 3: unserialize('a:3:{s:2:"ü";s:2:"ü";s:3:"四";s:3:"四";s:4:"𠜎";s:4:"𠜎";}')
  //   returns 3: {'ü': 'ü', '四': '四', '𠜎': '𠜎'}

  var $global = typeof window !== 'undefined' ? window : global;

  var utf8Overhead = function utf8Overhead(str) {
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
      var code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) {
        s++;
      } else if (code > 0x7ff && code <= 0xffff) {
        s += 2;
      }
      // trail surrogate
      if (code >= 0xDC00 && code <= 0xDFFF) {
        i--;
      }
    }
    return s - 1;
  };
  var error = function error(type, msg, filename, line) {
    throw new $global[type](msg, filename, line);
  };
  var readUntil = function readUntil(data, offset, stopchr) {
    var i = 2;
    var buf = [];
    var chr = data.slice(offset, offset + 1);

    while (chr !== stopchr) {
      if (i + offset > data.length) {
        error('Error', 'Invalid');
      }
      buf.push(chr);
      chr = data.slice(offset + (i - 1), offset + i);
      i += 1;
    }
    return [buf.length, buf.join('')];
  };
  var readChrs = function readChrs(data, offset, length) {
    var i, chr, buf;

    buf = [];
    for (i = 0; i < length; i++) {
      chr = data.slice(offset + (i - 1), offset + i);
      buf.push(chr);
      length -= utf8Overhead(chr);
    }
    return [buf.length, buf.join('')];
  };
  function _unserialize(data, offset) {
    var dtype;
    var dataoffset;
    var keyandchrs;
    var keys;
    var contig;
    var length;
    var array;
    var readdata;
    var readData;
    var ccount;
    var stringlength;
    var i;
    var key;
    var kprops;
    var kchrs;
    var vprops;
    var vchrs;
    var value;
    var chrs = 0;
    var typeconvert = function typeconvert(x) {
      return x;
    };

    if (!offset) {
      offset = 0;
    }
    dtype = data.slice(offset, offset + 1).toLowerCase();

    dataoffset = offset + 2;

    switch (dtype) {
      case 'i':
        typeconvert = function typeconvert(x) {
          return parseInt(x, 10);
        };
        readData = readUntil(data, dataoffset, ';');
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case 'b':
        typeconvert = function typeconvert(x) {
          return parseInt(x, 10) !== 0;
        };
        readData = readUntil(data, dataoffset, ';');
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case 'd':
        typeconvert = function typeconvert(x) {
          return parseFloat(x);
        };
        readData = readUntil(data, dataoffset, ';');
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 1;
        break;
      case 'n':
        readdata = null;
        break;
      case 's':
        ccount = readUntil(data, dataoffset, ':');
        chrs = ccount[0];
        stringlength = ccount[1];
        dataoffset += chrs + 2;

        readData = readChrs(data, dataoffset + 1, parseInt(stringlength, 10));
        chrs = readData[0];
        readdata = readData[1];
        dataoffset += chrs + 2;
        if (chrs !== parseInt(stringlength, 10) && chrs !== readdata.length) {
          error('SyntaxError', 'String length mismatch');
        }
        break;
      case 'a':
        readdata = {};

        keyandchrs = readUntil(data, dataoffset, ':');
        chrs = keyandchrs[0];
        keys = keyandchrs[1];
        dataoffset += chrs + 2;

        length = parseInt(keys, 10);
        contig = true;

        for (i = 0; i < length; i++) {
          kprops = _unserialize(data, dataoffset);
          kchrs = kprops[1];
          key = kprops[2];
          dataoffset += kchrs;

          vprops = _unserialize(data, dataoffset);
          vchrs = vprops[1];
          value = vprops[2];
          dataoffset += vchrs;

          if (key !== i) {
            contig = false;
          }

          readdata[key] = value;
        }

        if (contig) {
          array = new Array(length);
          for (i = 0; i < length; i++) {
            array[i] = readdata[i];
          }
          readdata = array;
        }

        dataoffset += 1;
        break;
      default:
        error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
        break;
    }
    return [dtype, dataoffset - offset, typeconvert(readdata)];
  }

  return _unserialize(data + '', 0)[2];
};
//# sourceMappingURL=unserialize.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ })

});
//# sourceMappingURL=0.main.js.map