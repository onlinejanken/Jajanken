module.exports = (app, http, socket) => {
    const roomModel = require('../model/room.js');
    const io = socket.listen(http);
    let playerList = {};  // プレイヤーのデータを格納するオブジェクト

    io.sockets.on("connection", (socket) => {
        let roomId;

        // 管理者が入室したとき
        socket.on('createRoom', (room) => {
            roomId = room.roomId;
            socket.join(roomId);
            roomModel.addRoom(room.roomId, room.roomMaster, room.playerNum);
            io.to(roomId).emit('countUpdate', io.sockets.adapter.rooms[`${roomId}`].length);  // ルームの参加人数を送信
        });

        // 参加者が入室したとき
        socket.on('enter', (id) => {
            roomId = id;
            socket.join(roomId);
            roomModel.addMember(roomId);
            io.to(roomId).emit('countUpdate', io.sockets.adapter.rooms[`${roomId}`].length);  // ルームの参加人数を送信
        });

        // スタートの判定
        socket.on('startCheck', (playerNum) => {
            if (playerNum == io.sockets.adapter.rooms[`${roomId}`].length) {
                io.to(roomId).emit('start', playerNum);
            }
        });

        // 開始ボタンを押したときの処理(人数を満たさずに開始する)
        socket.on('startButton', (playerNum) => {
            // roomModel.capacityChange(roomId, playerNum);  現状必要かどうか分からないのでコメントアウトしておく
            io.to(roomId).emit('start', playerNum);
        });


        socket.on('gameStart', (id) => {
            roomId = id;
            playerList[roomId] = [];  // 部屋ごとのプレイヤーリストを作成
            socket.join(roomId);
            io.to(roomId).emit('countUpdate', io.sockets.adapter.rooms[`${roomId}`].length);  // ルームの参加人数を送信
        });

        // じゃんけんを行う処理
        socket.on('command', (data) => {  // プレイヤー名とじゃんけんの手のデータを受け取る
            playerList[roomId].push(data);  // ルームのプレイヤーリストに送られてきたデータを挿入
            if (playerList[roomId].length == io.sockets.adapter.rooms[`${roomId}`].length) {  // じゃんけんの手を出した人数を確認
                io.to(roomId).emit('judge', require('../src/judge.js')(playerList[roomId]));  // じゃんけんの結果を送信
                playerList[roomId] = [];  // ルームのプレイヤーリストを空にする
            }
        });

        // 切断したとき
        socket.on("disconnect", () => {
            if (typeof io.sockets.adapter.rooms[`${roomId}`] === 'undefined') {
                delete playerList[roomId];  // ルームのプレイヤーリストを削除
                roomModel.deleteRoom(roomId);  // ルームの削除
                io.to(roomId).emit('countUpdate', 0);  // ルームの参加人数を送信
            } else {
                roomModel.reduceMember(roomId);
                io.to(roomId).emit('countUpdate', io.sockets.adapter.rooms[`${roomId}`].length);  // ルームの参加人数を送信
            }
        });
    });
};