import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  createOrder(items){
    console.log('helo')
    //console.log(this.http.get("http://10.165.0.221:3000/orders"));
    //this.http.post("http://10.165.0.221:3000/", JSON.stringify(this.items));
  }
}