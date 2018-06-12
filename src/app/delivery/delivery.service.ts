import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {Delivery} from '../models/Delivery.model';
import {Product} from '../models/Product.model';
import {DeliveryInProcessView} from '../models/DeliveryInProcessView.model';

@Injectable()
export class DeliveryService {

  public constructor(private http: HttpClient) {}

  private deliveryUrl = 'http://localhost:8080/api/delivery/delivery/';
  private deliveryHandleUrl = 'http://localhost:8080/api/deliveryHandling/deliveryHandling/';
  private date = '01%2F01%2F1000';

  public getAll(): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryUrl + 'getAllDeliveriesAfter?' +
    'date=' + this.date);
  }

  public getAllByDeliveryStatus(status: String): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryHandleUrl + 'getAllDeliveriesWithStatus?' +
      'status=' + status);
  }

  public getProcessedDeliveryById(id: string): Observable<Response<DeliveryInProcessView>> {
    return this.http.get<Response<DeliveryInProcessView>>(this.deliveryHandleUrl + 'getProcessedDelivery?' +
      'deliveryId=' + id);
  }

  public startDelivery(id: string): Observable<Response<DeliveryInProcessView>> {
    return this.http.put<Response<DeliveryInProcessView>>(this.deliveryHandleUrl + 'beginDelivery?' +
      'deliveryId=' + id, null);
  }

  public getById(id: string): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryUrl + 'getDeliveryWithId?' +
      'id=' + id);
  }

  public performDelivery(): Observable<Response<Delivery>> {
    return this.http.put<Response<Delivery>>(this.deliveryUrl + 'performDelivery', null);
  }

  public addProductToTemplate(product: Product): Observable<Response<Delivery>> {
    console.log(product);
    return this.http.put<Response<Delivery>>(this.deliveryUrl + 'addProductToTemplate?' +
    'name=' + product.name +
    '&price=' + product.price +
    '&category=' + product.category +
    '&productionDate=' + product.productionDate.replace('/', '%2F') +
    '&description=' + product.description +
    '&quantity=' + product.quantity +
    '&code=' + product.code, null);
  }

  public placeProduct(deliveryId: string, productId: string, amount: string, sectorId: string): Observable<Response<DeliveryInProcessView>> {
    return this.http.put<Response<DeliveryInProcessView>>(this.deliveryHandleUrl + 'placeProduct?' +
      'deliveryId=' + deliveryId +
      '&productId=' + productId +
      '&amount=' + amount +
      '&sectorId=' + sectorId, null);
  }

}
