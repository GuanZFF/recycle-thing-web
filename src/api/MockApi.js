import http from "./Http";

/**
 * 获取回收的商品列表信息
 *
 * @returns {Promise<{code: number, msg: string, data: {count: number, hasNextPage: boolean, pageNum: number, list: *[]}}>}
 */
export function getRecycleCommodity() {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: true,
            pageNum: 1,
            list: [{
                id: 1,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 2,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 3,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 4,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 5,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 6,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 7,
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 8,
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }]
        }
    });
}

/**
 * 商品详情数据
 *
 * @param commodityNo 商品编号
 * @returns {Promise<{code: number, msg: string, data: {commodityNo: string, commodityName: string, commodityPicture: string, recycleTime: string, expectSellPrice: string}}>}
 */
export function getCommodityDetail(commodityNo) {
    const commodityDetail = {
        code: 200,
        msg: '',
        data: {
            commodityNo: 'SP0010010001',
            commodityName: '液晶电视机27寸',
            commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
            recycleTime: '2018-08-15 13:58:43',
            expectSellPrice: '23.5',
            imgUrl: [
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/img3.jpeg',
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/img6.jpeg',
                'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/img9.jpg',
            ]
        }
    };
    return new Promise((resolve) => {
        resolve(commodityDetail);
    })
}

/**
 * 获取商品收集人信息列表
 */
export function getCommodityCollector() {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: 1,
            pageNum: 1,
            list: [{
                id: 1,
                collectorNo: 'FPHS0010001',
                status: 1,
                statusDesc: '存在',
                username: 'zhenfeng.guan',
                phone: '18255408516',
                sex: 1,
                sexDesc: '男',
                address: '安徽省阜阳市太和县坟台镇双中乡前冯自然村关楼100号',
                avatar: ''
            }, {
                id: 2,
                collectorNo: 'FPHS0010001',
                status: 2,
                statusDesc: '不存在',
                username: 'zhenfeng.guan',
                phone: '18255408516',
                sex: 2,
                sexDesc: '女',
                address: '安徽省阜阳市太和县坟台镇双中乡前冯自然村关楼100号',
                avatar: ''
            }]
        }
    })
}

export function orderList(openId, pageNum, pageSize = 10) {
    const data = {
        'uid': openId,
        'pageNum': pageNum,
        'pageSize': pageSize
    };
    http.get('http://localhost:8083/web/order/getRecycleOrderPage', data).then(res => {
        console.log(res);
    });
    console.log(openId, pageNum);
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: true,
            pageNum: 1,
            list: [{
                id: 1,
                orderNo: 'FPHS0010001',
                commodityNo: 'FPHS0010001',
                commodityName: '电视机',
                orderImg: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                orderTime: '2018-08-15 13:58:43',
                stateDesc: '订单未完成',
                state: 1
            }, {
                id: 2,
                orderNo: 'FPHS0010001',
                commodityNo: 'FPHS0010001',
                commodityName: '电视机',
                orderImg: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                orderTime: '2018-08-15 13:58:43',
                stateDesc: '订单完成',
                state: 2
            }]
        }
    })
}

/**
 * 通过收集人编号获取收集人信息
 */
export function getRecycleCollector(collectorNo) {
    const data = {
        'collectorNo': collectorNo
    };
    console.log(data);
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            id: 1,
            collectorNo: 'FPHS0010001',
            status: 1,
            statusDesc: '存在',
            username: '关振锋',
            phone: '12345678900',
            sex: 1,
            sexDesc: '男',
            address: 'test',
            avatar: '',
            wechatNo: '微信号'
        }
    })
}

/**
 * 首页收集人信息
 */
export function getRecycleCollectorDetail(collectorNo) {
    const data = {
        'collectorNo': collectorNo
    };
    console.log(data);
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            username: '欧阳克勤',
            phone: '13252078516',
            recycleCommodity: '电冰箱/洗衣机/空调/电视机/风扇/旧手机等',
            avatar: 'https://recycle-thing.oss-cn-hangzhou.aliyuncs.com/RCI1538312169078KS.jpeg'
        }
    })
}

/**
 * 获取商品收集人信息列表
 */
export function getCollectorDetail(collectorNo) {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: 1,
            pageNum: 1,
            list: [{
                id: 1,
                collectorNo: 'FPHS0010001',
                status: 1,
                statusDesc: '存在',
                username: 'test',
                phone: '12345678900',
                sex: 1,
                sexDesc: '男',
                address: 'test',
                avatar: ''
            }, {
                id: 2,
                collectorNo: 'FPHS0010001',
                status: 2,
                statusDesc: '不存在',
                username: 'test.test',
                phone: '12345678900',
                sex: 2,
                sexDesc: '女',
                address: 'test',
                avatar: ''
            }]
        }
    })
}

/**
 * 获取订单详情
 *
 * @param orderNo 订单号码
 * @returns {*|Promise}
 */
export function getRecycleOrder(orderNo) {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            id: 1,
            orderNo: 'FPHS0010001',
            commodityNo: 'FPHS0010001',
            commodityName: '电视机',
            orderImg: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
            orderTime: '2018-08-15 13:58:43',
            stateDesc: '订单未完成',
            state: 1
        }
    })
}

export function insertOrder(order) {

}

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}