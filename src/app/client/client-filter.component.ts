import { Pipe, PipeTransform } from '@angular/core';
import {Client} from '../models/Client.model';

@Pipe({
  name: 'filter7'
})

export class ClientFilterComponent implements PipeTransform {
  transform(items: Client[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) ||
       it.id.toString().includes(searchText) ||
       it.company.toLowerCase().includes(searchText) ||
       it.enterpriseType.toLowerCase().includes(searchText) ||
       it.deliveryAddress.city.toLowerCase().includes(searchText) ||
       it.deliveryAddress.buildingNumber.toString().includes(searchText) ||
       it.deliveryAddress.zipCode.toString().includes(searchText) ||
       it.deliveryAddress.street.toLowerCase().includes(searchText);
    });
  }
}
