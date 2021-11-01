import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VideoService } from 'src/app/core/services';

interface FormData {
  searchInput: string | null;
}

const MIN_SEARCH_VALUE_LENGTH = 3;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  public formData?: FormData;

  public formValueSubscription: Subscription;

  public searchFormGroup: FormGroup = this.fb.group({
    searchInput: [''],
  });

  constructor(private fb: FormBuilder, public videoService: VideoService) {
    this.formValueSubscription = this.searchFormGroup.valueChanges.subscribe((value: FormData) => {
      console.log(value);
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
    if (this.formData?.searchInput && this.formData?.searchInput.trim().length >= MIN_SEARCH_VALUE_LENGTH) {
      this.videoService.searchValue.next(this.formData.searchInput);
    }
  }
}
