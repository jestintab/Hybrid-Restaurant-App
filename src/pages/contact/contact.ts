import {Component} from '@angular/core';
import {NavController, NavParams,ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	user:any = { }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl:ToastController) {
  	          
      }

	onSend(user:NgForm) {
        console.log("response-"+JSON.stringify(this.user));
        let toast = this.toastCtrl.create({
            message: 'Response is sent successfully',
            duration: 3000,
            position:'middle'
        });
        toast.present();
      this.user='';

		   
	}

}
