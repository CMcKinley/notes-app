const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const uuidv1 = require("uuid/v1");

class DataService {
  constructor() {
    const adapter = new FileSync("db.json");
    this.db = low(adapter);
  }

  init() {
    const date = Date.now().toString();
    this.db.defaults({
      notes: [
        { id: uuidv1(), text: "Initial Note", created: date, updated: null }
      ]
    }).write();
  }
}

module.exports = DataService;
