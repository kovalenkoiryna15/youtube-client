import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  @ViewChild(MatAccordion) public accordion!: MatAccordion;

  public username: string | null = null;

  public subscriptions: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {
    this.subscriptions.add(
      this.authService.user$.subscribe((user: User | null) =>
        user?.username ? (this.username = user?.username) : (this.username = null)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
    this.accordion.closeAll();
    this.router.navigate(['auth/login']);
  }

  onLogin(): void {
    this.accordion.closeAll();
    this.router.navigate(['auth/login']);
  }
}
