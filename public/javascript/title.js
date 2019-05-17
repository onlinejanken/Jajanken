const Layer = document.getElementById('layer');
document.body.addEventListener('click',Click);
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    b1.style.visibility = "hidden";
    b2.style.visibility = "hidden";

//bodyクリック時の動作関数
function Click(){
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
    console.log(username);
    postForm(username);
    console.log(postform(username));

    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
