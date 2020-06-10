const app = require('./app');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

app.use(express.json());
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());

app.get();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app listenning on port ${port}`)
});