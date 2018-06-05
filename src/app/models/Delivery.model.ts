import {ProductWithQuantity} from './ProductWithQuantity.model';

export class Delivery {

  id: string;
  deliveryDate: string;
  listOfProducts: Array<ProductWithQuantity>;
  deliveryStatus: string;
}
