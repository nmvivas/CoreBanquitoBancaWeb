import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { CompanyShareService } from '../../services/companyDetails.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-service-pay',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule,
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule, 
    MatTreeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './service-pay.component.html',
  styleUrl: './service-pay.component.css'
})
export class ServicePayComponent implements OnInit  {
  myControl = new FormControl<number | null>(null);
  companies: Company[] = [];
  filteredCompanies: any;
  
  constructor(private router: Router, private companyService: CompanyService,private companyShareService: CompanyShareService){
  }

  redirectToNext = () => {
    this.router.navigate(['service-value']);
  }

  redirectToCancel = () => {
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.companyService.getAll().subscribe(data => {
      this.companies = data; // Asumiendo que `getAll()` retorna un Observable<Company[]>
    });
  
    this.myControl.valueChanges.subscribe(id => {
      const selectedCompany = this.companies.find(company => company.id === id);
      if (selectedCompany) {
        this.companyShareService.changeCompany(selectedCompany);
      }
    });
  }

  displayFn(company: Company): string {
    return company?.companyName ?? "";
  }

  private _filter(name: string): Company[] {
    const filterValue = name.toLowerCase();
    return this.companies.filter(option => option?.companyName?.toLowerCase().includes(filterValue));
  }
}

