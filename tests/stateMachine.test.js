const assert = require('assert');
const { stateMachine } = require('../src/utils/stateMachine');

let state = new stateMachine({
    init: 'UnStart',
    transitions: [
        {name: 'UnStart', from: 'End', to: 'Start'},
        {name: 'Start', from: 'UnStart', to: 'End'},
        {name: 'End', from: 'Start', to: 'UnStart'},
    ],
    methods: {
        onUnStart: () => {},
        onStart: () => {},
        onEnd: () => {},
        onError: () => {}
    }
})

describe('# stateMachine', () => {
    describe('- stateMachine.next', () => {
        it(`The current state is 'UnStart'`, () => {
            assert.strictEqual(state.state, 'UnStart');
        });
    
        it(`The current state is 'Start'`, () => {
            state.next();
            assert.strictEqual(state.state, 'Start');
        });
    
        it(`The current state is 'End'`, () => {
            state.next();
            assert.strictEqual(state.state, 'End');
        });
    
        it(`The current state is 'UnStart'`, () => {
            state.next();
            assert.strictEqual(state.state, 'UnStart');
        });
    });
    
    describe('- stateMachine.pre', () => {
        it(`The current state is 'UnStart'`, () => {
            assert.strictEqual(state.state, 'UnStart');
        });
    
        it(`The current state is 'End'`, () => {
            state.pre();
            assert.strictEqual(state.state, 'End');
        });
    
        it(`The current state is 'Start'`, () => {
            state.pre();
            assert.strictEqual(state.state, 'Start');
        });
    
        it(`The current state is 'UnStart'`, () => {
            state.pre();
            assert.strictEqual(state.state, 'UnStart');
        });
    });

    describe('- stateMachine.to', () => {
        it(`The current state is 'Start'`, () => {
            state.to('Start')
            assert.strictEqual(state.state, 'Start');
        });

        it(`The current state is 'Error'`, () => {
            state.to('Error')
            assert.strictEqual(state.state, 'Error');
        });

        it(`The current state is 'UnStart'`, () => {
            state.to('UnStart')
            assert.strictEqual(state.state, 'UnStart');
        });
    });
});