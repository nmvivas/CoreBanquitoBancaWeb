import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AuthenticationService {

  //ENDPOINT
  private loginURL = 'http://localhost:8080/login'; 


  constructor(private http: HttpClient) { }
  login(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { userName, password };

    return this.http.put(this.loginURL, body, { headers }).pipe(
      map(response => {
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      }),
      catchError(error => {
        if (error.status === 400) {
          return throwError(() => new Error('FAILED LOGIN'));
        } else {
          return throwError(() => new Error('SUCCESS LOGIN'));
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

}
