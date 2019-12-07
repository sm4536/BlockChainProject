import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import {ProductCatalog} from './product-catalog';
import {Observable} from 'rxjs';
const httpOptions = {
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any =[];
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<HttpResponse<ProductCatalog[]>>{
    return this.httpClient.get<ProductCatalog[]>('http://localhost:3000/products', {observe:'response'});

  }
}
