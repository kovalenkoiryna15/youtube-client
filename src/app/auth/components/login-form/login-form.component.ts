import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
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
    username: [
      null,
      [Validators.required, LoginFormComponent.noWhitespaceValidator, LoginFormComponent.usernameValidator],
    ],
    password: [
      null,
      [Validators.required, LoginFormComponent.noWhitespaceValidator, LoginFormComponent.passwordValidator],
    ],
  });

  public isLoading: boolean = true;

  public subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.subscriptions.add(this.loginFormGroup.valueChanges.subscribe((data) => (this.formData = data)));
  }

  ngOnInit() {
    this.isLoading = true;
    if (this.authService.isAuthorized()) {
      this.router.navigate(['youtube']);
    } else {
      this.isLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(): void {
    const { password, username } = this.formData;
    if (!this.doControlsHaveAnyErrors() && password && username) {
      this.authService.register({ username, userId: '' });
      this.isLoading = true;
      this.router.navigate(['youtube']);
    }
  }

  doControlsHaveAnyErrors(): boolean {
    return Object.values(this.loginFormGroup.controls).every((control: AbstractControl) => !!control.errors);
  }

  static noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return !isWhitespace ? null : { whitespace: true };
  }

  static passwordValidator(control: FormControl): ValidationErrors | null {
    const isSpace = (control.value || '').trim().includes(' ');
    const isValid = (control.value || '').match(new RegExp('[A-Za-z0-9]{3,}'));
    return !isSpace && isValid ? null : { password: true };
  }

  static usernameValidator(control: FormControl): ValidationErrors | null {
    const isValid = (control.value || '').match(new RegExp('[A-Za-z]{3,}'));
    return isValid ? null : { username: true };
  }
}
