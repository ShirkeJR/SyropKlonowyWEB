import { Pipe, PipeTransform } from '@angular/core';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';
import {Category} from '../models/Category.model';
import {ProductWithQuantityToSaleOrder} from '../models/ProductWithQuantityToSaleOrder.model';

@Pipe({
  name: 'filter4'
})

export class ProductFilterComponent implements PipeTransform {
  transform(items: ProductWithQuantityToSaleOrder[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
        it.productId.toString().includes(searchText) ||
        it.price.toString().includes(searchText) ||
        it.productionDate.toString().includes(searchText) ||
        it.quantity.toString().includes(searchText) ||
        it.description.toLowerCase().includes(searchText) ||
        Category[it.category].toLowerCase().includes(searchText);
    });
  }
}
