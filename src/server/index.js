const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { handler } = require('./calc');
const todosRouter = require('./todos-router');
const usersRouter = require('./users-router');

mongoose.connect('mongodb://localhost/todos');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/calc', handler);

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

/* eslint-disable */
app.use((err, req, res, _) => {
  /* eslint-enable */
  res.status(500).send('Smth went wrong');
});

app.listen(3000);
