const { stateMachine } = require('./utils/stateMachine');
const { ajax } = require('./utils/ajax');
const { ajaxPromise } = require('./utils/ajaxPromise');
const { differenceSet } = require('./utils/differenceSet');
const { intersection } = require('./utils/intersection');
const { complementSet } = require('./utils/complementSet');
const { union } = require('./utils/union');
const { dataType } = require('./utils/dataType');
const { isType } = require('./utils/isType');

module.exports = {
    stateMachine, // 状态机
    ajax, // 简单异步ajax
    ajaxPromise, // 简单异步ajax与promise
    differenceSet, // 差集
    intersection, // 交集
    complementSet, // 补集
    union, // 并集
    dataType, // 判断数据类型，返回字符串
    isType //判断数据类型，返回boolean
};