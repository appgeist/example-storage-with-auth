const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const storage = require('@appgeist/storage');
const delay = require('delay');

const [host, port] = ['0.0.0.0', 3000];

express()
  .use(cors())
  .use(helmet())
  .use(morgan(process.env.NODE_ENV === 'production' ? 'short' : 'dev'))
  .use(
    storage({
      uploadTokenValidationHandler: async (token) => {
        await delay(1000); // wait to simulate an authentication API call
        return token === '--DUMMY-TOKEN--';
      },
      // You'll have to authenticate your GET requests if you set the next handler
      serveTokenValidationHandler: async (token) => {
        await delay(500); // wait to simulate an authentication API call
        return token === '--DUMMY-TOKEN--';
      }
    })
  )
  .listen(port, host, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Server listening on http://${host}:${port}...`);
  });
