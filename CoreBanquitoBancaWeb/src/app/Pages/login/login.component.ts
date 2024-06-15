import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string= ('');
  password: string= ('');
  errorMessage: string = '';
  primeraVisita = true;
  accesoValidacion = false;

  constructor( private router: Router, private authenticationService: AuthenticationService) {}

  // ngOnInit(): void {
  //   localStorage.clear();
  // }

  loginUser(){
    this.authenticationService.login(this.userName, this.password).subscribe({
      next: () => {
        console.log('Login exitoso');
        this.router.navigate(["/dashboard"]).then();
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  
  }

  // onSubmit = () => {
  //   console.log(this.userName.value);
  //   console.log(this.password.value);
  //   this.router.navigate(['/dashboard']);
    
  // }

  register = () => {
    this.router.navigate(['register']);

  }
}



