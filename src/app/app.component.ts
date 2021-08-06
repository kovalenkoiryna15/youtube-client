import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'youtube-client';

  private isDarkTheme: boolean = true;

  @HostBinding('class.dark-style') get theme(): boolean {
    return this.isDarkTheme;
  }
}
