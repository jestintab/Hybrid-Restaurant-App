import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { Http, Request, RequestMethod, Headers } from "@angular/http";

@IonicPage()
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    user: any = {}
    mailgunUrl: string;
    mailgunApiKey: string;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private http: Http) {
        this.http = http;
        this.mailgunUrl = "sandwichfactory.co";
        this.mailgunApiKey = window.btoa("api:key-b776d63a14258b3624845ef65cf9cdbb");
    }

    onSend(user: NgForm) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=" + "info@sandwichfactory.co" + "&to=" + "it@aljedad.com" + "&subject=" + "Contact from Mobile App  " + "&text=" + "Name: \t" + this.user.name + "\n Email: \t" + this.user.email + "\n Message:\t" + this.user.message,
            headers: requestHeaders
        }))
            .subscribe(success => {
                console.log("SUCCESS -> " + JSON.stringify(success));
            }, error => {
                console.log("ERROR -> " + JSON.stringify(error));
            });



        console.log("response-" + JSON.stringify(this.user));
        let toast = this.toastCtrl.create({
            message: 'Your message is sent successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        this.user = '';
    }
}
