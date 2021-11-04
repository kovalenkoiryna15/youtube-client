import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SettingsService } from 'src/app/core/services';
import { SortDirections, SortOptions } from 'src/app/shared/constants/settings';
import { SortOption, SortOptionsState } from 'src/app/shared/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnDestroy {
  public sortOptionsState: SortOptionsState = {
    [SortOptions.ByDate]: this.settingsService.optionsState[SortOptions.ByDate],
    [SortOptions.ByViewCount]: this.settingsService.optionsState[SortOptions.ByViewCount],
  };

  public sortOptions: FormGroup = this.fb.group({
    [SortOptions.ByDate]: this.sortOptionsState[SortOptions.ByDate].enabled,
    [SortOptions.ByViewCount]: this.sortOptionsState[SortOptions.ByViewCount].enabled,
  });

  public subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private settingsService: SettingsService) {
    this.subscriptions.add(
      this.sortOptions.controls[SortOptions.ByDate].valueChanges.subscribe((value: boolean) => {
        if (value) {
          this.switchEnabledOption(SortOptions.ByDate);
          this.settingsService.sortByDate$.next(this.sortOptionsState[SortOptions.ByDate]);
        } else {
          this.sortOptionsState[SortOptions.ByDate].enabled = false;
          this.settingsService.sortByDate$.next(this.sortOptionsState[SortOptions.ByDate]);
        }
      })
    );

    this.subscriptions.add(
      this.sortOptions.controls[SortOptions.ByViewCount].valueChanges.subscribe((value: boolean) => {
        if (value) {
          this.switchEnabledOption(SortOptions.ByViewCount);
          this.settingsService.sortByViewCount$.next(this.sortOptionsState[SortOptions.ByViewCount]);
        } else {
          this.sortOptionsState[SortOptions.ByViewCount].enabled = false;
          this.settingsService.sortByViewCount$.next(this.sortOptionsState[SortOptions.ByViewCount]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  changeViewCountSortDirection(value: SortDirections.Increase | SortDirections.Decrease) {
    this.sortOptionsState[SortOptions.ByViewCount].sortDirection = value;
    this.settingsService.sortByViewCount$.next(this.sortOptionsState[SortOptions.ByViewCount]);
  }

  changeDateSortDirection(value: SortDirections.Increase | SortDirections.Decrease) {
    this.sortOptionsState[SortOptions.ByDate].sortDirection = value;
    this.settingsService.sortByViewCount$.next(this.sortOptionsState[SortOptions.ByDate]);
  }

  isSomeOtherSortOptionEnabled(name: SortOptions.ByDate | SortOptions.ByViewCount): SortOption | null {
    const enabled = Object.entries(this.sortOptionsState).find(
      (option) => (option[1] as SortOption).enabled === true && (option[1] as SortOption).name !== name
    );
    if (enabled) {
      return enabled[1];
    }
    return null;
  }

  switchEnabledOption(name: SortOptions.ByDate | SortOptions.ByViewCount): void {
    this.disableSomeEnabled(name);
    this.sortOptionsState[name].enabled = true;
  }

  disableSomeEnabled(name: SortOptions.ByDate | SortOptions.ByViewCount) {
    const option = this.isSomeOtherSortOptionEnabled(name);
    if (option) {
      this.sortOptionsState[option.name].enabled = false;
      this.sortOptions.controls[option.name].setValue(false);
    }
  }
}
