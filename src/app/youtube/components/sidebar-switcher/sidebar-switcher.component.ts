import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-switcher',
  templateUrl: './sidebar-switcher.component.html',
  styleUrls: ['./sidebar-switcher.component.scss'],
})
export class SidebarSwitcherComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();

  public isOpen: boolean = false;

  onToggle(): void {
    this.isOpen = !this.isOpen;
    this.toggleSidebar.emit(this.isOpen);
  }
}
