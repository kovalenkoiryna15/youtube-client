import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { VideoInfo } from 'src/app/shared/interfaces';
import { SearchItemModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly SEARCH_URL = `search`;

  private readonly VIDEOS_URL = `videos`;

  public searchResult: ReplaySubject<SearchItemModel[]> = new ReplaySubject(1);

  public searchValue: Subject<string> = new Subject();

  public videoItems: VideoInfo[] = [];

  constructor(private http: HttpClient) {
    this.searchValue
      .pipe(
        map((value: any) => value),
        debounceTime(500)
      )
      .subscribe((value) => {
        this.getSearchResult(value).subscribe((videos: any[]) => {
          const batch = videos.map((video) => this.getVideoInfoById(video.id.videoId));
          forkJoin(batch).subscribe((data: VideoInfo[]) => {
            this.searchResult.next(data);
            this.videoItems = data;
          });
        });
      });
  }

  search(): Observable<SearchItemModel[]> {
    return this.searchResult;
  }

  getSearchResult(value: string): Observable<any> {
    return this.http
      .get(this.SEARCH_URL, {
        params: {
          order: 'viewCount',
          type: 'video',
          part: 'snippet',
          q: value,
          videoDefinition: 'high',
          maxResults: '10',
        },
      })
      .pipe(map((data: any) => data.items));
  }

  getVideoInfoById(id: string): Observable<VideoInfo> {
    return this.http
      .get(this.VIDEOS_URL, {
        params: {
          id,
          part: 'snippet,statistics',
        },
      })
      .pipe(map((data: any) => data.items[0]));
  }
}
