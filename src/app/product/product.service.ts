import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {Product} from '../models/Product.model';

@Injectable()
export class ProductService {

  public constructor(private http: HttpClient) {}

  private productUrl = 'http://localhost:8080/api/product/product/';

  public getAll(): Observable<Response<Product>> {
    return this.http.get<Response<Product>>(this.productUrl + 'getAll');
  }

  public getById(id: string): Observable<Response<Product>> {
    console.log(id);
    return this.http.get<Response<Product>>(this.productUrl + 'getById?id=' + id);
  }

  public getByName(name: string): Observable<Response<Product>> {
    return this.http.get<Response<Product>>(this.productUrl + 'getByName?' + name);
  }
}
