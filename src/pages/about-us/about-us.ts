import {Component,ViewChild} from '@angular/core';
import {NavController, NavParams,IonicPage} from 'ionic-angular';
import {Nav, Platform} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
  providers:[CallNumber,EmailComposer]
})
export class AboutUsPage {

 @ViewChild(Slides) slides: Slides;
	
    @ViewChild(Nav) nav: Nav;
    contactNo:any=40206555;


  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public callNumber:CallNumber,
              public emailComposer:EmailComposer) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');

  }


   
   goToSlide() {
    this.slides.slideTo(2, 500);
  }

  callUs() {
      this.callNumber.callNumber(this.contactNo, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

   gotogoogleMap() {
    this.navCtrl.push("LocationPage");
  }

   contact() {
     let email = {
      to: 'info@sandwichfactory.qa',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}