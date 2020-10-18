import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createSale(price: number, pay: number, client: string, products: {id:number, quantity: number}[]) {
    return this.http.post('http://localhost:3000/sales', {price, pay, client, products});
  }

  getAmmountSalesDay(date?: string) {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const route = date ? `${this.url}/sales/ammount/day/${date}` : `${this.url}/sales/ammount/day/${day}/${month}/${year}`;
    return this.http.get(route);
  }
  getSalesByDay(date?: string) {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const route = date ? `${this.url}/sales/day/${date}` : `${this.url}/sales/day/${day}/${month}/${year}`;
    return this.http.get(route);
  }
}
