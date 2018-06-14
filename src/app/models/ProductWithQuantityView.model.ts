export class ProductWithQuantityView {

  id: string;
  name: string;
  price: string;
  category: string;
  productionDate: string;
  description: string;
  quantity: string;


  constructor(name: string, price: string, category: string, productionDate: string, description: string, quantity: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.productionDate = productionDate;
    this.description = description;
    this.quantity = quantity;
  }
}
