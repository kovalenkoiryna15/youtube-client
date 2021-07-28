import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/header/search/search.component';
import SearchResultComponent from './components/search-result/search-result.component';

function components() {
  return [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
  ];
}

@NgModule({
  declarations: [...components()],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
