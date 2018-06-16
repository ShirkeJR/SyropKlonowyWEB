import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryService} from '../delivery.service';
import {NgForm} from '@angular/forms';
import {ProductWithQuantityView} from '../../models/ProductWithQuantityView.model';
import {Category} from '../../models/Category.model';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: []
})

export class AddDeliveryComponent implements OnInit {

  products: ProductWithQuantityView[] = [];
  categories: string[] = ['Telewizor', 'PC', 'Laptop', 'Sprzęt audio', 'Głośnik', 'Telefon'];

  constructor(private route: ActivatedRoute, private router: Router, private deliveryService: DeliveryService) {
  }

  ngOnInit() {
    this.getProductsFromTemplate();
  }

  getProductsFromTemplate() {
    this.deliveryService.getCurrentTemplate().subscribe(data => {
      this.products = data.payload[0].listOfProducts;
    });
  }

  addProductToDelivery(form: NgForm): void {
    this.getTrueCategory(form.value.category);
    const product = new ProductWithQuantityView(
      form.value.name,
      form.value.price,
      this.getTrueCategory(form.value.category),
      form.value.productionDate,
      form.value.description,
      form.value.quantity);
    this.deliveryService.addProductToTemplate(product).subscribe(data => {
      if (!Boolean(data.ok).valueOf()) {
        alert('Nie poprawny product');
      }
      console.log(data.ok);
      this.getProductsFromTemplate();
    });
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

  deleteProduct(product: ProductWithQuantityView, quantity: string): void {
    this.deliveryService.removeProduct(product.name, quantity).subscribe(data => {
      console.log(data);
      if (!data.ok) {
        alert('Zła ilość do usunięcia');
      } else {
        this.getProductsFromTemplate();
      }
    });
  }

  hasProducts(): boolean {
    return this.products.length > 0;
  }

  getCategory(category: string) {
    return Category[category];
  }

  getTrueCategory(category: string) {
    switch (category) {
      case 'Sprzęt audio':
        return 'AUDIO';
      case 'Telewizor':
        return 'TV';
      case 'Telefon':
        return 'PHONE';
      case 'Laptop':
        return 'COMPUTER_LAPTOP';
      case 'PC':
        return 'COMPUTER_PC';
      case 'Głośnik':
        return 'SPEAKER';
      default:
        return 'unknown';
    }
  }
}


