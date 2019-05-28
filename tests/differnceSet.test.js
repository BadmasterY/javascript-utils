const assert = require('assert');
const { differenceSet } = require('../src/utils/differenceSet');

describe('# differenceSet', () => {
    describe('- difference set', () => {
        it(`is [1]`, () => {
            assert.strictEqual(JSON.stringify(differenceSet([1, 2], [2, 3])), '[1]');
        });
    });
});