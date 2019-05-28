const ok = document.getElementById('ok');
ok.addEventListener('click', returnClick);
//okボタンを押すとtitleに戻る
function returnClick(){
    postForm(null, 'title');
}

const send = document.getElementById('send');
send.addEventListener('click', sendForm);

//送信ボタンを押すと入力した文字列をparticipantsWaitRoomに送る。
function sendForm(){
    let roomId = document.getElementById('roomId').value;
    console.log(roomId);
    postForm(roomId, participatsWaitRoom);
}

//ページ遷移関数
function postForm(value, nextScreen) {
    
    let form = document.createElement('form');
    let request = document.createElement('block');
    
    form.method = 'POST';
    form.action = '/'+ nextScreen;


  
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
