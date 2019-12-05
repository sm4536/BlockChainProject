import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
items;
  constructor(
    private cartService: CartService
  ) { 
    this.items = this.cartService.getItems();

  }

  ngOnInit() {
  }

}
