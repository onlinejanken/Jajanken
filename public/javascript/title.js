
//window.onload = function(){
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    b1.style.visibility = "hidden";
    b2.style.visibility = "hidden";
//};

function Click(){

    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
    username = window.prompt("ユーザめいをにゅうりょくしてください");
    console.log(username);
    postForm(username);
    console.log(postform(username));
}

function postForm(value) {

    var form = document.createElement('form');
    var request = document.createElement('input');

    form.method = 'POST';
    form.action = 'http://localhost:3000/admins';

    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
