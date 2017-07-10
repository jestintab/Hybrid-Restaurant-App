webpackJsonp([2],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(593);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ]
    })
], ProductDetailsPageModule);

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 591:
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

/***/ 592:
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

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trunc__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_ts__ = __webpack_require__(592);
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

/***/ 594:
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

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(256);
throw new Error("Cannot find module \"locutus/php/var/unserialize\"");
throw new Error("Cannot find module \"locutus/php/strings/html_entity_decode\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
throw new Error("Cannot find module \"locutus/php/var/isset\"");
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
    function ProductDetailsPage(navCtrl, alertCtrl, toastCtrl, navParams, storage, service, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.service = service;
        this.loading = loading;
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
        if (__WEBPACK_IMPORTED_MODULE_7_locutus_php_var_isset___default()(navParams.get('cartStoredItem'))) {
            this.cartStoredItem = navParams.get('cartStoredItem');
        }
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
    ProductDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Loading ...',
        });
        loader.present().then(function () {
            _this.service.getMenuItem(_this.productId)
                .subscribe(function (response) {
                _this.itemDetails = response.restify.rows;
                _this.itemDetails.forEach(function (itemdetail) {
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
            _this.service.getMenuOptions(_this.productId)
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
            if (__WEBPACK_IMPORTED_MODULE_7_locutus_php_var_isset___default()(_this.cartStoredItem)) {
                _this.checkedOptions = _this.cartStoredItem.extraOption;
                _this.optionCount = _this.checkedOptions.length;
            }
            loader.dismiss();
        });
    };
    ProductDetailsPage.prototype.ngOnInit = function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\product-details\product-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ product.name }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row class="productImage" >\n        <img src="http://aljedad.com/sforder/assets/images/{{product.image}}" alt="">\n        <!--<p class="text-over-image">{{product.name }} &nbsp;<span class="prod-price">\n        ({{product.price | trunc }} QR)</span></p>-->\n        <span clear text-center (click)="toggleFavourite()">\n        <ion-icon class="fav" name="heart" *ngIf="!visible"\n                  (click)="removeFromFavourite(product.id)"></ion-icon>\n        <ion-icon class="fav heart-clicked" name="heart" *ngIf="visible"\n                  (click)="addToFavourite(product.id)"></ion-icon>\n    </span>\n    </ion-row>\n<!-- size and price check box -->\n    <ion-row>\n        <!--<ion-list-header class="size-list-header" text-center>\n            Size and prices\n        </ion-list-header>-->\n        <ion-item class="menu-item">\n            <ion-label class="item-name" col-6><strong>{{product.name}}</strong></ion-label>\n            <ion-label class="item-price prod-price" col-6><strong>{{product.price | trunc}} QR</strong></ion-label>\n            <!--<ion-label *ngIf="price.offerValue">{{price.name}} ${{price.offerValue}}</ion-label>-->\n            <!--<ion-radio class="checked" checked (ionSelect)="sizeOptions(itemdetail_price)"></ion-radio>\n            -->\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-col col-6>\n            <div class="count">\n            <span class="item-count" (click)="remove()">\n              -\n            </span>\n                <span class="item-count show-count">\n              {{count}}\n            </span>\n                <span class="item-count" (click)="add()">\n              +\n            </span>\n            </div>\n        </ion-col>\n\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                ADD TO CART\n            </a>\n        </ion-col>\n    </ion-row>\n   \n\n    <ion-list class="extra-list" *ngIf="optionLength" >\n      \n           <div *ngIf="optionCount">\n                 <ion-list-header class="header" text-center>Selected extra choice</ion-list-header>\n             <ion-item   *ngFor="let coption of checkedOptions; let i = index"  class="list-item">\n                 \n            <ion-label>{{coption.name}} ({{coption.price | trunc }} QR) </ion-label>\n            <ion-toggle (ionChange)="checkOptions(coption)"  [checked]="true" ></ion-toggle>\n             </ion-item>   \n           </div>\n          <ion-list-header class="header" text-center>Add extra choice</ion-list-header>\n        <ion-item *ngFor="let option of ExtraOptions; let i = index"  class="list-item">\n            \n                    \n            <ion-label>{{option.name}} ({{option.price | trunc }} QR) </ion-label>\n            <ion-toggle (ionChange)="checkOptions(option)"   ></ion-toggle>\n            <!--[checked]="checkedOptions[i]!=NULL" -->\n                    \n            <!--</div>\n            <ng-template #elseBlock>\n             <ion-label>{{option.name}} ({{option.price | trunc }} QR) {{checkedOptions[i][\'name\']  }}-{{option.name}} </ion-label>\n            <ion-toggle (ionChange)="checkOptions(option)"   ></ion-toggle>\n            </ng-template>-->\n        </ion-item>\n       \n    </ion-list>\n\n \n    <ion-row>\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                CHECKOUT\n            </a>\n        </ion-col>\n        <ion-col col-6>\n            <a (click)="home()" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="basket"></ion-icon>\n                KEEP SHOPPING\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\product-details\product-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map