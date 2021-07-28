import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export default class SearchInputComponent {
  public value: string = '';

  onClear() {
    this.value = '';
  }
}
