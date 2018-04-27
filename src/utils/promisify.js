/*
 * @Author: lqq 
 * @Date: 2018-04-23 14:49:00 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-27 16:55:44
 */


// 无论promise对象最后状态如何都会执行
Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

// 处于回调链的尾端，保证抛出任何可能出现的错误
Promise.prototype.done = function(onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function(reason) {
            // 抛出一个全局错误
            setTimeout(() => { throw reason }, 0);
        });
};


/**
 * Promise转换函数
 *
 * @param {any} func:要转换的函数
 * @param {any} obj ：参数对象
 * @returns Promise对象
 */
export default function toPromise(func, obj = {}) {
    return new Promise((resolve, reject) => {

        obj.success = (res) => { resolve(res) };
        obj.fail = (data, code) => { reject(data, code) };
        func(obj);
    });
}