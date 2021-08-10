import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    LogoComponent,
    SettingsButtonComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [SettingsService, AuthService, VideoService],
    };
  }
}
