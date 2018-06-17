import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../delivery.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Delivery} from '../../../models/Delivery.model';
import {Response} from '../../../models/Response.model';
import {Category} from '../../../models/Category.model';
import {DeliveryStatus} from '../../../models/DeliveryStatus.model';

@Component({
  selector: 'app-history-delivery-details',
  templateUrl: './history-delivery-details.component.html',
  styleUrls: []
})

export class HistoryDeliveryDetailsComponent implements OnInit {

  deliveryId: string;
  delivery: Delivery;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deliveryId = params['id'];
      console.log(this.deliveryId);
    });
    setTimeout( () => {
      this.deliveryService.getDeliveryWithId(this.deliveryId)
        .subscribe(data => {
          console.log(data);
          this.delivery = data.payload[0];
        });
    }, 100 );
  }

  getCategory(category: string) {
    return Category[category];
  }

  getDeliveryStatus(status: string) {
    return DeliveryStatus[status];
  }
}

