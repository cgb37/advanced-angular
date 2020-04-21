import { Action, createReducer, on } from '@ngrx/store';
import * as ReaderActions from './readers.actions';
import { Reader } from '../models/reader';
import { allReaders } from '../data';

export interface ReadersState {
  readerOfTheMonth: Reader
}

export const initialState: ReadersState = {
  readerOfTheMonth: allReaders[0]
}

const _readersReducer = createReducer(
  initialState,
  on(ReaderActions.updateReaderOfTheMonth, (state, { readerOfTheMonth }) => ({ ...state, readerOfTheMonth: readerOfTheMonth }))
);

export function readersReducer(state: ReadersState | undefined, action: Action) {
  return _readersReducer(state, action);
}
