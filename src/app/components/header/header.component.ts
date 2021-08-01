import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isFilterActive: boolean = false;

  toggleFilter(value: boolean) {
    this.isFilterActive = value;
  }
}
