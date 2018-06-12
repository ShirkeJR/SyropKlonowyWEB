import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SaleOrder} from '../models/SaleOrder.model';
import {SaleOrderService} from './sale-order.service';


@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: []
})
export class SaleOrderComponent implements OnInit {

  saleOrders: SaleOrder[];

  constructor(private router: Router, private saleOrderService: SaleOrderService) { }

  ngOnInit() {
    this.fetchAllSaleOrders();
  }

  payForSale(saleOrder: SaleOrder) {
    if(saleOrder.saleOrderStatus === 'NEW'){
      this.saleOrderService.payOrderById(saleOrder.id).subscribe( data => {
        console.log(data);
      });
      this.fetchAllSaleOrders();
    }
  }

  sendSale(saleOrder: SaleOrder) {
    if(saleOrder.saleOrderStatus === 'PAID'){
      this.saleOrderService.sendOrderById(saleOrder.id).subscribe( data => {
        console.log(data);
      });
      this.fetchAllSaleOrders();
    }
  }

  fetchAllSaleOrders() {
    setTimeout( () => {
      this.saleOrderService.getAllBySaleOrderStatus('NEW').subscribe(data => {
        console.log(data);
        this.saleOrders = data.payload;
      });
    }, 180);
    setTimeout( () => {
      this.saleOrderService.getAllBySaleOrderStatus('PAID').subscribe(data => {
        console.log(data);
        this.saleOrders = this.saleOrders.concat(data.payload);
      });
    }, 180 );
  }

  isItNew(saleOrder: SaleOrder){
    return saleOrder.saleOrderStatus === 'NEW';
  }

  isItPaid(saleOrder: SaleOrder){
    return saleOrder.saleOrderStatus === 'PAID';
  }
}
