import { store } from '../redux/store';

import {
  createTodo, fetchTodos, deleteTodo, updateTodo,
} from '../redux/actions';

require('./style.css');

const todosContainer = document.createElement('div');

function render(state) {
  const markup = state.todos.map(createTodoMarkup).join('');
  todosContainer.innerHTML = markup;
}

store.subscribe(() => {
  render(store.getState());
});

function createTodoMarkup(todo) {
  return `
  <div data-id="${todo.id}" class="todo-item">
    <input type="checkbox" ${todo.isDone ? 'checked' : ''}/>
    <p>${todo.content}</p>
    <button class="delete-btn">Delete</button>
  </div>
`;
}

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'What to do';

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    store.dispatch(createTodo({ content: e.target.value }));
    e.target.value = '';
  }
});

document.body.appendChild(input);
document.body.appendChild(todosContainer);

document.body.addEventListener('click', async (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const { id } = e.target.parentNode.dataset;

    const state = store.getState();
    const todo = state.todos.find(todoToUpdate => todoToUpdate.id === id);

    const isDone = !todo.isDone;

    store.dispatch(updateTodo({ id, isDone }));
  }

  if (e.target.matches('button.delete-btn')) {
    const { id } = e.target.parentNode.dataset;
    store.dispatch(deleteTodo({ id }));
  }
});

store.dispatch(fetchTodos());
