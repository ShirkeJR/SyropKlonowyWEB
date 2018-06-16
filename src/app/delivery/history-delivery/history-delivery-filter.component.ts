import { Pipe, PipeTransform } from '@angular/core';
import {Delivery} from '../../models/Delivery.model';
import {DeliveryStatus} from '../../models/DeliveryStatus.model';

@Pipe({
  name: 'filter6'
})

export class HistoryDeliveryFilterComponent implements PipeTransform {
  transform(items: Delivery[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return DeliveryStatus[it.deliveryStatus].toLowerCase().includes(searchText) ||
       it.deliveryDate.toString().includes(searchText) ||
       it.id.toString().includes(searchText);
    });
  }
}
