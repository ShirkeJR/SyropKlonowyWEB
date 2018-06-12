import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Delivery} from '../models/Delivery.model';
import {DeliveryService} from './delivery.service';
import {Response} from '../models/Response.model';
import {DeliveryInProcessView} from '../models/DeliveryInProcessView.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: []
})
export class DeliveryComponent implements OnInit {

  deliveries: Delivery[];

  constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getAllByDeliveryStatus('NEW').subscribe(data => {
      console.log(data);
      this.deliveries = data.payload;
    });
    setTimeout( () => {
      this.deliveryService.getAllByDeliveryStatus('IN_PROCESS').subscribe(data => {
        console.log(data);
        this.deliveries = this.deliveries.concat(data.payload);
      });
    }, 100 );
  }


}
