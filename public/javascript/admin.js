const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn2.addEventListener('click', (value, nextScreen) => {
  // 推された時の処理
  let form = document.createElement('form');
  let request = document.createElement('block');

  form.method = 'POST';
  form.action = '/' + nextScreen;

  request.type = 'hidden';
  request.name = 'text';
  request.value = value;
form.appendChild(request);
document.body.appendChild(form);
from.submit();

});
