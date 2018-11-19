const passport = require('passport');
const User = require('../models/user-model');

require('./github-strategy');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ id }, (err, user) => {
    done(err, user);
  });
});
