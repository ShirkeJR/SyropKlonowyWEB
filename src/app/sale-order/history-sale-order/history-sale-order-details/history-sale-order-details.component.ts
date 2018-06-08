import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '../../../models/Response.model';
import {SaleOrder} from '../../../models/SaleOrder.model';
import {SaleOrderService} from '../../sale-order.service';

@Component({
  selector: 'app-history-sale-order-details',
  templateUrl: './history-sale-order-details.component.html',
  styleUrls: []
})

export class HistorySaleOrderDetailsComponent implements OnInit {

  saleOrder: SaleOrder;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private saleOrderService: SaleOrderService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.saleOrderService.getById(id)
        .subscribe((data: Response<SaleOrder>) => {
          this.saleOrder = data.payload[0];
        });
    });
  }


}

