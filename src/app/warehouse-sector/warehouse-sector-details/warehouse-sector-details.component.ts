import { Component, OnInit } from '@angular/core';
import {WarehouseSector} from '../../models/WarehouseSector.model';
import {Response} from '../../models/Response.model';
import {WarehouseSectorService} from '../warehouse-sector.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-warehouse-sector-details',
  templateUrl: './warehouse-sector-details.component.html',
  styleUrls: []
})

export class WarehouseSectorDetailsComponent implements OnInit {

  warehouseSector: WarehouseSector;

  constructor(private route: ActivatedRoute, private router: Router, private warehouseSectorService: WarehouseSectorService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.warehouseSectorService.getById(id).subscribe((data: Response<WarehouseSector>) => {
        this.warehouseSector = data.payload[0];
      });
    });
  }
}

