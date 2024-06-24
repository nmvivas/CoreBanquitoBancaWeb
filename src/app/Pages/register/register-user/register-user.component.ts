import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  identification = new FormControl('');
  password = new FormControl('');
  reviewPassword = new FormControl('');

  constructor( private router: Router) {}

  onSubmit = () => {
    console.log(this.identification.value);
    console.log(this.password.value);
    console.log(this.reviewPassword);
    this.router.navigate(['/register-success']);
    
    
  }
  returnLogin = () => {
    this.router.navigate(['login']);

  }


}
