import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
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
        cartItems: [ ],
        payment: 'cod',
        orderType:'delivery',
        orderDetail: {},
        orderTotal: {},
        comment: ''
       
    };
   
    orderType:string;
    deliveryCharge:number = 5;

    constructor(public navCtrl: NavController, public service: Service,
                public NavParams: NavParams) {
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.OrderedProduct.orderTotal = this.NavParams.get('orderTotal');
        this.OrderedProduct.comment = this.NavParams.get('comments');
        this.orderDetails.city = 'Doha, Qatar';
    }

    onCheckout(OrderDetails: NgForm) {
        this.OrderedProduct.orderDetail = OrderDetails.value;
     
        this.service.postOrderDetails(this.OrderedProduct);
        // .subscribe((res) => {
        //     console.log(res);
        // });
        console.log(JSON.stringify(this.OrderedProduct));
        
        //this.navCtrl.push(ThankyouPage);
    }

   
    delivery(){
        this.order_delivery = false;
        this.gatemall = true;       
        this.orderDetails.city = 'Doha, Qatar';   
        this.OrderedProduct.orderType = 'delivery';
        this.deliveryCharge = 5;

    }
    gateMall(){
        this.gatemall = false;
        this.order_delivery = true;
        this.orderDetails.city = 'The Gate Mall, Doha, Qatar';
        this.deliveryCharge = 0;
        this.OrderedProduct.orderType = 'gatemall';
        
        
    }

    takeaway(){
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

    if(orderType = 'Delivery'){
        this.deliveryCharge = 5;
    }
   
}
