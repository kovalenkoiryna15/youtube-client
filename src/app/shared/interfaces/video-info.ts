import { VideoSnippet } from './video-snippet';
import { VideoStatistics } from './video-statistics';

export interface VideoInfo {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
  source: string;
}
