import {Component} from "@angular/core";
import {AlertController, NavController, PopoverController} from "ionic-angular";
import {CheckoutPage} from "../../pages/checkout/checkout";
import {HomePage} from "../../pages/home/home";


@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html'
})
export class CartPage {
    cartItems: any[] = [];
    SubTotalPrice: number;
    totalVat: number;
    otherTaxes: number;
    GrandTotal: number;
    noOfItems: number;
    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public popoverCtrl: PopoverController) {
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
    }

    ngOnInit() {
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            let prompt = this.alertCtrl.create({
                title: 'Your Cart is Empty!',
                message: "Please add item",
                buttons: [
                    {
                        text: 'Ok',
                        handler: data => {
                            localStorage.removeItem('cartItem');
                            if (this.navCtrl.canGoBack() == true) {
                                this.navCtrl.pop();
                            }
                            else {
                                this.navCtrl.push(HomePage);
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
            this.totalVat = 0;
            this.otherTaxes = 0;
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

    checkout() {
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.alert();
        }
        else {
            this.navCtrl.push(CheckoutPage);
        }
    }

   
    alert() {
        let alert = this.alertCtrl.create({
            title: 'Cart Is Empty!',
            subTitle: 'Please Add Item!',
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        localStorage.removeItem('cartItem');
                        this.navCtrl.push(HomePage);
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
                if (this.cartItems[i].extraPrice != null) {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice + this.cartItems[i].extraPrice;
                } else {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;
                }
                this.SubTotalPrice = proGrandTotalPrice;
            }
        }
        this.totalVat = ((5 / 100) * this.SubTotalPrice);
        this.otherTaxes = ((3 / 100) * this.SubTotalPrice);
        this.GrandTotal = Math.ceil(this.SubTotalPrice + this.totalVat + this.otherTaxes);
    }
     

  add(data) {
    if (data.Quantity < 20) {
      data.Quantity = data.Quantity + 1;
      for (let i = 0; i <= this.cartItems.length - 1; i++) {
      if (this.cartItems[i].id == data.id) {
        this.cartItems[i].Quantity = data.Quantity;
        if(this.cartItems[i].sizeOption.offerValue){
            this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.offerValue);
        } else {
        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.value);
      }
  }
    }
    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
    this.CalculatePrice();
    }
  }

  remove(data) {

    if (data.Quantity > 1) {
    data.Quantity =data.Quantity - 1;
      for (let i = 0; i <= this.cartItems.length - 1; i++) {
      if (this.cartItems[i].id == data.id) {
        this.cartItems[i].Quantity = data.Quantity;
        if(this.cartItems[i].sizeOption.offerValue){
        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.offerValue);
        } else {
        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.value);
      }
      }
    }
    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
    this.CalculatePrice();
    }
  }


}
