/*!
 * JavaScript data type check
 * dataType - v0.0.1 (2019-05-28 09:35:10)
 * Author: Mr. 854007673@qq.com
 */

exports.dataType = data => {

    let typeStr = Object.prototype.toString.call(data);
    let regexp = new RegExp('(\\w+)(?=])');

    return typeStr.match(regexp)[0];
}