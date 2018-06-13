import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Client} from '../../models/Client.model';
import {ProductWithQuantityView} from '../../models/ProductWithQuantityView.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit {

  productId: string;
  product: ProductWithQuantityView;


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      this.productService.getById(this.productId).subscribe(data => {
        console.log(data);
        this.product = data.payload[0];
      });
    });
  }
}
