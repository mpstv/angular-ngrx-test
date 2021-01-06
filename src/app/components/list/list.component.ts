import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/store';
import { getList } from 'src/app/store/list/list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html'
})

export class ListComponent {
  public list$: Observable<string[]> = this.store.select(getList);

  constructor(private store: Store<AppStore>) {}
}
