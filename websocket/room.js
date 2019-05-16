module.exports = (app, http, socket) => {
    const io = socket.listen(http);
    io.sockets.on("connection", (socket) => {

        socket.on('enter', (roomId) => {
            socket.join(roomId);
            io.to(roomId).emit('roomPeople', io.sockets.client(roomId).length);  // ルームの参加人数を送信
        });
        //メッセージ送信（送信者にも送られる）
        socket.on("C_to_S_message", (data) => {

        });

        //ブロードキャスト（送信者以外の全員に送信）
        socket.on("C_to_S_broadcast", (data) => {
        });

        //切断したときに送信
        socket.on("disconnect", () => {
            io.to(roomId).emit('roomPeople', io.sockets.client(roomId).length);  // ルームの参加人数を送信
        });
    });
}
