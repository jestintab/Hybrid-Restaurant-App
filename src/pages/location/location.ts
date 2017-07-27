import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  title: string = 'Sandwich Factory ';
  lat: number = 25.323115;
  lng: number = 51.526112;
  zoom: number = 16;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
