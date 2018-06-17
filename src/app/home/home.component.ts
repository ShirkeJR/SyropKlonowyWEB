import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from './home.service';
import {PriceView} from '../models/PriceView.model';
import {NumberView} from '../models/NumberView.model';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  date: Date = new Date();
  dateNow: string = this.date.getDate() + '%2F' + this.date.getMonth() + '%2F' + this.date.getFullYear();
  incomeFromOrders: PriceView;
  numberOfProductsSoldSince: NumberView;
  clientsActiveSince: NumberView;
  amountOfSectors: NumberView;
  numbersOfOrdersMadeSince: NumberView;
  numberOfHandledDeliveriesSince: NumberView;
  mostFrequentlyBoughtThisWeek: string[] = [];
  enterPriseShop: string[] = [];
  enterPrisePrivate: string[] = [];
  enterPriseSmall: string[] = [];
  enterPriseLarge: string[] = [];
  enterPriseWholeSale: string[] = [];

  constructor(private router: Router, private homeService: HomeService, private productService: ProductService) {
  }

  ngOnInit() {
    this.getTotalIncomeFromOrdersSince();
    this.getNumberOfProductsSoldSince();
    this.getClientsActiveSince();
    this.getAmountOfSectors();
    this.getNumbersOfOrdersMadeSince();
    this.getNumberOfHandledDeliveriesSince();
    this.showMostFrequentlyBoughtThisWeek();
    this.showMostFrequentlyBoughtThisWeekByEnterprise('LARGE_ENTERPRISE');
    this.showMostFrequentlyBoughtThisWeekByEnterprise('SMALL_ENTERPRISE');
    this.showMostFrequentlyBoughtThisWeekByEnterprise('SHOP');
    this.showMostFrequentlyBoughtThisWeekByEnterprise('PRIVATE_PERSON');
    this.showMostFrequentlyBoughtThisWeekByEnterprise('WHOLESALE');
  }

  getTotalIncomeFromOrdersSince() {
    this.homeService.getTotalIncomeFromOrdersSince(this.dateNow)
      .subscribe(data => {
        console.log(data);
        if (!data.ok) {
          this.incomeFromOrders = new PriceView('0 PLN');
        } else {
          this.incomeFromOrders = data.payload[0];
        }
      });
  }

  getNumberOfProductsSoldSince() {
    this.homeService.getNumberOfProductsSoldSince(this.dateNow)
      .subscribe(data => {
        console.log(data);
        if (!data.ok) {
          this.numberOfProductsSoldSince = new NumberView('0');
        } else {
          this.numberOfProductsSoldSince = data.payload[0];
        }
      });
  }

  getClientsActiveSince() {
    this.homeService.getClientsActiveSince(this.dateNow).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.clientsActiveSince = new NumberView('0');
      } else {
        this.clientsActiveSince = new NumberView(data.payload.length.toString());
      }
    });
  }

  getAmountOfSectors() {
    this.homeService.getAmountOfSectors().subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.amountOfSectors = new NumberView('0');
      } else {
        this.amountOfSectors = data.payload[0];
      }
    });
  }

  getNumbersOfOrdersMadeSince() {
    this.homeService.getNumbersOfOrdersMadeSince(this.dateNow).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.numbersOfOrdersMadeSince = new NumberView('0');
      } else {
        this.numbersOfOrdersMadeSince = data.payload[0];
      }
    });
  }

  getNumberOfHandledDeliveriesSince() {
    console.log(this.dateNow);
    this.homeService.getNumberOfHandledDeliveriesSince(this.dateNow).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        this.numberOfHandledDeliveriesSince = new NumberView('0');
      } else {
        this.numberOfHandledDeliveriesSince = data.payload[0];
      }
    });
  }

  showMostFrequentlyBoughtThisWeek() {
    this.productService.showMostFrequentlyBoughtThisWeek().subscribe(data => {
      if (!data.ok) {
        this.mostFrequentlyBoughtThisWeek.push('brak');
      } else {
        data.payload[0].data.forEach(item => {
          this.getProducts(item.value1, item.value2);
        });
        if (data.payload[0].data.length < 1) {
          this.mostFrequentlyBoughtThisWeek.push('brak');
        }
      }
    });
  }

  showMostFrequentlyBoughtThisWeekByEnterprise(enterpriseType: string) {
    this.productService.showMostFrequentlyBoughtThisWeekByEnterprise(enterpriseType).subscribe(data => {
      if (!data.ok) {
        this.setProductForEnterpsise('brak', enterpriseType);
      } else {
        data.payload[0].data.forEach(item => {
          this.getProductsForEntrpise(item.value1, item.value2, enterpriseType);
        });
        if (data.payload[0].data.length < 1) {
          this.setProductForEnterpsise('brak', enterpriseType);
        }
      }
    });
  }

  setProductForEnterpsise(product: string, enterpriseType: string) {
    switch (enterpriseType) {
      case 'LARGE_ENTERPRISE':
        this.enterPriseLarge.push(product);
        break;
      case 'SMALL_ENTERPRISE':
        this.enterPriseSmall.push(product);
        break;
      case 'PRIVATE_PERSON':
        this.enterPrisePrivate.push(product);
        break;
      case 'WHOLESALE':
        this.enterPriseWholeSale.push(product);
        break;
      case 'SHOP':
        this.enterPriseShop.push(product);
        break;
      default:
        break;
    }
  }

  getProductsForEntrpise(id: string, amount: string, enterPriseType: string) {
    this.productService.getById(id).subscribe(data => {
      this.setProductForEnterpsise(data.payload[0].name + '(' + amount + ')', enterPriseType);
    });
  }


  getProducts(id: string, amount: string) {
    this.productService.getById(id).subscribe(data => {
      this.mostFrequentlyBoughtThisWeek.push(data.payload[0].name + '(' + amount + ')');
    });
  }
}
