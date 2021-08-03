import { Component } from '@angular/core';
import {
  FilterOption,
  MatchOption,
  SortOption,
} from 'src/app/common/models/filter-option.model';
import AppService from 'src/app/services/app.service';
import VideoService from 'src/app/services/video.service';
import { SearchItemModel } from '../../common/models/search-item.model';

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
