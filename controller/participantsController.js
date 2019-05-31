const express = require('express');
const router = express.Router();

router.post('/participants', (req, res) => {
    res.render('participants');
});


module.exports = router;