const delay = require('delay');
const { UNAUTHORIZED, FORBIDDEN, getStatusText } = require('http-status-codes');

module.exports = async ({ method, headers }, res, next) => {
  if (method === 'POST') {
    if (headers && headers.authorization) {
      const [name, token] = headers.authorization.split(' ');
      if (name.toLowerCase() === 'bearer') {
        // wait 500ms to emulate an expensive API call
        await delay(500);
        if (token === '--DUMMY-TOKEN--') return next();
        return res.status(FORBIDDEN).send({ message: getStatusText(FORBIDDEN) });
      }
    }
    return res.status(UNAUTHORIZED).send({ message: getStatusText(UNAUTHORIZED) });
  }
  return next();
};
