import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WarehouseSectorService } from '../shared/warehouse-sector/warehouse-sector.service';
import { WarehouseSector } from '../models/WarehouseSector.model';

@Component({
  selector: 'app-warehouse-sector',
  templateUrl: './warehouse-sector.component.html',
  styleUrls: []
})
export class WarehouseSectorComponent implements OnInit {

  warehouseSectors: WarehouseSector[];

  constructor(private router: Router, private warehouseSectorService: WarehouseSectorService) { }

  ngOnInit() {
    this.warehouseSectorService.getAll().subscribe(data => {
        this.warehouseSectors = data.payload;
      });
  }
}
