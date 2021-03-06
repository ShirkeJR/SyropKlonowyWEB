import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response.model';
import {SaleOrder} from '../models/SaleOrder.model';



@Injectable()
export class SaleOrderService {

  private saleOrderUrl = 'http://localhost:8080/api/sale_order/';

  public constructor(private http: HttpClient) {}

  public getAll(): Observable<Response<SaleOrder>> {
    return this.http.get<Response<SaleOrder>>(this.saleOrderUrl + 'getAllOrders');
  }

  public getById(id: string): Observable<Response<SaleOrder>> {
    return this.http.get<Response<SaleOrder>>(this.saleOrderUrl + 'getOrderById?' +
      'orderId=' + id);
  }

  public getAllBySaleOrderStatus(status: String): Observable<Response<SaleOrder>> {
    return this.http.get<Response<SaleOrder>>(this.saleOrderUrl + 'getAllOrdersBySaleOrderStatus?' +
      'status=' + status);
  }

  public addProductToOrder(clientId: string, productId: string, quantity: string): Observable<Response<SaleOrder>> {
    return this.http.put<Response<SaleOrder>>(this.saleOrderUrl + 'addProductToOrder?' +
      'clientId=' + clientId +
      '&productId=' + productId +
      '&quantity=' + quantity, null);
  }

  public confirmClientOrder(clientId: string): Observable<Response<SaleOrder>> {
    return this.http.put<Response<SaleOrder>>(this.saleOrderUrl + 'confirmClientOrder?' +
    'clientId=' + clientId, null);
  }

  public getTemporaryOrderByClientId(clientId: string): Observable<Response<SaleOrder>> {
    return this.http.get<Response<SaleOrder>>(this.saleOrderUrl + 'getTemporaryOrderByClientId?' +
      'clientId=' + clientId);
  }

  public removeProduct(clientId: string, productId: string, quantity: string): Observable<Response<SaleOrder>> {
    return this.http.get<Response<SaleOrder>>(this.saleOrderUrl + 'removeProductFromTemporaryOrder?' +
      'clientId=' + clientId +
      '&productId=' + productId +
      '&quantity=' + quantity);
  }

  public payOrderById(orderId: string): Observable<Response<SaleOrder>> {
    return this.http.put<Response<SaleOrder>>(this.saleOrderUrl + 'payOrderById?' +
      'orderId=' + orderId, null);
  }

  public sendOrderById(orderId: string): Observable<Response<SaleOrder>> {
    return this.http.put<Response<SaleOrder>>(this.saleOrderUrl + 'sendOrderById?' +
      'orderId=' + orderId, null);
  }

}
