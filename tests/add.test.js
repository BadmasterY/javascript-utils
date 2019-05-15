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
    }
})

describe('stateMachine.next', () => {
    it(`The current state is 'UnStart'`, () => {
        assert.equal(state.state, 'UnStart');
    });

    it(`The current state is 'Start'`, () => {
        state.next();
        assert.equal(state.state, 'Start');
    });

    it(`The current state is 'End'`, () => {
        state.next();
        assert.equal(state.state, 'End');
    });

    it(`The current state is 'UnStart'`, () => {
        state.next();
        assert.equal(state.state, 'UnStart');
    });
});

describe('stateMachine.pre', () => {
    it(`The current state is 'UnStart'`, () => {
        assert.equal(state.state, 'UnStart');
    });

    it(`The current state is 'End'`, () => {
        state.pre();
        assert.equal(state.state, 'End');
    });

    it(`The current state is 'Start'`, () => {
        state.pre();
        assert.equal(state.state, 'Start');
    });

    it(`The current state is 'UnStart'`, () => {
        state.pre();
        assert.equal(state.state, 'UnStart');
    });
})