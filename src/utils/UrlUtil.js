/**
 * 获取URL中某个参数的值
 * @param  {string} name  参数名
 * @return {string} 参数值
 */
export function getUrlParam(name) {
    const params = {};
    window.location.search.substring(1).split('&').forEach(str => params[str.split('=')[0]] = str.split('=')[1]);

    return decodeURIComponent(params[name] || '');
}

/**
 * 获取链接中某个参数的值
 * @param  {string} link  链接
 * @param  {string} name  参数名
 * @return {string} 参数值
 */
export function getLinkParam(link, name) {
    const params = {};
    const oldLink = decodeURI(link);
    oldLink.substring(oldLink.indexOf('?')).split('&').forEach(str => params[str.split('=')[0]] = str.split('=')[1]);

    return decodeURIComponent(params[name] || '');
}