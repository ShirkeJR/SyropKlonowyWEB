import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Delivery} from '../models/Delivery.model';
import {DeliveryService} from './delivery.service';
import {Response} from '../models/Response.model';
import {DeliveryInProcessView} from '../models/DeliveryInProcessView.model';
import {DeliveryStatus} from '../models/DeliveryStatus.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: []
})
export class DeliveryComponent implements OnInit {

  deliveries: Delivery[] = [];

  constructor(private router: Router, private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.deliveryService.getAllByDeliveryStatus('NEW').subscribe(data1 => {
      console.log(data1);
        this.deliveryService.getAllByDeliveryStatus('IN_PROCESS').subscribe(data2 => {
          console.log(data2);
          this.deliveries = [].concat(data1.payload, data2.payload);
        });
    });
  }

  getDeliveryStatus(status: string) {
    return DeliveryStatus[status];
  }
}
