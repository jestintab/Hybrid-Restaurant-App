import {Component} from '@angular/core';
import {NavController,IonicPage} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastController} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {
    user: FormGroup;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fb: FormBuilder) {
    }

    onRegister() {
        if (this.user.value.name != '' && this.user.value.email != '' && this.user.value.password != '') {
            this.displayToast('User Successfully added!', 5000);
        }
    }

    displayToast(message, duration) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    }

    ngOnInit(): any {
        this.user = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            mobileNo: ['', Validators.required],
            password: ['', Validators.required],

        });
    }

    navLogin() {
        this.navCtrl.push("LoginPage");
    }

}
