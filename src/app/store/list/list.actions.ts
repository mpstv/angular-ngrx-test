import { createAction, props } from '@ngrx/store';

export const addListItem = createAction(
  '[ListItems] Add List Item',
  props<{ listItem: string }>()
);
