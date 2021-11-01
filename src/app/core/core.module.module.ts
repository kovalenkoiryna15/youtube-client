import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent, SearchComponent, LoginComponent, LogoComponent, SettingsButtonComponent } from './components';
import { SettingsService, VideoService } from './services';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, LoginComponent, LogoComponent, SettingsButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [SettingsService, AuthService, VideoService, AuthGuard],
    };
  }
}
