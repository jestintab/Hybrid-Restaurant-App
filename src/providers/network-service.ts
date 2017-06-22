import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Network}  from '@ionic-native/network';
//import { Diagnostic } from '@ionic-native/diagnostic';



@Injectable()
export class NetworkService {

  constructor( public alert: AlertController,
  //private diagnostic: Diagnostic,
   public network:Network) {
    console.log('Hello NetworkService Provider');
  }
 noConnection() {
    return (this.network.type === 'none');
  }
 
private showSettings() {
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
          handler: () => {}
        },
        {
          text: 'Open Settings',
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
