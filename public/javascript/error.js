function returnTop(){
    postForm();
}
function postForm() {

    let form = document.createElement('form');

    form.method = 'GET';
    form.action = '/' ;

    document.body.appendChild(form);
    form.submit();
}