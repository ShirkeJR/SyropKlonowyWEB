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
    this.saleOrderService.getAllBySaleOrderStatusOrSaleOrderStatus('NEW', 'PAID').subscribe(data => {
      console.log(data);
      this.saleOrders = data.payload;
    });
  }


}
