import {AmountOfProduct} from './AmountOfProduct.model';

export class WarehouseSector {

  id: string;
  name: string;
  maxAmountOfProducts: string;
  notReservedAmountOfProducts: Map<any, any>;
  reservedAmountOfProducts: Map<any, any>;

  public WarehouseSector(id: string, name: string,
                         maxAmountOfProducts: string,
                         notReservedAmountOfProducts: Map<any, any>,
                         reservedAmountOfProducts: Map<any, any>) {
    this.id = id;
    this.name = name;
    this.maxAmountOfProducts = maxAmountOfProducts;
    this.notReservedAmountOfProducts = notReservedAmountOfProducts;
    this.reservedAmountOfProducts = reservedAmountOfProducts;
  }
}
