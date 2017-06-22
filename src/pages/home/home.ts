import {Component} from '@angular/core';
import {NavController, IonicPage, ToastController} from 'ionic-angular';
import {Service} from '../../app/service';
import { LoadingController } from 'ionic-angular';


@IonicPage()
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


    constructor(public navCtrl: NavController, 
                public service: Service, 
                public loading: LoadingController,
                private toast:ToastController) {
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
       
       
    }
 ionViewDidEnter() {
        let loader = this.loading.create({
            content: 'Loading ...',
        });

        loader.present().then(() => {
            this.service.getData()
                    .subscribe((response) => {
                    // this.categories = response.categories;
                        this.featured = response.featured;
                    })
                    this.service.getCategory()
                    .subscribe((response) => {
                    this.categories = response.restify.rows;
                    })
            loader.dismiss();
        });
    }

    navigate(catId) {
        this.navCtrl.push("ProductListPage",
            {catId: catId}
        );
    }

    navcart() {
        this.navCtrl.push("CartPage");
    }

}
 