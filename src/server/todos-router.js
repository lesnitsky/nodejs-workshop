const express = require('express');

const todosModel = require('./todos-model');
const asyncHandler = require('./utils');

const router = new express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await todosModel.read();

    res.append('Content-Type', 'application/json');
    res.write(todos);

    res.end();
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { content, isDone } = req.body;
    await todosModel.create({ content, isDone });

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
