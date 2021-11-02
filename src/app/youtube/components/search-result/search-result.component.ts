import { Component, OnDestroy } from '@angular/core';
import { SettingsService, VideoService } from 'src/app/core/services';
import {
  FilterOption,
  SearchItemModel,
  SortOption,
  SettingsOptionsStatus,
  CardFormData,
} from 'src/app/shared/models';
import { FilterOptions, SortOptions } from 'src/app/shared/constants/settings';
import { Observable, of, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { VideoInfo } from 'src/app/shared/interfaces';
import { selectVideos } from 'src/app/store/selectors';
import { FilterPipe, SortPipe } from '../../pipes';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnDestroy {
  public searchResultList: SearchItemModel[] = [];

  public isSettingsActive: boolean = false;

  public settingsOptionsStatus: SettingsOptionsStatus;

  public subscriptions: Subscription = new Subscription();

  public customVideoList$: Observable<(VideoInfo | CardFormData)[]> = of([]);

  constructor(
    private settingsService: SettingsService,
    private videoService: VideoService,
    private sortPipe: SortPipe,
    private filterPipe: FilterPipe,
    private readonly store: Store,
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

    this.customVideoList$ = this.store.select(selectVideos);

    this.subscriptions.add(
      this.settingsService.isSettingsActive$.subscribe(
        (status: boolean) => (this.isSettingsActive = status),
      ),
    );

    this.subscriptions.add(
      this.videoService
        .search()
        .subscribe((result) => (this.searchResultList = result)),
    );

    this.subscriptions.add(
      this.settingsService.sortByDate$.subscribe((option: SortOption) => {
        this.updateOptionStatus(option);
        this.transform(option);
      }),
    );

    this.subscriptions.add(
      this.settingsService.sortByViewCount$.subscribe((option: SortOption) => {
        this.updateOptionStatus(option);
        this.transform(option);
      }),
    );

    this.subscriptions.add(
      this.settingsService.filterByTitle$.subscribe((option: FilterOption) => {
        this.updateOptionStatus(option);
        this.recoverSearchResultList();
        this.searchResultList = this.filterPipe.transform(
          this.searchResultList,
          option,
        );

        if (this.isSomeSortOptionEnabled()) {
          if (this.settingsOptionsStatus[SortOptions.ByDate]) {
            this.searchResultList = this.sortPipe.transform(
              this.searchResultList,
              this.settingsService.optionsState[SortOptions.ByDate],
            );
          }
          if (this.settingsOptionsStatus[SortOptions.ByViewCount]) {
            this.searchResultList = this.sortPipe.transform(
              this.searchResultList,
              this.settingsService.optionsState[SortOptions.ByViewCount],
            );
          }
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
        option,
      );
    }
  }

  isSomeSortOptionEnabled(): boolean {
    return Object.values(this.settingsOptionsStatus).some(
      (optionStatus) => optionStatus === true,
    );
  }

  areAllSettingstOptionsDisabled(): boolean {
    return Object.values(this.settingsOptionsStatus).every(
      (optionStatus) => optionStatus === false,
    );
  }

  recoverSearchResultList(): void {
    this.searchResultList = this.videoService.videoItems;
  }
}
