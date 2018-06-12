import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './product.service';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {

  products: WarehouseSectorProductsView[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data.payload;
    });
  }
}
