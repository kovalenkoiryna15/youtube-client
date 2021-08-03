import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SortDirections } from 'src/app/common/constants/settings';
import SettingsService from 'src/app/services/settings.service';

interface FormData {
  isDate: boolean;
  isViewCount: boolean;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent implements OnDestroy {
  public formData: FormData = {
    isDate: false,
    isViewCount: false,
  };

  public sortOptions: FormGroup = this.fb.group({
    date: false,
    viewCount: false,
  });

  public subscriptionToFormValues: Subscription;

  viewCountSortDirection: SortDirections.Increase | SortDirections.Decrease =
    SortDirections.Increase;

  dateSortDirection: SortDirections.Increase | SortDirections.Decrease =
    SortDirections.Decrease;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.subscriptionToFormValues = this.sortOptions.valueChanges.subscribe(
      (data) => {
        this.formData = { isDate: data.date, isViewCount: data.viewCount };
        this.settingsService.settingsOptions.next();
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionToFormValues.unsubscribe();
  }

  changeViewCountSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.viewCountSortDirection = value;
    this.settingsService.settingsOptions.next();
  }

  changeDateSortDirection(
    value: SortDirections.Increase | SortDirections.Decrease
  ) {
    this.dateSortDirection = value;
    this.settingsService.settingsOptions.next();
  }
}
