const assert = require('assert');
const { intersection } = require('../src/utils/intersection');

describe('# intersection', () => {
    describe('- intersection set', () => {
        it(`is [2]`, () => {
            assert.strictEqual(JSON.stringify(intersection([1, 2], [2, 3])), '[2]');
        });
    });
});