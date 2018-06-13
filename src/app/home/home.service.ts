import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {PriceView} from '../models/PriceView.model';
import {NumberView} from '../models/NumberView.model';
import {Client} from '../models/Client.model';

@Injectable()
export class HomeService {

  public constructor(private http: HttpClient) {}

  private statusUrl = 'http://localhost:8080/api/status/status/';

  public getTotalIncomeFromOrdersSince(date: string): Observable<Response<PriceView>> {
    console.log(date);
    return this.http.get<Response<PriceView>>(this.statusUrl + 'getTotalIncomeFromOrdersSince?' +
    'date=' + date);
  }

  public getNumberOfProductsSoldSince(date: string): Observable<Response<NumberView>> {
    return this.http.get<Response<NumberView>>(this.statusUrl + 'getNumberOfProductsSoldSince?' +
      'date=' + date);
  }

  public getClientsActiveSince(date: string): Observable<Response<Client>> {
    return this.http.get<Response<Client>>(this.statusUrl + 'getClientsActiveSince?' +
      'date=' + date);
  }

  public getAmountOfSectors(): Observable<Response<NumberView>> {
    return this.http.get<Response<NumberView>>(this.statusUrl + 'getAmountOfSectors');
  }

  public getNumbersOfOrdersMadeSince(date: string): Observable<Response<NumberView>> {
    return this.http.get<Response<NumberView>>(this.statusUrl + 'getNumbersOfOrdersMadeSince?' +
      'date=' + date);
  }

  public getNumberOfHandledDeliveriesSince(date: string): Observable<Response<NumberView>> {
    return this.http.get<Response<NumberView>>(this.statusUrl + 'getNumberOfHandledDeliveriesSince?' +
      'date=' + date);
  }
}
