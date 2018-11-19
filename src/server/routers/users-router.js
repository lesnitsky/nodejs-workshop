const express = require('express');

const UserModel = require('../models/user-model');
const asyncHandler = require('../utils');

const router = new express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await UserModel.find({}).exec();

    res.json(users);
    res.end();
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findById({ _id: id });

    res.json(user);
    res.end();
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { name } = req.body;
    await UserModel.create({ name });

    res.end();
  }),
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    await UserModel.findByIdAndRemove(id);

    res.end();
  }),
);

router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    await UserModel.findByIdAndUpdate({ _id: id }, { name });

    res.end();
  }),
);

module.exports = router;
