const express = require('express');
const app = express();
const controller = require('./controller/controller.js');

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/', controller);

app.listen(3000);