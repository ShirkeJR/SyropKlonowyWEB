import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../models/Product.model';
import {ProductService} from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data.payload;
    });
  }
}
