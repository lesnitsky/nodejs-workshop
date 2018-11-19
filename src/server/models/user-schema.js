const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  id: Types.String,
  username: Types.String,
  displayName: Types.String,
});

UserSchema.statics.findOneOrCreate = async function findOneOrCreate(condition) {
  let user = await this.findOne(condition);

  if (!user) {
    user = await this.create(condition);
  }

  return user;
};

module.exports = UserSchema;
