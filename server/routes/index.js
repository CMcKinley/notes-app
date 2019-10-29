const NoteRoutes = require("./note.routes");
const StaticRoutes = require("./static.routes");

class Routes {
  init(app, db) {
    const { BASE_ROUTE } = process.env;
    // API routes
    new NoteRoutes().init(app, BASE_ROUTE, db);
    // Static Routes
    new StaticRoutes().init(app);
  }
}

module.exports = Routes;
