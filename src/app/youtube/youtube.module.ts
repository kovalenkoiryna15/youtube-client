import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import {
  FilterByTagsComponent,
  SettingsComponent,
  SortDirectionComponent,
  SearchResultComponent,
  SearchItemComponent,
} from './components';
import { ColorizeByPublishDateDirective } from './directives';
import { SortPipe, FilterPipe } from './pipes';
import { DetailedInfoPageComponent, MainPageComponent } from './pages';
import { YouTubeRoutingModule } from './youtube-routing.module';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';

@NgModule({
  declarations: [
    SearchResultComponent,
    FilterByTagsComponent,
    SearchItemComponent,
    SettingsComponent,
    SortDirectionComponent,
    FilterPipe,
    SortPipe,
    ColorizeByPublishDateDirective,
    DetailedInfoPageComponent,
    MainPageComponent,
    DetailedInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    YouTubeRoutingModule,
  ],
  providers: [SortPipe, FilterPipe],
  exports: [SettingsComponent, SearchResultComponent],
})
export class YoutubeModule {}
