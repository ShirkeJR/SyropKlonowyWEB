import { Component, OnInit } from '@angular/core';
import {Response} from '../../models/Response.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Delivery} from '../../models/Delivery.model';
import {DeliveryService} from '../delivery.service';
import {ProductWithQuantity} from '../../models/ProductWithQuantity.model';
import {WarehouseSector} from '../../models/WarehouseSector.model';
import {WarehouseSectorService} from '../../warehouse-sector/warehouse-sector.service';
import {DeliveryInProcessView} from '../../models/DeliveryInProcessView.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: []
})

export class DeliveryDetailsComponent implements OnInit {

  deliveryInProgress: DeliveryInProcessView;
  warehouseSectors: WarehouseSector[];

  constructor(private route: ActivatedRoute, private router: Router,
              private deliveryService: DeliveryService,
              private warehouseSectorService: WarehouseSectorService) {
  }

  ngOnInit() {
    this.warehouseSectorService.getAll().subscribe(data => {
      this.warehouseSectors = data.payload;
    });
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      const status = params['status'];
      console.log(status);
      if (status === 'NEW') {
        this.deliveryService.startDelivery(id)
          .subscribe((data: Response<DeliveryInProcessView>) => console.log(data));
      }
      this.deliveryService.getProcessedDeliveryById(id)
        .subscribe((data: Response<DeliveryInProcessView>) => {
          this.deliveryInProgress = data.payload[0];
      });
    });
  }

  placeProduct(id: string, amount: string, sectorId: string) {
    this.deliveryService.placeProduct(this.deliveryInProgress.deliveryId, id, amount, sectorId)
      .subscribe((data: Response<DeliveryInProcessView>) => {
    });
    this.deliveryService.getProcessedDeliveryById(id)
      .subscribe((data: Response<DeliveryInProcessView>) => {
        console.log(id);
        console.log(data);
        this.deliveryInProgress = data.payload[0];
      });
  }
}

