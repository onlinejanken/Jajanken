const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('title');
});
router.post('/admins',(req, res) => {
    res.render('admins');
});
router.post('/participants', (req, res) => {
    res.render('participants');
});
router.post('/participants/wait/:roomID', (req, res) => {
    res.send(req.params);
});

module.exports = router;