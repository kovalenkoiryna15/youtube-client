import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SortDirections } from 'src/app/common/constants/settings';

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

  public sub: Subscription;

  viewCountSortDirection: string = SortDirections.Increase;

  dateSortDirection: string = SortDirections.Decrease;

  constructor(private fb: FormBuilder) {
    this.sub = this.sortOptions.valueChanges.subscribe((data) => {
      this.formData = { isDate: data.date, isViewCount: data.viewCount };
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changeViewCountSortDirection(value: string) {
    this.viewCountSortDirection = value;
  }

  changeDateSortDirection(value: string) {
    this.dateSortDirection = value;
  }
}
