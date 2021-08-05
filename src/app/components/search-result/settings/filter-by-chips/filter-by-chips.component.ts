import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import SettingsService from '../../../../services/settings.service';

@Component({
  selector: 'app-filter-by-chips',
  templateUrl: './filter-by-chips.component.html',
  styleUrls: ['./filter-by-chips.component.scss'],
})
export default class FilterByTagsComponent {
  public separatorKeysCodes: number[] = [SPACE];

  public chips: string[] = [];

  public selectable: boolean = true;

  public removable: boolean = true;

  public chipControl = new FormControl();

  constructor(private settingsService: SettingsService) {}

  remove(fruit: string): void {
    const index = this.chips.indexOf(fruit);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.settingsService.filterOption.value = this.chips;
      if (this.settingsService.filterOption.enabled && this.chips.length < 1) {
        this.settingsService.filterOption.enabled = false;
      }
      this.settingsService.filterByTitle.next(
        this.settingsService.filterOption
      );
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.chips.push(value);
      this.settingsService.filterOption.value = this.chips;
      if (!this.settingsService.filterOption.enabled) {
        this.settingsService.filterOption.enabled = true;
      }
      this.settingsService.filterByTitle.next(
        this.settingsService.filterOption
      );
    }

    event.chipInput!.clear();

    this.chipControl.setValue(null);
  }
}
