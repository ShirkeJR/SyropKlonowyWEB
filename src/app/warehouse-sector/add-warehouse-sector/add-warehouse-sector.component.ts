
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WarehouseSector } from '../../models/WarehouseSector.model';
import { WarehouseSectorService } from '../warehouse-sector.service';

@Component({
  templateUrl: './add-warehouse-sector.component.html',
})
export class AddWarehouseSectorComponent {

  warehouseSector: WarehouseSector = new WarehouseSector();

  constructor(private router: Router, private warehouseSectorService: WarehouseSectorService) {

  }

  createWarehouseSector(): void {
    console.log(this.warehouseSector);
    this.warehouseSectorService.save(this.warehouseSector.name, this.warehouseSector.maxAmountOfProducts)
      .subscribe(data => {
        this.router.navigate(['warehouseSectors']);
        alert('Sektor został utworzony');
      });
  }
}
