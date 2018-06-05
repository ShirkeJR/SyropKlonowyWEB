import {Address} from './Address.model';

export class Client {
  id: string;
  name: string;
  company: string;
  deliveryAddress: Address;
  enterpriseType: string;

  constructor(name: string, company: string, deliveryAddress: Address, enterpriseType) {
    this.name = name;
    this.company = company;
    this.deliveryAddress = deliveryAddress;
    this.enterpriseType = enterpriseType;
  }
}
