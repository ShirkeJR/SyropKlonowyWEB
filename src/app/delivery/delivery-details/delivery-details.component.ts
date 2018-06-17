import {Component, OnInit} from '@angular/core';
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
    this.route.params.subscribe(params => {
      this.deliveryId = params['id'];
      console.log(this.deliveryId);
      const status = params['status'];
      console.log(status);
      if (status === 'NEW') {
        this.deliveryService.startDelivery(this.deliveryId).subscribe((data: Response<DeliveryInProcessView>) => console.log(data));
      }
    });
    this.fetchData();
  }

  fetchData() {
    this.warehouseSectorService.getAll().subscribe(data1 => {
      this.warehouseSectors = data1.payload;
      this.deliveryService.getProcessedDeliveryById(this.deliveryId).subscribe(data2 => {
        this.deliveryInProgress = data2.payload[0];
      });
    });
  }

  placeProduct(id: string, amount: string, sectorId: string) {
    this.deliveryService.placeProduct(this.deliveryId, id, amount, sectorId)
      .subscribe((data1: Response<DeliveryInProcessView>) => {
        if (!data1.ok) {
          alert('UWAGA!!! Brak tyle produktu, lub magazyn jest pełny');
        } else {
          alert('Przeniesiono produkty na magazyn');
          this.warehouseSectorService.getAll().subscribe(data2 => {
            this.warehouseSectors = data2.payload;
          });
          this.deliveryService.getProcessedDeliveryById(this.deliveryId)
            .subscribe((data3: Response<DeliveryInProcessView>) => {
              console.log(data3.payload.length);
              if (data3.payload[0] === null) {
                alert('Dostawa rozłożona');
                this.router.navigate(['deliveries']);
              } else {
                this.deliveryInProgress = data3.payload[0];
              }
            });
        }
      });
  }
}

