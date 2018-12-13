import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todosReducer } from './reducer';
import { todosMiddleware } from './middleware';

const store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  applyMiddleware(todosMiddleware),
);

export { store };
