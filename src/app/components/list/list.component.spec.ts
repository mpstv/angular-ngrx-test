import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { getList } from 'src/app/store/list/list.selectors';
import { ListState } from 'src/app/store/list/list.state';
import { ListComponent } from './list.component';

describe('test list component', () => {
  let mockStore: MockStore;
  let fixture: ComponentFixture<ListComponent>;
  let mockListItemsSelector: MemoizedSelector<ListState, string[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore()]
    });

    fixture = TestBed.createComponent(ListComponent);
    mockStore = TestBed.inject(MockStore);

    mockListItemsSelector = mockStore.overrideSelector(
      getList,
      ['mock list']
    );

    fixture.detectChanges();
  });

  it('check header', () => {
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toBe('List:');
  });

  it('check list items', () => {
    const list = fixture.debugElement.queryAll(By.css('ul li'));

    expect(list.length).toBe(1);
    expect(String(list[0].nativeElement.textContent).trim()).toBe('mock list');
  });
});
