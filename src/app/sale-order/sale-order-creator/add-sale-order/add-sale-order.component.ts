import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SaleOrderService} from '../../sale-order.service';
import {ProductService} from '../../../product/product.service';
import {WarehouseSectorProductsView} from '../../../models/WarehouseSectorProductsView.model';
import {AmountOfProduct} from '../../../models/AmountOfProduct.model';
import {SaleOrder} from '../../../models/SaleOrder.model';
import {ClientService} from '../../../client/client.service';
import {Client} from '../../../models/Client.model';
import {ProductWithQuantityToSaleOrder} from '../../../models/ProductWithQuantityToSaleOrder.model';
import {ProductWithQuantityView} from '../../../models/ProductWithQuantityView.model';

@Component({
  selector: 'app-add-sale-order',
  templateUrl: './add-sale-order.component.html',
  styleUrls: []
})

export class AddSaleOrderComponent implements OnInit {

  saleOrder: SaleOrder;
  productsFromWarehouse: ProductWithQuantityToSaleOrder[];
  products: ProductWithQuantityView[] = [];
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
    this.productService.getAllNonReservedAmountsOfProducts().subscribe(data1 => {
      this.productsFromWarehouse = data1.payload;
      this.clientService.getById(this.clientId).subscribe(data2 => {
        this.client = data2.payload[0];
        this.getTemporaryOrderByClientId();
      });
    });
  }

  addProductToSaleOrder(product: WarehouseSectorProductsView, amount: string): void {
    this.saleOrderService.addProductToOrder(this.clientId, product.productId, amount)
      .subscribe(data => {
        if (!data.ok) {
          alert('UWAGA!!! Brak takiej ilości produktu');
        } else {
          this.getTemporaryOrderByClientId();
        }
      });
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

  getTemporaryOrderByClientId() {
    this.saleOrderService.getTemporaryOrderByClientId(this.clientId).subscribe(data => {
      if (data.ok) {
        this.saleOrder = data.payload[0];
        this.products = [];
        data.payload[0].amountsOfProducts.forEach(item => {
          this.getProducts(item);
        });
      } else {
        this.saleOrder = new SaleOrder('', this.client.id, '', [], '0 PLN', '');
      }
    });
  }

  deleteProduct(product: ProductWithQuantityView, amount: string): void {
    console.log(this.clientId);
    this.saleOrderService.removeProduct(this.clientId, product.id, amount).subscribe(data => {
      if (!data.ok) {
        alert('Zła liczba produktów do usunięcia');
      } else {
        console.log(data);
        this.getTemporaryOrderByClientId();
      }

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

  hasProducts(): boolean {
    return this.products.length > 0;
  }
}

