import { Component } from '@angular/core';
import {
  FilterOption,
  SearchItemModel,
  SettingsOption,
  SortOption,
} from '../../common/models';
import AppService from '../../services/app.service';
import VideoService from '../../services/video.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent {
  public searchResultList: SearchItemModel[] = [];

  public isSettingsActive: boolean = false;

  public string = 'change';

  public settingsOptions?: (SettingsOption | SortOption | FilterOption)[];

  constructor(
    private appService: AppService,
    private videoService: VideoService
  ) {
    this.appService.isSettingsActive.subscribe(
      (status: boolean) => (this.isSettingsActive = status)
    );
    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));
  }
}
