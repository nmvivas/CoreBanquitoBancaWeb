import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
;
import { Company } from '../models/company.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private COMPANY_URL = environment.coreCobrosReceivablesApiUrl + '/company';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.COMPANY_URL);
  }
}
