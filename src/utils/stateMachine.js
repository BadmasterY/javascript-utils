/*!
 * JavaScript Finite State Machine
 * stateMachine - v0.0.2 (2019-05-17 13:16:57)
 * Author: Mr.
 * add .to() transition to some state
 */

const StateMachine = (function () {
    let ID = 0;

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
     * 过渡到某种状态
     * @param {String} state 某一种状态
     */
    function _to(state){
        this.state = state;

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

        if (this.methods.onStateChange instanceof Function) this.methods.onStateChange(this.state);

        if (!(this.methods['on' + this.state])) {
            console.error(`ID ${this.id}: function 'on${this.state}' is not defined.`);
            return;
        }

        if(this.methods['on' + this.state] instanceof Function)this.methods['on' + this.state]();
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

        this.id = ID++; // 状态机id
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
         * 过渡到某种状态
         */
        to: _to,

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