import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferPage } from './offer';



@NgModule({
  declarations: [
    OfferPage
  ],
  imports: [
    IonicPageModule.forChild(OfferPage),

    
  ],
  exports: [
    OfferPage
  ]
})
export class OfferPageModule {}