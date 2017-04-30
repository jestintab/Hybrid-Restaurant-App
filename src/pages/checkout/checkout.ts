import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ThankyouPage} from '../../pages/thankyou/thankyou';


@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html'
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

    constructor(public navCtrl: NavController) {
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
    }

    onCheckout(OrderDetails: NgForm) {
        this.OrderedProduct.orderDetail = OrderDetails.value
        this.OrderedProduct.COD = this.COD;
        this.navCtrl.push(ThankyouPage);
    }

    toggle2() {
        this.tagHide2 = this.tagHide2 ? false : true;
    }

    hide() {
        this.tagHide2 = true;
        this.COD = 'cod';
    }
}
