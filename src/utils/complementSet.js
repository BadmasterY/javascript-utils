/*!
 * Find the complement set of two arrays
 * complementSet - v0.0.1 (2019-05-20 17:05:20)
 * Author: Mr. 854007673@qq.com
 */
const { message } = require('./message');

function complementSet(arr1, arr2){
    if(!(arr1 instanceof Array && arr2 instanceof Array)) message('err', 'two arrays please.');

    let temp1 = arr1.filter(value => arr2.indexOf(value) === -1);
    let temp2 = arr2.filter(value => arr1.indexOf(value) === -1);

    let result = [].concat(temp1, temp2);

    return result;
}

exports.complementSet = complementSet;