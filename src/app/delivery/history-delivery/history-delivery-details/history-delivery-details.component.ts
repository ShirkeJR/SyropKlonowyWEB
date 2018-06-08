import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../delivery.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Delivery} from '../../../models/Delivery.model';
import {Response} from '../../../models/Response.model';

@Component({
  selector: 'app-history-delivery-details',
  templateUrl: './history-delivery-details.component.html',
  styleUrls: []
})

export class HistoryDeliveryDetailsComponent implements OnInit {

  delivery: Delivery;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.deliveryService.getById(id)
        .subscribe((data: Response<Delivery>) => {
          this.delivery = data.payload[0];
        });
    });
  }

}

