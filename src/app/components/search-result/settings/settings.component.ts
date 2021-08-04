import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SortDirections } from 'src/app/common/constants/settings';
import { SortOption } from 'src/app/common/models';
import SettingsService from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent {
  public sortOptions: FormGroup;

  public sortByDateOption: SortOption;

  public sortByViewCountOption: SortOption;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.sortByDateOption = this.settingsService.sortByDateOption;
    this.sortByViewCountOption = this.settingsService.sortByViewCountOption;

    this.sortOptions = this.fb.group({
      dateControl: this.sortByDateOption.enabled,
      viewCountControl: this.sortByViewCountOption.enabled,
    });

    this.sortOptions.controls.dateControl.valueChanges.subscribe(
      (value: boolean) => {
        if (
          value &&
          !this.sortByDateOption.enabled &&
          !this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = true;
          this.settingsService.sortByDateOption.enabled = true;
          this.settingsService.sortByDate.next(this.sortByDateOption);
        } else if (
          value &&
          !this.sortByDateOption.enabled &&
          this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = true;
          this.sortByViewCountOption.enabled = false;
          this.settingsService.sortByDateOption.enabled = true;
          this.settingsService.sortByViewCountOption.enabled = false;
          this.settingsService.sortByDate.next(this.sortByDateOption);
          this.sortOptions.controls.viewCountControl.setValue(false);
        } else {
          this.sortByDateOption.enabled = false;
          this.settingsService.sortByDateOption.enabled = false;
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
          this.settingsService.sortByViewCountOption.enabled = true;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
        } else if (
          value &&
          this.sortByDateOption.enabled &&
          !this.sortByViewCountOption.enabled
        ) {
          this.sortByDateOption.enabled = false;
          this.sortByViewCountOption.enabled = true;
          this.settingsService.sortByDateOption.enabled = false;
          this.settingsService.sortByViewCountOption.enabled = true;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
          this.sortOptions.controls.dateControl.setValue(false);
        } else {
          this.sortByViewCountOption.enabled = false;
          this.settingsService.sortByViewCountOption.enabled = false;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
        }
      }
    );
  }

  changeViewCountSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.sortByViewCountOption.sortDirection = value;
    this.settingsService.sortByViewCountOption.sortDirection = value;
    this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
  }

  changeDateSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.sortByDateOption.sortDirection = value;
    this.settingsService.sortByDateOption.sortDirection = value;
    this.settingsService.sortByDate.next(this.sortByDateOption);
  }
}
