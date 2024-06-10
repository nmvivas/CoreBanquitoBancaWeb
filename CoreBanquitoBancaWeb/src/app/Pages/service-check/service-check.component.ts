import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';

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
  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';
  userAcreditor = 'MIRIAM SELENA ORTIZ CAMPOS'
  valueAcreditor ='$ 200.00'
  accountAcreditor = '2204578936'
  idDebitor = '12345780585'

  constructor(private router: Router){

  }

  redirectToNext = () => {
  this.router.navigate(['service-successful']);

  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);
  
  }

}