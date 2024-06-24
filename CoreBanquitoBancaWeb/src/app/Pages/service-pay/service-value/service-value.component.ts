import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { CompanyShareService } from '../../../services/companyDetails.service';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../../../services/accountDetails.service';
import { ReceivablesService } from '../../../services/receivables.service';

@Component({
  selector: 'app-service-value',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatTreeModule],
  templateUrl: './service-value.component.html',
  styleUrl: './service-value.component.css'
})



export class ServiceValueComponent {

  number = '';
  currentBalance = '';
  company: any = {};
  contrapartida = '';
  deuda = '';

  constructor(private router: Router, private companyShareService: CompanyShareService, private dataSharingService: DataSharingService, private receivablesService: ReceivablesService) {
  }
  ngOnInit() {
    this.companyShareService.currentCompany.subscribe(company => {
      this.company = company?.companyName;
      console.log(this.company);
    });
    this.number = this.dataSharingService.getAccountNumber();
    this.currentBalance = this.dataSharingService.getAccountBalance();
  }

  fetchDebtorData() {
    const companyId = '14'; 
    this.receivablesService.getOrdersItems(this.contrapartida, companyId).subscribe(data => {
      if (data && data.length > 0) {
        console.log(data);
        this.deuda = data[0].owedAmount;
        console.log(this.deuda);
      }
    });
  }

  redirectToNext = () => {
    this.router.navigate(['service-check']);

  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);

  }

}
