const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { handler } = require('./calc');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const pathToTodosFile = path.join(__dirname, '../../data/todos.json');

async function readTodos() {
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
}

async function writeTodos(todos) {
  const data = JSON.stringify(todos, null, 2);

  const promise = new Promise((resolve, reject) => {
    fs.writeFile(pathToTodosFile, data, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });

  await promise;
}

app.get('/calc', handler);

app.get('/todos', async (req, res) => {
  try {
    const todos = await readTodos();

    res.append('Content-Type', 'application/json');
    res.write(todos);
  } catch (err) {
    res.sendStatus(500);
  }

  res.end();
});

app.post('/todos', async (req, res) => {
  try {
    const data = await readTodos();
    const todos = JSON.parse(data);

    const { content, isDone } = req.body;

    todos.push({
      content,
      isDone,
      id: Math.random(),
    });

    await writeTodos(todos);
  } catch (err) {
    res.sendStatus(500);
  }

  res.end();
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await readTodos();
    let todos = JSON.parse(data);

    todos = todos.filter(todo => todo.id !== id);

    await writeTodos(todos);
  } catch (err) {
    res.sendStatus(500);
  }

  res.end();
});

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, isDone } = req.body;

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
  } catch (err) {
    res.sendStatus(500);
  }

  res.end();
});

app.listen(3000);
