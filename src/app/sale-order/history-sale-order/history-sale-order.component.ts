import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SaleOrder} from '../../models/SaleOrder.model';
import {SaleOrderService} from '../sale-order.service';



@Component({
  selector: 'app-history-sale-order',
  templateUrl: './history-sale-order.component.html',
  styleUrls: []
})
export class HistorySaleOrderComponent implements OnInit {

  saleOrders: SaleOrder[];

  constructor(private router: Router, private saleOrderService: SaleOrderService) { }

  ngOnInit() {
    this.saleOrderService.getAll().subscribe(data => {
      this.saleOrders = data.payload;
    });
  }


}
