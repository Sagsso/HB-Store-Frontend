import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './product/product.model';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Subscription;
  products: Product[];
  displayedColumns: any[] = ['name','priceOut', 'inventory','actions'];
  dataSource: MatTableDataSource<Product>;

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts().subscribe(
      (products: any[]) => {
      console.log(products);
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;

    });
    // console.log(this.products);
  }

  listenClick(id: number) {
    console.log("Click en: ", id);  
  }

  deleteProduct(product: Product){
    console.log(product);
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }


}
