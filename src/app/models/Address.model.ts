export class Address {

  id: string;
  street: string;
  buildingNumber: string;
  city: string;
  zipCode: string;

  public constructor(street: string, buildingNumber: string, city: string, zipCode: string) {
    this.street = street;
    this.buildingNumber = buildingNumber;
    this.city = city;
    this.zipCode = zipCode;
  }
}
