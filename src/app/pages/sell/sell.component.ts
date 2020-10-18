import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { MatPaginator } from '@angular/material/paginator';
import { CartService } from 'src/app/services/cart.service';
import { Subscription, Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit, OnDestroy {
  products$: Subscription;
  products: Product[];
  displayedColumns: any[] = ['name', 'priceOut', 'inventory', 'actions'];
  dataSource: MatTableDataSource<Product>;
  
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts().subscribe(
      (products: any[]) => {
      console.log(products);
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
      this.disccountCartProducts();
    });
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add2Cart(product: Product) {
    console.log('Producto añadido al carrito');
    console.log({...product});
    if(product.inventory>0) {
      product.inventory--;
      this.cartService.addProduct(product);
      console.log(product);
    }
  }

  disccountCartProducts() {
    console.log('CarProducts');
    
    const cartItems = this.cartService.getItems();
    console.log(cartItems);

    cartItems.forEach((item: Item) => {
      let indexProduct = this.products.findIndex(product => product.id === item.product.id);
      this.products[indexProduct].inventory = this.products[indexProduct].inventory - item.quantity;
    });
    
  }

}
