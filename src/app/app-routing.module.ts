import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { SellComponent } from './pages/sell/sell.component';
import { DashboardComponent } from './pages/dashboard/components/dashboard/dashboard.component';

export const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) //LAZY LOADING
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) //LAZY LOADING
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/sell/sell.module').then(m => m.SellModule) //LAZY LOADING
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) //LAZY LOADING
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
