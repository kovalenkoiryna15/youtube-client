import { Component } from '@angular/core';
import AppService from 'src/app/services/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export default class SettingsComponent {
  public isSettingsActive: boolean = false;

  constructor(private appService: AppService) {}

  onChange() {
    this.isSettingsActive = !this.isSettingsActive;
    this.appService.isFilterActive.next(this.isSettingsActive);
  }
}
