/*!
 * JavaScript Finite State Machine
 * stateMachine - v0.0.1 (2019-05-15 15:39:55)
 */

let id = 0;

const StateMachine = (function () {

    function _err(msg){
        throw new Error(msg);
    }

    /**
     * 下一状态
     */
    function _next() {
        this.state = _getNextState.call(this, this.state);

        _transition.call(this);
    }

    /**
     * 上一状态
     */
    function _pre() {
        this.state = _getPreState.call(this, this.state);

        _transition.call(this);
    }

    /**
     * 获取下一状态
     * @param {String} state 当前状态
     */
    function _getNextState(state) {
        let nextState = '';

        for (let key in this.transitions) {
            if (state === this.transitions[key].from) nextState = this.transitions[key].name;
        }

        return nextState;
    }

    /**
     * 获取上一状态
     * @param {String} state 当前状态
     */
    function _getPreState(state) {
        let preState = '';

        for (let key in this.transitions) {
            if (state === this.transitions[key].to) preState = this.transitions[key].name;
        }

        return preState;
    }

    /**
     * 状态转移时触发的方法
     */
    function _transition() {

        if (this.methods.onStateChange) this.methods.onStateChange(this.state);

        if (!(this.methods['on' + this.state])) {
            console.error(`on${this.state}: This function is not defined.`);
            return;
        }

        this.methods['on' + this.state]();
    }

    /**
     * 状态机构造函数
     * @param {Object} opts 包含状态机必须参数的对象
     */
    let stateMachine = function ({
        init = _err(`'init' is not defined.`),
        transitions = _err(`'transitions' is not defined.`),
        methods = _err(`'methods' is not defined.`)
    }) {
        // 安全模式类
        if (!(this instanceof stateMachine)) return new stateMachine({ init, transitions, methods });

        this.state = init; // 初始状态
        this.transitions = [].concat(transitions); // 
        this.methods = Object.assign({}, methods);

        this.id = id++; // 状态机id
    };

    Object.assign(stateMachine.prototype, {
        constructor: stateMachine,

        /**
         * 进入下一状态方法
         */
        next: _next,

        /**
         * 进入上一状态方法
         */
        pre: _pre,

        /**
         * 表示state是否为当前状态
         * @param {String} state 状态
         */
        is(state) {
            return this.state === state;
        },

        /**
         * 事件event是否能在当前状态触发
         * @param {String} event 事件,如onStart/onUpload等
         */
        can(event) {
            // 保留接口
            console.warn('保留接口，暂未实现');
            return false;
        },

        /**
         * 事件event是否不能在当前状态触发
         * @param {String} event 事件,如onStart/onUpload等
         */
        cannot(event) {
            // 保留接口
            console.warn('保留接口，暂未实现');
            return false;
        }
    });

    return stateMachine;
})();

exports.stateMachine = StateMachine;