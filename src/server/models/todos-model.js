const mongoose = require('mongoose');

const TodoSchema = require('./todo-schema');

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports.read = async function read() {
  const todos = await TodoModel.find({}).exec();

  return todos.map(todo => todo.cleanup());
};

module.exports.readById = async function readById(id) {
  const todo = await TodoModel.findOne({ _id: id })
    .populate('creator')
    .exec();

  return todo.cleanup();
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

module.exports.update = async function update({
  id, content, isDone, creator,
}) {
  const updateObj = {
    creator: mongoose.Types.ObjectId(creator),
  };

  if (content) {
    updateObj.content = content;
  }

  if (typeof isDone === 'boolean') {
    updateObj.isDone = isDone;
  }

  await TodoModel.findByIdAndUpdate({ _id: id }, updateObj).exec();
};
