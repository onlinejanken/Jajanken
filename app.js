const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socket = require('socket.io');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const db = require('./db/room.js');
db.init();

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({
    secret: 'jajanken',
    resave: false,
    saveUninitialized: true
}));

// controller
app.use('/', require('./controller/titleController.js'));
app.use('/admins', require('./controller/adminsController.js'));
app.use('/participants', require('./controller/participantsController.js'));
app.use('/rooms', require('./controller/roomsController.js'));

app.use((req, res, next) => {
    let err = new Error('指定されたURLが見つかりませんでした。');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error', { error: err });
});

require('./websocket/room.js')(app, app.listen(3000), socket);

console.log("Start Server" + new Date);