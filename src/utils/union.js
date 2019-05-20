/*!
 * Find the union of two arrays
 * union - v0.0.1 (2019-05-20 17:07:36)
 * Author: Mr. 854007673@qq.com
 */
const { message } = require('./message');

function union(arr1, arr2){
    if(!(arr1 instanceof Array && arr2 instanceof Array)) message('err', 'two arrays please.');

    let temp = arr1.filter(value => arr2.indexOf(value) === -1);

    let result = [].concat(arr1, temp);

    return result;
}

exports.union = union;