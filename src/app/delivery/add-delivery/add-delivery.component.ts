import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryService} from '../delivery.service';
import {Product} from '../../models/Product.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: []
})

export class AddDeliveryComponent implements OnInit {

  products: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private deliveryService: DeliveryService) {
  }

  ngOnInit() {

  }

  addProductToDelivery(form: NgForm): void {
    console.log(form.value.name);
    const product = new Product(
      form.value.name,
      form.value.price,
      form.value.category,
      form.value.productionDate,
      form.value.description,
      form.value.code,
      form.value.quantity);
    this.deliveryService.addProductToTemplate(product).subscribe(data => {
        if (Boolean(data.ok).valueOf()) {
          this.products.push(product);
        } else {
          alert('Nie poprawny product');
        }
        console.log(data.ok);
    });
  }

  createDelivery(): void {
    if (this.products.length > 0) {
      this.deliveryService.performDelivery()
        .subscribe(data => {
          this.router.navigate(['deliveries']);
          alert('Dostawa została stworzona');
        });
    }
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(item => item !== product);
  }

  hasProducts(): boolean {
    if (this.products.length > 0) {
      return true;
    }
    return false;
  }
}

