import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import MaterialModule from './material/material.module';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import SearchComponent from './core/components/header/search/search.component';
import LoginComponent from './core/components/header/login/login.component';
import LogoComponent from './core/components/header/logo/logo.component';
import SettingsButtonComponent from './core/components/header/settings-button/settings-button.component';

import FilterByTagsComponent from './youtube/components/settings/filter-by-chips/filter-by-chips.component';
import SettingsComponent from './youtube/components/settings/settings.component';
import SortDirectionComponent from './youtube/components/settings/sort-direction/sort-direction.component';
import SearchResultComponent from './youtube/components/search-result/search-result.component';
import SearchItemComponent from './youtube/components/search-result/search-item/search-item.component';
import VideoService from './youtube/services/video.service';
import SettingsService from './shared/services/settings.service';
import SortPipe from './youtube/pipes/sort.pipe';
import FilterPipe from './youtube/pipes/filter.pipe';
import ColorizeByPublishDateDirective from './youtube/directives/colorize-by-publish-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    LogoComponent,
    SettingsButtonComponent,
    SearchResultComponent,
    FilterByTagsComponent,
    SearchItemComponent,
    SettingsComponent,
    SortDirectionComponent,
    FilterPipe,
    SortPipe,
    ColorizeByPublishDateDirective,
  ],
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
