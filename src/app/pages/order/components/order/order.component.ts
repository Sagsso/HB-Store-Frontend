import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/pages/products/product/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SellsService } from 'src/app/services/sells.service';
import { Router } from '@angular/router';

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
  pay: number;
  payout: number = 0;

  payFormGroup: FormGroup;
  clientFormGroup: FormGroup;


  constructor(
    private cartService: CartService,
    private _formBuilder: FormBuilder,
    private sellsService: SellsService,
    private router: Router
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
    this.buildForms();
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

  onUpdatePay(event) {
    this.payout = this.total - event.target.value;
  }

  buildForms() {
    this.payFormGroup = this._formBuilder.group({
      payCtrl: [this.total, [Validators.required, Validators.max(this.total), Validators.min(0)]]
    });
    this.clientFormGroup = this._formBuilder.group({
      clientCtrl: ['',]
    });
  }

  formatItemsToPost() {
    return this.items.map((item: Item) => ({id: item.product.id, quantity: item.quantity}));  
  }

  finalizeSale(event: Event) {
    event.preventDefault();
    if (this.payFormGroup.valid) {
      // const product: Product = this.myForm.value;
      const pay = this.payFormGroup.value.payCtrl;
      const client = this.clientFormGroup.value.clientCtrl;
      const products = this.formatItemsToPost();
      console.log(pay, products, client);
      
      this.sellsService.createSale(this.total, pay, client, products)
        .subscribe((newSale) => {
          this.router.navigate(['./sell']);
          console.log(newSale, ' INGRESADO EN LA BD');
          this.cartService.resetCart();
        });
    }
    // console.log(this.myForm.value);

  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }
}
