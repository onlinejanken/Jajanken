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