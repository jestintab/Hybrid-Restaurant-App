import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { AgmCoreModule } from 'angular2-google-maps/core';



@NgModule({
  declarations: [
    LocationPage
  ],
  imports: [
    IonicPageModule.forChild(LocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkIzaOmzxf0hm5Qd9h7YeEMtD5Iz_hpbY'
    }),


  ],
  exports: [
    LocationPage
  ]
})
export class LocationPageModule { }