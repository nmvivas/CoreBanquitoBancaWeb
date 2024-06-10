import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-successful',
  standalone: true,
  imports: [RouterOutlet, 
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule, 
    MatTreeModule
  ],
  templateUrl: './service-successful.component.html',
  styleUrl: './service-successful.component.css'
})
export class ServiceSuccessfulComponent {
  accountNumber = '2205618154';
  balance = '$ 330.30';
  userName = 'JUANITO JOSÉ QUEZADA OLIVARES';
  userAcreditor = 'MIRIAM SELENA ORTIZ CAMPOS'
  valueAcreditor ='$ 200.00'
  accountAcreditor = '2204578936'

}