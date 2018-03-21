import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { LOAD_TODOS, POPULATE_TODOS, PopulateTodosAction } from './todo.actions';

const SERVER_GRAPHQL = 'http://localhost:4300/graphql';

@Injectable()
export class TodoEffects {

  @Effect() loadTodos$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_TODOS),
    mergeMap(action => {
      const query = `{
        allTasks{
          id
          text
          completed
        }
      }`;
      return this.http.post(SERVER_GRAPHQL, {query})
      .pipe(
        map((response: any) => {
          return new PopulateTodosAction(response.data.allTasks);
        }),
        catchError(() => of({ type: 'LOGIN_FAILED' }))
      );
    })
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {}
}
