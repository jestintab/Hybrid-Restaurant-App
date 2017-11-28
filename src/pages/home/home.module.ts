import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicImageLoader  } from 'ionic-image-loader';




@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        PipesModule,
        IonicImageLoader
    ],
    exports: [
        HomePage
    ]
})
export class CartPageModule {
}
