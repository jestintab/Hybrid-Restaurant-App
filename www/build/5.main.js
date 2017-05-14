webpackJsonp([5],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(604);
throw new Error("Cannot find module \"../../app/translate.module\"");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutUsPageModule = (function () {
    function AboutUsPageModule() {
    }
    return AboutUsPageModule;
}());
AboutUsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["TranslaterModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]
        ]
    })
], AboutUsPageModule);

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(606);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutUsPage = (function () {
    function AboutUsPage(platform, navCtrl, navParams, callNumber, emailComposer) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.contactNo = 7376421282;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    AboutUsPage.prototype.callUs = function () {
        this.callNumber.callNumber(this.contactNo, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    AboutUsPage.prototype.gotogoogleMap = function () {
        this.navCtrl.push("LocationPage");
    };
    AboutUsPage.prototype.contact = function () {
        var email = {
            to: 'san10694@gmail.com',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    return AboutUsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]) === "function" && _a || Object)
], AboutUsPage.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _b || Object)
], AboutUsPage.prototype, "nav", void 0);
AboutUsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-about-us',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\about-us\about-us.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About Us</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n   <ion-slides initialSlide=0 speed=2000 loop=true>\n\n  <ion-slide>\n\n    \n\n    <img src="assets/img/about_us.jpg" class="slider-img">\n\n       <div class="card-title">We provide better service</div>\n\n  </ion-slide>\n\n    <ion-slide>\n\n    <img src="assets/img/about-us.jpg" class="slider-img">\n\n     <div class="card-title">We provide better service</div>\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/img/about_us.jpg" class="slider-img">\n\n     <div class="card-title">We provide better service</div>\n\n  </ion-slide>\n\n\n\n\n\n</ion-slides>\n\n\n\n<!--about-->\n\n<div class="wrapper">\n\n  <h4 class="heading">About Us </h4>\n\n    <p class="details">\n\n    	 Pietech Solution is a global information technology, consulting and outsourcing company was founded by a highly motivated groups of marketing Team, software Developer.Talented, driven and principled people who are passionate about IT services, came together because they wanted to do something special. Special work for our clients is the front line, revolutionizing the way the industry works is a gradual effect, improving Industry through services is our long term goal.We offer a variety of services in the area of Mobile Application Development, Software Development ,Web Application development,CRM Business application,Responsive websites Design and Online Marketing.Our field service management software connects you with your field workforce, giving you complete visibility of the service delivery operation and driving efficiency and profitability.\n\n    </p>\n\n\n\n <!--Get in touch-->\n\n   <h4 class="heading">Get In Touch &nbsp;<ion-icon name="arrow-dropdown"></ion-icon></h4>\n\n   <ion-card>\n\n      <ion-card-content (click)="callUs()">\n\n         <ion-icon name="call"></ion-icon> &nbsp; Call us\n\n      </ion-card-content>\n\n      <ion-card-content (click)="contact()">\n\n        <ion-icon name="mail"></ion-icon> &nbsp; Email us\n\n      </ion-card-content>\n\n      <ion-card-content (click)="gotogoogleMap()">\n\n         <ion-icon name="locate" ></ion-icon> &nbsp; Locate us\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n <!--follow-->\n\n    <h4 class="heading">Follow Us &nbsp;<ion-icon name="arrow-dropdown"></ion-icon></h4>\n\n   <ion-card>\n\n      <ion-card-content>\n\n          <ion-icon name="logo-facebook"></ion-icon> &nbsp; Facebook\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n        <ion-icon name="logo-twitter"></ion-icon> &nbsp; Twitter\n\n      </ion-card-content>\n\n      <ion-card-content>\n\n         <ion-icon name="logo-instagram"></ion-icon> &nbsp; Instagram\n\n      </ion-card-content>\n\n    </ion-card>\n\n   </div> \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\about-us\about-us.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _g || Object])
], AboutUsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallNumber; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Call Number
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from '@ionic-native/call-number';
 *
 * constructor(private callNumber: CallNumber) { }
 *
 * ...
 *
 *
 * this.callNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
var CallNumber = (function () {
    function CallNumber() {
    }
    /**
     * Calls a phone number
     * @param numberToCall {string} The phone number to call as a string
     * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) {
        return;
    };
    CallNumber.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    CallNumber.ctorParameters = function () { return []; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Boolean]), 
        __metadata('design:returntype', Promise)
    ], CallNumber.prototype, "callNumber", null);
    CallNumber = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'CallNumber',
            plugin: 'call-number',
            pluginRef: 'plugins.CallNumber',
            repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
            platforms: ['iOS', 'Android']
        }), 
        __metadata('design:paramtypes', [])
    ], CallNumber);
    return CallNumber;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @beta
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 * DISCLAIMER: This plugin is experiencing issues with the latest versions of Cordova. Use at your own risk. Functionality is not guaranteed. Please stay tuned for a more stable version.
 * A good alternative to this plugin is the social sharing plugin.
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 *
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function () {
    function EmailComposer() {
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param [app] {string} App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    EmailComposer.prototype.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                cordova.plugins.email.isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                cordova.plugins.email.isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.prototype.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.prototype.open = function (options, scope) { return; };
    EmailComposer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    EmailComposer.ctorParameters = function () { return []; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaCheck */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', Promise)
    ], EmailComposer.prototype, "isAvailable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, String]), 
        __metadata('design:returntype', void 0)
    ], EmailComposer.prototype, "addAlias", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 3
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', Promise)
    ], EmailComposer.prototype, "open", null);
    EmailComposer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'EmailComposer',
            plugin: 'cordova-plugin-email',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/hypery2k/cordova-email-plugin',
            platforms: ['Android', 'iOS']
        }), 
        __metadata('design:paramtypes', [])
    ], EmailComposer);
    return EmailComposer;
}());
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map