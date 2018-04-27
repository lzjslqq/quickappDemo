/*
 * @Author: lqq 
 * @Date: 2018-04-24 10:28:48 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-25 14:23:18
 */
import toPromise from '../promisify.js'
import appStorage from '@system.storage'
import appFile from '@system.file'


const storage = {

    /**
     * 读取存储内容
     *
     * @param {string} key:索引
     * @param {string} defaultValue ：如果key不存在，返回defaultValue。如果defaultValue未指定，返回长度为0的空字符串
     * @returns Promise对象
     */
    get: ({ key, defaultValue = '' }) => toPromise(appStorage.get, { key, defaultValue }),
    /**
     * 修改存储内容
     *
     * @param {string} key:索引
     * @param {string} value ：新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项
     * @returns Promise对象
     */
    set: ({ key, value }) => toPromise(appStorage.set, { key, value }),
    /**
     * 清空存储内容
     *
     * @returns Promise对象
     */
    clear: () => toPromise(appStorage.clear),
    /**
     * 删除存储内容
     *
     * @param {string} key:索引
     * @returns Promise对象
     */
    delete: ({ key }) => toPromise(appStorage.delete, { key }),
};

const file = {

    /**
     * 将源文件移动到指定位置，接口中使用的URI描述请参考https://doc.quickapp.cn/framework/file-organization.html
     *
     * @param {string} srcUri:源文件的uri，不能是应用资源路径和tmp类型的uri
     * @param {string} dstUri ：目标文件的uri，不能是应用资源路径和tmp类型的uri
     * @returns Promise对象
     */
    move: ({ srcUri, dstUri }) => toPromise(appFile.move, { srcUri, dstUri }),
    /**
     * 将源文件复制一份并存储到指定位置，接口中使用的URI描述请参考https://doc.quickapp.cn/framework/file-organization.html
     *
     * @param {string} srcUri:源文件的uri
     * @param {string} dstUri ：目标文件的uri，不能是应用资源路径和tmp类型的uri
     * @returns Promise对象
     */
    copy: ({ srcUri, dstUri }) => toPromise(appFile.copy, { srcUri, dstUri }),
    /**
     * 获取指定目录下的文件列表，接口中使用的URI描述请参考https://doc.quickapp.cn/framework/file-organization.html
     *
     * @param {string} uri:目录uri，不能是应用资源路径和tmp类型的uri
     * @returns Promise对象
     */
    list: ({ uri }) => toPromise(appFile.list, { uri }),
    /**
     * 获取本地文件的文件信息，接口中使用的URI描述请参考https://doc.quickapp.cn/framework/file-organization.html
     *
     * @param {string} uri:文件的uri，不能是应用资源路径和tmp类型的uri
     * @returns Promise对象
     */
    get: ({ uri }) => toPromise(appFile.get, { uri }),
    /**
     * 删除本地存储的文件，接口中使用的URI描述请参考https://doc.quickapp.cn/framework/file-organization.html
     *
     * @param {string} uri:需要删除的文件uri，不能是应用资源路径和tmp类型的uri
     * @returns Promise对象
     */
    delete: ({ uri }) => toPromise(appFile.delete, { uri }),
};

export default {
    storage,
    file
}