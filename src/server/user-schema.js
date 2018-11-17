const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: Types.String,
});

module.exports = UserSchema;
