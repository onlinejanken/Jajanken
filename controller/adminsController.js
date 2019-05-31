const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('admins');
});

router.post('/wait', (req, res) => {
    res.render('adminsWaitRoom', {
        roomId: require('../src/idGenerator')(),
        peopleNum: req.body.peopleNum
    });

});

module.exports = router;