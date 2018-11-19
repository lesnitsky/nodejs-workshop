const { Router } = require('express');
const passport = require('passport');

const authRouter = new Router();

authRouter.get('/github', (req, res, next) => {
  passport.authenticate('github', { session: true })(req, res, next);
});

authRouter.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
