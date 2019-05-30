/*!
 * JavaScript data type
 * isType - v0.0.1 (2019-05-30 11:57:39)
 * Author: Mr. 854007673@qq.com
 */
const { dataType } = require('./dataType');

exports.isType = data => type => dataType(data) === type;