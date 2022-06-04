'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))

  .use(express.json())

  // REST endpoints
  .get('*', (req, res) => {
    res.status(200).json({ message: 'OK' });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
