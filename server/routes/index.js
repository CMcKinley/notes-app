const NoteRoutes = require("./note.routes.js");
const StaticRoutes = require("./static.routes.js");

class Routes {
  init(app) {
    const { BASE_ROUTE } = process.env;
    new NoteRoutes().init(app, BASE_ROUTE);
    new StaticRoutes().init(app);
  }
}

module.exports = Routes;
