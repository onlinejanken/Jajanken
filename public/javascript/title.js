const Layer = document.getElementById('layer');

let b1 = document.getElementById('makeroom');
let b2 = document.getElementById('joinroom');
let username;

b1.style.visibility = "hidden";
b2.style.visibility = "hidden";

document.body.addEventListener('click', Click);
window.onload = function () {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}
//bodyクリック時の動作関数
function Click() {
    username = window.prompt("ユーザめいをにゅうりょくしてください");
    if (username === null) return;
    if (username === "") return;

    document.body.removeEventListener('click', Click);

    popup();
}
//ポップアップさせ、ボタンを押させる関数
function popup() {
    Layer.style.display = "block";
    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
}

//部屋を作るボタンの処理
function makeClick() {
    postForm(username, 'admins');
}
//部屋に入るボタンの処理
function joinClick() {
    postForm(username, 'participants');
}
//ページ遷移関数
function postForm(username, nextScreen) {

    let form = document.createElement('form');
    let request = document.createElement('input');

    form.method = 'POST';
    form.action = '/' + nextScreen;


    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'username';
    request.value = username;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}

