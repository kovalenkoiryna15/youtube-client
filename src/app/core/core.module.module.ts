import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import {
  HeaderComponent,
  SearchComponent,
  LoginComponent,
  LogoComponent,
  SettingsButtonComponent,
} from './components';
import { SettingsService, VideoService } from './services';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    LogoComponent,
    SettingsButtonComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [SettingsService, VideoService],
  exports: [HeaderComponent],
})
export class CoreModule {}
