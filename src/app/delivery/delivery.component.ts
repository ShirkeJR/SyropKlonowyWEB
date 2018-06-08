import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Delivery} from '../models/Delivery.model';
import {DeliveryService} from './delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: []
})
export class DeliveryComponent implements OnInit {

  deliveries: Delivery[];

  constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getAllByDeliveryStatusOrDeliveryStatus('NEW', 'IN_PROCESS').subscribe(data => {
      console.log(data);
      this.deliveries = data.payload;
    });
  }


}
