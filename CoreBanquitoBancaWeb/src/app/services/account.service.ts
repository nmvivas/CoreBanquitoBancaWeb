import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private ACCOUNT_URL = environment.coreAccountsApiUrl + '/accounts/client-id/';

  constructor(private http: HttpClient) { }

  getAccountDetails(clientId: string): Observable<any> {
    return this.http.get(`${this.ACCOUNT_URL}${clientId}`);
  }
}