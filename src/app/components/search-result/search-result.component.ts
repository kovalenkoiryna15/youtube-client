import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import FilterPipe from 'src/app/pipes/filter.pipe';
import SortPipe from 'src/app/pipes/sort.pipe';
import {
  FilterOption,
  SearchItemModel,
  SortOption,
  SortOptionsStatus,
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

  public areSortOptionsEnabled: Subject<SortOptionsStatus> = new Subject();

  public sortOptionsStatus: SortOptionsStatus = {
    isSortByDateEnabled: false,
    isSortByViewCountEnabled: false,
  };

  constructor(
    private settingsService: SettingsService,
    private videoService: VideoService,
    private sortPipe: SortPipe,
    private filterPipe: FilterPipe
  ) {
    this.settingsService.isSettingsActive.subscribe(
      (status: boolean) => (this.isSettingsActive = status)
    );
    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));

    this.settingsService.sortByDate.subscribe((option: SortOption) => {
      this.sortOptionsStatus = {
        ...this.sortOptionsStatus,
        isSortByDateEnabled: option.enabled,
      };
      this.areSortOptionsEnabled.next(this.sortOptionsStatus);
      if (option.enabled) {
        this.searchResultList = this.sortPipe.transform(
          this.searchResultList,
          option.name,
          option.sortDirection
        );
      }
    });
    this.settingsService.sortByViewCount.subscribe((option: SortOption) => {
      this.sortOptionsStatus = {
        ...this.sortOptionsStatus,
        isSortByViewCountEnabled: option.enabled,
      };
      this.areSortOptionsEnabled.next(this.sortOptionsStatus);
      if (option.enabled) {
        this.searchResultList = this.sortPipe.transform(
          this.searchResultList,
          option.name,
          option.sortDirection
        );
      }
    });

    this.settingsService.filterByTitle.subscribe((option: FilterOption) => {
      if (
        Object.values(this.sortOptionsStatus).some(
          (optionStatus) => optionStatus === true
        )
      ) {
        this.searchResultList = this.filterPipe.transform(
          this.videoService.mockResponse.items,
          option
        );
        if (this.sortOptionsStatus.isSortByDateEnabled) {
          this.searchResultList = this.sortPipe.transform(
            this.searchResultList,
            this.settingsService.sortByDateOption.name,
            this.settingsService.sortByDateOption.sortDirection
          );
        }
        if (this.sortOptionsStatus.isSortByViewCountEnabled) {
          this.searchResultList = this.sortPipe.transform(
            this.searchResultList,
            this.settingsService.sortByViewCountOption.name,
            this.settingsService.sortByViewCountOption.sortDirection
          );
        }
      } else {
        this.searchResultList = this.filterPipe.transform(
          this.videoService.mockResponse.items,
          option
        );
      }
    });

    this.areSortOptionsEnabled.subscribe((optionsStatus: SortOptionsStatus) => {
      if (
        Object.values(optionsStatus).every(
          (optionStatus) => optionStatus === false
        )
      ) {
        this.searchResultList = this.videoService.mockResponse.items;
      }
    });
  }
}
