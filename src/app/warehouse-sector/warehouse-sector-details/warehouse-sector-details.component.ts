import { Component, OnInit } from '@angular/core';
import {WarehouseSectorService} from '../warehouse-sector.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WarehouseSectorProductsView} from '../../models/WarehouseSectorProductsView.model';


@Component({
  selector: 'app-warehouse-sector-details',
  templateUrl: './warehouse-sector-details.component.html',
  styleUrls: []
})

export class WarehouseSectorDetailsComponent implements OnInit {

  products: WarehouseSectorProductsView[];
  sectorId: string;
  sectorName: string;

  constructor(private route: ActivatedRoute, private router: Router, private warehouseSectorService: WarehouseSectorService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sectorId = params['id'];
      this.sectorName = params['name'];
      this.warehouseSectorService.getAllProductsOnSector(this.sectorId).subscribe(data => {
        this.products = data.payload;
      });
    });
  }
}

