import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage } from './orders';
import { TranslaterModule } from '../../app/translate.module';


@NgModule({
  declarations: [
    OrdersPage
  ],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    TranslaterModule
    
  ],
  exports: [
    OrdersPage
  ]
})
export class OrdersPageModule {}