import { Component, OnInit } from '@angular/core';
import { SearchItemModel } from './search-item/search-item.model';

import MOCK_RESPONSE from '../../mocks/response.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent implements OnInit {
  public searchResultList: SearchItemModel[] = [];

  ngOnInit() {
    this.searchResultList = MOCK_RESPONSE.items;
  }
}
