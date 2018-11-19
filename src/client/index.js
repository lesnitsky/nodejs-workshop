require('./style.css');

const header = document.createElement('div');

function createTodoNode(todo) {
  const div = document.createElement('div');
  div.innerHTML = `
  <div data-id="${todo.id}" class="todo-item">
    <input type="checkbox" ${todo.isDone ? 'checked' : ''}/>
    <p>${todo.content}</p>
  </div>
`;
  return div;
}

async function fetchTodos() {
  const res = await fetch('/todos');
  const todos = await res.json();

  return todos;
}

async function createTodo({ content, isDone }) {
  const body = JSON.stringify({ content, isDone });

  const res = await fetch('/todos', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body,
  });

  const todo = await res.json();

  return todo;
}

(async () => {
  const res = await fetch('/users/me');

  if (res.redirected) {
    window.location.href = res.url;
  }

  const body = await res.json();

  header.innerHTML = `<p>${body.username}</p>`;
  document.body.appendChild(header);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'What to do';

  input.addEventListener('keypress', async (e) => {
    if (e.keyCode === 13) {
      const todo = await createTodo({ content: e.target.value, isDone: false });

      const div = createTodoNode(todo);
      document.body.appendChild(div);

      e.target.value = '';
    }
  });

  document.body.appendChild(input);

  const todos = await fetchTodos();
  console.log(todos);

  todos.forEach((todo) => {
    const div = createTodoNode(todo);
    document.body.appendChild(div);
  });
})();
