import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/Product.model';
import {SaleOrderService} from '../../sale-order.service';
import {ProductService} from '../../../product/product.service';

@Component({
  selector: 'app-add-sale-order',
  templateUrl: './add-sale-order.component.html',
  styleUrls: []
})

export class AddSaleOrderComponent implements OnInit {

  productsFromWarehouse: Product[];
  products: Product[] = [];
  clientId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleOrderService: SaleOrderService,
              private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params['id'];
    });
    this.productService.getAll().subscribe(data => {
      this.productsFromWarehouse = data.payload;
    });
  }

  addProductToSaleOrder(product: Product, amount: string): void {
    if ( parseInt(amount, 0) <= 1) {
      alert('Nie podano ilości');
    } else {
      this.saleOrderService.addProductToOrder(this.clientId, product.id, amount)
        .subscribe( data => {
          alert('Product został dodany do zamówienia');
          const p = new Product(product.name, product.price, '', '', '', '', amount);
          this.products.push(p);
        });
    }
  }

  createSaleOrder(): void {
    if (this.hasProducts()) {
      this.saleOrderService.confirmClientOrder(this.clientId).subscribe( data => {
        console.log(data);
        alert('Zamówienie zostało utworzone');
        this.router.navigate(['saleOrders']);
      });
    }
  }


  hasProducts(): boolean {
    return this.products.length > 0;
  }
}

