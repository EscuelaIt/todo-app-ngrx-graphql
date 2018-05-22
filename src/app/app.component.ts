import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../redux/app.reducer';
import { Todo } from './../redux/todo/todo.model';
import * as TodoActions from './../redux/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(new TodoActions.LoadTodosAction());
  }

}
