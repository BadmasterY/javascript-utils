const assert = require('assert');
const { dataType } = require('../src/utils/dataType');

describe('# dataType', () => {
    describe('- check data type', () => {
        it(`type is Number`, () => {
            assert.strictEqual(dataType(1), Number);
        });
    
        it(`type is null`, () => {
            assert.strictEqual(dataType(null), null);
        });
    });
});