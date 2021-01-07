import { AppStore } from '..';
import { getList } from './list.selectors';

describe('testing list selectors', () => {
  const initialState: AppStore = {
    list: {
      listItems: ['firstListItem', 'secondListItem']
    }
  };

  it('test getList selector', () => {
    const result = getList.projector(initialState.list);

    expect(result.length).toBe(2);
    expect(result[0]).toBe('firstListItem');
    expect(result[1]).toBe('secondListItem');
  });
});
