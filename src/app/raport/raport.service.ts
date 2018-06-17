import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response.model';
import {SaleReportView} from '../models/SaleReportView.model';


@Injectable()
export class RaportService {

  public constructor(private http: HttpClient) {
  }

  private raportURL = 'http://localhost:8080/api/marketing/product/';

  public showSalesReportForPeriod(startDate: string, endDate: string): Observable<Response<SaleReportView>> {
    return this.http.get<Response<SaleReportView>>(this.raportURL + 'showSalesReportForPeriod?' +
      'startDate=' + startDate.replace('/', '%2F') +
      '&endDate=' + endDate.replace('/', '%2F'));
  }
}
