import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SaleOrder} from '../models/SaleOrder.model';
import {SaleOrderService} from './sale-order.service';


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
        }
      });
      this.fetchAllSaleOrders();
    }
  }

  sendSale(saleOrder: SaleOrder) {
    if (saleOrder.saleOrderStatus === 'PAID') {
      this.saleOrderService.sendOrderById(saleOrder.id).subscribe(data => {
        if (data.ok) {
          alert('Wysłano zamówienie');
        }
      });
      this.fetchAllSaleOrders();
    }
  }

  fetchAllSaleOrders() {
    setTimeout(() => {
      this.saleOrderService.getAllBySaleOrderStatus('NEW').subscribe(data1 => {
        console.log(data1);
        setTimeout(() => {
          this.saleOrderService.getAllBySaleOrderStatus('PAID').subscribe(data2 => {
            console.log(data2);
            this.saleOrders = [].concat(data1.payload, data2.payload);
          });
        }, 100);
      });
    }, 100);
  }

  isItNew(saleOrder: SaleOrder) {
    return saleOrder.saleOrderStatus === 'NEW';
  }

  isItPaid(saleOrder: SaleOrder) {
    return saleOrder.saleOrderStatus === 'PAID';
  }
}
