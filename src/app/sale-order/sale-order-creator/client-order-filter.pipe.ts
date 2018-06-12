import { Pipe, PipeTransform } from '@angular/core';
import {Client} from '../../models/Client.model';


@Pipe({
  name: 'filter2'
})

export class ClientOrderFilterPipe implements PipeTransform {
  transform(items: Client[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.id.toString().includes(searchText) ||
        it.name.toLowerCase().includes(searchText) ||
        it.company.toLowerCase().includes(searchText) ||
        it.deliveryAddress.street.toLowerCase().includes(searchText) ||
        it.deliveryAddress.city.toLowerCase().includes(searchText) ||
        it.deliveryAddress.buildingNumber.toLowerCase().includes(searchText) ||
        it.deliveryAddress.zipCode.toLowerCase().includes(searchText) ||
        it.enterpriseType.toLowerCase().includes(searchText);
    });
  }
}
