import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductViewModel } from '../viewmodels/product.viewmodel';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <ul>
      <li *ngFor="let product of productsArray">{{ product.title }}</li>
    </ul>
    
    <h2>One Product</h2>
    <ul>
      <li>{{ productsOneArray?.title }}</li>
    </ul>
    
    <h2>Search Product List</h2>
    <ul>
      <li *ngFor="let product of productsSearchArray">{{ product.title }}</li>
    </ul>
  `,
})
export class ProductListComponent implements OnInit {
  productsArray!: any;
  productsOneArray: Product | undefined;
  productsSearchArray!: any;

  constructor(private productViewModel: ProductViewModel) {}

  ngOnInit(): void {
    this.productViewModel.getProducts().subscribe((data) => {
        this.productsArray = Object.values(data)[0];
    });

    this.productViewModel.getProductById(1).subscribe((data) => {
        this.productsOneArray = data;
        console.log(this.productsOneArray)
    });
    
    this.productViewModel.searchProducts("iphone").subscribe((data) => {
        this.productsSearchArray = Object.values(data)[0];;
        console.log(this.productsSearchArray)
    });
  }
}
