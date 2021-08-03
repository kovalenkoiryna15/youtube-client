import { Component } from '@angular/core';
import {
  SearchItemModel,
  FilterOption,
  MatchOption,
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

  public isFilterActive: boolean = false;

  public string = 'change';

  public filterOptions?: (FilterOption | SortOption | MatchOption)[];

  constructor(
    private appService: AppService,
    private videoService: VideoService
  ) {
    this.appService.isFilterActive.subscribe(
      (status: boolean) => (this.isFilterActive = status)
    );
    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));
  }
}
