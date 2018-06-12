import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';
import {ProductWithQuantityView} from '../models/ProductWithQuantityView.model';

@Injectable()
export class ProductService {

  public constructor(private http: HttpClient) {}

  private productUrl = 'http://localhost:8080/api/product/product/';

  public getAll(): Observable<Response<WarehouseSectorProductsView>> {
    return this.http.get<Response<WarehouseSectorProductsView>>(this.productUrl + 'getAll');
  }

  public getById(id: string): Observable<Response<ProductWithQuantityView>> {
    console.log(id);
    return this.http.get<Response<ProductWithQuantityView>>(this.productUrl + 'getById?id=' + id);
  }

  public getByName(name: string): Observable<Response<ProductWithQuantityView>> {
    return this.http.get<Response<ProductWithQuantityView>>(this.productUrl + 'getByName?' + name);
  }
}
