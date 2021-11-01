import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { VideoInfo } from 'src/app/shared/interfaces';
import { SearchItemModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?key=${environment.API_KEY}`;

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public searchResult: ReplaySubject<SearchItemModel[]> = new ReplaySubject(1);

  public searchValue: Subject<string> = new Subject();

  public videoItems: VideoInfo[] = [];

  constructor(private http: HttpClient) {
    this.searchValue.subscribe((value) => {
      if (value) {
        this.getSearchResult(value).subscribe((result: VideoInfo[]) => {
          this.videoItems = result;
          this.searchResult.next(result);
        });
      }
    });
  }

  search(): Observable<SearchItemModel[]> {
    return this.searchResult;
  }

  getVideoDataById(id: string): Observable<VideoInfo | null> {
    return this.searchResult.pipe(
      map((result: SearchItemModel[]) => {
        const videoData = result.find((video: VideoInfo) => video.id.videoId === id);
        return videoData || null;
      })
    );
  }

  getSearchResult(value: string): Observable<any> {
    return this.http
      .get(SEARCH_URL, {
        params: {
          order: 'viewCount',
          type: 'video',
          part: 'snippet',
          q: value,
          videoDefinition: 'high',
          maxResults: '10',
        },
      })
      .pipe(
        switchMap((result: any) => {
          console.log(result.items);
          return of([...result.items]);
        })
      );
  }
}
