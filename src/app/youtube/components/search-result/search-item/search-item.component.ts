import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteVideo } from 'src/app/store/actions';
import { SearchItemModel } from '../../../../shared/models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() public searchItem!: SearchItemModel;

  constructor(private router: Router, private readonly store: Store) {}

  onShowDetailedInfo(): void {
    this.router.navigate([`youtube/detailed-info/${this.searchItem.id}`]);
  }

  onDelete(): void {
    this.store.dispatch(deleteVideo({ id: this.searchItem.id }));
  }
}
