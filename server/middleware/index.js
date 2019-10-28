const PreMiddleware = require('./pre');
const PostMiddleware = require('./post');

class ConfigureMiddleware {
  constructor(app) {
    this.app = app;
    this.preMiddlware = new PreMiddleware(this.app);
    this.postMiddlware = new PostMiddleware(this.app);
  }
  initPre(){
    this.preMiddlware.init(this.app);
  }

  initPost(){
    this.postMiddlware.init(this.app);
  }
}

module.exports = ConfigureMiddleware;