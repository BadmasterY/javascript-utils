const { stateMachine } = require('./utils/stateMachine');
const { ajax } = require('./utils/ajax');
const { ajaxPromise } = require('./utils/ajaxPromise');
const { differenceSet } = require('./utils/differenceSet');
const { intersection } = require('./utils/intersection');
const { complementSet } = require('./utils/complementSet');
const { union } = require('./utils/union');
const { dataType, curryingTypes } = require('./utils/dataType');

exports.stateMachine = stateMachine; // 状态机
exports.ajax = ajax; // 简单异步ajax
exports.ajaxPromise = ajaxPromise; // 简单异步ajax与promise
exports.differenceSet = differenceSet; // 差集
exports.intersection = intersection; // 交集
exports.complementSet = complementSet; // 补集
exports.union = union; // 并集
exports.dataType = dataType; // 判断数据类型
exports.curryingTypes = curryingTypes; // 柯里化判断数据类型