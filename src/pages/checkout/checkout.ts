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
    order_delivery: boolean = false;
    gatemall:boolean = true;
    
    OrderedProduct = { 
        cartItems: [],
        COD: '',
        orderType:'',
        orderDetail: {},
        orderTotal: {},
    };
    COD: string;
    orderType:string;

    constructor(public navCtrl: NavController, public service: Service) {
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.OrderedProduct.orderTotal = JSON.parse(localStorage.getItem('orderTotal'));
         this.orderDetails.city = 'Doha, Qatar';
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
    delivery(){
        this.order_delivery = false;
        this.gatemall = true;       
        this.orderDetails.city = 'Doha, Qatar';   
        this.orderType = 'Delivery';

    }
    gateMall(){
        this.gatemall = false;
        this.order_delivery = true;
        this.orderDetails.city = 'The Gate Mall, Doha, Qatar';
        
    }

    takeaway(){
        this.order_delivery = true;
        this.gatemall = true;
        this.orderDetails.city = 'Doha, Qatar';        
     }

    hide() {
        this.tagHide2 = true;
        //this.tag = true;
        this.COD = 'cod';
    }
}
