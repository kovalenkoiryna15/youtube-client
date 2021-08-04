import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SortDirections, SortOptions } from 'src/app/common/constants/settings';
import { SortOption } from 'src/app/common/models';
import SettingsService from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent implements OnDestroy {
  public sortOptions: FormGroup = this.fb.group({
    date: false,
    viewCount: false,
  });

  public subscriptionToFormValues: Subscription;

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
    this.subscriptionToFormValues = this.sortOptions.valueChanges.subscribe(
      (data) => {
        if (this.sortByDateOption.enabled !== data.date) {
          this.sortByDateOption.enabled = data.date;
          this.settingsService.sortByDate.next(this.sortByDateOption);
        }
        if (this.sortByViewCountOption.enabled !== data.viewCount) {
          this.sortByViewCountOption.enabled = data.viewCount;
          this.settingsService.sortByViewCount.next(this.sortByViewCountOption);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionToFormValues.unsubscribe();
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
