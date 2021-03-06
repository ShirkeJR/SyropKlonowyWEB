import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {Delivery} from '../models/Delivery.model';
import {DeliveryInProcessView} from '../models/DeliveryInProcessView.model';
import {ProductWithQuantityView} from '../models/ProductWithQuantityView.model';

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

  public getDeliveryWithId(id: string): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryUrl + 'getDeliveryWithId?' +
      'id=' + id);
  }

  public confirmDelivery(): Observable<Response<Delivery>> {
    return this.http.put<Response<Delivery>>(this.deliveryUrl + 'confirmDelivery?', null);
  }

  public addProductToTemplate(product: ProductWithQuantityView): Observable<Response<Delivery>> {
    console.log(product);
    return this.http.put<Response<Delivery>>(this.deliveryUrl + 'addProductToTemplate?' +
    'name=' + product.name +
    '&price=' + product.price +
    '&category=' + product.category +
    '&productionDate=' + product.productionDate.replace('/', '%2F') +
    '&description=' + product.description +
    '&quantity=' + product.quantity, null);
  }

  public placeProduct(deliveryId: string, productId: string, amount: string, sectorId: string): Observable<Response<DeliveryInProcessView>> {
    return this.http.put<Response<DeliveryInProcessView>>(this.deliveryHandleUrl + 'placeProduct?' +
      'deliveryId=' + deliveryId +
      '&productId=' + productId +
      '&amount=' + amount +
      '&sectorId=' + sectorId, null);
  }

  public removeProduct(name: string, quantity: string): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryUrl + 'removeProductFromCurrentTemplate?' +
      'productName=' + name +
      '&quantity=' + quantity);
  }

  public getCurrentTemplate(): Observable<Response<Delivery>> {
    return this.http.get<Response<Delivery>>(this.deliveryUrl + 'getCurrentTemplate');
  }
}
