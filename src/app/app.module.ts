import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import AppRoutingModule from './app-routing.module';
import MaterialModule from './material/material.module';
import AppComponent from './app.component';
import components from './components';
import VideoService from './services/video.service';
import SettingsService from './services/settings.service';
import SortPipe from './pipes/sort.pipe';
import FilterPipe from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, ...components, FilterPipe, SortPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [SettingsService, VideoService, FilterPipe, SortPipe],
  bootstrap: [AppComponent],
})
export default class AppModule {}
