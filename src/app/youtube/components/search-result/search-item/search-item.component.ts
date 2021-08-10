import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItemModel } from '../../../../shared/models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() public searchItem!: SearchItemModel;

  constructor(private router: Router) {}

  onShowDetailedInfo() {
    this.router.navigate([`/${this.searchItem.id}`]);
  }
}
