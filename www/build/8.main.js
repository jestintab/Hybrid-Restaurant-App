webpackJsonp([8],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(595);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrationPageModule = (function () {
    function RegistrationPageModule() {
    }
    return RegistrationPageModule;
}());
RegistrationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
        ]
    })
], RegistrationPageModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, toastCtrl, fb) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
    }
    RegistrationPage.prototype.onRegister = function () {
        if (this.user.value.name != '' && this.user.value.email != '' && this.user.value.password != '') {
            this.displayToast('User Successfully added!', 5000);
        }
    };
    RegistrationPage.prototype.displayToast = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    RegistrationPage.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            mobileNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
        });
    };
    RegistrationPage.prototype.navLogin = function () {
        this.navCtrl.push("LoginPage");
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\registration\registration.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Registration</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="login">\n    <img class="logo" src="assets/img/logo-icon.png">\n\n    <!--inputs-->\n    <!--name-->\n    <form [formGroup]="user" (ngSubmit)="onRegister()">\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Name:</ion-label>\n                    <ion-input type="text" formControlName="name"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--email-->\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Email:</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--Mobile No-->\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Mobile:</ion-label>\n                    <ion-input type="number" formControlName="mobileNo"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--password-->\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Password:</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--button-->\n        <ion-row>\n            <ion-col>\n                <button class="login-btn" ion-button>Register</button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n    <!--login with-->\n    <ion-row>\n        <ion-col>\n            <p text-center>REGISTER WITH</p>\n        </ion-col>\n    </ion-row>\n\n    <!--Social login-->\n    <ion-row>\n        <ion-col text-center>\n     <span>\n       <img class="social-icon" src="assets/img/fb.png">\n     </span>\n            <span>\n       <img class="social-icon" src="assets/img/g+.png">\n     </span>\n            <span>\n       <img class="social-icon" src="assets/img/twitter.png">\n     </span>\n        </ion-col>\n    </ion-row>\n\n    <!--go to registration-->\n    <ion-row>\n        <ion-col>\n            <a (click)="navLogin()">\n                <p text-center>ALREADY REGISTERED !</p>\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\registration\registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map