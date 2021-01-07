import { addListItem } from './list.actions';
import { listReducer } from './list.reduser';
import { ListState } from './list.state';

describe('testing list reducer', () => {
  it('test addListItem action', () => {
    const initialState: ListState = {
      listItems: ['first list item', 'second list item']
    };
    const newListItem = 'new list item';

    const state = listReducer(initialState, addListItem({ listItem: newListItem }));

    expect(state).toEqual({...initialState, listItems: [...initialState.listItems, newListItem]});
  });
});
