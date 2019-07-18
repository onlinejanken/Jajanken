const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    res.render('room', { session: req.session });
});

router.post('/results', (req, res) => {
    req.session.resultData = JSON.parse(req.body.resultData);

    res.render('roomResult', { session: req.session });
});

module.exports = router;