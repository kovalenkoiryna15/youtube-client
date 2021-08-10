import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoService } from 'src/app/core/services';
import { VideoInfo } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit, OnDestroy {
  public id: string = '';

  public videoData?: VideoInfo;

  public subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params
        .pipe(
          switchMap((params: Params) => {
            return this.videoService.getVideoDataById(params.id);
          })
        )
        .subscribe((video: VideoInfo | null) => {
          if (video) this.videoData = video;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
