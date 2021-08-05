import { Component } from '@angular/core';
import { FilterOptions, SortOptions } from 'src/app/common/constants/settings';
import FilterPipe from 'src/app/pipes/filter.pipe';
import SortPipe from 'src/app/pipes/sort.pipe';
import {
  FilterOption,
  SearchItemModel,
  SortOption,
  SettingsOptionsStatus,
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

  public settingsOptionsStatus: SettingsOptionsStatus;

  constructor(
    private settingsService: SettingsService,
    private videoService: VideoService,
    private sortPipe: SortPipe,
    private filterPipe: FilterPipe
  ) {
    this.settingsOptionsStatus = {
      [SortOptions.ByDate]:
        this.settingsService.optionsState[SortOptions.ByDate].enabled,
      [SortOptions.ByViewCount]:
        this.settingsService.optionsState[SortOptions.ByViewCount].enabled,
      [FilterOptions.ByTitle]:
        this.settingsService.optionsState[FilterOptions.ByTitle].enabled,
      [FilterOptions.ByTags]:
        this.settingsService.optionsState[FilterOptions.ByTags].enabled,
    };

    this.settingsService.isSettingsActive.subscribe(
      (status: boolean) => (this.isSettingsActive = status)
    );

    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));

    this.settingsService.sortByDate.subscribe((option: SortOption) => {
      this.updateOptionStatus(option);
      this.transform(option);
    });

    this.settingsService.sortByViewCount.subscribe((option: SortOption) => {
      this.updateOptionStatus(option);
      this.transform(option);
    });

    this.settingsService.filterByTitle.subscribe((option: FilterOption) => {
      this.updateOptionStatus(option);
      this.recoverSearchResultList();
      this.searchResultList = this.filterPipe.transform(
        this.searchResultList,
        option
      );

      if (this.isSomeSortOptionEnabled()) {
        if (this.settingsOptionsStatus[SortOptions.ByDate]) {
          this.searchResultList = this.sortPipe.transform(
            this.searchResultList,
            this.settingsService.optionsState[SortOptions.ByDate]
          );
        }
        if (this.settingsOptionsStatus[SortOptions.ByViewCount]) {
          this.searchResultList = this.sortPipe.transform(
            this.searchResultList,
            this.settingsService.optionsState[SortOptions.ByViewCount]
          );
        }
      }
    });
  }

  updateOptionStatus(option: SortOption | FilterOption): void {
    if (this.settingsOptionsStatus[option.name] !== option.enabled) {
      this.settingsOptionsStatus = {
        ...this.settingsOptionsStatus,
        [option.name]: option.enabled,
      };
      if (this.areAllSettingstOptionsDisabled()) {
        this.recoverSearchResultList();
      }
    }
  }

  transform(option: SortOption): void {
    if (option.enabled) {
      this.searchResultList = this.sortPipe.transform(
        this.searchResultList,
        option
      );
    }
  }

  isSomeSortOptionEnabled(): boolean {
    return Object.values(this.settingsOptionsStatus).some(
      (optionStatus) => optionStatus === true
    );
  }

  areAllSettingstOptionsDisabled(): boolean {
    return Object.values(this.settingsOptionsStatus).every(
      (optionStatus) => optionStatus === false
    );
  }

  recoverSearchResultList(): void {
    this.searchResultList = this.videoService.mockResponse.items;
  }
}
