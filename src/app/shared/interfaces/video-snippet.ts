import { VideoThumbnails } from './video-thumbnails';

export interface VideoSnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelId?: string;
  channelTitle: string;
  tags: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}
