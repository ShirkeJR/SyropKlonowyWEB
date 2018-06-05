import {AmountOfProduct} from './AmountOfProduct.model';

export class WarehouseSector {

  id: string;
  name: string;
  maxAmountOfProducts: string;
  notReservedAmountOfProducts: AmountOfProduct[];
  reservedAmountOfProducts: AmountOfProduct[];
  currentAmountOfProducts: string;
}
