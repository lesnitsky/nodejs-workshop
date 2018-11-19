const passport = require('passport');
const { Strategy } = require('passport-github');

const User = require('../models/user-model');

passport.use(
  new Strategy(
    {
      clientID: process.env.NODEJS_WORKSHOP_GITHUB_CLIENT_ID,
      clientSecret: process.env.NODEJS_WORKSHOP_GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const user = await User.findOneOrCreate({
        id: profile.id,
        username: profile.username,
        displayName: profile.displayName || profile.username,
      });

      cb(null, user);
    },
  ),
);
