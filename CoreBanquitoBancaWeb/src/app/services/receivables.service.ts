import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceivablesService {
  private companyURL: string = 'http://localhost:8080/company/search';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(this.companyURL);
  }
  
}