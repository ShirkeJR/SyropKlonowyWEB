import { Pipe, PipeTransform } from '@angular/core';
import {WarehouseSectorProductsView} from '../../models/WarehouseSectorProductsView.model';

@Pipe({
  name: 'filter5'
})

export class ProductsInWarehouseFilterComponent implements PipeTransform {
  transform(items: WarehouseSectorProductsView[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
        it.productId.toString().includes(searchText) ||
        it.price.toString().includes(searchText) ||
        it.quantity.toString().includes(searchText) ||
        it.category.toLowerCase().includes(searchText);
    });
  }
}
