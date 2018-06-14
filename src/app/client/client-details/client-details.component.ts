import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {Client} from '../../models/Client.model';
import {ProductService} from '../../product/product.service';
import {forEach} from '@angular/router/src/utils/collection';


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
  mostCommonlyPurchasedProducts: DataView;
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
        console.log(data);
        this.client = data.payload[0];
        console.log(this.client);
      });
    });
    setTimeout(() => {
      this.showAveragePrice();
    }, 100);
    setTimeout(() => {
      this.showMaxPrice();
    }, 100);
    setTimeout(() => {
      this.showMostCommonlyPurchasedProducts();
    }, 100);
    setTimeout(() => {
      this.showPriceRange();
    }, 100);
  }

  showAveragePrice() {
    this.clientService.showAveragePrice(this.clientId).subscribe(data => {
      console.log(data);
      this.averagePrice = data.payload[0];
    });
  }

  showMaxPrice() {
    this.clientService.showMaxPrice(this.clientId).subscribe(data => {
      console.log(data);
      this.maxPrice = data.payload[0];
    });
  }

  showMostCommonlyPurchasedProducts() {
    this.clientService.showMostCommonlyPurchasedProducts(this.clientId).subscribe(data => {
      console.log(data);
      this.mostCommonlyPurchasedProducts = data.payload[0];
    });
  }

  showPriceRange() {
    this.clientService.showPriceRange(this.clientId).subscribe(data => {
      console.log(data);
      this.priceRange = data.payload[0];
    });
  }
}
