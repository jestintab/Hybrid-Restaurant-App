import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Service} from '../../app/service';
import {OrderDetailsPage} from '../../pages/order-details/order-details';
@Component({
    selector: 'page-orders',
    templateUrl: 'orders.html',
    providers: [Service]
})
export class OrdersPage {
    categories: any[] = [];
    featured: any[] = [];

    constructor(public navCtrl: NavController, public service: Service) {
        this.service.getData()
            .subscribe((response) => {
                this.categories = response.categories;
                this.featured = response.featured;
            })
    }
    orderDetails() {
      this.navCtrl.push(OrderDetailsPage);
    }
}
