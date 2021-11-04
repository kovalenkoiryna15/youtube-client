import { createSelector, createFeatureSelector } from '@ngrx/store';
import { VideosState } from '../reducers';

export const selectVideosFeature = createFeatureSelector<VideosState>('videos');

export const selectVideos = createSelector(selectVideosFeature, (state: VideosState) => state.videos);

export const selectVideo = createSelector(selectVideosFeature, (state: VideosState) => state.video);

export const selectLocalVideos = createSelector(selectVideosFeature, (state: VideosState) => state.localVideos);

export const getLocalVideoInfoById = (props: { id: string }) => createSelector(selectVideosFeature, (state: VideosState) => {
  return state.localVideos.find((video) => video.id === props.id) || null;
});
