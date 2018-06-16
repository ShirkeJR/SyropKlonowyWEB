import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SaleOrder} from '../models/SaleOrder.model';
import {SaleOrderService} from './sale-order.service';
import {DeliveryStatus} from '../models/DeliveryStatus.model';
import {SaleOrderStatus} from '../models/SaleOrderStatus.model';


@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: []
})
export class SaleOrderComponent implements OnInit {

  saleOrders: SaleOrder[];

  constructor(private router: Router, private saleOrderService: SaleOrderService) {
  }

  ngOnInit() {
    this.fetchAllSaleOrders();
  }

  payForSale(saleOrder: SaleOrder) {
    if (saleOrder.saleOrderStatus === 'NEW') {
      this.saleOrderService.payOrderById(saleOrder.id).subscribe(data => {
        if (data.ok) {
          alert('Zapłacono za zamówienie');
          this.fetchAllSaleOrders();
        }
      });
    }
  }

  sendSale(saleOrder: SaleOrder) {
    if (saleOrder.saleOrderStatus === 'PAID') {
      this.saleOrderService.sendOrderById(saleOrder.id).subscribe(data => {
        if (data.ok) {
          alert('Wysłano zamówienie');
          this.fetchAllSaleOrders();
        }
      });
    }
  }

  fetchAllSaleOrders() {
    this.saleOrderService.getAllBySaleOrderStatus('NEW').subscribe(data1 => {
      console.log(data1);
      this.saleOrderService.getAllBySaleOrderStatus('PAID').subscribe(data2 => {
        console.log(data2);
        this.saleOrders = [].concat(data1.payload, data2.payload);
      });
    });
  }

  isItNew(saleOrder: SaleOrder) {
    return saleOrder.saleOrderStatus === 'NEW';
  }

  isItPaid(saleOrder: SaleOrder) {
    return saleOrder.saleOrderStatus === 'PAID';
  }

  getSaleOrderStatus(status: string) {
    return SaleOrderStatus[status];
  }
}
