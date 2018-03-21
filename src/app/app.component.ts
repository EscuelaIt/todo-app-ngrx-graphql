import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../redux/app.reducer';
import { Todo } from './../redux/todo/todo.model';
import * as TodoActions from './../redux/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private store: Store<AppState>,
  ) {
  }

  load() {
    this.store.dispatch(new TodoActions.LoadTodosAction());
  }

}
