import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppRoutingModule from './app-routing.module';
import CoreModule from './core/core.module.module';
import YoutubeModule from './youtube/youtube.module';
import AuthModule from './auth/auth.module';

import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    YoutubeModule,
    AuthModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export default class AppModule {}
