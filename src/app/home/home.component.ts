import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from './home.service';
import {PriceView} from '../models/PriceView.model';
import {NumberView} from '../models/NumberView.model';
import {Client} from '../models/Client.model';

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
  clientsActiveSince: Client[];
  amountOfSectors: NumberView;
  numbersOfOrdersMadeSince: NumberView;
  numberOfHandledDeliveriesSince: NumberView;

  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    this.getTotalIncomeFromOrdersSince();
    setTimeout(() => {
      this.getNumberOfProductsSoldSince();
    }, 100);
    setTimeout(() => {
      this.getClientsActiveSince();
    }, 100);
    setTimeout(() => {
      this.getAmountOfSectors();
    }, 100);
    setTimeout(() => {
      this.getNumbersOfOrdersMadeSince();
    }, 100);
    setTimeout(() => {
      this.getNumberOfHandledDeliveriesSince();
    }, 100);
  }

  getTotalIncomeFromOrdersSince() {
    this.homeService.getTotalIncomeFromOrdersSince(this.dateNow)
      .subscribe(data => {
        console.log(data);
        this.incomeFromOrders = data.payload[0];
      });
  }

  getNumberOfProductsSoldSince() {
    this.homeService.getNumberOfProductsSoldSince(this.dateNow)
      .subscribe(data => {
        console.log(data);
        this.numberOfProductsSoldSince = data.payload[0];
      });
  }

  getClientsActiveSince() {
    this.homeService.getClientsActiveSince(this.dateNow).subscribe(data => {
      console.log(data);
      this.clientsActiveSince = data.payload;
    });
  }

  getAmountOfSectors() {
    this.homeService.getAmountOfSectors().subscribe(data => {
      console.log(data);
      this.amountOfSectors = data.payload[0];
    });
  }

  getNumbersOfOrdersMadeSince() {
    this.homeService.getNumbersOfOrdersMadeSince(this.dateNow).subscribe(data => {
      console.log(data);
      this.numbersOfOrdersMadeSince = data.payload[0];
    });
  }

  getNumberOfHandledDeliveriesSince() {
    this.homeService.getNumberOfHandledDeliveriesSince(this.dateNow).subscribe( data => {
      console.log(data);
      this.numberOfHandledDeliveriesSince = data.payload[0];
    });
  }
}
