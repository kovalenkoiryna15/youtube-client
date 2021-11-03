import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VideoService } from 'src/app/core/services';
import { loadSearchResult, loadSearchResultError, loadSearchResultSuccess } from '../actions';

@Injectable()
export class VideoEffects {
  constructor(private actions$: Actions, private videoService: VideoService) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSearchResult),
      mergeMap(
        ({ value }): Observable<Action> =>
          this.videoService.getSearchResult(value).pipe(
            map((videos) => loadSearchResultSuccess({ videos })),
            catchError(() => of(loadSearchResultError)),
          ),
      ),
    ),
  );
}
