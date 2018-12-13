import * as Actions from './actions';
import {
  createTodo, deleteTodo, updateTodo, fetchTodos,
} from './service';

export const todosMiddleware = store => next => (action) => {
  switch (action.type) {
    case Actions.FETCH_TODOS:
      fetchTodos().then(todos => store.dispatch(Actions.receiveTodos(todos)));
      break;

    case Actions.CREATE_TODO:
      createTodo(action.payload).then((todo) => {
        store.dispatch(Actions.receiveTodo(todo));
      });
      break;

    case Actions.DELETE_TODO:
      deleteTodo(action.payload);
      break;

    case Actions.UPDATE_TODO:
      updateTodo(action.payload);
      break;

    default:
      return next(action);
  }

  return next(action);
};
