import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceivablesService {
  private COMPANY_URL: string = environment.coreCobrosReceivablesApiUrl + '/company/search';
  private ORDER_URL: string = environment.coreCobrosReceivablesApiUrl + '/orders';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(this.COMPANY_URL);
  }
  
}