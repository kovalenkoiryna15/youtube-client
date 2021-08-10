import { Injectable } from '@angular/core';
import { User } from '../../shared/interfaces';
import { LoginFormData } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: User | null = null;

  login(userData: LoginFormData) {
    this.userData = { ...userData };
    localStorage.setItem('yoyube-client', JSON.stringify(userData));
  }

  isAuthorized() {
    const data = localStorage.getItem('yoyube-client');
    if (data) {
      this.userData = { ...(JSON.parse(data) as LoginFormData) };
      return true;
    }
    return false;
  }
}
