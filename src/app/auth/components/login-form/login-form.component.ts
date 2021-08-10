import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginFormData } from 'src/app/shared/models';

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
    this.isLoading = true;
    if (this.authService.isAuthorized()) {
      setTimeout(() => {
        this.router.navigate(['youtube']);
      }, 2000);
    } else {
      this.isLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    const { password, username } = this.formData;
    if (!this.doControlsHaveAnyErrors() && password && username) {
      this.authService.register({ username, userId: '' });
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['youtube']);
      }, 2000);
    }
  }

  doControlsHaveAnyErrors(): boolean {
    return Object.values(this.loginFormGroup.controls).every(
      (control: AbstractControl) => !!control.errors
    );
  }
}
