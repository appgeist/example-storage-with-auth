const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const storage = require('@appgeist/storage');

const auth = require('./auth');

const [host, port] = ['0.0.0.0', 3000];

express()
  .use(cors())
  .use(helmet())
  .use(morgan(process.env.NODE_ENV === 'production' ? 'short' : 'dev'))
  .use(auth)
  .use(storage())
  .listen(port, host, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://${host}:${port}...`);
  });
