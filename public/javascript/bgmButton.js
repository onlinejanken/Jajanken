//BGMのオブジェクト
let windowObject = null;
//BGMの画面
function newwindow(){
    if(windowObject == null || windowObject == windowObject.closed ){
        windowObject = window.open("/api/bgms", "bgm","width=100, height=150, scrollbars=no, resizable=0 ");
    }else{
        windowObject.close();
        windowObject = null;
    }
}