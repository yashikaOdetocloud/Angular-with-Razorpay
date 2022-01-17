import { Component } from '@angular/core';
import { TableColumns } from './TableColumns';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { PayService } from './Service/pay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular with Razorpay';
  allProducts : TableColumns[] = [];
  width = 150;
  margin = 1;
  textcolor = 'red';
  showImage : boolean = false;
  imgSrc : string;
  searchText: string;
  rzp;
  options = {
    "key": "rzp_test_ww7t3rCDHhPpP4", // Enter the Key ID generated from the Dashboard
    "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Tshirt App",
    "description": "Test Transaction",
    "image": "",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#61ebf5"
    }
};

  constructor(private pay: PayService){}

ngOnInit(){
this.allProducts = this.getProducts();
console.log(this.allProducts);
}

payBtn(){
  this.rzp = new this.pay.nativeWindow.Razorpay(this.options);
  this.rzp.open();
}

over(event,back)
{
  event.currentTarget.src=back;
}
out(event,front)
{
  event.currentTarget.src=front;
}

imageBtn(){

  this.showImage = !this.showImage;
}

  getProducts() : TableColumns[]
  {
    return[
      {
      imageUrlF: "assets/FrontTshirts/nikeF.jpg",
      imageUrlB: "assets/BackTshirts/nikeB.jpg",
        brandName: "Nike",
        price: 1,
        availability: 9
      },
      {
        imageUrlF: "assets/FrontTshirts/levisF.jpg",
        imageUrlB: "assets/BackTshirts/levisB.jpg",
        brandName: "Levis",
        price: 1,
        availability: 1
      },
      {
        imageUrlF: "assets/FrontTshirts/hrxF.jpg",
        imageUrlB: "assets/BackTshirts/hrxB.jpg",
        brandName: "HRX",
        price: 1,
        availability: 7
      },
      {
        imageUrlF: "assets/FrontTshirts/pumaF.jpg",
        imageUrlB: "assets/BackTshirts/pumaB.jpg",
        brandName: "Puma",
        price: 1,
        availability: 5
      }
    ]
  }
}
