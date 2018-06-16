import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {Client} from '../../models/Client.model';
import {DataView} from '../../models/DataView.model';
import {ProductService} from '../../product/product.service';
import {ProductWithQuantityView} from '../../models/ProductWithQuantityView.model';
import {AmountOfProduct} from '../../models/AmountOfProduct.model';
import {EnterpriseType} from '../../models/EnterpriseType.model';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: []
})
export class ClientDetailsComponent implements OnInit {

  clientId: string;
  client: Client;
  averagePrice: DataView;
  maxPrice: DataView;
  mostCommonlyPurchasedProducts: string[] = [];
  priceRange: DataView;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params['id'];
      console.log(this.clientId);
      this.clientService.getById(this.clientId).subscribe(data => {
        this.client = data.payload[0];
        this.showAveragePrice();
        this.showMaxPrice();
        this.showMostCommonlyPurchasedProducts();
        this.showPriceRange();
      });
    });
  }

  showAveragePrice() {
    this.clientService.showAveragePrice(this.clientId).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.averagePrice = new DataView('0');
      } else {
        this.averagePrice = data.payload[0];
        this.averagePrice.data[0].value2 = parseFloat(this.averagePrice.data[0].value2.split(' ')[0]).toFixed(2).toString() + ' PLN';
      }
    });
  }

  showMaxPrice() {
    this.clientService.showMaxPrice(this.clientId).subscribe(data => {
      if (!data.ok) {
        this.maxPrice = new DataView('0');
      } else {
        this.maxPrice = data.payload[0];
      }
    });
  }

  showMostCommonlyPurchasedProducts() {
    this.clientService.showMostCommonlyPurchasedProducts(this.clientId).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.mostCommonlyPurchasedProducts.push('brak');
      } else {
        data.payload[0].data.forEach(item => {
          this.getProducts(item.value1, item.value2);
        });
        if (data.payload[0].data.length === 0) {
          this.mostCommonlyPurchasedProducts.push('brak');
        }
      }
    });
  }

  public getProducts(id: string, quantity: string) {
    this.productService.getById(id).subscribe(data => {
      const product = data.payload[0];
      product.quantity = quantity;
      this.mostCommonlyPurchasedProducts.push(product.name + ' x ' + product.quantity);
    });
  }

  showPriceRange() {
    this.clientService.showPriceRange(this.clientId).subscribe(data => {
      if (!data.ok) {
        this.priceRange = new DataView('0');
      } else {
        this.priceRange = data.payload[0];
      }
    });
  }

  getEnterpriseType(enterprise: string) {
    return EnterpriseType[enterprise];
  }
}
