import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [ReactiveFormsModule,MatIconModule],
  templateUrl: './register-success.component.html',
  styleUrl: './register-success.component.css'
})
export class RegisterSuccessComponent {

  constructor( private router: Router) {}

  onSubmit = () => {
    this.router.navigate(['/login']);
    
    
  }

}
