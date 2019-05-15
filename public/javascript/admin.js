const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', (value, nextScreen) => {
  // „‚³‚ê‚½‚Ìˆ—
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
