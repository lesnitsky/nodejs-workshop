const mongoose = require('mongoose');

const TodoSchema = require('./todo-schema');

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports.read = async function read() {
  const todos = await TodoModel.find({}).exec();

  return todos;
};

module.exports.readById = async function readById(id) {
  const todos = await TodoModel.findOne({ _id: id }).exec();

  return todos;
};

module.exports.create = async function create({ content, isDone }) {
  await TodoModel.create({
    content,
    isDone,
  });
};

module.exports.deleteById = async function deleteById(id) {
  await TodoModel.findOneAndDelete({ _id: id }).exec();
};

module.exports.update = async function update({ id, content, isDone }) {
  const updateObj = {};

  if (content) {
    updateObj.content = content;
  }

  if (typeof isDone === 'boolean') {
    updateObj.isDone = isDone;
  }

  await TodoModel.findByIdAndUpdate({ _id: id }, updateObj).exec();
};
