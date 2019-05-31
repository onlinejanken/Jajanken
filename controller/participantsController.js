const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('participants');
});

router.post('/wait/:roomId', (req, res) => {
    res.render('participantsWaitRoom', { roomId: req.params.roomId });
});


module.exports = router;