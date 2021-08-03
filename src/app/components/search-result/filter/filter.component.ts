import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export default class FilterComponent {
  public filterOption: string = '';

  public separatorKeysCodes: number[] = [ENTER, COMMA];

  public chips: string[] = [];

  public selectable: boolean = true;

  public removable: boolean = true;

  public chipControl = new FormControl();

  public filterOptions: FormGroup = this.fb.group({
    date: false,
    viewCount: false,
  });

  constructor(private fb: FormBuilder) {}

  remove(fruit: string): void {
    const index = this.chips.indexOf(fruit);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.chips.push(value);
    }

    event.chipInput!.clear();

    this.chipControl.setValue(null);
  }
}
