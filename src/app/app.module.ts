import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {RegistrationPage} from '../pages/registration/registration';
import {LoginPage} from '../pages/login/login';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {CategoryPage} from '../pages/category/category'
import {ProductListPage} from '../pages/product-list/product-list';
import {ProductDetailsPage} from '../pages/product-details/product-details';
import {CartPage} from '../pages/cart/cart';
import {CheckoutPage} from '../pages/checkout/checkout';
import {OrdersPage} from '../pages/orders/orders';
import {OrderDetailsPage} from '../pages/order-details/order-details';
import {ThankyouPage} from '../pages/thankyou/thankyou';
import {FavouritePage} from '../pages/favourite/favourite';
import {OfferPage} from '../pages/offer/offer';
import {ContactPage} from '../pages/contact/contact';
import {NewsPage} from '../pages/news/news';
import {NewsDetailPage} from '../pages/news-detail/news-detail';
import {Settings} from '../pages/settings/settings';
import {Service} from '../app/service';
import {Storage} from '@ionic/storage';
import {OrderBy} from '../pipes/order-by';
import {Trunc} from '../pipes/trunc';
import {Entity} from '../pipes/entity';





@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CategoryPage,
        ProductListPage,
        ProductDetailsPage,
        CartPage,
        CheckoutPage,
        OrdersPage,
        OrderDetailsPage,
        ThankyouPage,
        LoginPage,
        RegistrationPage,
        FavouritePage,
        ContactPage,
        OfferPage,
        NewsPage,
        NewsDetailPage,
        Settings,
        OrderBy,
        Trunc,
        Entity,
  
    ],
    imports: [
        IonicModule.forRoot(MyApp)

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CategoryPage,
        ProductListPage,
        ProductDetailsPage,
        CartPage,
        CheckoutPage,
        OrdersPage,
        OrderDetailsPage,
        ThankyouPage,
        LoginPage,
        RegistrationPage,
        FavouritePage,
        ContactPage,
        OfferPage,
        NewsPage,
        NewsDetailPage,
        Settings
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,Service],


})
export class AppModule {
}
