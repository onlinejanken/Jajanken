module.exports = (app, http, socket) => {
    const io = socket.listen(http);
    io.sockets.on("connection", (socket) => {
        let roomId;

        // 入室したとき
        socket.on('enter', (id) => {
            roomId = id;
            socket.join(roomId);
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
            io.to(roomId).emit('start', playerNum);
        });

        // じゃんけんを行う処理
        socket.on('command', (data) => {  // プレイヤー名とじゃんけんの手のデータを受け取る
            let playerList = [];  // プレイヤーのデータを格納する配列
            playerList.push(data);
            if (info.length == io.sockets.adapter.rooms[`${roomId}`].length) {  // じゃんけんの手を出した人数を確認
                io.to(roomId).emit('judge', require('../src/judge.js')(playerList));  // じゃんけんの結果を送信
            }
        });

        // 切断したとき
        socket.on("disconnect", () => {
            if (typeof io.sockets.adapter.rooms[`${roomId}`] === 'undefined') {
                io.to(roomId).emit('countUpdate', 0);  // ルームの参加人数を送信
            } else {
                io.to(roomId).emit('countUpdate', io.sockets.adapter.rooms[`${roomId}`].length);  // ルームの参加人数を送信
            }
        });
    });
}