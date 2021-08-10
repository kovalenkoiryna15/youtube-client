import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public username: string = 'Your name';

  constructor(private authService: AuthService) {
    console.log(this.authService.userData);
    if (this.authService.userData?.username) {
      this.username = this.authService.userData?.username;
      console.log(this.username);
    }
  }
}
