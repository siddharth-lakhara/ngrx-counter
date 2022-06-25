import { createSelector } from '@ngrx/store';
import { AppState, RootState } from './state.types';

const selectCounterFeature = (state: RootState) => state.counter;

export const selectCount = createSelector(
  selectCounterFeature,
  (state: AppState) => {
    return state.count;
  }
);
