const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.session.username = req.body.username;

    res.render('participants', { session: req.session });
});

router.post('/wait/:roomId', (req, res) => {
    req.session.roomId = req.params.roomId;
 
    res.render('participantsWaitRoom', { session: req.session });
});


module.exports = router;