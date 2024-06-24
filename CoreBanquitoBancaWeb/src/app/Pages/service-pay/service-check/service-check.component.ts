import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';
import { SharedDataService } from '../../../services/payDetails.service';

@Component({
  selector: 'app-service-check',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTreeModule
  ],
  templateUrl: './service-check.component.html',
  styleUrl: './service-check.component.css'
})
export class ServiceCheckComponent {
  company: any = {};
  contrapartida = '';
  deuda = '';
  deudor = '';
  identificacion = '';
  dueDate = '';
  total: number = 0;
  comision: number = 0;
  iva: number = 0;
  
  


  calcularTotal(deuda: number): void { // Cambio de 'number' a 'void' ya que actualizaremos la propiedad directamente
    this.comision = 0.40;
    this.iva = 1.15;
    this.total = (deuda + this.comision) * this.iva;
  }





  constructor(private router: Router, private sharedDataService: SharedDataService) {
    this.company = this.sharedDataService.getSharedData().company;
    this.contrapartida = this.sharedDataService.getSharedData().contrapartida;
    this.deuda = this.sharedDataService.getSharedData().deuda;
    this.deudor = this.sharedDataService.getSharedData().debtorName;
    this.identificacion = this.sharedDataService.getSharedData().identificacion;
    this.dueDate = this.sharedDataService.getSharedData().dueDate;

  }




  redirectToNext = () => {
    this.router.navigate(['service-successful']);

  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);

  }

}