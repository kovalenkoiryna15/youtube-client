import { createAction, props } from '@ngrx/store';
import { CardFormData } from 'src/app/shared/models';

export const addVideo = createAction(
  '[Admin Dashboard] Create card',
  props<{ videoInfo: CardFormData }>(),
);

export const deleteVideo = createAction(
  '[Admin Dashboard] Delete card',
  props<{ id: string }>(),
);
