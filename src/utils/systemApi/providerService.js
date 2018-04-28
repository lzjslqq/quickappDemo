/*
 * @Author: lqq 
 * @Date: 2018-04-28 10:01:18 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-28 11:25:02
 */
import toPromise from '../promisify'
import appWxpay from '@service.wxpay'
import appAlipay from '@service.alipay'
import serviceShare from '@service.share'

const wxPay = {
    /**
     * 获取当前可用的微信支付调用方式
     * 
     * @return 'none'：未安装、'App'：app调用方式、'MWEB'：网页调用方式
     */
    getType: () => Promise.resolve(appWxpay.getType()),
    /**
     * 发起微信支付
     * 
     * @returns Promise
     */
    pay: ({ prepayid, extra }) => toPromise(appWxpay.pay, { prepayid, extra })
}

const alipay = {
    /**
     * 使用支付宝支完成支付
     * 
     * @param {string} orderInfo:	服务端生成的订单信息，参考支付宝的请求参数说明文档https://docs.open.alipay.com/204/105465
     * @param {string} callback:支付结果回调，格式参考支付宝的通知参数说明文档https://docs.open.alipay.com/204/105302
     */
    pay: ({ orderInfo, callback }) => Promise.resolve(appAlipay.pay({ orderInfo, callback })),
}

const share = {
    /**
     * 获取服务提供商
     * 
     * @returns 字符串，服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    getProvider: () => Promise.resolve(serviceShare.getProvider()),
    /**
     * 分享内容
     * 
     * @param {int} shareType:分享类型。默认图文０，纯文字1，纯图片2，音乐３，视频４
     * @param {string} title:分享的标题,分享类型0,1,3,4必须
     * @param {string} summary:分享的摘要
     * @param {string} targetUrl:点击后的跳转URL,分享类型0,3,4必须
     * @param {string} imagePath:分享图片/缩略图的本地地址,分享类型2,3,4必须
     * @param {string} mediaUrl:分享的音乐/视频数据URL,分享类型3,4必须
     * 
     * @returns Promise对象
     */
    share: ({ shareType, title, summary, imagePath, targetUrl, mediaUrl }) => toPromise(serviceShare.share, { shareType, title, summary, imagePath, targetUrl, mediaUrl }),
}

export default {
    wxpay,
    alipay,
    share
}