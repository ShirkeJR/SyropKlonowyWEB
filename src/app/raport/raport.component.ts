import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RaportService} from './raport.service';
import {ProductService} from '../product/product.service';


@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: []
})
export class RaportComponent implements OnInit {

  dataFrom: string;
  toData: string;


  constructor(private router: Router, private raportService: RaportService, private productService: ProductService) {
  }

  ngOnInit() {

  }
}
