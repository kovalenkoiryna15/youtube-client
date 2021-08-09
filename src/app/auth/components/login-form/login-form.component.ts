import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services';
import { LoginFormData } from '../../shared/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  public formData: LoginFormData = {
    username: null,
    password: null,
  };

  public loginFormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  public isLoading: boolean = true;

  public subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.subscriptions.add(
      this.loginFormGroup.valueChanges.subscribe(
        (data) => (this.formData = data)
      )
    );
  }

  ngOnInit() {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['youtube']);
    } else {
      this.isLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    if (
      !this.loginFormGroup.controls.username.errors ||
      !this.loginFormGroup.controls.password.errors
    ) {
      this.authService.login(this.formData);
      this.router.navigate(['youtube']);
    }
  }
}
