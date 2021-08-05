import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SearchItemModel } from '../../../common/models/search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchItemComponent {
  @Input() public searchItem!: SearchItemModel;
}
