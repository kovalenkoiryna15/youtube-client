import { VideoSnippet } from './video-snippet';
import { VideoStatistics } from './video-statistics';

export interface VideoInfo {
  kind: string;
  etag: string;
  id: {
    kind: 'string';
    videoId: 'string';
  };
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}
