import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
    declarations: [
        ProductListPage,


    ],
    imports: [
        IonicPageModule.forChild(ProductListPage),
        PipesModule,

    ],
    exports: [
        ProductListPage
    ]
})

export class ProductListPageModule { }