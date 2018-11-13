const { readTodos, writeTodos } = require('./db');

module.exports.read = async function read() {
  const todos = await readTodos();

  return todos;
};

module.exports.create = async function create({ content, isDone }) {
  const data = await readTodos();
  const todos = JSON.parse(data);

  if (!content || typeof isDone === 'undefined') {
    throw new Error();
  }

  todos.push({
    content,
    isDone,
    id: Math.random(),
  });

  await writeTodos(todos);
};

module.exports.deleteById = async function deleteById(id) {
  const data = await readTodos();
  let todos = JSON.parse(data);

  todos = todos.filter(todo => todo.id !== id);

  await writeTodos(todos);
};

module.exports.update = async function update({ id, content, isDone }) {
  const data = await readTodos();
  const todos = JSON.parse(data);

  const todoToUpdate = todos.find(todo => todo.id === id);

  if (content !== undefined) {
    todoToUpdate.conent = content;
  }

  if (isDone !== undefined) {
    todoToUpdate.isDone = isDone;
  }

  await writeTodos(todos);
};
