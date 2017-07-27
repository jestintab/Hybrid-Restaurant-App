import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-thankyou',
    templateUrl: 'thankyou.html'
})
export class ThankyouPage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        localStorage.removeItem('cartItem');
    }
}
