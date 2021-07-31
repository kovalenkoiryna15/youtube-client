import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  searchFormGroup: FormGroup = this.fb.group({
    searchInput: [''],
  });

  constructor(private fb: FormBuilder) {}

  onClear() {
    this.searchFormGroup.controls.searchInput.reset();
  }
}
