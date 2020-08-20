import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Inventory',
      path: '/inventory'
    },
    {
      name: 'Sales',
      path: '/sales'
    },
    {
      name: 'Sell',
      path: '/sell'
    },
    {
      name: 'Products',
      path: '/products'
    },
  ]

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
