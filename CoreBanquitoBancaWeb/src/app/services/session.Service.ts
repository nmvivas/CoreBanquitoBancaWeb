import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private storageKey: string = 'userEmail';

  setEmail(email: string) {
    localStorage.setItem(this.storageKey, email);
  }

  getEmail(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  clearEmail() {
    localStorage.removeItem(this.storageKey);
  }
}