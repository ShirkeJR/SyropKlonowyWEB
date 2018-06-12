import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {Client} from '../models/Client.model';


@Injectable()
export class ClientService {

  public constructor(private http: HttpClient) {}

  private clientUrl = 'http://localhost:8080/api/client/client/';
  private clientMarketingUrl = 'http://localhost:8080/api/marketing/client/';

  public getAll(): Observable<Response<Client>> {
    return this.http.get<Response<Client>>(this.clientUrl + 'getAll');
  }

  public getById(id: string): Observable<Response<Client>> {
    return this.http.get<Response<Client>>(this.clientUrl + 'getClientWithId?' +
      'id=' + id);
  }

  public createClient(client: Client): Observable<Response<Client>> {
    return this.http.put<Response<Client>>(this.clientUrl + 'addClient?' +
      'name=' + client.name +
      '&company=' + client.company +
      '&street=' + client.deliveryAddress.street +
      '&buildingNumber=' + client.deliveryAddress.buildingNumber +
      '&city=' + client.deliveryAddress.city +
      '&zipCode=' + client.deliveryAddress.zipCode +
      '&enterpriseType=' + client.enterpriseType, null);
  }
}
