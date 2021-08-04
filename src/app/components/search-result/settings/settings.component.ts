import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SortDirections, SortOptions } from 'src/app/common/constants/settings';
import { SortOption } from 'src/app/common/models';
import SettingsService from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent {
  public sortOptions: FormGroup = this.fb.group({
    dateControl: false,
    viewCountControl: false,
  });

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

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.sortOptions.controls.dateControl.valueChanges.subscribe(
      (value: boolean) => {
        if (
          value &&
          !this.sortByDateOption.enabled &&
          !this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = true;
          this.settingsService.sortByDate.next(this.sortByDateOption);
        } else if (
          value &&
          !this.sortByDateOption.enabled &&
          this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = true;
          this.sortByViewCountOption.enabled = false;
          this.settingsService.sortByDate.next(this.sortByDateOption);
          this.sortOptions.controls.viewCountControl.setValue(false);
        } else {
          this.sortByDateOption.enabled = false;
          this.settingsService.sortByDate.next(this.sortByDateOption);
        }
      }
    );
    this.sortOptions.controls.viewCountControl.valueChanges.subscribe(
      (value: boolean) => {
        if (
          value &&
          !this.sortByDateOption.enabled &&
          !this.sortByViewCountOption.enabled
        ) {
          this.sortByViewCountOption.enabled = true;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
        } else if (
          value &&
          this.sortByDateOption.enabled &&
          !this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = false;
          this.sortByViewCountOption.enabled = true;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
          this.sortOptions.controls.dateControl.setValue(false);
        } else {
          this.sortByViewCountOption.enabled = false;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
        }
      }
    );
  }

  changeViewCountSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.sortByViewCountOption.sortDirection = value;
    this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
  }

  changeDateSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.sortByDateOption.sortDirection = value;
    this.settingsService.sortByDate.next(this.sortByDateOption);
  }
}
