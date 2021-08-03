import { Component } from '@angular/core';
import FilterByPipe from 'src/app/pipes/filter-by.pipe';
import {
  FilterOption,
  SearchItemModel,
  SettingsOption,
  SortOption,
} from '../../common/models';
import SettingsService from '../../services/settings.service';
import VideoService from '../../services/video.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent {
  public searchResultList: SearchItemModel[] = [];

  public isSettingsActive: boolean = false;

  public settingsOptions: (SettingsOption | SortOption | FilterOption)[] = [];

  constructor(
    private settingsService: SettingsService,
    private videoService: VideoService,
    private filterPipe: FilterByPipe
  ) {
    this.settingsService.isSettingsActive.subscribe(
      (status: boolean) => (this.isSettingsActive = status)
    );
    this.settingsService.settingsOptions.subscribe(
      (options: (SettingsOption | SortOption | FilterOption)[]) =>
        (this.settingsOptions = options)
    );
    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));

    console.log(filterPipe);
  }
}
