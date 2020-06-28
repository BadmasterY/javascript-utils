const assert = require('assert');
const { dataType, curryingTypes } = require('../src/utils/dataType');

describe('# dataType', () => {
    describe('- check data type', () => {
        it(`type is Number`, () => {
            assert.strictEqual(dataType(1), 'Number');
        });
    
        it(`type is null`, () => {
            assert.strictEqual(dataType(null), 'Null');
        });
    });
});

describe('# curryingTypes', () => {
    describe('- check data type', () => {
        const isNumber = curryingTypes('Number');
        it(`type is Number`, () => {
            assert.strictEqual(isNumber(1), true);
        });
    
        const isNull = curryingTypes('Null');
        it(`type is null`, () => {
            assert.strictEqual(isNull(null), true);
        });
    });
});