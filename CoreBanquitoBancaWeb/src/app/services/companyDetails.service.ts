// company-share.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyShareService {
  private companySource = new BehaviorSubject<Company | null>(null);
  currentCompany = this.companySource.asObservable();

  constructor() { }

  changeCompany(company: Company) {
    this.companySource.next(company);
  }
}