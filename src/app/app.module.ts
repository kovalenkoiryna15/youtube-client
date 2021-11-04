import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module.module';
import { AppComponent } from './app.component';
import { videoReducer } from './store/reducers';
import { VideoEffects } from './store/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({ videos: videoReducer }),
    EffectsModule.forRoot([VideoEffects]),
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
