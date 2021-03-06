import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ], exports: [
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
