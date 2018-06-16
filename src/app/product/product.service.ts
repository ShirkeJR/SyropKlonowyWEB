import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response.model';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';
import {ProductWithQuantityView} from '../models/ProductWithQuantityView.model';
import {ProductWithQuantityToSaleOrder} from '../models/ProductWithQuantityToSaleOrder.model';
import {DataView} from '../models/DataView.model';

@Injectable()
export class ProductService {

  public constructor(private http: HttpClient) {
  }

  private productUrl = 'http://localhost:8080/api/product/product/';
  private productMarketingUrl = 'http://localhost:8080/api/marketing/product/';

  public getAll(): Observable<Response<WarehouseSectorProductsView>> {
    return this.http.get<Response<WarehouseSectorProductsView>>(this.productUrl + 'getAll');
  }

  public getAllNonReservedAmountsOfProducts(): Observable<Response<ProductWithQuantityToSaleOrder>> {
    return this.http.get<Response<ProductWithQuantityToSaleOrder>>(this.productUrl + 'getAllNonReservedAmountsOfProducts');
  }

  public getById(id: string): Observable<Response<ProductWithQuantityView>> {
    return this.http.get<Response<ProductWithQuantityView>>(this.productUrl + 'getById?' +
      'id=' + id);
  }

  public getByName(name: string): Observable<Response<ProductWithQuantityView>> {
    return this.http.get<Response<ProductWithQuantityView>>(this.productUrl + 'getByName?' + name);
  }

  public showFrequentlyBoughtTogether(id: string): Observable<Response<DataView>> {
    return this.http.get<Response<DataView>>(this.productMarketingUrl + 'showFrequentlyBoughtTogether?' +
      'productId=' + id);
  }
}
