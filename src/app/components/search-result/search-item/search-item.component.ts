import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SearchItemModel } from '../../../common/models/search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchItemComponent implements OnInit {
  @Input() public searchItem!: SearchItemModel;

  public date: string = '';

  ngOnInit() {
    this.date = new Date(this.searchItem.snippet.publishedAt).toLocaleString(
      'ru-RU',
      {
        timeZone: 'UTC',
        hour12: true,
      }
    );
  }
}
