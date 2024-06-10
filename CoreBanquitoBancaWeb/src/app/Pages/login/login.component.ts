import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');

  constructor( private router: Router) {}

  onSubmit = () => {
    console.log(this.username.value);
    console.log(this.password.value);
    this.router.navigate(['/dashboard']);
    
    
  }
}
