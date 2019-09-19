const socket = io();
const startButton = document.getElementById('startButton');
const roomId = document.getElementById('roomId').innerText;
const playerNum = document.getElementById('playerNum').innerText;

window.onload = function () {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}

// 入室処理
socket.emit('enter', roomId);

// 人数の更新
socket.on('countUpdate', (currentNum) => {
    document.getElementById('currentNum').innerText = currentNum;
    socket.emit('startCheck', playerNum);
});

// スタートする時の処理
socket.on('start', (currentNum) => {
    let form = document.createElement('form');
    form.setAttribute('action', '/rooms');
    form.setAttribute('method', 'POST');
    form.style.display = "none";
    document.body.appendChild(form);

    if (currentNum !== 'undefined') {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'currentNum');
        input.setAttribute('value', currentNum);
        form.appendChild(input);
    }

    form.submit();
});