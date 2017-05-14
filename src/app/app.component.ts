import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Service} from '../app/service';
import {OneSignal} from '@ionic-native/onesignal';

// import {HomePage} from '../pages/home/home';
// import {CategoryPage} from '../pages/category/category'
// import {LoginPage} from '../pages/login/login';
// import {CartPage} from '../pages/cart/cart';
// import {Settings} from '../pages/settings/settings';
// import {OrdersPage} from '../pages/orders/orders';
// import {FavouritePage} from '../pages/favourite/favourite';
// import {OfferPage} from '../pages/offer/offer';
// import {NewsPage} from '../pages/news/news';
// import {ContactPage} from '../pages/contact/contact';



@Component({
  templateUrl: 'app.html',
  selector: 'MyApp',
  providers:[Service, OneSignal]

})
export class MyApp {
  noOfItems: number;
  newsCounter:number;
  offerCounter=0;
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  ngOnInit(): any {
    let token = localStorage.getItem('user');

    if (token == null) {
      this.rootPage = "CategoryPage";
    }
    else {
      this.rootPage = "CategoryPage";
    }
  }



  constructor(public platform: Platform,
                public service: Service,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public oneSignal: OneSignal) {
  
    platform.ready().then((res) => {
            if (res == 'cordova') {
                this.oneSignal.startInit('230d3e93-0c29-49bd-ac82-ecea8612464e', '714618018341');
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                this.oneSignal.handleNotificationReceived().subscribe(() => {
                });
                this.oneSignal.handleNotificationOpened().subscribe(() => {
                    console.log("notification opened!");
                });
                this.oneSignal.endInit();
            }
            statusBar.styleDefault();
            splashScreen.hide();
        });


    this.service.getData()
        .subscribe((response) => {
          this.newsCounter = response.newsList.length;
          for (let i = 0; i <= response.menuItems.length - 1; i++) {
                if (response.menuItems[i].offer != null) {
                  this.offerCounter=this.offerCounter+1;

                }
              }

            })


  }




  isLogin() {
    return localStorage.getItem('user') != null;
  }


  home() {
    this.nav.setRoot("HomePage");
  }

  catagory() {
    this.nav.setRoot("CategoryPage");
  }

  gotoCart() {
    this.nav.setRoot("CartPage");
  }

  yourOrders() {
    this.nav.setRoot("OrdersPage");
  }

  favourite() {
    this.nav.setRoot("FavouritePage");
  }

  offer() {
    this.nav.setRoot("OfferPage");
  }

  news() {
    this.nav.setRoot("NewsPage");
  }

  contact() {
    this.nav.setRoot("ContactPage");
  }
  aboutUs() {
    this.nav.setRoot("AboutUsPage");
  }

  settings() {
    this.nav.setRoot("Settings");
  }

  login() {
    this.nav.setRoot("LoginPage");
  }

  logout() {
    localStorage.removeItem('user');
    this.nav.setRoot("LoginPage");
  }

}
