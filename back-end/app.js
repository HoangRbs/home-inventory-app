const welcomeRouter = require('./routes/welcome');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const {
  notFoundUrl,
  globalErrHandler
} = require('./controllers/errorController');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());

app.use('/',welcomeRouter);

app.use(notFoundUrl);
app.use(globalErrHandler);

module.exports = app;