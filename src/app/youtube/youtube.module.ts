import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import MaterialModule from 'src/app/material/material.module';

import VideoService from 'src/app/core/services/video.service';
import FilterByTagsComponent from './components/settings/filter-by-chips/filter-by-chips.component';
import SettingsComponent from './components/settings/settings.component';
import SortDirectionComponent from './components/settings/sort-direction/sort-direction.component';
import SearchResultComponent from './components/search-result/search-result.component';
import SearchItemComponent from './components/search-result/search-item/search-item.component';
import ColorizeByPublishDateDirective from './directives/colorize-by-publish-date.directive';
import SortPipe from './pipes/sort.pipe';
import FilterPipe from './pipes/filter.pipe';
import DetailedInfoPageComponent from './pages/details-info-page/detailed-info-page.component';
import MainPageComponent from './pages/main-page/main-page.component';

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
export default class YoutubeModule {}
