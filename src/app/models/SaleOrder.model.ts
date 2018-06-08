import {AmountOfProduct} from './AmountOfProduct.model';

export class SaleOrder {
  id: string;
  clientId: string;
  dateOfOrder: string;
  amountsOfProducts: AmountOfProduct[];
  totalPrice: string;
  saleOrderStatus: string;
}
