import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/modules/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesListComponent } from './components/sales-list/sales-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SalesListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
