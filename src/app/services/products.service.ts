import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../pages/products/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  createProduct(product: Product){
    return this.http.post('http://localhost:3000/products', product);

  }


}
