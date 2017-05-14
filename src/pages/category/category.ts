import {Component} from '@angular/core';
import {NavController, IonicPage } from 'ionic-angular';
//import {ProductListPage} from '../product-list/product-list';
import {Service} from '../../app/service';




@IonicPage()
@Component({ 
    selector: 'page-category',
    templateUrl: 'category.html',
    providers: [Service],

})
export class CategoryPage { 
    categories: any[] = [];

    constructor(public navCtrl: NavController, public service: Service) {

        this.service.getCategory()
            .subscribe((response) => {
               this.categories = response.restify.rows;
              //console.log(response.restify.rows);
            })
    }

    navigate(catId) {
        this.navCtrl.push("ProductListPage",
            {catId: catId}
        );
         // console.log(catId);
    }

}
