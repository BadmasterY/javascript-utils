/*!
 * JavaScript data type check
 * dataType - v0.0.1 (2019-05-28 09:35:10)
 * Author: Mr. 854007673@qq.com
 */
const { message } = require('./message');

exports.dataType = data => {
    switch (Object.prototype.toString.call(data)) {
        case '[object Undefined]':
            return undefined;
        case '[object Null]':
            return null;
        case '[object String]':
            return String;
        case '[object Object]':
            return Object;
        case '[object Number]':
            return Number;
        case '[object Array]':
            return Array;
        case '[object Function]':
            return Function;
        case '[object Boolean]':
            return Boolean;
        case '[object Symbol]':
            return Symbol;
        default:
            message('warn', `This type ${Object.prototype.toString.call(data)} is not found.`);
            break;
    }
}