import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import { VideoService } from 'src/app/core/services';
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
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [VideoService, FilterPipe, SortPipe],
  exports: [SettingsComponent, SearchResultComponent],
})
export class YoutubeModule {}
