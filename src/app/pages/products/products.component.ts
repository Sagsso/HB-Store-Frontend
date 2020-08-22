import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './product/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[];
  displayedColumns: any[] = ['name','priceOut', 'inventory'];

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: any[]) => {
      console.log(products);
      this.products = products;
      
    });
    // console.log(this.products);
  }

  listenClick(id: number) {
    console.log("Click en: ", id);  
  }



}
