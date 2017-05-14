import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';


@IonicPage()
@Component({
    selector: 'page-offer',
    templateUrl: 'offer.html',
    providers: [Service]
})
export class OfferPage {
    @ViewChild(Slides) slides: Slides;
    offerProducts: any[] = [];
    offerPrice: number;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public offerService: Service) {
    }

    ngOnInit() {
        this.offerService.getData()
            .subscribe((response) => {
                for (let i = 0; i <= response.menuItems.length - 1; i++) {
                    if (response.menuItems[i].offer != null) {
                        this.offerProducts.push(response.menuItems[i]);
                    }
                }
            })

    }

    gotoNextSlide() {
        this.slides.slideNext();
    }

    gotoPrevSlide() {
        this.slides.slidePrev();
    }

    buyNow(productId) {
        this.navCtrl.push("ProductDetailsPage", {
            productId: productId
        });
    }

}
