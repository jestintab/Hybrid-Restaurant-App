import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
//import {ProductListPage} from '../product-list/product-list';
import { Service } from '../../app/service';
import { LoadingController } from 'ionic-angular';
import { ImageLoaderConfig } from 'ionic-image-loader';




@IonicPage()
@Component({
    selector: 'page-category',
    templateUrl: 'category.html',
    providers: [Service],

})
export class CategoryPage {
    categories: any[] = [];

    constructor(public navCtrl: NavController, public service: Service, public loading: LoadingController,
        private imageLoaderConfig: ImageLoaderConfig) {
            this.imageLoaderConfig.setWidth('100%');
            this.imageLoaderConfig.setHeight('5em');
            this.imageLoaderConfig.setBackgroundSize('contain');
            
    

    }
    ionViewDidEnter() {
        let loader = this.loading.create({
            content: 'Loading ...',
        });

        loader.present().then(() => {
            this.service.getCategory()
                .subscribe((response) => {
                    this.categories = response.restify.rows;
                    //console.log(response.restify.rows);
                     loader.dismiss();
                })
           
        });
    }

    navigate(catId) {
        this.navCtrl.push("ProductListPage",
            { catId: catId }
        );
        // console.log(catId);
    }

}
