import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderDetails} from './order-details'
let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  'Cache-Control': 'no-cache'
}); 
let options = {
  headers: httpHeaders
}; 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getOrderDetails():Observable<HttpResponse<OrderDetails[]>>{
    return this.httpClient.get<OrderDetails[]>("http://10.165.0.221:3000/orders", {observe:'response'})
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }

  createOrder(orderdetails : OrderDetails){
    console.log('create orders');
    console.log(orderdetails);

    this.httpClient.post("http://10.165.0.221:3000/orders", orderdetails, options);
  }
}