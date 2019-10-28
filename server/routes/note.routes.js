class NoteRoutes {
  init(app, baseRoute) {
    this.configureRoutes(app, baseRoute);
  }

  configureRoutes(app, baseRoute) {
    app.get(`${baseRoute}notes`, (req, res) => {
      res.json({ notes: [{ id: 1, text: "Hello World" }] });
    });
  }
}

module.exports = NoteRoutes;
