import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
//import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { Service } from '../app/service';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { NetworkService } from '../providers/network-service';
import { Diagnostic } from '@ionic-native/diagnostic';


@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        BrowserModule,
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        Service,
        StatusBar,
        SplashScreen,
        Network,
        NetworkService,
        Diagnostic,
    ],
})
export class AppModule {
}
