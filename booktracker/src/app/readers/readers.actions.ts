import { createAction, props } from '@ngrx/store';
import { Reader } from '../models/reader';

export const updateReaderOfTheMonth = createAction(
  '[EditReader Component] Update Reader of the Month',
  props<{readerOfTheMonth: Reader}>()
);
