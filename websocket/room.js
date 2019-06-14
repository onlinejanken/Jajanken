module.exports = (app, http, socket) => {
    const io = socket.listen(http);
    io.sockets.on("connection", (socket) => {

        // 入室したとき
        socket.on('enter', (roomId) => {
            socket.join(roomId);
            io.to(roomId).emit('playerNum', io.sockets.client(roomId).length);  // ルームの参加人数を送信
        });

        // スタートの判定
        socket.on('start', (playerNum) => {
            if (playerNum == io.sockets.client(roomId).length) {
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
            if (info.length == io.sockets.client(roomId).length) {  // じゃんけんの手を出した人数を確認
                io.to(roomId).emit('judge', require('../src/judge.js')(playerList));  // じゃんけんの結果を送信
            }
        });
        //  メッセージ送信（送信者にも送られる）
        socket.on("C_to_S_message", (data) => {

        });

        // ブロードキャスト（送信者以外の全員に送信）
        socket.on("C_to_S_broadcast", (data) => {
        });

        // 切断したとき
        socket.on("disconnect", () => {
            io.to(roomId).emit('playerNum', io.sockets.client(roomId).length);  // ルームの参加人数を送信
        });
    });
}