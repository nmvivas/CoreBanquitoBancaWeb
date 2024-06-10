import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';

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
export class TranferencesPagoComponent {
  
  constructor(private router: Router){
  }

  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';
  userAcreditor = 'MIRIAM SELENA ORTIZ CAMPOS'
  valueAcreditor ='$ 200.00'
  accountAcreditor = '2204578936'

  redirectToNext = () => {
    this.router.navigate(['tranferences-successful']);

    }
    redirectToCancel = () => {
      this.router.navigate(['tranferences']);
    
      }

  }



