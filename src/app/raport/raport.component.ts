import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RaportService} from './raport.service';
import {ProductService} from '../product/product.service';
import {NgForm} from '@angular/forms';
import {EnterpriseType} from '../models/EnterpriseType.model';
import {DataViewValue} from '../models/DataViewValue.model';


@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: []
})
export class RaportComponent implements OnInit {

  fromDate: string;
  toDate: string;
  enterpriseWithVolumePurchased: DataViewValue[] = [];
  enterpriseWithValuePurchased: DataViewValue[] = [];
  productsRunningOutWithQuantity: string[] = [];
  purchasedProductsWithQuantity: string[] = [];

  constructor(private router: Router, private raportService: RaportService, private productService: ProductService) {
  }

  ngOnInit() {

  }


  generateRaport(form: NgForm) {
    console.log(form.value.startDate + ' ' + form.value.endDate);
    this.raportService.showSalesReportForPeriod(form.value.startDate, form.value.endDate).subscribe(data => {
      if (!data.ok) {
        alert('Błędna data');
      } else {
        console.log(data.payload[0]);
        this.fromDate = data.payload[0].fromDate;
        this.toDate = data.payload[0].toDate;
        Object.entries(data.payload[0].enterpriseWithVolumePurchased).forEach(item =>
          this.enterpriseWithVolumePurchased.push(new DataViewValue(EnterpriseType[item[0]], item[1].toString()))
        );
        Object.entries(data.payload[0].enterpriseWithValuePurchased).forEach(item =>
          this.enterpriseWithValuePurchased.push(new DataViewValue(EnterpriseType[item[0]], (parseFloat(item[1].toString()) / 100).toFixed(2).toString() + ' PLN'))
        );
        Object.entries(data.payload[0].productsRunningOutWithQuantity).forEach(item => {
          this.getProductByIdToRunning(item[0], item[1].toString());
        });
        Object.entries(data.payload[0].purchasedProductsWithQuantity).forEach(item => {
          this.getProductByIdPursched(item[0], item[1].toString());
        });
      }
    });
  }

  getProductByIdToRunning(id: string, amount: string) {
    this.productService.getById(id).subscribe(data => {
      this.productsRunningOutWithQuantity.push(data.payload[0].name + '(' +  amount + ')');
    });
  }

  getProductByIdPursched(id: string, amount: string) {
    this.productService.getById(id).subscribe(data => {
      this.purchasedProductsWithQuantity.push(data.payload[0].name + '(' + amount + ')');
    });
  }
}
