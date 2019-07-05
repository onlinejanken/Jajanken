const db = require('../db/room.js').db;

// ルームを検索する
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

// ルームを追加(作成)する
const addRoom = (roomId, master, playerNum) => {
    db.serialize(() => {
        const stmt = db.prepare(`insert into room (id, master, num, maxnum) values (?, ?, ?, ?)`);
        stmt.run(roomId, master, 1, playerNum);
    });
};

// ルームを削除する
const deleteRoom = (roomId) => {
    db.serialize(() => {
        db.run(`delete from room where id = '${roomId}'`);
    });
};

// ルームの人数を一人増やす
const addMember = (roomId) => {
    db.serialize(() => {
        searchRoom(roomId).then((row) => {
            const stmt = db.prepare(`update room set num = ? where id = ?`);
            stmt.run(row.num + 1, row.id);
        });
    });
};

// ルームの人数を一人減らす
const reduceMember = (roomId) => {
    db.serialize(() => {
        searchRoom(roomId).then((row) => {
            const stmt = db.prepare(`update room set num = ? where id = ?`);
            stmt.run(row.num - 1, row.id);
        });
    });
};

// ルームの定員を変更する
const capacityChange = (roomId, capacity) => {
    db.serialize(() => {
        searchRoom(roomId).then((row) => {
            const stmt = db.prepare(`update room set maxnum = ? where id = ?`);
            stmt.run(capacity, row.id);
        });
    });
};

module.exports = {
    searchRoom: searchRoom,
    addRoom: addRoom,
    deleteRoom: deleteRoom,
    addMember: addMember,
    reduceMember: reduceMember,
    capacityChange: capacityChange
};