import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['auth']);
    }
    return this.authService.isAuthorized();
  }
}
