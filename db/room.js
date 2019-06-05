const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/jajanken.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

const init = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS room (
            id TEXT NOT NULL PRIMARY KEY,
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