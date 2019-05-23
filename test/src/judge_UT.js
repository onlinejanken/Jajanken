const assert = require('assert').strict;
const judge = require('../../src/judge.js');

describe('judgeモジュールのテスト', () => {
    describe('2人の時の判定', () => {
        let people = [{ name: 'player1' }, { name: 'player2' }];

        it('[0]が勝ちで[1]が負け', () => {
            for (let i = 0; i < 3; i++) {
                people[0].hand = i % 3;
                people[1].hand = (i + 1) % 3;
                people = judge(people);
                assert.strictEqual(people[0].judge, 1);
                assert.strictEqual(people[1].judge, -1);
            }
        });
        it('[1]が勝ちで[0]が負け', () => {
            for (let i = 0; i < 3; i++) {
                people[0].hand = (i + 1) % 3;
                people[1].hand = i % 3;
                people = judge(people);
                assert.strictEqual(people[0].judge, -1);
                assert.strictEqual(people[1].judge, 1);
            }
        });
        it('引き分け', () => {
            for (let i = 0; i < 3; i++) {
                people[0].hand = i;
                people[1].hand = i;
                people = judge(people);
                assert.strictEqual(people[0].judge, 0);
                assert.strictEqual(people[1].judge, 0);
            }
        });
    });
});