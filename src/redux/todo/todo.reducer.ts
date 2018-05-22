import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

export function TodosReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
  switch (action.type) {
    case TodoActions.ADD_TODO_SUCCESS: {
      const newTask = action.todo;
      return [
        ...state,
        newTask
      ];
    }
    case TodoActions.POPULATE_TODOS: {
      return action.todos;
    }
    case TodoActions.TOGGLE_TODO: {
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }else {
          return todo;
        }
      });
    }
    case TodoActions.DELETE_TODO_SUCCESS: {
      return state.filter(todo => action.id !== todo.id );
    }
    case TodoActions.UPDATE_TODO:
    case TodoActions.UPDATE_TODO_SUCCESS: {
      const updateTodo = action.todo;
      return state.map(todo => {
        if (updateTodo.id === todo.id) {
          return {
            ...updateTodo
          };
        }else {
          return todo;
        }
      });
    }
    case TodoActions.CLEAR_COMPLETED_TODO: {
      return state.filter(todo => !todo.completed );
    }
    case TodoActions.COMPLETE_ALL_TODO: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => {
        return {
          ...todo,
          completed: !areAllMarked
        };
      });
    }
    default: {
      return state;
    }
  }
}
