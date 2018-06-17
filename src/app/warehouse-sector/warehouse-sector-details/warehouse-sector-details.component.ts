import {Component, OnInit} from '@angular/core';
import {WarehouseSectorService} from '../warehouse-sector.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WarehouseSectorProductsView} from '../../models/WarehouseSectorProductsView.model';
import {Category} from '../../models/Category.model';
import {WarehouseSector} from '../../models/WarehouseSector.model';


@Component({
  selector: 'app-warehouse-sector-details',
  templateUrl: './warehouse-sector-details.component.html',
  styleUrls: []
})

export class WarehouseSectorDetailsComponent implements OnInit {

  products: WarehouseSectorProductsView[];
  sector: WarehouseSector;
  sectorId: string;

  constructor(private route: ActivatedRoute, private router: Router, private warehouseSectorService: WarehouseSectorService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sectorId = params['id'];
      this.warehouseSectorService.getById(this.sectorId).subscribe(data => {
        if (!data.ok) {
          alert('Nie ma takiego sektora');
        } else {
          this.sector = data.payload[0];
          this.warehouseSectorService.getAllProductsOnSector(this.sectorId).subscribe(data2 => {
            this.products = data2.payload;
          });
        }
      });
    });
  }

  getCategory(category: string) {
    return Category[category];
  }
}

