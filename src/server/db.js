const fs = require('fs');
const path = require('path');

const pathToTodosFile = path.join(__dirname, '../../data/todos.json');

module.exports.readTodos = async function readTodos() {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(pathToTodosFile, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data.toString());
    });
  });

  const data = await promise;
  return data;
};

module.exports.writeTodos = async function writeTodos(todos) {
  const data = JSON.stringify(todos, null, 2);

  const promise = new Promise((resolve, reject) => {
    fs.writeFile(pathToTodosFile, data, err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });

  await promise;
};
