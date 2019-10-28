const uuidv1 = require("uuid/v1");

class NoteService {
  get(db) {
    return db.get("notes").value();
  }

  post(note, db) {
    const date = Date.now().toString();
    const newNote = { ...note, id: uuidv1, created: date, updated: null };
    db.get("notes")
      .push({ ...note, id: uuidv1, created: date, updated: null })
      .write();
    return newNote;
  }

  put(id, note, db) {
    const date = Date.now().toString();
    const editedNote = { ...note, updated: date };
    db.get("notes")
      .find({ id })
      .assign(editedNote)
      .write();
    return editedNote;
  }
}

module.exports = NoteService;
