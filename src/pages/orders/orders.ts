import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';



@Component({
    selector: 'page-orders',
    templateUrl: 'orders.html',
    providers: [Service]
})
export class OrdersPage {
    categories: any[] = [];
    featured: any[] = [];

    constructor(public navCtrl: NavController, public service: Service) {}

    
    ngOnInit(){
        this.service.getData()
            .subscribe((response) => {
                this.categories = response.categories;
                this.featured = response.featured;
            })
    }
    orderDetails() {
      this.navCtrl.push("OrderDetailsPage");
    }
}
