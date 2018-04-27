/*
 * @Author: lqq 
 * @Date: 2018-04-27 16:12:46 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-27 17:45:43
 */
import toPromise from '../promisify'
import appPush from '@service.push'
import appPay from '@service.pay'
import appStats from '@service.stats'
import appAccount from '@service.account'

const push = {
    /**
     * 获取服务提供商
     */
    getProvider: () => Promise.resolve(appPush.getProvider()),
    /**
     * 订阅push，后续可以收到push消息（一般可在应用初始化的地方进行调用。比如在app的onCreate方法中调用。）
     */
    subscribe: () => toPromise(appPush.subscribe),
    /**
     * 取消订阅（一般不建议调用，调用后regId失效，需要重新订阅获取新的regId）
     */
    unsubscribe: () => toPromise(appPush.unsubscribe),
    /**
     * 添加push事件回调（透传消息的payload内容可在此回调中收到）
     * 
     * @param {Function} callback:push事件回调处理
     */
    on: (callback) => Promise.resolve(appPush.on({ callback })),
    /**
     * 移除push事件回调，push.on中的callback不会再收到透传内容
     * 
     */
    off: () => Promise.resolve(appPush.off()),
}

const pay = {
    /**
     * 获取服务提供商
     */
    getProvider: () => Promise.resolve(appPay.getProvider()),
    /**
     * 使用支付完成付款
     * 
     * @param {string} orderInfo:订单信息
     * 
     * @returns Promise对象
     */
    pay: ({ orderInfo }) => toPromise(appPay.pay, { orderInfo }),

}

const stats = {
    /**
     * 获取服务提供商
     */
    getProvider: () => Promise.resolve(appStats.getProvider()),
    /**
     * 计数类型事件。通常用来描述某个事件累积触发的次数，适用的场景如按钮点击、界面进出、⽤⼾输⼊等。
     * 
     * @param {string} category:定义事件的类别.开发者可使⽤该参数对自定义打点做整理归类
     * @param {string} key:定义事件的主键，作为该事件的唯一标识
     * @param {Object} map:定义事件的属性和取值（Key-Value键值对）
     * 
     * @returns Promise对象
     */
    recordCountEvent: ({ category, key, map }) => Promise.resolve(appStats.recordCountEvent({ category, key, map })),
    /**
     * 计数类型事件。通常用来描述某个带数值的事件,适用的场景如：消费事件，附带的数值是每次消费的金额；下载附件事件，附带的数值是每次下载消耗的时间等
     * 
     * @param {string} category:定义事件的类别.开发者可使用该参数对自定义打点做整理归类
     * @param {string} key:定义事件的主键，作为该事件的唯一标识
     * @param {Number} value:定义事件的值
     * @param {Object} map:定义事件的属性和取值（Key-Value键值对）
     * 
     * @returns Promise对象
     */
    recordCalculateEvent: ({ category, key, value, map }) => Promise.resolve(appStats.recordCalculateEvent({ category, key, value, map })),
}

const account = {
    /**
     * 获取服务提供商
     */
    getProvider: () => Promise.resolve(appAccount.getProvider()),
    /**
     * 进行OAuth授权
     * 
     * @param {string} type:授权码模式为code，简化模式为token
     * @param {string} redirectUri:重定向URI
     * @param {Number} scope:申请的权限范围，目前只支持一种scope，假如不填则getProfile只返回openId。 scope.baseProfile：获取用户基本信息
     * @param {Object} state:可以指定任意值，认证服务器会原封不动地返回这个值
     * 
     * @returns Promise对象
     */
    authorize: ({ type, redirectUri, scope, state }) => Promise.resolve(appAccount.authorize({ type, redirectUri, scope, state })),
    /**
     * 获得用户基本信息
     * 
     * @param {string} token:访问令牌
     * 
     * @returns Promise对象
     */
    getProfile: ({ token }) => toPromise(appAccount.getProfile, { token }),
}


export default {
    push,
    pay,
    stats,
    account
}