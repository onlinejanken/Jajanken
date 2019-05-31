const express = require('express');
const router = express.Router();

router.post('/participants/wait/:roomId', (req, res) => {
    res.render('participantsWaitRoom', { roomId: req.params.roomId });
});


module.exports = router;