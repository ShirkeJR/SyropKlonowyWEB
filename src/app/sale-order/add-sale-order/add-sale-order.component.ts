import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/Product.model';
import {NgForm} from '@angular/forms';
import {SaleOrderService} from '../sale-order.service';
import {ProductService} from '../../product/product.service';
import {Response} from '../../models/Response.model';
import {DeliveryInProcessView} from '../../models/DeliveryInProcessView.model';

@Component({
  selector: 'app-add-sale-order',
  templateUrl: './add-sale-order.component.html',
  styleUrls: []
})

export class AddSaleOrderComponent implements OnInit {

  productsFromWarehouse: Product[];
  products: Product[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleOrderService: SaleOrderService,
              private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.productsFromWarehouse = data.payload;
    });
  }

  addProductToSaleOrder(product: Product, amount: string): void {
    this.saleOrderService.addProductToOrder('34', product.id, amount)
      .subscribe( data => {
        alert('Product został dodany do zamówienia');
      });
    this.products.push(product);
  }

  createSaleOrder(): void {

  }


  hasProducts(): boolean {
    return this.products.length > 0;
  }
}

