const bodyParser = require('body-parser');
const morgan = require('morgan');

class PreMiddleware {
  init(app) {
    app.use(morgan('tiny'));
    app.use(bodyParser.json());
  }
}

module.exports = PreMiddleware;