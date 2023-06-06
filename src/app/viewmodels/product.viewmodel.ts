import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductViewModel {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }

  getProductById(id: number): Observable<Product> {
    const url = `https://dummyjson.com/products/${id}`;
    return this.http.get<Product>(url);
  }

  searchProducts(query: string): Observable<Product[]> {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    return this.http.get<Product[]>(url);
  }
}
