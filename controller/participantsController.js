const express = require('express');
const router = express.Router();
const roomModel = require('../model/room.js');

router.post('/', (req, res) => {
    req.session.username = req.body.username;

    res.render('participants', { session: req.session });
});

router.post('/wait/:roomId', (req, res) => {
    req.session.roomId = req.params.roomId;

    roomModel.searchRoom(req.session.roomId).then((row) => {
        let error;

        // ルームが存在しないまたはルームが満員ならばエラーメッセージを格納する
        if (typeof row !== 'undefined') {
            if (row.num == row.maxnum) {
                error = 'ルームは満員です';
            } else {
                req.session.playerNum = row.maxnum;
            }
        } else {
            error = '指定したルームは存在しません';
        }

        // エラーが存在しなければページ遷移
        if (typeof error === 'undefined') {
            res.render('participantsWaitRoom', { session: req.session });
        } else {
            res.render('participants', {
                session: req.session,
                error: error
            });
        }

    });
});

module.exports = router;