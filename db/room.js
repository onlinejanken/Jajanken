const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/jajanken.db');

const init = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS room (
            id TEXT PRIMARY KEY,
            master TEXT NOT NULL,
            num INTEGER NOT NULL,
            maxnum INTEGER NOT NULL
        )
    `);
};

module.exports = {
    db: db,
    init: init
};