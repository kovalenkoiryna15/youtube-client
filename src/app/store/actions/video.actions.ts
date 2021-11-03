import { createAction, props } from '@ngrx/store';
import { VideoInfo } from 'src/app/shared/interfaces';
import { CardFormData } from 'src/app/shared/models';

export const addVideo = createAction('[Admin Dashboard] Create card', props<{ videoInfo: CardFormData }>());

export const deleteVideo = createAction('[Admin Dashboard] Delete card', props<{ id: string }>());

export const loadSearchResult = createAction('[Youtube Page] Load Search Result', props<{ value: string }>());

export const loadSearchResultSuccess = createAction(
  '[Youtube Page] Load Search Result Success',
  props<{ videos: VideoInfo[] }>(),
);
export const loadSearchResultError = createAction('[Youtube Page] Load Search Result Error');
