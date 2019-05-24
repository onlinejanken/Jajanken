function returnClick(){
    postForm(null, 'title');
}
//入力された列に対する処理
let number = document.getElementById(number);
window.alert(number);

//ページ遷移関数
function postForm(value, nextScreen) {
    
    let form = document.createElement('form');
    let request = document.createElement('block');
    
    form.method = 'POST';
    form.action = '/'+ nextScreen;
    console.log(username);

  
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;

    form.appendChild(request);
    document.body.appendChild(form);
    form.submit();
}
