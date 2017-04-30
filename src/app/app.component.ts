import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from '../pages/home/home';
import {CategoryPage} from '../pages/category/category'
import {LoginPage} from '../pages/login/login';
import {CartPage} from '../pages/cart/cart';
import {Settings} from '../pages/settings/settings';
import {OrdersPage} from '../pages/orders/orders';
import {FavouritePage} from '../pages/favourite/favourite';
import {OfferPage} from '../pages/offer/offer';
import {NewsPage} from '../pages/news/news';
import {ContactPage} from '../pages/contact/contact';
import {Service} from '../app/service';


@Component({
  templateUrl: 'app.html',
  selector: 'MyApp',
  providers:[Service]

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
      this.rootPage = CategoryPage;
    }
    else {
      this.rootPage = CategoryPage;
    }
  }



  constructor(public platform: Platform,
              public service:Service) {
    this.initializeApp();
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


  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  isLogin() {
    return localStorage.getItem('user') != null;
  }


  home() {
    this.nav.setRoot(HomePage);
  }

  catagory() {
    this.nav.setRoot(CategoryPage);
  }

  gotoCart() {
    this.nav.setRoot(CartPage);
  }

  yourOrders() {
    this.nav.setRoot(OrdersPage);
  }

  favourite() {
    this.nav.setRoot(FavouritePage);
  }

  offer() {
    this.nav.setRoot(OfferPage);
  }

  news() {
    this.nav.setRoot(NewsPage);
  }

  contact() {
    this.nav.setRoot(ContactPage);
  }

  settings() {
    this.nav.setRoot(Settings);
  }

  login() {
    this.nav.setRoot(LoginPage);
  }

  logout() {
    localStorage.removeItem('user');
    this.nav.setRoot(LoginPage);
  }

}
