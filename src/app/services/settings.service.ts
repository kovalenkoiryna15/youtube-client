import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterOption, SettingsOption, SortOption } from '../common/models';

@Injectable()
export default class SettingsService {
  public isSettingsActive: Subject<boolean> = new Subject();

  public settingsOptions: Subject<
    (SettingsOption | SortOption | FilterOption)[]
  > = new Subject();
}
