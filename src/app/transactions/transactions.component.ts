import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { CartService } from '../cart.service';
import {formatDate} from '@angular/common';
import {Md5} from "md5-typescript";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [];
  transaction;
  previousHash;
  formMessage :string = "Order created successfully";
  tmpMessage:string;
  
  
  

   constructor(   
    private cartService: CartService

  ) { 
    
  
  }
 

  ngOnInit() {
    
    console.log("hi");
    this.transaction = {
      prevHash : 0,      
      message : this.formMessage,
      hash:Md5.init(this.formMessage),
      time : formatDate(new Date(), "MM/dd/yyyy hh:mm:ss",'en')
    }
    
    this.createBlock(this.transaction);
 
  }
  

  createBlock(transaction){
    
    
    this.transactions.push(transaction);
  }

  updateTransaction(pretrans){
    
    this.transaction = {
      prevHash : pretrans.hash,      
      message : this.formMessage,
      hash:Md5.init(this.formMessage + pretrans.hash),
      time : formatDate(new Date(), "MM/dd/yyyy hh:mm:ss",'en')
    }
    this.createBlock(this.transaction)
  }

}
