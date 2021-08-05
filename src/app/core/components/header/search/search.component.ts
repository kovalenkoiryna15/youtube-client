import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import VideoService from 'src/app/youtube/services/video.service';

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

  constructor(private fb: FormBuilder, public videoService: VideoService) {
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
    this.search();
  }

  onKeyDown(event: Event) {
    event.preventDefault();
    this.search();
  }

  search() {
    if (this.formData?.searchInput) {
      this.videoService.searchValue.next(this.formData.searchInput);
    }
  }
}
