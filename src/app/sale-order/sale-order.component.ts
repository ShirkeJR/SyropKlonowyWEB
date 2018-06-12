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
    this.saleOrderService.getAllBySaleOrderStatus('NEW').subscribe(data => {
      console.log(data);
      this.saleOrders = data.payload;
    });
    setTimeout( () => {
      this.saleOrderService.getAllBySaleOrderStatus('PAID').subscribe(data => {
        console.log(data);
        this.saleOrders = this.saleOrders.concat(data.payload);
      });
    }, 100 );
  }


}
