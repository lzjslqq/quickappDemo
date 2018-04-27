/*
 * @Author: lqq 
 * @Date: 2018-04-23 15:45:49 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-26 17:19:14
 */
import toPromise from '../promisify'
import share from '@system.share'
import prompt from '@system.prompt'
import webview from '@system.webview'
import notification from '@system.notification'
import vibrator from '@system.vibrator'


export default {
    /**
     * 分享数据到其他app
     *
     * @param {string} type:数据的MIME TYPE，要求字母全小写
     * @param {string} data ：分享的数据:
     * 1. 如果type是text/开头的mimetype（如text/plain），则data是要分享的文本内容；
     * 2. 如果type是其他值，则data是要分享的文件路径。
     * 支持三种文件路径：1. 通过fetch.fetch下载的文件路径；
     * 2. 通过file.save或list获得的文件路径；
     * 3. 以/开头的应用内部的资源文件
     * @returns Promise对象
     */
    share: ({ type, data }) => toPromise(share.share, { type, data }),
    /**
     * 显示Toast
     * 
     * @param {string} message:要显示的文本 
     * @param {int} duration:0为短时，1为长时，默认0
     * @returns Promise对象
     */
    showToast: ({ message, duration = 0 }) => Promise.resolve(prompt.showToast({ message, duration })),
    /**
     * 显示对话框
     * @param {string} title :标题
     * @param {string} message ：内容
     * @param {Array} buttons :按钮的数组，按钮结构：{text:'text',color:'#333333'}，color可选,最多支持3个button
     * @returns Promise对象
     */
    showDialog: ({ title = '标题', message = '内容', buttons = [] } = {}) => toPromise(prompt.showDialog, { title, message, buttons }),
    /**
     * 显示上下文菜单
     * @param {Array} itemList :按钮的文字数组
     * @param {string} itemColor ：按钮颜色
     * @returns Promise对象
     */
    showContextMenu: ({ itemList, itemColor = '#ff33ff' }) => toPromise(prompt.showContextMenu, { itemList, itemColor }),
    /**
     * 打开网页
     * @param {string} url :要加载的页面url
     * @returns Promise对象
     */
    loadUrl: ({ url }) => toPromise(webview.loadUrl, { url }),
    /**
     * 显示通知
     * @param {string} contentTitle :标题
     * @param {string} contentText :内容
     * @param {Object} clickAction :通知点击后触发动作的信息,例({uri:'/index.html?index=1'})，参数可以在页面中通过this.param1的方式使用
     * @returns Promise对象
     */
    showNotification: ({ contentTitle = '通知', contentText = '通知内容', clickAction } = {}) => Promise.resolve(notification.show({ contentTitle, contentText, clickAction })),
    /**
     * 触发震动，持续1秒
     * @returns Promise对象
     */
    vibrate: () => toPromise(vibrator.vibrate())
}