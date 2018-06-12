import {ProductWithQuantityView} from './ProductWithQuantityView.model';

export class Delivery {

  deliveryDate: string;
  deliveryStatus: string;
  id: string;
  listOfProducts: ProductWithQuantityView[];
}
