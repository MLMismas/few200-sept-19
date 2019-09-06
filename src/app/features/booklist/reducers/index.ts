
export const featureName = 'booklistFeature';
import * as fromList from './booklist.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface BookListState {
  list: fromList.BookListState;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors

const selectBooklistFeature = createFeatureSelector<BookListState>(featureName);

const selectBooklistBranch = createSelector(selectBooklistFeature, f => f.list);

const { selectAll: selectAllListEntites } = fromList.adapter.getSelectors(selectBooklistBranch);

export const selectBooklistItems = createSelector(selectAllListEntites, e => e as models.BooklistListItem[]);
