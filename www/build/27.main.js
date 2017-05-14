webpackJsonp([27],{

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail__ = __webpack_require__(590);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsDetailPageModule = (function () {
    function NewsDetailPageModule() {
    }
    return NewsDetailPageModule;
}());
NewsDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */]
        ]
    })
], NewsDetailPageModule);

//# sourceMappingURL=news-detail.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsDetailPage = (function () {
    function NewsDetailPage(navCtrl, navParams, newsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsService = newsService;
        this.newsDetails = {};
        this.newsId = this.navParams.get('newsId');
    }
    NewsDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getData()
            .subscribe(function (response) {
            for (var i = 0; i <= response.newsList.length - 1; i++) {
                if (response.newsList[i].id == _this.newsId) {
                    _this.newsDetails = response.newsList[i];
                }
            }
        });
    };
    return NewsDetailPage;
}());
NewsDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news-detail',template:/*ion-inline-start:"C:\Projects\sfapp\src\pages\news-detail\news-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>News-details</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <img src="{{newsDetails.image}}">\n        <p class="news-head" center>{{newsDetails.title}}</p>\n        <p class="news-time">{{newsDetails.dateTime}}</p>\n        <ion-card-content>\n            <p>{{newsDetails.details}} </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\sfapp\src\pages\news-detail\news-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], NewsDetailPage);

//# sourceMappingURL=news-detail.js.map

/***/ })

});
//# sourceMappingURL=27.main.js.map