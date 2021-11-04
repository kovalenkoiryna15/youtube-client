import { createAction, props } from '@ngrx/store';
import { VideoInfo } from 'src/app/shared/interfaces';

export const getVideoById = createAction(
  '[Admin Dashboard or Youtube Page] Load Detailed Video',
  props<{ id: string }>(),
);

export const loadVideoInfoByIdSuccess = createAction(
  '[Admin Dashboard or Youtube Page] Load Detailed Video Success',
  props<{ video: VideoInfo | null }>(),
);

export const loadVideoInfoByIdError = createAction(
  '[Admin Dashboard or Youtube Page] Load Detailed Video Error',
);

export const addVideo = createAction(
  '[Admin Dashboard] Create card',
  props<{ videoInfo: VideoInfo }>(),
);

export const deleteVideo = createAction(
  '[Admin Dashboard] Delete card',
  props<{ id: string }>(),
);

export const loadSearchResult = createAction(
  '[Youtube Page] Load Search Result',
  props<{ value: string }>(),
);

export const loadSearchResultSuccess = createAction(
  '[Youtube Page] Load Search Result Success',
  props<{ videos: VideoInfo[] }>(),
);

export const loadSearchResultError = createAction(
  '[Youtube Page] Load Search Result Error',
);
