import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { addListItem } from 'src/app/store/list/list.actions';
import { AddListItemComponent } from './add-list-item.component';

describe('test list component', () => {
  let mockStore: MockStore;
  let fixture: ComponentFixture<AddListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, ReactiveFormsModule],
      declarations: [AddListItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore()]
    });

    fixture = TestBed.createComponent(AddListItemComponent);
    mockStore = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('check action call', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    inputElement.value = 'new list item';
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).nativeElement.click();
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledOnceWith(addListItem({ listItem: 'new list item' }));
  });
});
