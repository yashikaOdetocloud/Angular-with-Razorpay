import { Component } from '@angular/core';
import { TableColumns } from './TableColumns';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-2';
  allProducts : TableColumns[] = [];
  width = 150;
  margin = 1;
  textcolor = 'red';
  showImage : boolean = false;
  imgSrc : string;
  searchText: string;
  constructor(){}

ngOnInit(){
this.allProducts = this.getProducts();
console.log(this.allProducts);
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
        price: 1299,
        availability: 99
      },
      {
        imageUrlF: "assets/FrontTshirts/levisF.jpg",
        imageUrlB: "assets/BackTshirts/levisB.jpg",
        brandName: "Levis",
        price: 1099,
        availability: 101
      },
      {
        imageUrlF: "assets/FrontTshirts/hrxF.jpg",
        imageUrlB: "assets/BackTshirts/hrxB.jpg",
        brandName: "HRX",
        price: 799,
        availability: 79
      },
      {
        imageUrlF: "assets/FrontTshirts/pumaF.jpg",
        imageUrlB: "assets/BackTshirts/pumaB.jpg",
        brandName: "Puma",
        price: 599,
        availability: 110
      }
    ]
  }
}
