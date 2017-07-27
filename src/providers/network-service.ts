import { Injectable } from '@angular/core';
import { AlertController, NavController, App } from 'ionic-angular';
import { Network } from '@ionic-native/network';
//import { Diagnostic } from '@ionic-native/diagnostic';



@Injectable()
export class NetworkService {
  private navCtrl: NavController;

  constructor(public alert: AlertController,
    //private diagnostic: Diagnostic,
    public network: Network,
    private app: App) {
    //this.nav = navCtrl
    this.navCtrl = app.getActiveNav();
  }
  noConnection() {
    return (this.network.type === 'none');
  }

  private showSettings() {

    if (this.noConnection()) {
      this.showNetworkAlert();
    } else {
      this.navCtrl.push("Homepage");
    }

    // if (this.diagnostic.switchToWifiSettings) {
    //   this.diagnostic.switchToWifiSettings();
    // } else {
    //   this.diagnostic.switchToSettings();
    // }
  }
  showNetworkAlert() {
    let networkAlert = this.alert.create({
      title: 'No Internet Connection',
      message: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Reload',
          handler: () => {
            networkAlert.dismiss().then(() => {
              this.showSettings();
            })
          }
        }
      ]
    });
    networkAlert.present();
  }


}
