const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.session.username = req.body.username;

    res.render('admins');
});

router.post('/wait', (req, res) => {
    req.session.roomId = require('../src/idGenerator')();
    req.session.playerNum = req.body.playerNum;

    res.render('adminsWaitRoom', { session: req.session });
});

module.exports = router;