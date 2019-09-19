const socket = io();
const roomId = document.getElementById('roomId').innerHTML;
const userName = document.getElementById('userName').innerHTML;
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let player = {};
let background = document.createElement('div');
let time;

player.name = userName;
window.onload = countDown;
window.onload = function () {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}
background.style.zIndex = '800';
background.style.position = 'absolute';
background.style.top = '0px';
background.style.left = '0px';
background.style.right = '0px';
background.style.bottom = '0px';
background.style.opacity = 0.0;

/*触れなくする*/
function clickProtect() {
    document.body.appendChild(background);
}

function countDown() {
    let count = 10;
    time = setInterval(function () {
        count--;
        document.getElementById('timer').textContent = 'あと' + count + '秒';
        if (count <= 0) {
            player.hand = -1;
            rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
            socket.emit('command', player);
            clearInterval(time);
        }
    }, 1000);
}

function rock() {
    player.hand = 0;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
    paperButton.style.opacity = 0.5;
    scissorsButton.style.opacity = 0.5;
    clickProtect()
    document.getElementById('timer').textContent = '他の人の入力を待っています';
    clearInterval(time);
}

function paper() {
    player.hand = 2;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
    rockButton.style.opacity = 0.6;
    scissorsButton.style.opacity = 0.5;
    clickProtect()
    document.getElementById('timer').textContent = '他の人の入力を待っています';
    clearInterval(time);
}

function scissors() {
    player.hand = 1;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
    rockButton.style.opacity = 0.5;
    paperButton.style.opacity = 0.5;
    clickProtect()
    document.getElementById('timer').textContent = '他の人の入力を待っています';
    clearInterval(time);
}
//マウスを載せたときに音を出す
let se = new Audio();
se.src = '/public/se/button02b.mp3';
rockButton.addEventListener('mouseover', () => {
    se.play();
}, false);

paperButton.addEventListener('mouseover', () => {
    se.play();
}, false);

scissorsButton.addEventListener('mouseover', () => {
    se.play();
}, false);

// ゲームの開始処理
socket.emit('gameStart', roomId);

// 判定が終了した後のページの遷移
socket.on('judge', (resultData) => {
    for (let list of resultData) {
        if (list.name == userName) {
            let form = document.createElement('form');
            form.setAttribute('action', '/rooms/results');
            form.setAttribute('method', 'POST');
            form.style.display = "none";
            document.body.appendChild(form);

            if (typeof list !== 'undefined') {
                let input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', 'resultData');
                input.setAttribute('value', JSON.stringify(list));
                form.appendChild(input);
                form.submit();
            }
        }
    }
});