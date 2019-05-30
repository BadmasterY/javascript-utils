const assert = require('assert');
const { isType } = require('../src/utils/isType');

describe('# isType', () => {
    describe('- check data type, return boolean', () => {
        it(`is Number`, () => {
            assert.strictEqual(isType(1)('Number'), true);
        });
    
        it(`is null`, () => {
            assert.strictEqual(isType(null)('Null'), true);
        });
    });
});