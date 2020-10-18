import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { SalesService } from 'src/app/services/sales.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  ammountSales: number
  ammountSales$: Subscription
  currentDate: Date;
  date: FormControl;
  constructor(
    private salesService: SalesService
  ) {
    this.currentDate = new Date();
    this.date = new FormControl(this.currentDate);
  }

  ngOnInit(): void {
    this.loadTodayData();
  }

  loadTodayData(date?: string) {
    
    this.ammountSales$ = this.salesService.getAmmountSalesDay(date).subscribe(
      result => {
        console.log(result);    
        this.ammountSales = +result;
      }
    );
  }

  selectedDateChange(event): void {
    console.log('Cambió');
    this.ammountSales$.unsubscribe();
    const dateStr = `${this.date.value.getDate()}/${this.date.value.getMonth()+1}/${this.date.value.getFullYear()}`;
    this.loadTodayData(dateStr);
    
  }

  ngOnDestroy() {
    this.ammountSales$.unsubscribe();
  }
}
