import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellsService {

  constructor(private http: HttpClient) { }

  createSale(price: number, pay: number, client: string, products: {id:number, quantity: number}[]) {
    return this.http.post('http://localhost:3000/sales', {price, pay, client, products});
  }
}
