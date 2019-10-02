//BGMのオブジェクト
let windowObject = null;
//BGMの画面
function newWindow() {
    if (windowObject == null || windowObject == windowObject.closed) {
        windowObject = window.open("/api/bgms", "bgm", "width=100, height=150, scrollbars=no, resizable=0 ");
    } else {
        windowObject.close();
        windowObject = null;
    }
}
//クリック音
function sound() {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}