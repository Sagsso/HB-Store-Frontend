import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: Product;
  @Output() clickProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickProduct.emit(this.product.id);
  }

}
