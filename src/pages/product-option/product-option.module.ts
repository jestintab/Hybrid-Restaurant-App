import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductOption } from './product-option';

@NgModule({
  declarations: [
    ProductOption,
  ],
  imports: [
    IonicPageModule.forChild(ProductOption),
  ],
  exports: [
    ProductOption
  ]
})
export class ProductOptionModule {}
