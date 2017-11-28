import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicImageLoader  } from 'ionic-image-loader';


@NgModule({
  declarations: [
    ProductDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
    PipesModule,
    IonicImageLoader     
  ],
  exports: [
    ProductDetailsPage
  ]
})
export class ProductDetailsPageModule { }