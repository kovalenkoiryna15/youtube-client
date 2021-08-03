import { Component, OnInit } from '@angular/core';
import VideoService from 'src/app/services/video.service';
import { SearchItemModel } from '../../common/models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent implements OnInit {
  public searchResultList: SearchItemModel[] = [];

  constructor(public videoService: VideoService) {}

  ngOnInit() {
    this.videoService
      .search()
      .subscribe((result) => (this.searchResultList = result));
  }
}
