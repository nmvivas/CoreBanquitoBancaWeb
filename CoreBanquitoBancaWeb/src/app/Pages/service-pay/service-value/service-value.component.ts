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
import { SharedDataService } from '../../../services/payDetails.service';

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
  idCompany: any = {};
  contrapartida = '';
  deuda = '';
  dueDate = '';
  debtorName = '';
  identificacion = '';
  
  private debounceTimer?: number;

  onContrapartidaChange(value: string): void {
    this.contrapartida = value;
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = window.setTimeout(() => {
      this.fetchDebtorData();
    }, 200); // Ajusta el tiempo de espera según sea necesario
  }


  constructor(private sharedDataService: SharedDataService, private router: Router, private companyShareService: CompanyShareService, private dataSharingService: DataSharingService, private receivablesService: ReceivablesService) {
  }
  ngOnInit() {
    this.companyShareService.currentCompany.subscribe(company => {
      this.company = company?.companyName;
      this.idCompany = company?.id;
      console.log(this.company);
      console.log(this.idCompany);
    });
    this.number = this.dataSharingService.getAccountNumber();
    this.currentBalance = this.dataSharingService.getAccountBalance();
  }

  fetchDebtorData() {
    this.receivablesService.getOrdersItems(this.contrapartida, this.idCompany).subscribe(data => {
      if (data && data.length > 0) {
        console.log(data);
        this.deuda = data[0].owedAmount;
        this.dueDate = data[0].dueDate;
        this.debtorName = data[0].debtorName;
        this.identificacion = data[0].identification;

       // Almacenar los datos necesarios en el servicio compartido
       this.sharedDataService.setSharedData({
        companyName: this.company,
        contrapartida: this.contrapartida,
        debtorName: this.debtorName,
        identificacion: this.identificacion,
        dueDate: this.dueDate,
        deuda: this.deuda,
      });
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
