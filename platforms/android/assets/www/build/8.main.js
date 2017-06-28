webpackJsonp([8],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(626);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Settings = (function () {
    function Settings(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {};
        this.url = "assets/img/profile.jpg";
    }
    Settings.prototype.onSubmit = function (user) {
        console.log("user Setting Data : " + JSON.stringify(this.user));
    };
    Settings.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return Settings;
}());
Settings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Settings</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="login">\n        <ion-row>\n            <img class="img" [src]="url"><br>\n        </ion-row>\n        <ion-row>\n            <input type="file" name="file" id="file" class="inputfile" aria-describedby="fileHelp" accept="image/*"\n                   (change)="readUrl($event)">\n            <label for="file" class="upload">\n                <ion-icon ios="ios-cloud-upload" md="md-cloud-upload"></ion-icon>\n            </label>\n        </ion-row>\n        <p class="name">Hello Guest</p>\n        <!--<p class="email">ionicfirebaseapp@gmail.com</p>-->\n    </div>\n    <form (ngSubmit)="onSubmit(f)" #f="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label primary> Notifications</ion-label>\n                <ion-toggle primary checked="false"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                \n            </ion-item>\n            <!--card no-\n            <ion-item>\n                <ion-label>Card Number:</ion-label>\n                <ion-input type="text" name="card" id="card" placeholder="5172628928"\n                           [(ngModel)]="user.card"></ion-input>\n            </ion-item>\n            name on card-\n            <ion-item>\n                <ion-label>Name on card:</ion-label>\n                <ion-input type="text" name="name" id="email" placeholder="Your Name"\n                           [(ngModel)]="user.name"></ion-input>\n            </ion-item>\n           cvv\n            <ion-item>\n                <ion-label>CVV:</ion-label>\n                <ion-input type="number" name="cvv" id="cvv" placeholder="234"\n                           [(ngModel)]="user.cvv"></ion-input>\n            </ion-item>\n          date\n            <ion-item>\n                <ion-label>Date of expiry:</ion-label>\n                <ion-input type="number" name="date" id="date" placeholder="25/06/2020"\n                           [(ngModel)]="user.date"></ion-input>\n            </ion-item>\n      \n        button-->\n          </ion-list>\n        <button class="login-btn" ion-button type="submit">Save</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map