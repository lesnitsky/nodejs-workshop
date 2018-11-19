const mongoose = require('mongoose');

const UserSchema = require('./user-schema');

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
