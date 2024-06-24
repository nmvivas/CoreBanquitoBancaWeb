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
  DueDate = '';


  constructor(private router: Router,private sharedDataService: SharedDataService){
    this.company = this.sharedDataService.getSharedData().company;
    this.contrapartida = this.sharedDataService.getSharedData().contrapartida;
    console.log(this.sharedDataService.getSharedData().contrapartida);

  }

  redirectToNext = () => {
  this.router.navigate(['service-successful']);

  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);
  
  }

}