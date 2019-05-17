/*!
 * Easy async ajax from XMLHttpRequst
 * ajax - v0.0.1 (2019-05-17 16:40:35)
 * Author: Mr. 854007673@qq.com
 * describe: Maybe sometimes you don't need such a huge class library as jquery.
 */

// async ajax
exports.ajax = function ajax(opts, success, err) {
    if (opts.async === false) message('err', `Can't use sync! If you need sync , please implement!`);

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

    let urlStr = opts.data;

    if (opts.type.toLowerCase() === 'get') {
        xhr.open('get', `${opts.url}?${urlStr}`, true);
        xhr.send();
    }

    if (opts.type.toLowerCase() === 'post') {
        xhr.open('post', opts.url, true);

        if (!opts.headers) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        } else {
            for (let key in opts.headers) {
                xhr.setRequestHeader(`${key}`, `${opts.headers[key]}`);
            }
        }

        xhr.send(urlStr);
    }
}