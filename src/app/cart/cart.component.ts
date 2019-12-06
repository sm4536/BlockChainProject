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
 orderdetails = {
    name : "",
    phoneNumber: '',
    address:'',
    email:'',
    itemName:'',
    itemPrice:''
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { 
    

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      number: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    this.orderdetails.name = customerData.name;
    this.orderdetails.email = customerData.email;
    this.orderdetails.phoneNumber = customerData.number;
    this.orderdetails.address = customerData.address;
    this.orderdetails.itemName = this.items[0].name;   
    this.orderdetails.itemPrice = this.items[0].itemPrice; 
    this.checkoutForm.reset();
    this.cartService.createOrder(this.orderdetails)
    console.log(this.orderdetails)
    this.router.navigate(['/orders'])
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingCosts = this.cartService.getShippingPrices();
   
  } 
  
}