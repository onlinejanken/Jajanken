const db = require('../db/room.js').db;

const searchRoom = (roomId) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.get(`select * from room where id = '${roomId}'`, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    });
};

const addRoom = (roomId, master, playerNum) => {
    db.serialize(() => {
        const stmt = db.prepare(`insert into room (id, master, num, maxnum) values (?, ?, ?, ?)`);
        stmt.run(roomId, master, 1, playerNum);
    });
};

const deleteRoom = (roomId) => {
    db.serialize(() => {
        db.run(`delete from room where id = '${roomId}'`);
    });
};

const addMember = (roomId) => {
    db.serialize(() => {
        searchRoom(roomId).then((row) => {
            const stmt = db.prepare(`update room set num = ? where id = ?`);
            stmt.run(row.num + 1, row.id);
        });
    });
};

const reduceMember = (roomId) => {
    db.serialize(() => {
        searchRoom(roomId).then((row) => {
            const stmt = db.prepare(`update room set num = ? where id = ?`);
            stmt.run(row.num - 1, row.id);
        });
    });
};

module.exports = {
    searchRoom: searchRoom,
    addRoom: addRoom,
    deleteRoom: deleteRoom,
    addMember: addMember,
    reduceMember: reduceMember
};