import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/pages/products/product/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../item.model';
import { reduce, map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  items$: Subscription;
  items: Item[];
  displayedColumns: any[] = ['name', 'priceOut', 'quantity', 'total'];
  total: number;


  constructor(
    private cartService: CartService
  ) {
    this.items$ = this.cartService.cart$.subscribe(
      (items: Item[]) => {
        this.items = items;
        console.log(this.items);
        if (this.items.length > 0) {
          this.total = this.calculateTotal();
          console.log(this.total);
        }

      }
    )
  }

  ngOnInit() {
  }


  calculateTotal() {

    let totales = [];
    let total = 0;

    if (this.items) {
      totales = this.items.map((item: Item) => item.product.priceOut * item.quantity);
      console.log(totales);
      total = totales.reduce((acc, curr) => acc + curr);
    }


    return total;
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }
}
