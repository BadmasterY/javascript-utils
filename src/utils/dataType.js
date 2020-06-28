/*!
 * JavaScript data type check
 * dataType - v0.0.3 (2020-06-28 17:43:15)
 * Author: Mr. 854007673@qq.com
 * use regexp matching
 */

exports.dataType = data => {

    let typeStr = Object.prototype.toString.call(data);
    let regexp = new RegExp('(\\w+)(?=])', 'g');

    return typeStr.match(regexp)[0];
}

exports.curryingTypes = type => {
    return data => Object.prototype.toString.call(data) === `[object ${type}]`;
}