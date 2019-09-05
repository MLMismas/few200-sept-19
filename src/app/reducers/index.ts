import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions
const selectCounter = (state: AppState) => state.counter;

export const selectCurrentCount = createSelector(selectCounter, c => c.current); // (state: AppState) => state.counter.current;

export const selectCountBy = createSelector(selectCounter, c => c.by);

export const selectDecrementDisabled = createSelector(selectCurrentCount, selectCountBy, (c, b) => (c - b) < 0);




