import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, IonicPage } from 'ionic-angular';
import { Service } from '../../app/service';
import { Storage } from '@ionic/storage';
import unserialize from 'locutus/php/var/unserialize';
import html_entity_decode from 'locutus/php/strings/html_entity_decode';
import 'rxjs/Rx';
import isset from 'locutus/php/var/isset';
import { LoadingController } from 'ionic-angular';
import { ImageLoaderConfig } from 'ionic-image-loader';
import   _   from 'lodash-joins';

@IonicPage()
@Component({
    selector: 'page-product-details',
    templateUrl: 'product-details.html',
    providers: [Service]
})
export class ProductDetailsPage {
    count: number = 1;
    productId: number;
    noOfItems: number;
    cartItems: any[];
    ExtraOptions: any[] =[];
    itemInCart: any[] = [];
    Cart: any[] = [];
    prices: any[] = [{ value: '' }];
    product: any = {
        extraOption: []
    };
    productDetails: any[] = [];
    itemDetails: any;
    // itemdetail_name:string;
    // itemdetail_price:string;
    // itemdetail_image:string; 
    // itemdetail_description:string;
    // itemdetail_id:number;
    menuOptions: any;
    menuOptionJson: any;
    menuOptionId: number;
    menuExtras: any;
    optionLength: number;
    cartStoredItem: any;
    checkedOptions: any[]=[];
    optionCount: number;
   

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public navParams: NavParams,
        public storage: Storage,
        public service: Service,
        public loading: LoadingController,
        private imageLoaderConfig: ImageLoaderConfig ) {
        this.productId = navParams.get('productId');
        if (isset(navParams.get('cartStoredItem'))) {
            this.cartStoredItem = navParams.get('cartStoredItem');

        }
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
        this.storage.get('favourite').then((favourite) => {
            this.favourites = favourite;
        });
        this.imageLoaderConfig.setWidth('100%');
        this.imageLoaderConfig.setHeight('auto');
        this.imageLoaderConfig.setBackgroundSize('cover');
        
        
        
        //this.product.extraOption;
        // this.storage.get('favourite').then((favourites) => {
        //     this.favouriteItems = favourites;
        // })
    }
    ionViewDidEnter() {
        let loader = this.loading.create({
            content: 'Loading ',
        });

        loader.present().then(() => {
            this.service.getMenuItem(this.productId)
                .subscribe((response) => {
                    this.itemDetails = response.restify.rows;
                    this.itemDetails.forEach(itemdetail => {
                        this.product.name = itemdetail.values.menu_name.value;
                        this.product.description = itemdetail.values.menu_description.value;
                        this.product.image = itemdetail.values.menu_photo.value;
                        this.product.price = itemdetail.values.menu_price.value;
                        this.product.id = itemdetail.values.menu_id.value;
                        this.product.thumb = itemdetail.values.menu_thumb.value;

                    });
                })
            // console.log(this.product);
            // console.log(this.productDetails);
            this.service.getMenuOptions(this.productId)
                .subscribe((res) => {
                    this.menuOptions = res.restify.rows;
                    this.optionLength = this.menuOptions.length;

                    if (this.menuOptions.length != 0) {
                        
                        this.menuOptions.forEach(menuOption => {
                            this.menuOptionJson = menuOption.values.option_values.value;
                            this.menuOptionId = menuOption.values.option_id.value;

                        });
                        this.menuOptionJson = unserialize(html_entity_decode(this.menuOptionJson));
                        for (let i of Object.keys(this.menuOptionJson)) {

                            this.service.getOptionName(this.menuOptionJson[i].option_value_id, this.menuOptionId)
                                .subscribe((resp) => {

                                    for (let j of Object.keys(resp.restify.rows)) {

                                        this.ExtraOptions.push({
                                            'option_value_id': resp.restify.rows[j].values.option_value_id.value,
                                            'option_id': resp.restify.rows[j].values.option_id.value,
                                            'name': resp.restify.rows[j].values.value.value,
                                            'price': parseInt(resp.restify.rows[j].values.price.value),
                                            
                                            
                                        });
                                    }


                                });
                        }
                    }
                    loader.dismiss();
                })


            if (isset(this.cartStoredItem)) {
                this.checkedOptions = this.cartStoredItem.extraOption;
                this.optionCount = this.checkedOptions.length;
               
//  var left = [
//      {id: 'c', left: 0},
//        {id: 'e', left: 2},
//        {id: 'c', left: 1},
//    ],
//    right = [
//        {id: 'a', right: 0},
//        {id: 'b', right: 1},
//        {id: 'c', right: 2},
//        {id: 'c', right: 3},
//        {id: 'd', right: 4},
//        {id: 'f', right: 5},
//        {id: 'g', right: 6}
//    ],
  var accessor = function (obj) {
       return obj['option_id'];
   };
    //var joinedData = _.hashInnerJoin(left, accessor, right, accessor);
                //  accessor = function (obj) {
                //                 return obj['check'] = true ;
                //                 };
                            console.log(this.checkedOptions);
                            console.log(this.ExtraOptions);
                 var joinedData = _.merge(this.ExtraOptions, this.checkedOptions) 
            //    var arr = _.remove(joinedData, function(obj,pos) {
            //             return arr.indexOf(obj['option_id']) == pos;
            //             });
            //                 console.log(arr);

            }
        }); 
    }
    ngOnInit() {




    }




    addToCart(productId, cart) {
       
        this.Cart = JSON.parse(localStorage.getItem("cartItem"));
        this.product.request = this.product.request;
        if (this.Cart == null) {
            this.product.Quantity = this.count;
            
            

            this.product.itemTotalPrice = this.product.Quantity * this.product.price;

            let proExtraPrice = 0;
            for (let i = 0; i <= this.product.extraOption.length - 1; i++) {
                proExtraPrice = proExtraPrice + parseInt(this.product.extraOption[i].price);
                //this.product.extraPrice =  proExtraPrice;
            }

            this.itemInCart.push(this.product);
            localStorage.setItem('cartItem', JSON.stringify(this.itemInCart));

        }
        else {

            for (let i = 0; i <= this.Cart.length - 1; i++) {
                if (this.Cart[i].id == productId) {
                    this.Cart.splice(i, 1);
                }
            }
            this.product.Quantity = this.count;
            this.product.itemTotalPrice = this.product.Quantity * this.product.price;

            let proExtraPrice = 0;
            for (let i = 0; i <= this.product.extraOption.length - 1; ++i) {
                proExtraPrice = proExtraPrice + this.product.extraOption[i].value;
                this.product.extraPrice = proExtraPrice;
            }

            this.Cart.push(this.product);
            localStorage.setItem('cartItem', JSON.stringify(this.Cart));
        };

        if (cart == 0) {
            this.createToaster('Item added to cart', '3000');
            console.log(this.Cart);
        } else {
            this.navCtrl.push("CartPage");
        }


    }



 checkOptions(option) {

let added =0;
        if (this.product.extraOption.length != 0) {
            for (let i = 0; i <= this.product.extraOption.length - 1; i++) {
               
                if (parseInt(this.product.extraOption[i].option_value_id) == parseInt(option.option_value_id)) {
                    this.product.extraOption.splice(i, 1);
                   added = 1
                }
               
            }
            if (added == 0){
                    this.product.extraOption.push(option);
                 
            }
        }
        else {
            this.product.extraOption.push(option);
        }
      //console.log(this.product.extraOption);
    }

    // sizeOptions(price) {
    //     this.product.sizeOption = price;
    // }

    add() {
        if (this.count < 10) {
            this.count = this.count + 1;
        }
    }

    remove() {
        if (this.count > 1) {
            this.count = this.count - 1;
        }
    }

    home() {
        this.navCtrl.push("HomePage");
    }

    navcart() {
        this.navCtrl.push("CartPage");
    }

    //Add favourite

    visible = true;
    favourites: any[] = [];
    favourite: any[] = [];
    favouriteItems: any[] = [];


    toggleFavourite() {
        this.visible = !this.visible;
    }

    addToFavourite(productId) {
        this.createToaster('Added to favourites', '3000');

        if (this.favourites == null) {
            this.favourite.push(this.productDetails)
            this.storage.set('favourite', this.favourite);
        }
        else {
            for (let i = 0; i <= this.favourites.length - 1; i++) {
                if (this.favourites[i].id == productId) {
                    this.favourites.splice(i, 1);
                }
            }
            this.favourites.push(this.productDetails)
            this.storage.set('favourite', this.favourites);
        }
    }

    removeFromFavourite(productId) {
        this.storage.get('favourite').then((favourites) => {
            this.favouriteItems = favourites;
            this.createToaster('Removed from favourites', '3000');
            for (let i = 0; i <= this.favouriteItems.length - 1; i++) {
                if (this.favouriteItems[i].id == productId) {
                    this.favouriteItems.splice(i, 1);
                }
            }
            this.storage.set('favourite', this.favouriteItems);
        })
    }

    createToaster(message, duration) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    }


}

