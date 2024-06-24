import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {
  private COMMISION_URL: string = environment.coreCobrosCommissionApiUrl; // Asegúrate de que esta URL esté definida en tu archivo environment

  constructor(private http: HttpClient) { }

  getCommissionById(id: string): Observable<any> {
    const url = `${this.COMMISION_URL}/commissions/${id}`;
    return this.http.get(url);
  }
}