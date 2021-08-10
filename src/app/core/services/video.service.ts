import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoInfo, VideoListResponse } from 'src/app/shared/interfaces';
import MOCK_RESPONSE from 'src/app/shared/mocks/response.json';
import { SearchItemModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public mockResponse: VideoListResponse = MOCK_RESPONSE;

  public searchResult: ReplaySubject<SearchItemModel[]> = new ReplaySubject(1);

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

  getVideoDataById(id: string): Observable<VideoInfo | null> {
    return this.searchResult.pipe(
      map((result: SearchItemModel[]) => {
        const videoData = result.find((video: VideoInfo) => video.id === id);
        if (videoData) {
          return videoData;
        }
        return null;
      })
    );
  }
}
