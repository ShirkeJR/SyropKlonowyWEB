import { Pipe, PipeTransform } from '@angular/core';
import {ProductWithQuantityToSaleOrder} from '../../../models/ProductWithQuantityToSaleOrder.model';

@Pipe({
  name: 'filter3'
})

export class ProductFromOrderFilterPipe implements PipeTransform {
  transform(items: ProductWithQuantityToSaleOrder[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
        it.productId.toString().includes(searchText) ||
        it.price.toString().includes(searchText) ||
        it.description.toLowerCase().includes(searchText) ||
        it.category.toLowerCase().includes(searchText);
    });
  }
}
