import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent {
  @Output() toggleFilter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isSettingsActive: boolean = false;

  onChange() {
    this.isSettingsActive = !this.isSettingsActive;
    this.toggleFilter.emit(this.isSettingsActive);
  }
}
