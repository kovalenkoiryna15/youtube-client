import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/header/search/search.component';
import SearchResultComponent from './components/search-result/search-result.component';
import CardComponent from './components/search-result/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
