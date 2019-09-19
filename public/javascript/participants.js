const ok = document.getElementById('ok');
ok.addEventListener('click', returnClick);

window.onload = function () {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}

//okボタンを押すとtitleに戻る
function returnClick() {
    getForm(null, '');
}

const send = document.getElementById('send');
send.addEventListener('click', sendForm);
//inputタグ内でenterを押す。
function receive(code) {
    //エンターキー押下なら
    if (13 === code) {
        sendForm();
    }
}

//送信ボタンを押すと入力した文字列をparticipantsWaitRoomに送る。
function sendForm() {
    let roomId = document.getElementById('roomId').value;
    if (roomId === '') {
        document.getElementById('error').innerText = 'ルームIDを入力してください';
    } else {
        postForm(roomId, 'participants');
    }
}

//ページ遷移関数(post) 
function postForm(value, nextScreen) {

    let form = document.createElement('form');
    let request = document.createElement('block');

    form.method = 'POST';
    form.action = '/' + nextScreen + '/wait' + '/' + value;

    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}

//ページ遷移関数(get)
function getForm(value, nextScreen) {

    let form = document.createElement('form');
    let request = document.createElement('block');

    form.method = 'GET';
    form.action = '/' + nextScreen;

    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}