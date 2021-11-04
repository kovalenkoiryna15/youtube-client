import { createReducer, on } from '@ngrx/store';
import { VideoInfo } from 'src/app/shared/interfaces';
import _ from 'lodash';
import { addVideo, deleteVideo, loadSearchResultSuccess, loadVideoInfoByIdSuccess } from '../actions';

export interface VideosState {
  videos: VideoInfo[];
  localVideos: VideoInfo[];
  video: VideoInfo | null;
}

const initialState: VideosState = {
  videos: [],
  localVideos: [],
  video: null,
};

export const videoReducer = createReducer(
  initialState,
  on(addVideo, (state, { videoInfo }) => ({
    ..._.cloneDeep(state),
    localVideos: [...state.localVideos, videoInfo],
  })),
  on(deleteVideo, (state, { id }) => ({
    ..._.cloneDeep(state),
    videos: state.videos.filter((video) => video.id !== id),
    localVideos: state.localVideos.filter((video) => video.id !== id),
  })),
  on(loadSearchResultSuccess, (state, { videos }) => ({
    ..._.cloneDeep(state),
    videos,
  })),
  on(loadVideoInfoByIdSuccess, (state, { video }) => ({
    ..._.cloneDeep(state),
    video,
  })),
);
