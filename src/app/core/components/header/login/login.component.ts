import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public username: string = 'Your name';

  public subscriptions: Subscription = new Subscription();

  constructor(private authService: AuthService) {
    this.subscriptions.add(
      this.authService.user.subscribe(
        (user: User) => (this.username = user.username)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
