import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ReceivablesService {
  private COMPANY_URL: string = environment.coreCobrosReceivablesApiUrl + '/company/search';
  private ORDER_URL: string = environment.coreCobrosReceivablesApiUrl + '/order-items';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(this.COMPANY_URL);
  }

  getOrdersItems(counterpart: string, companyId: string): Observable<any> {
    const url = `${this.ORDER_URL}/search?counterpart=${counterpart}&companyId=${companyId}`;
    return this.http.get(url);
  }




  
}