import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { SettingsService } from 'src/app/core/services';
import { FilterOptions } from 'src/app/shared/constants/settings';
import { FilterOption } from 'src/app/shared/models';

@Component({
  selector: 'app-filter-by-chips',
  templateUrl: './filter-by-chips.component.html',
  styleUrls: ['./filter-by-chips.component.scss'],
})
export class FilterByTagsComponent {
  public separatorKeysCodes: number[] = [SPACE];

  public chips: string[] = [];

  public selectable: boolean = true;

  public removable: boolean = true;

  public chipControl = new FormControl();

  public filterByTitleOption: FilterOption;

  constructor(private settingsService: SettingsService) {
    this.filterByTitleOption = this.settingsService.optionsState[FilterOptions.ByTitle];
  }

  remove(fruit: string): void {
    const index = this.chips.indexOf(fruit);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.filterByTitleOption.value = this.chips;
      if (this.filterByTitleOption.enabled && this.chips.length < 1) {
        this.filterByTitleOption.enabled = false;
      }
      this.settingsService.filterByTitle$.next(this.filterByTitleOption);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.chips.push(value);
      this.filterByTitleOption.value = this.chips;
      if (!this.filterByTitleOption.enabled) {
        this.filterByTitleOption.enabled = true;
      }
      this.settingsService.filterByTitle$.next(this.filterByTitleOption);
    }

    event.chipInput!.clear();

    this.chipControl.setValue(null);
  }
}
