const welcomeRouter = require('./routes/welcome');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const api = require('./api/api');
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

// when we create a new folder api v2 with new routes
// this structure is for people who is still using v1
app.use('/api/v1', api);   

app.use(notFoundUrl);
app.use(globalErrHandler);

module.exports = app;