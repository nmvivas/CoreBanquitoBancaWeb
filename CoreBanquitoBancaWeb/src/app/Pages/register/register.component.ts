import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  identification = new FormControl('');
  password = new FormControl('');

  constructor( private router: Router) {}

  onSubmit = () => {
    console.log(this.identification.value);
    console.log(this.password.value);
    this.router.navigate(['/register-user']);
    
    
  }
  returnLogin = () => {
    this.router.navigate(['login']);

  }

}
