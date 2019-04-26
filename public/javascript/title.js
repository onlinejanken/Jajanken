
window.onload = function(){
    var b1 = document.getElementById("b1").style.visibility = "hidden";
    var b2 = document.getElementById("b2").style.visibility = "hidden";
};

function Click(){
    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
    username = window.prompt("ユーザめいをにゅうりょくしてください");
    console.log(username);

}
