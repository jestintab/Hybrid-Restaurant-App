import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


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
