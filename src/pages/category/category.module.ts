import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
//import {TranslaterModule} from '../../app/translate.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
    declarations: [
        CategoryPage,

    ],
    imports: [
        IonicPageModule.forChild(CategoryPage),
        PipesModule

    ],
    exports: [
        CategoryPage
    ]
})
export class CategoryPageModule {
}
