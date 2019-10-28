const NoteRoutes = require("./note.routes");
const StaticRoutes = require("./static.routes");

class Routes {
  init(app) {
    const { BASE_ROUTE } = process.env;
    new NoteRoutes().init(app, BASE_ROUTE);
    new StaticRoutes().init(app);
  }
}

module.exports = Routes;
