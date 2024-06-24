import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { DataSharingService } from '../../services/accountDetails.service';

@Component({
  selector: 'app-tranferences',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTreeModule
  ],
  templateUrl: './tranferences.component.html',
  styleUrl: './tranferences.component.css'
})
export class TranferencesComponent implements OnInit {


  number = '';
  currentBalance = '';
  monto = '';
  beneficiario = '';
  cuenta = '';


  constructor(private dataSharingService: DataSharingService, private router: Router) { }

  ngOnInit(): void {
    this.number = this.dataSharingService.getAccountNumber();
    this.currentBalance = this.dataSharingService.getAccountBalance();
  }

  realizarTransferencia() {
    this.dataSharingService.setTransferenciaData({
      monto: this.monto,
      beneficiario: this.beneficiario,
      cuenta: this.cuenta
      
    });
    localStorage.setItem('beneficiario', this.beneficiario);
    localStorage.setItem('monto', this.monto);
    localStorage.setItem('cuenta', this.cuenta);
    this.router.navigate(['tranferences-pago']);
  }
  

  redirectToNext = () => {
  
  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);

  }




}

