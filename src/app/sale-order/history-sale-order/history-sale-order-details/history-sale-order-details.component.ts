import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '../../../models/Response.model';
import {SaleOrder} from '../../../models/SaleOrder.model';
import {SaleOrderService} from '../../sale-order.service';
import {ProductService} from '../../../product/product.service';
import {ProductWithQuantityView} from '../../../models/ProductWithQuantityView.model';
import {AmountOfProduct} from '../../../models/AmountOfProduct.model';
import {Client} from '../../../models/Client.model';
import {ClientService} from '../../../client/client.service';

@Component({
  selector: 'app-history-sale-order-details',
  templateUrl: './history-sale-order-details.component.html',
  styleUrls: []
})

export class HistorySaleOrderDetailsComponent implements OnInit {

  saleOrder: SaleOrder;
  products: ProductWithQuantityView[] = [];
  client: Client;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private saleOrderService: SaleOrderService,
              private productService: ProductService,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.saleOrderService.getById(id).subscribe((data: Response<SaleOrder>) => {
        this.saleOrder = data.payload[0];
        data.payload[0].amountsOfProducts.forEach(item => {
          this.getProducts(item);
        });
        this.clientService.getById(this.saleOrder.clientId).subscribe(data2 => {
          this.client = data2.payload[0];
        });
      });
      console.log(this.products);
    });
  }

  public getProducts(item: AmountOfProduct) {
    this.productService.getById(item.productId).subscribe(data => {
      const product = data.payload[0];
      product.quantity = item.quantity;
      this.products.push(product);
    });
  }

  getTotalPrice(priceText: string, quantityText: string) {
    priceText = priceText.split(' ')[0];
    return (parseFloat(priceText) * parseFloat(quantityText)).toFixed(2) + ' PLN';
  }
}

