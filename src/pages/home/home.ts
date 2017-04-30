import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductListPage} from '../product-list/product-list';
import {CartPage} from '../../pages/cart/cart';
import {Service} from '../../app/service';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Service]
})
export class HomePage {
    categories: any[] = [];
    featured: any[] = [];
    cartItems: any[];
    noOfItems: number;


    constructor(public navCtrl: NavController, public service: Service) {
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
        this.service.getData()
            .subscribe((response) => {
                this.categories = response.categories;
                this.featured = response.featured;
            })
    }

    navigate(MenuId) {
        this.navCtrl.push(ProductListPage,
            {MenuId: MenuId}
        );
    }

    navcart() {
        this.navCtrl.push(CartPage);
    }

}
