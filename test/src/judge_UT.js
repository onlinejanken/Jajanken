const assert = require('assert').strict;
const judge = require('../../src/judge.js');

// テストは人数ごとに異なるものだけをテストを行う
describe('judgeモジュールのテスト', () => {
    describe('2人の時の判定', () => {
        let playerList = [{ name: 'player1' }, { name: 'player2' }];

        it('引き分け', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = playerList[1].hand = i;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 0);
                assert.strictEqual(playerList[1].judge, 0);
            }
        });
        it('勝敗が付く', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = i % 3;
                playerList[1].hand = (i + 1) % 3;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 1);
                assert.strictEqual(playerList[1].judge, -1);
            }
        });

    });
    describe('3人の時の判定', () => {
        let playerList = [{ name: 'player1' }, { name: 'player2' }, { name: 'player3' }];

        it('全員同じ手で引き分け', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = playerList[1].hand = playerList[2].hand = i;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 0);
                assert.strictEqual(playerList[1].judge, 0);
                assert.strictEqual(playerList[2].judge, 0);
            }
        });
        it('全員違う手で引き分け', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = i;
                playerList[1].hand = (i + 1) % 3;
                playerList[2].hand = (i + 2) % 3;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 0);
                assert.strictEqual(playerList[1].judge, 0);
                assert.strictEqual(playerList[2].judge, 0);
            }
        });
        it('1人勝ち', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = i % 3;
                playerList[1].hand = playerList[2].hand = (i + 1) % 3;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 1);
                assert.strictEqual(playerList[1].judge, -1);
                assert.strictEqual(playerList[2].judge, -1);
            }
        });
        it('2人勝ち', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = playerList[1].hand = i % 3;
                playerList[2].hand = (i + 1) % 3;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 1);
                assert.strictEqual(playerList[1].judge, 1);
                assert.strictEqual(playerList[2].judge, -1);
            }
        });
    });
    describe('4人の時の判定', () => {
        let playerList = [{ name: 'player1' }, { name: 'player2' }, { name: 'player3' }, { name: 'player4' }];

        it('グーチョキパーの全てが出て引き分け(どの手か2人いる)', () => {
            for (let i = 0; i < 3; i++) {
                playerList[0].hand = i;
                playerList[1].hand = i;
                playerList[2].hand = (i + 1) % 3;
                playerList[3].hand = (i + 2) % 3;
                playerList = judge(playerList);
                assert.strictEqual(playerList[0].judge, 0);
                assert.strictEqual(playerList[1].judge, 0);
                assert.strictEqual(playerList[2].judge, 0);
                assert.strictEqual(playerList[3].judge, 0);
            }
        });
    });

    describe('入力されなかったときの負け判定(無条件で未入力の人以外は勝ち)', () => {
        let playerList = [{ name: 'player1' }, { name: 'player2' }, { name: 'player3' }, { name: 'player4' }];
        it('未入力の人以外であいこになる場合', () => {
            playerList[0].hand = 0;
            playerList[1].hand = 1;
            playerList[2].hand = 2;
            playerList[3].hand = -1;
            playerList = judge(playerList);
            assert.strictEqual(playerList[0].judge, 1);
            assert.strictEqual(playerList[1].judge, 1);
            assert.strictEqual(playerList[2].judge, 1);
            assert.strictEqual(playerList[3].judge, -1);
        });
        it('未入力の人以外で勝敗がつく場合', () => {
            playerList[0].hand = 0;
            playerList[1].hand = 2;
            playerList[2].hand = 2;
            playerList[3].hand = -1;
            playerList = judge(playerList);
            assert.strictEqual(playerList[0].judge, 1);
            assert.strictEqual(playerList[1].judge, 1);
            assert.strictEqual(playerList[2].judge, 1);
            assert.strictEqual(playerList[3].judge, -1);
        });
    });
});