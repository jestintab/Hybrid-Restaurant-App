import { Component } from '@angular/core';
import { NavController, IonicPage  , NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-thankyou',
    templateUrl: 'thankyou.html'
})
export class ThankyouPage {
    status:string;
    orderId:number;
    orderTotal:any;
    orderDetails:any;
    loadcomplete:boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
                    
        this.status = navParams.get('status');
        this.orderId = navParams.get('orderId');
        this.orderTotal = navParams.get('orderTotal');
        this.orderDetails = navParams.get('orderDetails');
        console.log(this.status, this.orderId, this.orderTotal, this.orderDetails);

    }

    ionViewDidLoad() {
        localStorage.removeItem('cartItem');
        setTimeout(() =>{
            this.loadcomplete = true;
        },2000);
    }
    orderAgain(){
        this.navCtrl.push("HomePage");
    }

  
    
}
