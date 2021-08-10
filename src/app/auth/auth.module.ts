import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundPageComponent, LoginPageComponent } from './pages';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    AuthCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
