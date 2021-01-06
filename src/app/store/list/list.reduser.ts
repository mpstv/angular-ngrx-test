import {createReducer, on} from '@ngrx/store';

import { addListItem } from './list.actions';
import { ListState } from './list.state';

const INITIAL_LIST_STATE: ListState = {
  listItems: ['first list item', 'second list item']
};

export const listReducer = createReducer(
  INITIAL_LIST_STATE,
  on(addListItem, (state, { listItem }) => {
    return {
      ...state,
      listItems: [...state.listItems, listItem ]
    };
  })
);
