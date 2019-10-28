if(!process.env.NODE_ENV){
  require('dotenv').config();
}

const express = require('express');
const ConfigMiddleware = require('./middleware');
const Routes = require("./routes");
const DataService = require("./dataService.js");
// Server starting point
class Main {

  init() {
    const app = express();
    const configMiddleware = new ConfigMiddleware(app);
    const routes = new Routes();
    const dataService = new DataService();
    dataService.init()
    const dbInstance = dataService.db;
    this.preMiddlewareConfig(configMiddleware);
    this.routesConfig(app, routes, dbInstance);
    this.postMiddlewareConfig(configMiddleware);
    this.startServer(app);
  }

  // Init pre middleware
  preMiddlewareConfig(config) {
    config.initPre();
  }

  // Init routes
  routesConfig(app, routes, db) {
    routes.init(app, db);
  }

  // Init post middleware
  postMiddlewareConfig(config) {
    config.initPost();
  }

  // Start the express server
  startServer(app) {
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`notes-app listening on port ${PORT}`))
  }

}

const main = new Main();
main.init();