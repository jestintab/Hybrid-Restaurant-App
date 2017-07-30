import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { Service } from '../../app/service';



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
    gatemall: boolean = true;

    OrderedProduct = {
        cartItems: [],
        payment: 'cod',
        orderType: 'delivery',
        orderDetail: {},
        orderTotal: {},
        comment: '',
        noOfItems: '',
    };

    orderType: string;
    deliveryCharge: number = 5;
    message:any;
    status:string;
    orderId:number;

    constructor(public navCtrl: NavController, public service: Service,
        public NavParams: NavParams) {
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.OrderedProduct.orderTotal = this.NavParams.get('orderTotal');
        this.OrderedProduct.comment = this.NavParams.get('comments');
        this.OrderedProduct.noOfItems = this.NavParams.get('noofitems');
        this.orderDetails.pcode = '00974';
        this.orderDetails.city = 'Doha, Qatar';
    }
    submitted = false;
    onCheckout(OrderDetails: NgForm) {
        this.submitted = true;
        this.OrderedProduct.orderDetail = OrderDetails.value;

        this.service.postOrderDetails(this.OrderedProduct)
            .subscribe((data) => {
                console.log(data);
                this.message = JSON.parse(data);
                this.status = this.message.status;
                this.orderId = this.message.order_id;
                console.log(this.status, this.orderId);

                //this.res_body = res.body; 
       this.navCtrl.push("ThankyouPage", { status: this.status , orderId: this.orderId,
         orderDetails: this.OrderedProduct.orderDetail,
        orderTotal: this.OrderedProduct.orderTotal });

            });
        // console.log(JSON.stringify(this.OrderedProduct));
    }


    delivery() {
        this.order_delivery = false;
        this.gatemall = true;
        this.orderDetails.phone = '+974';
        this.orderDetails.city = 'Doha, Qatar';
        this.OrderedProduct.orderType = 'delivery';
        this.deliveryCharge = 5;

    }
    gateMall() {
        this.gatemall = false;
        this.order_delivery = true;
        this.orderDetails.city = 'The Gate Mall, Doha, Qatar';
        this.deliveryCharge = 0;
        this.OrderedProduct.orderType = 'gatemall';
    }

    takeaway() {
        this.order_delivery = true;
        this.gatemall = true;
        this.orderDetails.city = 'Doha, Qatar';
        this.deliveryCharge = 0;
        this.OrderedProduct.orderType = 'collection';

    }
    toggle2() {
        this.tagHide2 = this.tagHide2 ? false : true;
        this.OrderedProduct.payment = 'pcm';
    }

    hide() {
        this.tagHide2 = true;
        this.OrderedProduct.payment = 'cod';
    }

    if(orderType = 'Delivery') {
        this.deliveryCharge = 5;
    }

}
