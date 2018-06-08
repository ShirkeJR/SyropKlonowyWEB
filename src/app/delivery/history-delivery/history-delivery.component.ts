import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DeliveryService} from '../delivery.service';
import {Delivery} from '../../models/Delivery.model';


@Component({
  selector: 'app-history-delivery',
  templateUrl: './history-delivery.component.html',
  styleUrls: []
})
export class HistoryDeliveryComponent implements OnInit {

  deliveries: Delivery[];

  constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getAll().subscribe(data => {
      this.deliveries = data.payload;
    });
  }


}
