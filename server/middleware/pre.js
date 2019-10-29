const bodyParser = require('body-parser');
const morgan = require('morgan');

class PreMiddleware {

  // Initialize pre middleware
  init(app) {
    app.use(morgan('tiny'));
    app.use(bodyParser.json());
  }
}

module.exports = PreMiddleware;