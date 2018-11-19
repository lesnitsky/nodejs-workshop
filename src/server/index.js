const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const authRouter = require('./routers/auth-router');
const todosRouter = require('./routers/todos-router');
const usersRouter = require('./routers/users-router');

require('./auth/config');

mongoose.connect('mongodb://localhost/todos');

const app = express();

app.use(express.static('static'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressSession({ secret: 'SOME SECRET KEY' }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/auth', authRouter);

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login.html');
  }
});

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

/* eslint-disable */
app.use((err, req, res, _) => {
  /* eslint-enable */
  res.status(500).send('Smth went wrong');
});

app.listen(3000);
