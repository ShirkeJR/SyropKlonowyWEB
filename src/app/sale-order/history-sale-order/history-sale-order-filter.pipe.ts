import { Pipe, PipeTransform } from '@angular/core';
import {SaleOrder} from '../../models/SaleOrder.model';
import {SaleOrderStatus} from '../../models/SaleOrderStatus.model';

@Pipe({
  name: 'filter11'
})

export class HistorySaleOrderFilterPipe implements PipeTransform {
  transform(items: SaleOrder[], searchText: string): any[] {
    console.log(searchText);
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.clientId.toString().toLowerCase().includes(searchText) ||
        SaleOrderStatus[it.saleOrderStatus].toString().toLowerCase().includes(searchText) ||
        it.totalPrice.toString().includes(searchText) ||
        it.id.toString().toLowerCase().includes(searchText) ||
        it.dateOfOrder.toString().toLowerCase().includes(searchText);
    });
  }
}
