const express = require('express');

const todosModel = require('./todos-model');

const router = new express.Router();

router.get('/', async (req, res) => {
  const todos = todosModel.read();

  res.append('Content-Type', 'application/json');
  res.write(todos);

  res.end();
});

router.post('/', async (req, res) => {
  const { content, isDone } = req.body;
  todosModel.create({ content, isDone });

  res.end();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  todosModel.deleteById(id);

  res.end();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content, isDone } = req.body;

  todosModel.update({ id, content, isDone });

  res.end();
});

module.exports = router;
