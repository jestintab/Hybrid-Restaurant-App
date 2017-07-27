import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
  providers: [CallNumber, EmailComposer, AppAvailability, InAppBrowser]
})
export class AboutUsPage {

  @ViewChild(Slides) slides: Slides;

  @ViewChild(Nav) nav: Nav;
  contactNo: number = +974 - 40206555;
  public scheme: string = '';

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber,
    public emailComposer: EmailComposer,
    public appAvailability: AppAvailability,
    private inappbrowser: InAppBrowser,
  ) { }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AboutUsPage');

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  callUs() {
    this.callNumber.callNumber("40206500", true)
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

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.platform.is('ios')) {
      app = iosSchemaName;
    }
    else if (this.platform.is('android')) {
      app = androidPackageName;
    } else {
      let browser = this.inappbrowser.create(httpUrl + username, '_system');
      return;
    }

    this.appAvailability.check(app).then(
      () => { // success callback
        let browser = this.inappbrowser.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.inappbrowser.create(httpUrl + username, '_system');
      }
    );
  }

  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }

  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }

  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }

}