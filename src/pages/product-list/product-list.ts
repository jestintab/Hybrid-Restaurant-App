import {Component} from '@angular/core';
import {NavController, NavParams,ToastController} from 'ionic-angular';
import {Service} from '../../app/service';
import {ProductDetailsPage} from '../../pages/product-details/product-details';
import {CartPage} from '../../pages/cart/cart';

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
  providers: [Service]
})
export class ProductListPage {
  menuItems: any[]=[];
  catId: number;
  cartItems: any[];
  noOfItems: number;



  constructor(public navCtrl: NavController,
              public service: Service,
              public navParams: NavParams,
              public toastCtrl:ToastController) {
    this.catId = navParams.get('catId');

    // this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
    // if (this.cartItems != null) {
    //   this.noOfItems = this.cartItems.length;
    // }
  }

  ngOnInit() {
    this.service.getMenus(this.catId)
      // .subscribe((response) => {
      //   for (let i = 0; i <= response.restify.rows.length - 1; i++) {
      //     if (response.restify.rows.menuItems[i].category_id == this.catId) {
      //       this.menuItems.push(response.menuItems[i]);
      //     }
      //   }
      // })
      .subscribe((response) => {
        this.menuItems = response.restify.rows;
        //console.log(response.restify.rows);
      })
  }


  navigate(productId) {
    this.navCtrl.push(ProductDetailsPage, {
      productId: productId
    });
    
  }

  navcart() {
    this.navCtrl.push(CartPage);
  }



}
