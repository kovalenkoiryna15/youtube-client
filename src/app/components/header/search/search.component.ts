import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

interface FormData {
  searchInput: string | null;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent implements OnDestroy {
  public formData?: FormData;

  public formValueSubscription: Subscription;

  public searchFormGroup: FormGroup = this.fb.group({
    searchInput: [''],
  });

  constructor(private fb: FormBuilder) {
    this.formValueSubscription = this.searchFormGroup.valueChanges.subscribe(
      (value: FormData) => {
        this.formData = value;
      }
    );
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
  }

  onClear() {
    this.searchFormGroup.controls.searchInput.reset();
  }

  onSubmit() {
    if (this.formData?.searchInput) {
      this.search();
    }
  }

  onKeyDown(event: Event) {
    event.preventDefault();
    if (this.formData?.searchInput) {
      this.search();
    }
  }

  search() {
    console.log(this.formData);
  }
}
