/*!
 * Easy async ajax from XMLHttpRequst
 * ajax - v0.0.1 (2019-05-17 16:40:35)
 * Author: Mr. 854007673@qq.com
 * describe: Maybe sometimes you don't need such a huge class library as jquery.
 */

const { message } = require('./message');

// async ajax
exports.ajax = function ajax({
    async = true, data = '', type = 'GET', url = message('err', `'url' is not found.`), headers
}, success, err) {
    if (async === false) message('err', `Can't use sync! If you need sync , please implement!`);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                err(xhr.responseText);
            }
        }
    }

    let urlStr = data;

    if (type.toLowerCase() === 'get') {
        xhr.open('get', `${url}?${urlStr}`, true);
        xhr.send();
    }

    if (type.toLowerCase() === 'post') {
        xhr.open('post', url, true);

        if (!headers) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        } else {
            for (let key in headers) {
                xhr.setRequestHeader(`${key}`, `${headers[key]}`);
            }
        }

        xhr.send(urlStr);
    }
}