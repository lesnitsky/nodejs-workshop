import * as Actions from './actions';

const initialState = [];

export function todosReducer(state = initialState, action) {
  console.log('reducer', action);

  switch (action.type) {
    case Actions.RECEIVE_TODOS:
      return action.payload;

    case Actions.RECEIVE_TODO:
      return [
        ...state,
        {
          id: initialState.length,
          ...action.payload,
        },
      ];

    case Actions.UPDATE_TODO:
      return updateTodo(state, action.payload);

    case Actions.DELETE_TODO:
      return deleteTodo(state, action.payload);

    default: {
      console.log('Unknown action type', action.type);
      return state;
    }
  }
}

function updateTodo(state, { id, isDone }) {
  return state.map((todo) => {
    if (id === todo.id) {
      return {
        ...todo,
        isDone,
      };
    }
    return todo;
  });
}

function deleteTodo(state, { id }) {
  return state.filter(todo => todo.id !== id);
}
