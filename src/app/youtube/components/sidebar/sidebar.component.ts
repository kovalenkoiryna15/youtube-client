import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  onCreate(): void {
    this.router.navigate(['youtube/admin-dashboard']);
  }

  onShowAllCards(): void {
    this.router.navigate(['youtube/admin-dashboard/cards']);
  }
}
