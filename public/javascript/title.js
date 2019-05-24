const Layer = document.getElementById('layer');

b1.style.visibility = "hidden";
b2.style.visibility = "hidden";

document.body.addEventListener('click',Click);

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
    b1.style.visibility = "visible";
    b2.style.visibility = "visible";
   
    console.log(Layer.style.display);
    console.log(b1.style.visibility);
    console.log(b2.style.visibility);
}
//部屋を作るボタンを押したときの動作
function makeClick(){
    postForm(username, admins);
}

function joinClick(){
    postForm(username, participants);
}

//ページ遷移関数
function postForm(value, nextScreen) {
    
    let form = document.createElement('form');
    let request = document.createElement('block');
    
    form.method = 'POST';
    form.action = '/'+ nextScreen;    
  
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value; //valueを送信する。

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
