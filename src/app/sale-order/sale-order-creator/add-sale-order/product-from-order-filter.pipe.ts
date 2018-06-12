import { Pipe, PipeTransform } from '@angular/core';
import {ProductWithQuantityView} from '../../../models/ProductWithQuantityView.model';

@Pipe({
  name: 'filter3'
})

export class ProductFromOrderFilterPipe implements PipeTransform {
  transform(items: ProductWithQuantityView[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
        it.description.toLowerCase().includes(searchText) ||
        it.category.toLowerCase().includes(searchText);
    });
  }
}
