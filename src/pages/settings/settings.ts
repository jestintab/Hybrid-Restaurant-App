import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class Settings {
    user: any = {};
    url: any = "assets/img/profile.jpg";

    constructor(public navCtrl: NavController) {
    }

    onSubmit(user: NgForm) {
        console.log("user Setting Data : " + JSON.stringify(this.user));
    }


    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }
}
