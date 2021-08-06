import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import MaterialModule from 'src/app/material/material.module';

import NotFoundPageComponent from './pages/not-found-page/not-found-page.component';
import LoginPageComponent from './pages/login-page/login-page.component';

@NgModule({
  declarations: [NotFoundPageComponent, LoginPageComponent],
  imports: [CommonModule, MaterialModule],
})
export default class AuthModule {}
