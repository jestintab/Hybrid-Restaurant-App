import { Component } from "@angular/core";
import { AlertController, NavController, PopoverController, IonicPage, ModalController, ViewController, } from "ionic-angular";
//import {NgForm} from "@angular/forms";



@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html'
})
export class CartPage {
    cartItems: any[] = [];
    cartData: any[] = [];
    SubTotalPrice: number;
    GrandTotal: number;
    noOfItems: number;
    comments: string;
    productId: number;
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public popoverCtrl: PopoverController,
        public modalCtrl: ModalController) {
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
    }

    ngOnInit() {
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            let prompt = this.alertCtrl.create({
                title: 'Your cart is Empty!',
                message: "Please add your favourite sandwiches!",
                buttons: [
                    {
                        text: 'Ok',
                        handler: data => {
                            localStorage.removeItem('cartItem');
                            if (this.navCtrl.canGoBack() == true) {
                                this.navCtrl.pop();
                            }
                            else {
                                this.navCtrl.push("HomePage");
                            }
                        }
                    }
                ]
            });
            prompt.present();
        }
        else {
            this.noOfItems = this.cartItems.length;
            this.CalculatePrice();
            //console.log(this.cartItems);
        }
    }


    deleteItem(data) {
        for (let i = 0; i <= this.cartItems.length - 1; i++) {
            if (this.cartItems[i].id == data.id) {
                this.cartItems.splice(i, 1);
            }
        }

        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.SubTotalPrice = 0;
            this.GrandTotal = 0;
        }
        else {
            this.CalculatePrice();

        }

        localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.noOfItems = this.noOfItems - 1;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
    }

    editItem(cartItem) {
        //console.log(cartItem);
        this.productId = cartItem.id;

        // let optionModal = this.modalCtrl.create( "ProductOption", {"productId": this.productId});
        // optionModal.onDidDismiss(data => {
        //     console.log(data);
        // });
        // optionModal.present();
        this.navCtrl.push("ProductDetailsPage", {
            productId: this.productId,
            cartStoredItem: cartItem,

        });
    }

    deleteOptionItem(data) {
        for (let i = 0; i <= this.cartItems.length - 1; i++) {
            for (let j = 0; j <= this.cartItems[i].extraOption.length - 1; j++) {
                if (this.cartItems[i].extraOption[j].id == data.id) {
                    this.cartItems[i].extraOption.splice(j, 1);
                    // console.log(this.cartItems);
                }
            }
        }
        this.CalculatePrice();

        localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.noOfItems = this.noOfItems - 1;
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
    }

    onCart() {
        this.cartData['comments'] = this.cartData['comments'];
        this.cartData['noofitems'] = this.noOfItems;

        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
        else {

            this.navCtrl.push("CheckoutPage", this.cartData);
            console.log(this.cartData);
        }
    }

    alert() {
        let alert = this.alertCtrl.create({
            title: 'Cart is Empty!',
            subTitle: 'Please add your favourite sandwiches!',
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        localStorage.removeItem('cartItem');
                        this.navCtrl.push("HomePage");
                    }
                }
            ]
        });
        alert.present();
    }

    CalculatePrice() {
        let proGrandTotalPrice = 0;
        for (let i = 0; i <= this.cartItems.length; i++) {
            if (this.cartItems[i] != null) {

                if (this.cartItems[i].extraOption.length != 0) {
                    for (let j = 0; j <= this.cartItems[i].extraOption.length - 1; j++) {
                        proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].extraOption[j].price;
                    }
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;

                } else {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;

                }
                this.SubTotalPrice = proGrandTotalPrice;
            }
        }

        this.GrandTotal = Math.ceil(this.SubTotalPrice);
        this.cartData['orderTotal'] = this.SubTotalPrice;
        // localStorage.setItem('orderTotal', JSON.stringify(this.SubTotalPrice));

    }



    add(data) {
        if (data.Quantity < 20) {
            data.Quantity = data.Quantity + 1;
            for (let i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].price);
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    }

    remove(data) {

        if (data.Quantity > 1) {
            data.Quantity = data.Quantity - 1;
            for (let i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].price);
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    }

    addMore() {
        this.navCtrl.push("CategoryPage");
        console.log('add more works');

    }

}
