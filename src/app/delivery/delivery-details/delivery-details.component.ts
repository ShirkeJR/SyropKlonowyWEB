import { Component, OnInit } from '@angular/core';
import {Response} from '../../models/Response.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryService} from '../delivery.service';
import {WarehouseSector} from '../../models/WarehouseSector.model';
import {WarehouseSectorService} from '../../warehouse-sector/warehouse-sector.service';
import {DeliveryInProcessView} from '../../models/DeliveryInProcessView.model';


@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: []
})

export class DeliveryDetailsComponent implements OnInit {

  deliveryInProgress: DeliveryInProcessView;
  warehouseSectors: WarehouseSector[];
  deliveryId: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private deliveryService: DeliveryService,
              private warehouseSectorService: WarehouseSectorService) {
  }

  ngOnInit() {
    this.warehouseSectorService.getAll().subscribe(data => {
      this.warehouseSectors = data.payload;
    });
    this.route.params.subscribe(params => {
      this.deliveryId = params['id'];
      console.log(this.deliveryId);
      const status = params['status'];
      console.log(status);
      if (status === 'NEW') {
        this.deliveryService.startDelivery(this.deliveryId)
          .subscribe((data: Response<DeliveryInProcessView>) => console.log(data));
      }
    });
    setTimeout( () => {
      this.deliveryService.getProcessedDeliveryById(this.deliveryId)
        .subscribe((data: Response<DeliveryInProcessView>) => {
          this.deliveryInProgress = data.payload[0];
        });
    }, 100 );
  }

  placeProduct(id: string, amount: string, sectorId: string) {
    this.deliveryService.placeProduct(this.deliveryId, id, amount, sectorId)
      .subscribe((data: Response<DeliveryInProcessView>) => {
    });
    setTimeout( () => {
      this.warehouseSectorService.getAll().subscribe(data => {
        this.warehouseSectors = data.payload;
      });
    }, 100 );
    setTimeout( () => {
      this.deliveryService.getProcessedDeliveryById(this.deliveryId)
        .subscribe((data: Response<DeliveryInProcessView>) => {
          console.log(data.payload.length);
          if (data.payload[0] === null) {
            alert('Dostawa rozłożona');
            this.router.navigate(['deliveries']);
          } else {
            this.deliveryInProgress = data.payload[0];
          }
        });
    }, 100 );
  }



}

