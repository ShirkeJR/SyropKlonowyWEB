import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './product.service';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';
import {Category} from '../models/Category.model';
import {ProductWithQuantityToSaleOrder} from '../models/ProductWithQuantityToSaleOrder.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {

  products: ProductWithQuantityToSaleOrder[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllNonReservedAmountsOfProducts().subscribe(data => {
      this.products = data.payload;
    });
  }

  getCategory(category: string) {
    return Category[category];
  }
}
