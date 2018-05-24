import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../models/Response.model';

@Injectable()
export class WarehouseSectorService {

  public constructor(private http: HttpClient) {}

  private warehouseSectorUrl = 'http://localhost:8080/api/warehouseSector/warehouseSector/';

  public getAll(): Observable<any> {
    return this.http.get(this.warehouseSectorUrl + 'getAll');
  }

  public save(name: string, maxAmountOfProducts: string): Observable<any> {
    console.log(name);
    return this.http.put(this.warehouseSectorUrl + 'addWarehouseSector?' +
      'name=' + name +
      '&maxAmountOfProducts=' + maxAmountOfProducts, null);
  }

  public getById(id: string): Observable<Response> {
    console.log(id);
    return this.http.get<Response>(this.warehouseSectorUrl + 'getById?id=' + id);
  }

  public getByName(name: string) {
    return this.http.get(this.warehouseSectorUrl + 'getByName?' + name);
  }
}
