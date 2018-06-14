import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SaleOrderService} from '../../sale-order.service';
import {ProductService} from '../../../product/product.service';
import {WarehouseSectorProductsView} from '../../../models/WarehouseSectorProductsView.model';
import {AmountOfProduct} from '../../../models/AmountOfProduct.model';
import {SaleOrder} from '../../../models/SaleOrder.model';
import {ClientService} from '../../../client/client.service';
import {Client} from '../../../models/Client.model';

@Component({
  selector: 'app-add-sale-order',
  templateUrl: './add-sale-order.component.html',
  styleUrls: []
})

export class AddSaleOrderComponent implements OnInit {

  saleOrder: SaleOrder;
  productsFromWarehouse: WarehouseSectorProductsView[];
  products: AmountOfProduct[] = [];
  clientId: string;
  client: Client;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleOrderService: SaleOrderService,
              private productService: ProductService,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params['id'];
    });
    this.productService.getAll().subscribe(data => {
      this.productsFromWarehouse = data.payload;
    });
    setTimeout(() => {
      this.clientService.getById(this.clientId).subscribe(data => {
        this.client = data.payload[0];
      });
    }, 100);
    setTimeout(() => {
      this.saleOrderService.getTemporaryOrderByClientId(this.clientId).subscribe(data => {
        if (data.ok) {
          this.saleOrder = data.payload[0];
          this.products = data.payload[0].amountsOfProducts;
        } else {
          this.saleOrder = new SaleOrder('0 PLN');
        }
      });
    }, 100);
  }

  addProductToSaleOrder(product: WarehouseSectorProductsView, amount: string): void {
    this.saleOrderService.addProductToOrder(this.clientId, product.productId, amount)
      .subscribe(data => {
        if (!data.ok) {
          alert('UWAGA!!! Brak takiej ilości produktu');
        }
      });
    setTimeout(() => {
      this.saleOrderService.getTemporaryOrderByClientId(this.clientId).subscribe(data => {
        this.saleOrder = data.payload[0];
        this.products = data.payload[0].amountsOfProducts;
      });
    }, 100);
  }

  createSaleOrder(): void {
    if (this.hasProducts()) {
      this.saleOrderService.confirmClientOrder(this.clientId).subscribe(data => {
        console.log(data);
        alert('Zamówienie zostało utworzone');
        this.router.navigate(['saleOrders']);
      });
    }
  }


  deleteProduct(product: AmountOfProduct): void {
    console.log(this.clientId);
    this.saleOrderService.removeProduct(this.clientId, product.productId, product.quantity).subscribe(data => {
      console.log(data);
    });
    setTimeout(() => {
      this.saleOrderService.getTemporaryOrderByClientId(this.clientId).subscribe(data => {
        this.saleOrder = data.payload[0];
        this.products = data.payload[0].amountsOfProducts;
      });
    }, 100);
  }

  hasProducts(): boolean {
    return this.products.length > 0;
  }
}

