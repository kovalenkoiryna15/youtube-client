import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterOption, SortOption } from '../common/models';

@Injectable()
export default class SettingsService {
  public isSettingsActive: Subject<boolean> = new Subject();

  public sortByDate: Subject<SortOption> = new Subject();

  public sortByViewCount: Subject<SortOption> = new Subject();

  public filterByTitle: Subject<FilterOption> = new Subject();
}
