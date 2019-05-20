/*!
 * Find the difference set of two arrays
 * differenceSet - v0.0.1 (2019-05-20 16:46:05)
 * Author: Mr. 854007673@qq.com
 */
const { message } = require('./message');

function differenceSet(arr1, arr2) {
    if(!(arr1 instanceof Array && arr2 instanceof Array)) message('err', 'two arrays please.');

    let result = arr1.filter(value => arr2.indexOf(value) === -1);
    return result;
}

exports.differenceSet = differenceSet;