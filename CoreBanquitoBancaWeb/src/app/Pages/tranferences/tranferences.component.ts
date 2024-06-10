import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { Router, RouterOutlet } from '@angular/router';

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
export class TranferencesComponent {
 

  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';

  constructor(private router: Router){

  }

  redirectToNext = () => {
  this.router.navigate(['tranferences-pago']);

  }
  redirectToCancel = () => {
    this.router.navigate(['dashboard']);
  
    }

  


}

