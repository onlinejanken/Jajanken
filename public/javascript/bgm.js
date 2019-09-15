//BGMのオブジェクト
let windowObject = null;
//BGMの画面
function newwindow(){
    if(windowObject == null || windowObject == windowObject.closed || windowObject.name != "bgm"){
        windowObject = window.open("", "bgm","width=350,height=200,scrollbars=no");
        windowObject.document.write("<iframe src='/public/bgm/maoudamashii_menu.mp3'scrolling='no' width=350 height=180 ></iframe>");
    }else{
        windowObject.close();
        windowObject = null;
    }
}