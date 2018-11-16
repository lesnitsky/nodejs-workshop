const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const TodoSchema = mongoose.Schema({
  content: Types.String,
  isDone: Types.Boolean,
});

module.exports = TodoSchema;
