import { Component } from '@angular/core';
import AppService from 'src/app/services/app.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  public isSettingsActive: boolean = false;

  constructor(private appService: AppService) {}

  onChange() {
    this.isSettingsActive = !this.isSettingsActive;
    this.appService.isSettingsActive.next(this.isSettingsActive);
  }
}
