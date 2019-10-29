const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const uuidv1 = require("uuid/v1");

class DataService {
  constructor() {
    const adapter = new FileSync("db.json");
    this.db = low(adapter);
  }

  // Initialize db with default values
  init() {
    const date = new Date().toISOString();
    this.db
      .defaults({
        notes: [
          { id: uuidv1(), text: "Initial Note", created: date, updated: null },
          { id: uuidv1(), text: "Newer Note", created: date, updated: null }
        ]
      })
      .write();
  }
}

module.exports = DataService;
