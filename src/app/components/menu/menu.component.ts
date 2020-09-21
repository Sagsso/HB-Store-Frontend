import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'Inicio',
      path: '/home'
    },
    {
      name: 'Ventas',
      path: '/sales'
    },
    {
      name: 'Vender',
      path: '/sell'
    },
    {
      name: 'Inventario',
      path: '/products'
    },
  ]

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  ngOnInit(): void {
  }

}
