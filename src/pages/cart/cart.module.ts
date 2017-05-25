import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CartPage} from './cart';
import { PipesModule } from '../../pipes/pipes.module';
import {ProductOption} from './product-option';



@NgModule({
    declarations: [
        CartPage
    ],
    imports: [
        IonicPageModule.forChild(CartPage),
        PipesModule

    

    ],
    exports: [
        CartPage
    ]
})
export class CartPageModule {
}
