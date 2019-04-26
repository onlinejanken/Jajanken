const express = require('express');
const app = express();
const controller = require('./controller/controller.js');

app.set('vew engin', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/', controller);

app.listen(3000);