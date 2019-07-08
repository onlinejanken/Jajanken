const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {

    res.render('room', { session: req.session });
});

router.post('/results', (req, res) => {

    res.render('roomResult', { session: req.session });
});

module.exports = router;