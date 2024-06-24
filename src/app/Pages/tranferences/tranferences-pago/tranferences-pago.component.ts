import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { DataSharingService } from '../../../services/accountDetails.service';


@Component({
  selector: 'app-tranferences-pago',
  standalone: true,
  imports: [RouterOutlet, 
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule, 
    MatTreeModule
  ],
  templateUrl: './tranferences-pago.component.html',
  styleUrl: './tranferences-pago.component.css'
})
export class TranferencesPagoComponent implements OnInit {

  
  constructor(private router: Router, private dataSharingService: DataSharingService){
  }

  number = '';
  currentBalance = '';
  beneficiario = '';
  monto ='';
  cuenta = '';

  ngOnInit(): void {
    this.number = this.dataSharingService.getAccountNumber();
    this.currentBalance = this.dataSharingService.getAccountBalance();
    this.beneficiario = this.dataSharingService.getTransferenciaData().beneficiario;
    this.monto = this.dataSharingService.getTransferenciaData().monto;
    this.cuenta = this.dataSharingService.getTransferenciaData().cuenta;
  }

  redirectToNext = () => {
    this.router.navigate(['tranferences-successful']);

    }
    redirectToCancel = () => {
      this.router.navigate(['tranferences']);
    
      }

  }



