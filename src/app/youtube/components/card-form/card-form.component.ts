import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardFormData } from 'src/app/shared/models';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnDestroy {
  public formData: CardFormData = {
    title: '',
    description: '',
  };

  public cardFormGroup = this.fb.group({
    title: [null, [Validators.required, CardFormComponent.noWhitespaceValidator]],
    description: [null, [Validators.required, CardFormComponent.noWhitespaceValidator]],
  });

  public subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.subscriptions.add(this.cardFormGroup.valueChanges.subscribe((data) => (this.formData = data)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(): void {
    const { title, description } = this.formData;
    if (!this.doControlsHaveAnyErrors() && title && description) {
      // this.adminService.createCard({ title, description, thumbnails });
      console.log({ title, description });
    }
  }

  doControlsHaveAnyErrors(): boolean {
    return Object.values(this.cardFormGroup.controls).every((control: AbstractControl) => !!control.errors);
  }

  static noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }
}
