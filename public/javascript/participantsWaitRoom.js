const socket = io();
const startButton = document.getElementById('startButton');
const roomId = document.getElementById('roomId').innerHTML;
const playerNum = document.getElementById('playerNum').innerText;

// 入室処理
socket.emit('enter', roomId);

// 人数の更新
socket.on('countUpdate', (currentNum) => {
    document.getElementById('currentNum').innerText = currentNum;
    socket.emit('startCheck', playerNum);
});

// スタートボタンを押した時
startButton.addEventListener('click', (currentNum) => {
    socket.emit('startButton', currentNum);
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