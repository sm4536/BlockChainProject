import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import {ProductService} from '../product.service';
import {ProductCatalog} from '../product-catalog';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products=products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService : ProductService
    
    ) {   
       
      }
     

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
  this.product = products[+params.get('productId')];
  });
  //this.productService.getProducts().subscribe(resp => {
   //console.log(resp);
    //this.product = products[+params.get('productId')];
  //});
  
}

  share() {
    window.alert('The product has been shared!');
  }

  

  addToCart(product) {
  window.alert('Your product has been added to the cart!');
  this.cartService.addToCart(product);
  
  }
}
