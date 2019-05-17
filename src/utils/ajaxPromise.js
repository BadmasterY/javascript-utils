/*!
 * Easy async ajax with promise
 * ajax - v0.0.1 (2019-05-17 16:41:57)
 * Author: Mr. 854007673@qq.com
 * describe: easy ajax and promise.
 */

const { ajax } = require('./ajax');
 
exports.ajaxPromise = function ajaxPromise(opts){
    return new Promise((resovle, reject) => {
        ajax(opts, resovle, reject);
    })
}