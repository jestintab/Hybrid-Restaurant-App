webpackJsonp([12],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(589);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, fb) {
        this.navCtrl = navCtrl;
        this.fb = fb;
    }
    LoginPage.prototype.onLogin = function () {
        if (this.user.value.email == 'ionicfirebaseapp@gmail.com' && this.user.value.password == '12345') {
            var validUser = JSON.stringify(this.user.value);
            localStorage.setItem('user', validUser);
            this.navCtrl.push("HomePage");
        }
    };
    LoginPage.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            email: ['ionicfirebaseapp@gmail.com', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            password: ['12345', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
        });
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.push("RegistrationPage");
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login">\n    <img class="logo" src="assets/img/logo-icon.png">\n    <!--inputs-->\n    <!--email-->\n    <form [formGroup]="user" (ngSubmit)="onLogin()">\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Email:</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--password-->\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Password:</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--button-->\n        <ion-row>\n            <ion-col>\n                <button color="primary" class="login-btn" ion-button>Login</button>\n            </ion-col>\n        </ion-row>\n    </form>\n    <!--login with-->\n    <ion-row>\n        <ion-col>\n            <p text-center>LOGIN WITH</p>\n        </ion-col>\n    </ion-row>\n\n    <!--Social login-->\n    <ion-row>\n        <ion-col text-center>\n          <span>\n       <img class="social-icon" src="assets/img/fb.png">\n     </span>\n            <span>\n       <img class="social-icon" src="assets/img/g+.png">\n     </span>\n            <span>\n       <img class="social-icon" src="assets/img/twitter.png">\n     </span>\n        </ion-col>\n    </ion-row>\n\n    <!--go to registration-->\n    <ion-row>\n        <ion-col>\n            <a (click)="Register()">\n                <p text-center>REGISTER NOW !</p>\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map