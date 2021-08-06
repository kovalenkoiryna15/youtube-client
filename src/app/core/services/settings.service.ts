import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  FilterOptions,
  SortDirections,
  SortOptions,
} from 'src/app/shared/constants/settings';
import {
  FilterOption,
  SettingsOptionsState,
  SortOption,
} from 'src/app/shared/models';

@Injectable()
export default class SettingsService {
  public isSettingsActive: Subject<boolean> = new Subject();

  public sortByDate: Subject<SortOption> = new Subject();

  public sortByViewCount: Subject<SortOption> = new Subject();

  public filterByTitle: Subject<FilterOption> = new Subject();

  static sortByDateOption: SortOption = {
    name: SortOptions.ByDate,
    sortDirection: SortDirections.Decrease,
    enabled: false,
  };

  static sortByViewCountOption: SortOption = {
    name: SortOptions.ByViewCount,
    sortDirection: SortDirections.Decrease,
    enabled: false,
  };

  static filterByTitleOption: FilterOption = {
    name: FilterOptions.ByTitle,
    value: [],
    enabled: false,
  };

  static filterByTagsOption: FilterOption = {
    name: FilterOptions.ByTags,
    value: [],
    enabled: false,
  };

  public optionsState: SettingsOptionsState = {
    [SortOptions.ByDate]: SettingsService.sortByDateOption,
    [SortOptions.ByViewCount]: SettingsService.sortByViewCountOption,
    [FilterOptions.ByTitle]: SettingsService.filterByTitleOption,
    [FilterOptions.ByTags]: SettingsService.filterByTagsOption,
  };
}
