const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('admins');
});

router.post('/wait', (req, res) => {
    res.render('adminsWaitRoom', {
        roomId: require('../src/idGenerator')(),
        playerNum: req.body.playerNum
    });

});

module.exports = router;