import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryService} from '../delivery.service';
import {NgForm} from '@angular/forms';
import {ProductWithQuantityView} from '../../models/ProductWithQuantityView.model';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: []
})

export class AddDeliveryComponent implements OnInit {

  products: ProductWithQuantityView[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.getProductsFromTemplate();
  }

  getProductsFromTemplate() {
    this.deliveryService.getCurrentTemplate().subscribe( data => {
      this.products = data.payload[0].listOfProducts;
    });
  }

  addProductToDelivery(form: NgForm): void {
    console.log(form.value.name);
    const product = new ProductWithQuantityView(
      form.value.name,
      form.value.price,
      form.value.category,
      form.value.productionDate,
      form.value.description,
      form.value.code,
      form.value.quantity);
    this.deliveryService.addProductToTemplate(product).subscribe(data => {
        if (!Boolean(data.ok).valueOf()) {
          alert('Nie poprawny product');
        }
        console.log(data.ok);
    });
    setTimeout( () => {
      this.getProductsFromTemplate();
    }, 100 );
  }

  createDelivery(): void {
    if (this.products.length > 0) {
      this.deliveryService.confirmDelivery()
        .subscribe(data => {
          this.router.navigate(['deliveries']);
          alert('Dostawa została stworzona');
        });
    }
  }

  deleteProduct(product: ProductWithQuantityView): void {
    this.deliveryService.removeProduct(product.name, product.quantity).subscribe( data => {
      console.log(data);
    });
    setTimeout( () => {
      this.getProductsFromTemplate();
    }, 100 );
  }

  hasProducts(): boolean {
    return this.products.length > 0;
  }
}

