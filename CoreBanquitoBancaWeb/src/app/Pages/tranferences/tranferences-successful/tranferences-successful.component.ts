import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { DataSharingService } from '../../../services/accountDetails.service';

@Component({
  selector: 'app-tranferences-successful',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTreeModule
  ],
  templateUrl: './tranferences-successful.component.html',
  styleUrl: './tranferences-successful.component.css'
})
export class TranferencesSuccessfulComponent {
  fechaActual: string;

  constructor(private router: Router, private dataSharingService: DataSharingService) {
    const hoy = new Date();
    this.fechaActual = `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
  }


  number = '';
  userName = '';
  currentBalance = '';
  beneficiario = '';
  monto = '';
  cuenta = '';

  ngOnInit(): void {
    this.number = this.dataSharingService.getAccountNumber();
    this.currentBalance = this.dataSharingService.getAccountBalance();
    this.beneficiario = this.dataSharingService.getTransferenciaData().beneficiario;
    this.monto = this.dataSharingService.getTransferenciaData().monto;
    this.cuenta = this.dataSharingService.getTransferenciaData().cuenta;
  }




}

