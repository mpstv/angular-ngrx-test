import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListState } from './list.state';

const getListState = createFeatureSelector<ListState>('list');

export const getList = createSelector(getListState, (state: ListState) => state.listItems);
