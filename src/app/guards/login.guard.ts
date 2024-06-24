import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }
  canActivate() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/depositos']).then();
    }
    
  }
  
}
