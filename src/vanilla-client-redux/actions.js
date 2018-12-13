export const FETCH_TODOS = 'FETCH_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function fetchTodos() {
  return { type: FETCH_TODOS };
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    payload: todos,
  };
}

export function receiveTodo({ id, content, isDone }) {
  return {
    type: RECEIVE_TODO,
    payload: {
      id,
      content,
      isDone,
    },
  };
}

export function createTodo({ content }) {
  return {
    type: CREATE_TODO,
    payload: {
      content,
      isDone: false,
    },
  };
}

export function updateTodo({ id, isDone }) {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      isDone,
    },
  };
}

export function deleteTodo({ id }) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}
