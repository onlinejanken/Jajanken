const assert = require('assert').strict;
const idGenerator = require('../../src/idGenerator.js');

describe('idGeneratorモジュールのテスト', () => {
    const id = idGenerator();
    it('IDの文字数が常に8文字になっているか', () => {
        assert.strictEqual(id.length, 8);
    });

    it('IDは常に英数字のみになっているか', () => {
        assert.ok(/[a-zA-Z0-9]{8}/.test(id));
    });
});