import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutUsPage} from './about-us';


@NgModule({
    declarations: [
        AboutUsPage
    ],
    imports: [
        IonicPageModule.forChild(AboutUsPage),
        

    ],
    exports: [
        AboutUsPage
    ]
})
export class AboutUsPageModule {
}
