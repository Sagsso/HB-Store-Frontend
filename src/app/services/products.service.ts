import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../pages/products/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProduct(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  updateProduct(id: number, newProperties) {
    return this.http.put(`http://localhost:3000/products/${id}`, newProperties);
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);

  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }


}
