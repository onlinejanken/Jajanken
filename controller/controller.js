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
router.post('/participants/wait/:roomId', (req, res) => {
    res.render('participantsWaitRoom', { roomId: req.params.roomId });
});
router.post('/admins/wait', (req, res) => {
     res.render('adminsWaitRoom', {
        roomId: require('../src/idGenerator')(),
        peopleNum: req.body.peopleNum
     });

});


module.exports = router;