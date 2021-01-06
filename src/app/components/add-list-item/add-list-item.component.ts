import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store';
import { addListItem } from 'src/app/store/list/list.actions';

@Component({
  selector: 'app-add-list-item',
  templateUrl: 'add-list-item.component.html'
})

export class AddListItemComponent {
  addListItemForm = this.fb.group({
    listItem: ['']
  });

  constructor(private fb: FormBuilder, private store: Store<AppStore>) {}

  addListItem(): void {
    this.store.dispatch(addListItem({ listItem: this.addListItemForm.value.listItem }));
  }
}
