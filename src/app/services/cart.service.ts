import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  private cart = new BehaviorSubject<Item[]>([]);

  cart$ = this.cart.asObservable();
  constructor() { }

  addProduct(product: Product) {
    const itemExisted: Item = this.items.find(item => item.product.id === product.id);

    if(itemExisted) {
      itemExisted.quantity++;
    } else {
      this.items = [...this.items, {product, quantity: 1}];
    }
    this.cart.next(this.items);
  }

  resetCart() {
    this.items = [];
    this.cart.next(this.items);
  }

  getItems() {
    return this.items;
  }
}
