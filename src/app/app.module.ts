import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppRoutingModule from './app-routing.module';
import MaterialModule from './material.module';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/search/search.component';
import SearchResultComponent from './components/search-result/search-result.component';
import CardComponent from './components/card/card.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    CardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
