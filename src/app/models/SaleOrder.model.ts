import {AmountOfProduct} from './AmountOfProduct.model';

export class SaleOrder {
  id: string;
  clientId: string;
  dateOfOrder: string;
  amountsOfProducts: AmountOfProduct[];
  totalPrice: string;
  saleOrderStatus: string;


  constructor(id: string, clientId: string, dateOfOrder: string, amountsOfProducts: Array<AmountOfProduct>, totalPrice: string, saleOrderStatus: string) {
    this.id = id;
    this.clientId = clientId;
    this.dateOfOrder = dateOfOrder;
    this.amountsOfProducts = amountsOfProducts;
    this.totalPrice = totalPrice;
    this.saleOrderStatus = saleOrderStatus;
  }
}
