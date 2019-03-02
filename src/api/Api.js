import http from './Http';
import constant from '../constant/Constant';

const basePath = constant.httpUrl;

/**
 * 获取回收的商品列表信息
 *
 * @param pageNum 第几页
 * @param pageSize 页大小
 */
export function getRecycleCommodity(pageNum, pageSize = 10) {
    const data = {
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get(`${basePath}/commodity/getRecycleCommodityPage`, data);
}

/**
 * 商品详情数据
 *
 * @param commodityNo 商品编号
 */
export function getCommodityDetail(commodityNo) {
    const data = {
        'commodityNo': commodityNo
    };
    return http.get(`${basePath}/commodity/getRecycleCommodity`, data);
}

/**
 * 获取收集人信息
 *
 * @param collectorNo 收集人单号
 */
export function getRecycleCollector(collectorNo) {
    const data = {
        'collectorNo': collectorNo
    };
    return http.get(`${basePath}/collector/getRecycleCollector`, data);
}

/**
 * 获取订单信息
 *
 * @param openId 微信唯一ID
 * @param pageNum 页号
 * @param pageSize 每页大小（可以不传）
 */
export function orderList(openId, pageNum, pageSize = 10) {
    const data = {
        'uid': openId,
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get(`${basePath}/order/getRecycleOrderPage`, data);
}

/**
 * 获取反向订单
 *
 * @param openId 微信唯一ID
 * @param pageNum 第几页
 * @param pageSize 页大小
 */
export function reverseOrderList(openId, pageNum, pageSize = 10) {
    const data = {
        'uid': openId,
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    return http.get(`${basePath}/reverse/getReverseOrderPage`, data);
}

/**
 * 生成订单
 *
 * @param uid 用户单号
 * @param orderImg 订单商品图片
 * @param phone 手机号
 * @param address 地址
 * @param remark 备注
 */
export function insertOrder(uid, orderImg, phone, address, remark) {
    const data = {
        'uid': uid,
        'orderImg': orderImg,
        'phone': phone,
        'address': address,
        'remark': remark
    };
    return http.post(`${basePath}/order/insert`, data);
}

/**
 * 生成预定订单
 *
 * @param uid
 * @param phone
 * @param address
 * @param remark
 */
export function insertReverseOrder(uid, phone, address, remark) {
    const data = {
        'uid': uid,
        'phone': phone,
        'address': address,
        'remark': remark
    };
    return http.post(`${basePath}/reverse/insert`, data);
}

/**
 * 获取订单详情
 *
 * @param orderNo 订单号码
 */
export function getRecycleOrder(orderNo) {
    const data = {
        orderNo: orderNo
    };
    return http.get(`${basePath}/order/getRecycleOrder`, data);
}