import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { MaterialModule } from 'src/app/modules/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SellComponent } from './sell.component';

@NgModule({
  declarations: [SellComponent],
  imports: [
    CommonModule,
    SellRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SellModule { }
