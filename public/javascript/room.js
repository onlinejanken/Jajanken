const socket = io();
const roomId = document.getElementById('roomId').innerHTML;
const userName = document.getElementById('userName').innerHTML;
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

let player = {};
player.name = userName;
window.onload = countDown;

function countDown() {
    let count = 10;
    let id = setInterval(function () {
        count--;
        document.getElementById('timer').textContent = 'あと' + count + '秒';
        if (count <= 0) {
            clearInterval(id);
        }
    }, 1000);
}

function rock() {
    player.hand = 0;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
}

function paper() {
    player.hand = 2;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
}

function scissors() {
    player.hand = 1;
    rockButton.onclick = paperButton.onclick = scissorsButton.onclick = null;
    socket.emit('command', player);
}

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

            if (list !== 'undefined') {
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