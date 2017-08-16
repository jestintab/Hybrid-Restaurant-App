import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';



@NgModule({
  declarations: [
    NotificationPage
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),


  ],
  exports: [
    NotificationPage
  ]
})
export class NewsPageModule { }