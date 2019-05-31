const express = require('express');
const router = express.Router();

router.post('/admins', (req, res) => {
    res.render('admins');
});


module.exports = router;