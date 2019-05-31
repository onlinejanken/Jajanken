const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socket = require('socket.io');

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));

app.use('/', require('./controller/titleController.js'));
app.use('/adimns', require('./controller/adminsController.js'));
app.use('/participants', require('./controller/participantsController.js'))
app.use('/adminsWaitRoom', require('./controller/adminsWaitRoomController.js'))
app.use('/participantsWaitRoom', require('./controller/participantsWaitRoomController.js'))

require('./websocket/room')(app, app.listen(3000), socket);

console.log("Start Server" + new Date);