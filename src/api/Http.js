import 'whatwg-fetch';
import {serialize} from './Url';

const MIME_TYPE = {
    JSON: 'application/json',
};

const DEFAULT_OPTIONS = {
    method: 'GET',
    // credentials: 'include',
    mode: 'cors',
    redirect: 'follow',
};

function _genFetchOptions(url, options) {
    return Object.assign({}, DEFAULT_OPTIONS, options);
}

function _fetch(url, options = {}) {
    const opt = _genFetchOptions(url, options);

    return fetch(url, opt)
        .then(function (response) {
            const json = response.json();
            if (response.ok) {
                return json;
            } else {
                return json.then(err => {
                    throw err;
                });
                // const error = new Error(response.statusText);
                // error.response = response;
                // throw error;
            }
        })
        .then((json) => {
            return json;
        });
}

const HTTP = {
    /**
     * 以GET方式请求一个json资源
     * @param {String} url 请求的url
     * @param {Object} [query] 如提供，会作为query拼接在url中
     * @param {Object} [options] 其他Fetch API的init参数
     * @return {Promise}
     */
    get: (url, query, options = {}) => {
        options.method = 'GET';
        options.headers = {
            'Accept': MIME_TYPE.JSON,
        };
        return _fetch(HTTP.genQueryUrl(url, query), options);
    },

    /**
     * 以POST方式请求一个json资源，并附加可选的json数据
     * @param {String} url 请求的url
     * @param {Object} [data] 如提供，会作为body传递 (application/json)
     * @param {Object} [options] 其他Fetch API的init参数
     * @return {Promise}
     */
    post: (url, data, options = {}) => {
        options.method = 'POST';
        options.headers = {
            'Accept': MIME_TYPE.JSON,
            'Content-Type': MIME_TYPE.JSON,
        };
        options.body = JSON.stringify(data);

        return _fetch(url, options);
    },

    /**
     *
     * @param {String} input 请求资源的地址
     * @param {Object} [init] 配置参数
     * @return {Promise}
     */
    fetch: (input, init = {}) => {
        return _fetch(input, init);
    },

    genQueryUrl(url, data) {
        if (!data) {
            return url;
        }

        const index = url.indexOf('?');

        return url + (index !== -1 ? '&' : '?') + serialize(data);
    },
};

export default HTTP;