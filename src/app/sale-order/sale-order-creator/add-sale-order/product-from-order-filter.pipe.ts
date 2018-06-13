import { Pipe, PipeTransform } from '@angular/core';
import {ProductWithQuantityView} from '../../../models/ProductWithQuantityView.model';
import {WarehouseSectorProductsView} from '../../../models/WarehouseSectorProductsView.model';

@Pipe({
  name: 'filter3'
})

export class ProductFromOrderFilterPipe implements PipeTransform {
  transform(items: WarehouseSectorProductsView[], searchText: string): any[] {
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
