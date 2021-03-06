import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService : ProductService

    ) {  }


  ngOnInit() {
  
  this.productService.getProducts().subscribe(resp => {
   console.log(resp.body);
    this.products = resp.body;
  });
}

  share() {
    window.alert('The product has been shared!');
  }


  addToCart(product) {
  window.alert('Your product has been added to the cart!');
  this.cartService.addToCart(product);
  }
}
