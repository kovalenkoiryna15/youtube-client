import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addVideo } from 'src/app/store/actions';
import { v4 as uuidv4 } from 'uuid';
import { CardFormData } from 'src/app/shared/models';
import { SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { LOCAL } from 'src/app/shared/constants';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnDestroy {
  public separatorKeysCodes: number[] = [SPACE];

  public formData: CardFormData = {
    title: '',
    description: '',
    thumbnailUrl: '',
    channelTitle: '',
    tags: [],
    publishedAt: '',
  };

  public cardFormGroup = this.fb.group({
    title: [null, [Validators.required, CardFormComponent.noWhitespaceValidator]],
    description: [null, [Validators.required, CardFormComponent.noWhitespaceValidator]],
    thumbnailUrl: [null, [Validators.required, CardFormComponent.noWhitespaceValidator]],
    tags: [[], [Validators.required]]
  });

  public subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private readonly store: Store,
  ) {
    this.subscriptions.add(
      this.cardFormGroup.valueChanges.subscribe((data) => (this.formData = data))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(): void {
    const { title, description, thumbnailUrl, tags } = this.formData;
    if (!this.doControlsHaveAnyErrors() && title && description && thumbnailUrl && tags) {
      const videoInfo = {
        source: LOCAL,
        id: `${LOCAL}${uuidv4()}`,
        snippet: {
          publishedAt: new Date().toISOString(),
          title,
          description,
          thumbnails: {
            high: {
              url: thumbnailUrl,
              height: 480,
              width: 360,
            }
          },
          channelTitle: 'My Videos',
          tags,
        },
        statistics: {
          viewCount: '0',
          likeCount: '0',
          dislikeCount: '0',
          favoriteCount: '0',
          commentCount: '0',
        }
      }
      this.store.dispatch(addVideo({ videoInfo }));
      this.resetForm();
    }
  }

  resetForm(): void {
    this.cardFormGroup.reset();
    Object.keys(this.cardFormGroup.controls).forEach(key => {
      this.cardFormGroup.controls[key].setErrors(null);
    });
  }

  doControlsHaveAnyErrors(): boolean {
    return Object.values(this.cardFormGroup.controls).every(
      (control: AbstractControl) => !!control.errors,
    );
  }

  static noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }

  addChip(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.cardFormGroup.controls.tags.setValue([...this.cardFormGroup.controls.tags.value, value]);
    }

    event.chipInput!.clear();
  }

  removeChip(chip: string): void {
    const index = this.formData.tags.indexOf(chip);

    if (index >= 0) {
      this.formData.tags.splice(index, 1);
    }
  }
}
