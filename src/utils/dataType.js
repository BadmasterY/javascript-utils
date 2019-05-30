/*!
 * JavaScript data type check
 * dataType - v0.0.2 (2019-05-30 09:45:57)
 * Author: Mr. 854007673@qq.com
 * use regexp matching
 */

exports.dataType = data => {

    let typeStr = Object.prototype.toString.call(data);
    let regexp = new RegExp('(\\w+)(?=])', 'g');

    return typeStr.match(regexp)[0];
}