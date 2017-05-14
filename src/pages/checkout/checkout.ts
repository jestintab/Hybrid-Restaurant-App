import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Service} from '../../app/service';



@IonicPage()
@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html',
    providers: [Service],

})
export class CheckoutPage {
    orderDetails: any = {};
    tagHide1: boolean = true;
    tagHide2: boolean = true;
    OrderedProduct = {
        cartItems: [],
        COD: '',
        orderDetail: {}
    };
    COD: string;

    constructor(public navCtrl: NavController, public service: Service) {
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
    }

    onCheckout(OrderDetails: NgForm) {
        this.OrderedProduct.orderDetail = OrderDetails.value
        this.OrderedProduct.COD = this.COD;
        this.service.postOrderDetails(this.OrderedProduct);
        // .subscribe((res) => {
        //     console.log(res);
        // });
        console.log(JSON.stringify(this.OrderedProduct));
        
        //this.navCtrl.push(ThankyouPage);
    }

    toggle2() {
        this.tagHide2 = this.tagHide2 ? false : true;
    }

    hide() {
        this.tagHide2 = true;
        this.COD = 'cod';
    }
}
