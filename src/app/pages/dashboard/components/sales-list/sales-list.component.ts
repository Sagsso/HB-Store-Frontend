import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sale } from 'src/app/models/sale.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  sales: Sale[];
  sales$: Subscription;

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
  }

  loadSalesData() {
    this.sales$ = this.salesService.getSalesByDay().subscribe((sales: Sale[]) => {
      this.sales = sales;
      console.log(sales);
      //TODO send date as input from dashboard component
    })
  }

}
