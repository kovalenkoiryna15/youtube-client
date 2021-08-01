import { PageInfo } from './page-info';
import { VideoInfo } from './video-info';

export interface VideoListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoInfo[];
}
