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
import { SharedModule } from '../shared/shared.module';
import { YoutubeComponent } from './youtube.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { SidebarSwitcherComponent } from './components/sidebar-switcher/sidebar-switcher.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CardComponent } from './components/card/card.component';

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
    YoutubeComponent,
    AdminPageComponent,
    CardFormComponent,
    SidebarSwitcherComponent,
    SidebarComponent,
    AdminDashboardComponent,
    CardComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SharedModule, YouTubeRoutingModule],
  providers: [SortPipe, FilterPipe],
  exports: [SettingsComponent, SearchResultComponent],
})
export class YoutubeModule {}
