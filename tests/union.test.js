const assert = require('assert');
const { union } = require('../src/utils/union');

describe('# union', () => {
    describe('- union set', () => {
        it(`is [1,2,3]`, () => {
            assert.strictEqual(JSON.stringify(union([1, 2], [2, 3])), '[1,2,3]');
        });
    });
});