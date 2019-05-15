module.exports = (app, http, socket) => {
    const io = socket.listen(http);
    io.socket.on("connection", (socket) => {
        //メッセージ送信（送信者にも送られる）
        socket.on("C_to_S_message", (data) => {

        });

        //ブロードキャスト（送信者以外の全員に送信）
        socket.on("C_to_S_broadcast", (data) => {

        });

        //切断したときに送信
        socket.on("disconnect", () => {

        });
    });
}
