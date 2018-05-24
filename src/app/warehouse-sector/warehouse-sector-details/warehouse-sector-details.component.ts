import { Component, OnInit } from '@angular/core';
import {WarehouseSector} from '../../models/WarehouseSector.model';
import {Response} from '../../models/Response.model';
import {WarehouseSectorService} from '../../shared/warehouse-sector/warehouse-sector.service';
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
      if (id) {
        this.warehouseSectorService.getById(id).subscribe((data: Response) => {
          console.log(data);
          if (data.payload) {
            console.log(data.payload + '1');
            this.warehouseSector = data.payload[0].map(WarehouseSector);
            console.log(this.warehouseSector + '2');
          } else {
            console.log(`WarehouseSector with id '${id}' not found, returning to list`);
            this.gotoList();
          }
      });
    }});
  }



  gotoList() {
    this.router.navigate(['/warehouseSectors']);
  }
}
