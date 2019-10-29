const uuidv1 = require("uuid/v1");

class NoteService {
  // Get notes in order of newest first
  get(db) {
    return db
      .get("notes")
      .orderBy("created", "desc")
      .value();
  }
  // add new note
  post(note, db) {
    const date = new Date().toISOString();
    const newNote = { ...note, id: uuidv1(), created: date, updated: null };
    db.get("notes")
      .push(newNote)
      .write();
    return newNote;
  }
  // update existing note
  put(id, note, db) {
    const date = new Date().toISOString();
    const editedNote = { ...note, updated: date };
    db.get("notes")
      .find({ id })
      .assign(editedNote)
      .write();
    return editedNote;
  }
}

module.exports = NoteService;
