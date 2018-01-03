import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList;
  constructor() { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productList = [
      {
        Image: 'assets/products/image1.jpg',
        ProductName: 'Amazone Birthday Gift',
        Price: 50,
        TotalPrice: 40,
        Discount: 20
      },
      {
        Image: 'assets/products/image2.jpg',
        ProductName: 'BURTS BEES body wash 3 pack',
        Price: 145,
        TotalPrice: 175,
        Discount: 35
      },
      {
        Image: 'assets/products/image3.jpg',
        ProductName: 'Bee Headphone',
        Price: 500,
        TotalPrice: 645,
        Discount: 20
      },
      {
        Image: 'assets/products/image4.jpg',
        ProductName: 'Amazone S55 Blutooth Speaker',
        Price: 39.99,
        TotalPrice: 45.99,
        Discount: 10
      },
      {
        Image: 'assets/products/image5.jpg',
        ProductName: 'Amazone TV Card',
        Price: 350,
        TotalPrice: 400,
        Discount: 15
      },
      {
        Image: 'assets/products/image6.jpg',
        ProductName: 'Amazone Dual Bluetooth Speaker',
        Price: 250,
        TotalPrice: 300,
        Discount: 25
      },
      {
        Image: 'assets/products/image7.jpg',
        ProductName: 'Cooking Pan Set 6 sets',
        Price: 245,
        Discount: 2
      },
      {
        Image: 'assets/products/image8.jpg',
        ProductName: 'Nikon 50x30 mm Camera (Only Body)',
        Price: 500,
        TotalPrice: 650,
        Discount: 30
      },
    ];
  }

}
