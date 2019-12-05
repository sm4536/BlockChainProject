import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  shippingCosts;
  totalCost;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { 
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      number: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    console.warn('Item You Purchased', this.items);
    console.log('hi');

    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    // clear data base 
    //save 1 record 
    this.cartService.createOrder(this.items)
    this.router.navigate(['/orders'])


  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingCosts = this.cartService.getShippingPrices();
    
  }
  
  
  
}