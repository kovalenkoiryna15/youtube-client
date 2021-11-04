import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VideoService } from 'src/app/core/services';
// import { LOCAL } from 'src/app/shared/constants';
import { getVideoById, loadSearchResult, loadSearchResultError, loadSearchResultSuccess, loadVideoInfoByIdError, loadVideoInfoByIdSuccess } from '../actions';
// import { getLocalVideoInfoById } from '../selectors';

@Injectable()
export class VideoEffects {
  constructor(
    private actions$: Actions,
    private videoService: VideoService,
    private readonly store: Store,
  ) {}

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

  loadVideoInfoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVideoById),
      mergeMap(
        ({ id }): Observable<Action> => {
          // if (id.includes(LOCAL)) {
          //   return this.store.select(getLocalVideoInfoById({ id })).pipe(
          //     map((video) => {
          //       console.log(video)
          //       return loadVideoInfoByIdSuccess({ video })
          //     }),
          //   );
          // }
          return this.videoService.getVideoInfoById(id).pipe(
            map((video) => loadVideoInfoByIdSuccess({ video })),
            catchError(() => of(loadVideoInfoByIdError)),
          );
        }
      ),
    ),
  );
}
