const assert = require('assert');
const { complementSet } = require('../src/utils/complementSet');

describe('# complementSet', () => {
    describe('- complement set', () => {
        it(`is [1,3]`, () => {
            assert.strictEqual(JSON.stringify(complementSet([1, 2], [2, 3])), '[1,3]');
        });
    });
});