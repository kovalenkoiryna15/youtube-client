import { createSelector, createFeatureSelector } from '@ngrx/store';
import { VideosState } from '../reducers';

export const selectVideosFeature = createFeatureSelector<VideosState>('videos');

export const selectVideos = createSelector(
  selectVideosFeature,
  (state: VideosState) => state.videos,
);
