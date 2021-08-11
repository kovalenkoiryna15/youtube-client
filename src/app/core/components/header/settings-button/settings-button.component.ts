import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  public isSettingsActive: boolean = false;

  constructor(private settingsService: SettingsService) {}

  onChange() {
    this.isSettingsActive = !this.isSettingsActive;
    this.settingsService.isSettingsActive.next(this.isSettingsActive);
  }
}
