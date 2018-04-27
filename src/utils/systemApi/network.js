/*
 * @Author: lqq 
 * @Date: 2018-04-23 16:23:40 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-26 17:24:47
 */
import toPromise from '../promisify'
import appFetch from '@system.fetch'
import request from '@system.request'


export default {
    /**
     * 获取网络数据
     * 
     * @param {string} url:资源url
     * @param {string/Object} data:请求的参数，可以是字符串，或者是json对象
     * @param {object} header:请求的header，会将其所有属性设置到请求的header部分,useragent设置无效 
     * @param {string} method:默认为 GET，可以是：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @returns Promise对象
     */
    fetch: ({ url, data = {}, header = {}, method = 'GET' }) => {
        Object.assign(header, { 'content-type': 'application/json' });
        return toPromise(appFetch.fetch, { url, data, header, method })
    },
    /**
     * 上传文件
     * 
     * @param {string} url:资源url
     * @param {Array} files:需要上传的文件列表，使用multipart/form-data方式提交 ([{uri,name,filename,type}])
     * @param {object} header:请求的header，会将其所有属性设置到请求的header部分,useragent设置无效 
     * @param {string} method:默认为POST，可以是： POST, PUT
     * @param {Array} data:HTTP请求中其他额外的form data
     * @returns Promise对象
     */
    upload: ({ url, files, header = {}, method = 'POST', data = {} }) => toPromise(request.upload, { url, files, header, method, data }),
    /**
     * 下载文件
     * 
     * @param {string} url:资源url
     * @param {object} header:请求的header，会将其所有属性设置到请求的header部分,useragent设置无效 
     * @returns Promise对象
     */
    download: ({ url, header = {} }) => toPromise(request.download, { url, header }),
    /**
     * 监听下载任务
     * 
     * @param {string} token:download接口返回的token
     * @returns Promise对象
     */
    onDownloadComplete: ({ url, header = {} }) => toPromise(request.download, { url, header })

}