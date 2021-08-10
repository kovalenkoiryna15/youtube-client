import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { VideoListResponse } from 'src/app/shared/interfaces';
import MOCK_RESPONSE from 'src/app/shared/mocks/response.json';
import { SearchItemModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public mockResponse: VideoListResponse = MOCK_RESPONSE;

  public searchResult: Subject<SearchItemModel[]> = new Subject();

  public searchValue: Subject<string> = new Subject();

  constructor() {
    this.searchValue.subscribe((value) => {
      if (value) {
        console.log(value);
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
