import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.model';
import {WarehouseSector} from '../models/WarehouseSector.model';
import {WarehouseSectorProductsView} from '../models/WarehouseSectorProductsView.model';

@Injectable()
export class WarehouseSectorService {

  public constructor(private http: HttpClient) {}

  private warehouseSectorUrl = 'http://localhost:8080/api/warehouseSector/warehouseSector/';

  public getAll(): Observable<Response<WarehouseSector>> {
    return this.http.get<Response<WarehouseSector>>(this.warehouseSectorUrl + 'getAll');
  }

  public save(name: string, maxAmountOfProducts: string): Observable<any> {
    return this.http.put(this.warehouseSectorUrl + 'addWarehouseSector?' +
      'name=' + name +
      '&maxAmountOfProducts=' + maxAmountOfProducts, null);
  }

  public getById(id: string): Observable<Response<WarehouseSector>> {
    return this.http.get<Response<WarehouseSector>>(this.warehouseSectorUrl + 'getById?' +
      'id=' + id);
  }

  public getAllProductsOnSector(id: string): Observable<Response<WarehouseSectorProductsView>>{
    return this.http.get<Response<WarehouseSectorProductsView>>(this.warehouseSectorUrl + 'getAllProductsOnSector?' +
    'sectorId=' + id);
  }

  public getByName(name: string): Observable<Response<WarehouseSector>> {
    return this.http.get<Response<WarehouseSector>>(this.warehouseSectorUrl + 'getByName?' +
      'name=' + name);
  }
}
