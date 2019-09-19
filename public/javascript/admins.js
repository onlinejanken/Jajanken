window.onload = function () {
    let se = new Audio();
    se.src = '/public/se/button02b.mp3';
    se.play();
}
function waitJump(playerNum) {

    let form = document.createElement('form');
    let request = document.createElement('input');

    form.method = 'POST';
    form.action = '/admins/wait';

    request.type = 'hidden';
    request.name = 'playerNum';
    request.value = playerNum;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}