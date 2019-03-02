const anchor = document.createElement('a');

export function toAbsoluteUrl(url) {
    anchor.href = url;
    return anchor.href;
}

/**
 * 序列化url参数
 * @param  {object | array} obj 需要序列化的对象
 * @param  {string} prefix 拼接时是否需要将key全转为小写
 * @return {string} 序列化的参数
 *
 * eg. 1. key1=val1&key2=val2&...
 *     2. key[0]=1&key[1]=2&key[3][e]=a&key[3][d]=t
 */
export const serialize = _serialize;

function _serialize(obj, prefix) {
    const arr = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];
            const newKey = prefix ? prefix + '[' + key + ']' : key;

            if (isArray(val) || isObject(val)) {
                arr.push(_serialize(val, newKey));
            } else {
                arr.push(`${encodeURIComponent(newKey)}=${encodeURIComponent(val)}`);
            }
        }
    }

    return arr.join('&');
}


function isArray(obj) {
    return Array.isArray(obj);
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}