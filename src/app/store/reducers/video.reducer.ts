import { createReducer, on } from '@ngrx/store';
import { VideoInfo } from 'src/app/shared/interfaces';
import { CardFormData } from 'src/app/shared/models';
import _ from 'lodash';
import { addVideo, deleteVideo, loadSearchResultSuccess } from '../actions';
import mocks from '../../shared/mocks/response.json';

export interface VideosState {
  videos: (VideoInfo | CardFormData)[];
}

const initialState: VideosState = {
  videos: mocks.items,
};

export const videoReducer = createReducer(
  initialState,
  on(addVideo, (state, { videoInfo }) => ({
    ..._.cloneDeep(state),
    videos: [...state.videos, videoInfo],
  })),
  on(deleteVideo, (state, { id }) => ({
    ..._.cloneDeep(state),
    videos: state.videos.filter((video) => video.id !== id),
  })),
  on(loadSearchResultSuccess, (state, { videos }) => ({
    ..._.cloneDeep(state),
    videos,
  })),
);
