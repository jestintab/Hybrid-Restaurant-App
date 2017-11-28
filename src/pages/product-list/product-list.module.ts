import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicImageLoader  } from 'ionic-image-loader';



@NgModule({
    declarations: [
        ProductListPage,


    ],
    imports: [
        IonicPageModule.forChild(ProductListPage),
        PipesModule,
        IonicImageLoader     
        

    ],
    exports: [
        ProductListPage
    ]
})

export class ProductListPageModule { }