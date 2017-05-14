import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';



@NgModule({
  declarations: [
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    
    
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {}