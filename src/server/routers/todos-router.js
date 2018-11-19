const express = require('express');

const todosModel = require('../models/todos-model');
const asyncHandler = require('../utils');

const router = new express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await todosModel.read();

    res.json(todos);
    res.end();
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const todo = await todosModel.readById(id);

    res.json(todo);
    res.end();
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { content, isDone } = req.body;
    const todo = await todosModel.create({ content, isDone });

    res.json(todo.cleanup());
    res.end();
  }),
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    await todosModel.deleteById(id);

    res.end();
  }),
);

router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { content, isDone } = req.body;

    await todosModel.update({ id, content, isDone });

    res.end();
  }),
);

module.exports = router;
