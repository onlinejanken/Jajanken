// 引き分けの判定を格納する関数
const drawer = (playerList) => {
    for (let player of playerList) {
        player.judge = 0;
    }
};

// 勝ち負けの判定を格納する関数
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

// 未入力の人がいる時に判定を格納する関数
const notHand = (playerList) => {
    for (let player of playerList) {
        if (player.hand == -1) {
            player.judge = -1;
        } else {
            player.judge = 1;
        }
    }
};

// じゃんけん判定の本体 player.handの値は、グー:0 チョキ:1 パー:2 未入力:-1 とする
module.exports = (playerList) => {
    let judgeValue = 0;
    const draw = [1, 2, 4, 7];  // 引き分けの判定を格納する配列

    for (const player of playerList) {
        if (player.hand == -1) {  // 未入力の人がいる場合その人以外が勝ち
            notHand(playerList);
            return playerList;
        }
        judgeValue |= 1 << player.hand;  // 2進数でどの手を出した人がいるかを保存する
    }
    if (draw.includes(judgeValue)) {
        drawer(playerList);
    } else {
        winnerAndLoser(playerList, judgeValue);
    }

    return playerList;
};