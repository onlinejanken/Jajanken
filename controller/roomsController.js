const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    res.render('room', { session: req.session });
});

router.post('/wait', (req, res) => {
    res.render('participantsWaitRoom', { session: req.session });
});

router.post('/results', (req, res) => {
    const resultData = JSON.parse(req.body.resultData)
    if (resultData.judge == 0) {
        res.render('room', { session: req.session });
    } else {
        req.session.resultData = resultData;
        res.render('roomResult', { session: req.session });
    }
});

module.exports = router;