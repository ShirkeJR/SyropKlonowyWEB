import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductWithQuantityView} from '../../models/ProductWithQuantityView.model';
import {Category} from '../../models/Category.model';
import {DataView} from '../../models/DataView.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit {

  productId: string;
  product: ProductWithQuantityView;
  frequentlyBoughtTogether: string[] = [];


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      this.productService.getById(this.productId).subscribe(data => {
        if (!data.ok) {
          alert('Brak takiego clienta');
        }
        console.log(data);
        this.product = data.payload[0];
        this.showFrequentlyBoughtTogether();
      });
    });
  }

  getCategory(category: string) {
    return Category[category];
  }

  showFrequentlyBoughtTogether() {
    return this.productService.showFrequentlyBoughtTogether(this.productId).subscribe(data => {
      if (!data.ok) {
        this.frequentlyBoughtTogether.push('brak');
      } else {
        data.payload[0].data.forEach(item => {
          this.getProducts(item.value1, item.value2);
        });
        if (data.payload[0].data.length === 0) {
          this.frequentlyBoughtTogether.push('brak');
        }
      }
    });
  }

  public getProducts(id: string, quantity: string) {
    this.productService.getById(id).subscribe(data => {
      const product = data.payload[0];
      product.quantity = quantity;
      this.frequentlyBoughtTogether.push(product.name + '(' + product.quantity + ')');
    });
  }
}
