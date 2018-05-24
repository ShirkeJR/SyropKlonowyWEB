export class AmountOfProduct {

  id: string;
  productId: string;
  quantity: string;

  public AmountOfProduct(id: string, productId: string, quantity: string) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
  }
}
