import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LOCAL } from 'src/app/shared/constants';
import { VideoInfo } from 'src/app/shared/interfaces';
import { getVideoById } from 'src/app/store/actions';
import { getLocalVideoInfoById, selectVideo } from 'src/app/store/selectors';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  public id: string = '';

  public videoInfo$: Observable<VideoInfo | null> = this.store.select(selectVideo);

  public video: VideoInfo | null = null;

  public subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params
        .pipe(switchMap((params: Params) => of(params.id)))
        .subscribe((id) => {
          if (typeof id === 'string' && id.includes(LOCAL)) {
            this.videoInfo$ = this.store.select(getLocalVideoInfoById({ id }))
          } else {
            this.store.dispatch(getVideoById({ id }))
          }
        })
    );

    this.subscriptions.add(
      this.videoInfo$.subscribe((video: VideoInfo | null) => {
        console.log(video)
        if (video) this.video = video;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onGoBack(): void {
    this.router.navigate(['youtube']);
  }
}
