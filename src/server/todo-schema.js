const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
  content: Types.String,
  isDone: Types.Boolean,
  creator: { type: Types.ObjectId, ref: 'User' },
});

TodoSchema.methods.cleanup = function cleanup() {
  return {
    isDone: this.isDone,
    content: this.content,
    id: this._id, // eslint-disable-line
    creator: this.creator,
  };
};

module.exports = TodoSchema;
