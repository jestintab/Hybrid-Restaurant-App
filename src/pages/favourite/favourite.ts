import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-favourite',
    templateUrl: 'favourite.html'
})
export class FavouritePage {
    favouriteItems: any[] = [];
    cartItems: any[] = [];
    noOfItems: number;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
        this.storage.get('favourite').then((favourite) => {
            this.favouriteItems = favourite;
        });
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
    }

    navcart() {
        this.navCtrl.push("CartPage");
    }

    buyNow(productId) {
        this.navCtrl.push("ProductDetailsPage", {
            productId: productId
        });
    }

    isFavourite() {
        return this.favouriteItems != null;

    }

}
