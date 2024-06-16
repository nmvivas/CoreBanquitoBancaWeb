import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  primeraVisita = true;
  accesoValidacion = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  loginUser() {
    this.authenticationService.login(this.userName, this.password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]).then();
      },
      error: (err) => {
        alert("Credenciales incorrectas");
        this.userName = '';
        this.password = '';
      }
    });

  }
  register = () => {
    this.router.navigate(['register']);

  }
}



