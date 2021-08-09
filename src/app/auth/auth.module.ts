import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { NotFoundPageComponent, LoginPageComponent } from './pages';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [NotFoundPageComponent, LoginPageComponent],
  imports: [CommonModule, MaterialModule, AuthRoutingModule],
})
export class AuthModule {}
