import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountURL = 'http://localhost:8080/accounts/client-id/';

  constructor(private http: HttpClient) { }

  getAccountDetails(clientId: string): Observable<any> {
    return this.http.get(`${this.accountURL}${clientId}`);
  }
}