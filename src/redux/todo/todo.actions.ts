import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const LOAD_TODOS    = '[TODO] load';
export const ADD_TODO    = '[TODO] add';
export const ADD_TODO_SUCCESS = '[TODO] add success';
export const DELETE_TODO = '[TODO] delete';
export const DELETE_TODO_SUCCESS = '[TODO] delete success';
export const TOGGLE_TODO = '[TODO] toggle';
export const UPDATE_TODO = '[TODO] update';
export const UPDATE_TODO_SUCCESS = '[TODO] update success';
export const POPULATE_TODOS  = '[TODO] populate';
export const CLEAR_COMPLETED_TODO = '[TODO] clear completed';
export const COMPLETE_ALL_TODO = '[TODO] complete all';

export class LoadTodosAction implements Action {
  readonly type = LOAD_TODOS;

  constructor() {}
}

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(
    public text: string,
  ) {}
}

export class AddTodoSuccessAction implements Action {
  readonly type = ADD_TODO_SUCCESS;

  constructor(
    public todo: Todo
  ) {}
}

export class PopulateTodosAction implements Action {
  readonly type = POPULATE_TODOS;

  constructor(
    public todos: Todo[]
  ) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(
    public id: number
  ) {}
}

export class DeleteTodoSuccessAction implements Action {
  readonly type = DELETE_TODO_SUCCESS;

  constructor(
    public id: number
  ) {}
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public id: number
  ) {}
}

export class UpdateAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(
    public todo: Todo
  ) {}
}

export class UpdateActionSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;

  constructor(
    public todo: Todo
  ) {}
}

export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export class CompletedAllAction implements Action {
  readonly type = COMPLETE_ALL_TODO;
}

export type TodoActionType =
AddTodoAction |
AddTodoSuccessAction |
PopulateTodosAction |
ToggleAction |
DeleteTodoAction |
DeleteTodoSuccessAction |
UpdateAction |
UpdateActionSuccess |
ClearCompletedAction |
CompletedAllAction;
