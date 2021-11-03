import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadSearchResult } from 'src/app/store/actions';
import { FormData } from './form-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  private readonly MIN_SEARCH_VALUE_LENGTH = 3;

  public formData: FormData = {
    searchInput: null,
  };

  public formValueSubscription: Subscription;

  public searchFormGroup: FormGroup = this.fb.group({
    searchInput: [''],
  });

  constructor(private fb: FormBuilder, private readonly store: Store) {
    this.formValueSubscription = this.searchFormGroup.valueChanges.subscribe((value: FormData) => {
      this.formData = value;
      this.search();
    });
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
  }

  onClear() {
    this.searchFormGroup.controls.searchInput.reset();
  }

  search() {
    if (this.formData?.searchInput && this.formData?.searchInput.trim().length >= this.MIN_SEARCH_VALUE_LENGTH) {
      this.store.dispatch(loadSearchResult({ value: this.formData.searchInput }));
    }
  }
}
