const NoteService = require("../services/note.service.js");

class NoteRoutes {
  constructor () {
    this.noteService = new NoteService();
  }
  
  init(app, baseRoute, db) {
    this.configureRoutes(app, baseRoute, db);
  }

  configureRoutes(app, baseRoute, db) {
    app.get(`${baseRoute}notes`, (req, res, next) => {
      try {
        const response = this.noteService.get(db);
        res.json({ notes: response });
      } catch (err) {
        next(err);
      }
    });

    app.put(`${baseRoute}notes/:id`, (req, res, next) => {
      const {
        params: { id },
        body
      } = req;
      try {
        const response = this.noteService.put(id, body, db);
        res.json(response);
      } catch (err) {
        next(err);
      }
    });

    app.post(`${baseRoute}notes`, (req, res, next) => {
      const { body } = req;
      try {
        const response = this.noteService.post(body, db);
        res.json(response);
      } catch (err) {
        next(err);
      }
    });
  }
}

module.exports = NoteRoutes;
