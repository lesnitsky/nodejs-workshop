export async function fetchTodos() {
  const res = await fetch('/todos');
  const todos = await res.json();

  return todos;
}

export async function createTodo({ content, isDone }) {
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

export async function updateTodo({ id, isDone }) {
  const body = JSON.stringify({ isDone });

  await fetch(`/todos/${id}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body,
  });
}

export async function deleteTodo({ id }) {
  await fetch(`/todos/${id}`, {
    method: 'delete',
  });
}
