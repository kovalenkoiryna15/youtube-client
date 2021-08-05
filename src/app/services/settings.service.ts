import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  FilterOptions,
  SortDirections,
  SortOptions,
} from '../common/constants/settings';
import { FilterOption, SortOption } from '../common/models';

@Injectable()
export default class SettingsService {
  public isSettingsActive: Subject<boolean> = new Subject();

  public sortByDate: Subject<SortOption> = new Subject();

  public sortByViewCount: Subject<SortOption> = new Subject();

  public filterByTitle: Subject<FilterOption> = new Subject();

  public sortByDateOption: SortOption = {
    name: SortOptions.ByDate,
    sortDirection: SortDirections.Decrease,
    enabled: false,
  };

  public sortByViewCountOption: SortOption = {
    name: SortOptions.ByViewCount,
    sortDirection: SortDirections.Decrease,
    enabled: false,
  };

  public filterOption: FilterOption = {
    name: FilterOptions.ByTitle,
    value: [],
    enabled: false,
  };
}
