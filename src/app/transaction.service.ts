import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transcations = [];
  constructor(
    private http: HttpClient
  ) { }

  gettranscations() {
    return this.transcations;
    //this.http.get("http://10.165.0.221:3000/",JSON.parse(this.transcations));
    //this.http.post("http://10.165.0.221:3000/", JSON.stringify(this.items));
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}