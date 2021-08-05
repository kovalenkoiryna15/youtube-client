import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { VideoListResponse } from '../common/interfaces';
import MOCK_RESPONSE from '../common/mocks/response.json';
import { SearchItemModel } from '../common/models';

@Injectable()
export default class VideoService {
  public mockResponse: VideoListResponse = MOCK_RESPONSE;

  public searchResult: Subject<SearchItemModel[]> = new Subject();

  public searchValue: Subject<string> = new Subject();

  constructor() {
    this.searchValue.subscribe((value) => {
      if (value) {
        this.searchResult.next(this.mockResponse.items);
      } else {
        this.searchResult.next([]);
      }
    });
  }

  search(): Observable<SearchItemModel[]> {
    return this.searchResult;
  }
}
