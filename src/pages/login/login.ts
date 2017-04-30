import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HomePage} from '../../pages/home/home';
import {RegistrationPage} from '../../pages/registration/registration';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    user: FormGroup;


    constructor(public navCtrl: NavController,
                public fb: FormBuilder) {
    }

    onLogin() {
        if (this.user.value.email == 'ionicfirebaseapp@gmail.com' && this.user.value.password == '12345') {
            var validUser = JSON.stringify(this.user.value);
            localStorage.setItem('user', validUser);
            this.navCtrl.push(HomePage);
        }
    }

    ngOnInit(): any {
        this.user = this.fb.group({
            email: ['ionicfirebaseapp@gmail.com', Validators.required],
            password: ['12345', Validators.required],

        });
    }


    Register() {
        this.navCtrl.push(RegistrationPage);
    }
}
