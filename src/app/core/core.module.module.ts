import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/header/search/search.component';
import LoginComponent from './components/header/login/login.component';
import LogoComponent from './components/header/logo/logo.component';
import SettingsButtonComponent from './components/header/settings-button/settings-button.component';
import SettingsService from './services/settings.service';
import VideoService from './services/video.service';

import MaterialModule from '../material/material.module';

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
export default class CoreModule {}
