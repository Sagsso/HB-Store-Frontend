import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/modules/material/material/material.module';



@NgModule({
  declarations: [
    InventoryComponent,
    SalesComponent,
    SellComponent,
    HomeComponent,
  ],
  exports: [
    InventoryComponent,
    SalesComponent,
    SellComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    // MaterialModule
  ]
})
export class PagesModule { }
