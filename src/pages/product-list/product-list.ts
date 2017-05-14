import {Component} from '@angular/core';
import {NavController, NavParams,ToastController, IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
  providers: [Service]
})
export class ProductListPage {
  menuItems: any[]=[];
  items:any[]=[];
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
        this.items=this.menuItems;
        //console.log(response.restify.rows);
      })
  }
 initializeItems() {
        this.items = this.menuItems;
    }
  getItems(ev: any) {
        this.initializeItems();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter((data) => {
                return (data.values.menu_name.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
  navigate(productId) {
    this.navCtrl.push("ProductDetailsPage", {
      productId: productId
    });
    
  }

  navcart() {
    this.navCtrl.push("CartPage");
  }



}
