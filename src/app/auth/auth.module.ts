import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { NotFoundPageComponent, LoginPageComponent } from './pages';

@NgModule({
  declarations: [NotFoundPageComponent, LoginPageComponent],
  imports: [CommonModule, MaterialModule],
})
export class AuthModule {}
