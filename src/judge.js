const drawer = (playerList) => {
    for (let player of playerList) {
        player.judge = 0;
    }
};

const winnerAndLoser = (playerList, judgeValue) => {
    const winHand = { 3: 0, 5: 2, 6: 1 }  // 判定と勝ち手を関連付けるオブジェクト

    for (let player of playerList) {
        if (player.hand == winHand[judgeValue]) {
            player.judge = 1;
        } else {
            player.judge = -1;
        }
    }
};

module.exports = (playerList) => {
    let judgeValue = 0;
    const draw = [1, 2, 4, 7];  // 引き分けの判定を格納する配列

    for (const player of playerList) {
        if (judgeValue == 7) { break; }
        judgeValue |= 1 << player.hand;
    }
    if (draw.includes(judgeValue)) {
        drawer(playerList);
    } else {
        winnerAndLoser(playerList, judgeValue);
    }

    return playerList;
};