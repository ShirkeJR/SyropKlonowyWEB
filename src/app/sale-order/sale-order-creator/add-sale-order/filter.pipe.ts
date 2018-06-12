import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../../models/Product.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Product[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
        it.productionDate.toLowerCase().includes(searchText) ||
        it.code.toLowerCase().includes(searchText) ||
        it.description.toLowerCase().includes(searchText) ||
        it.category.toLowerCase().includes(searchText);
    });
  }
}
