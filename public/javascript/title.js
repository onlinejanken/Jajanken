const Layer = document.getElementById('layer');

<<<<<<< HEAD
document.body.addEventListener('click',Click);
=======
//window.onload = function(){
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    b1.style.visibility = "hidden";
    b2.style.visibility = "hidden";
//};
>>>>>>> 90f2c10c50790ea62326561c8e95c8e807215499

//bodyクリック時の動作関数
function Click(){
<<<<<<< HEAD
    const username = window.prompt("ユーザめいをにゅうりょくしてください");
    if(username === null) return;
    if(username === "") return;
    document.body.removeEventListener('click',Click);
    popup();
}
//ポップアップさせ、ボタンを押させる関数
function popup(){
    Layer.style.display = "block";
}

//ページ遷移関数
function postForm(value, nextScreen) {

    let form = document.createElement('form');
    let request = document.createElement('block');

    form.method = 'POST';
    form.action = '/'+ nextScreen;
=======

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
    form.action = '/admins';
>>>>>>> 90f2c10c50790ea62326561c8e95c8e807215499

    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
