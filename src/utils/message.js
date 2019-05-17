/*!
 * Unified Message Export
 * message - v0.0.1 (2019-05-17 15:38:39)
 * Author: Mr. 854007673@qq.com
 */

exports.message = function () {

    let args = arguments;

    let type = '';
    let msg = '';

    switch (args.length) {
        case '1':
            type = 'log';
            msg = args[0];
            break;
        case '2':
            type = args[1];
            msg = args[2];
            break;
        default:
            throw new Error(`This arguments length: ${args.length}.`);
    }

    switch (type) {
        case 'log':
            console.log(msg);
            break;
        case 'warn':
            console.warn(msg);
            break;
        case 'err':
            throw new Error(msg);
        default:
            console.warn(`Type '${type}' is not defined.`);
    }
}