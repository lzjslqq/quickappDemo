/*
 * @Author: lqq 
 * @Date: 2018-04-27 15:01:41 
 * @Last Modified by: lqq
 * @Last Modified time: 2018-04-27 15:56:06
 */
import toPromise from '../promisify'
import media from '@system.media'
import image from '@system.image'
import audio from '@system.audio'

export default {
    /**
     * 拍摄照片
     */
    takePhoto: () => toPromise(media.takePhoto),
    /**
     * 拍摄视频
     */
    takeVideo: () => toPromise(media.takeVideo),
    /**
     * 选择图片
     */
    pickImage: () => toPromise(media.pickImage),
    /**
     * 选择视频
     */
    pickVideo: () => toPromise(media.pickVideo),
    /**
     * 获取图片信息
     * 
     * @param {string} uri:图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径 
     * @returns Promise对象
     */
    getImageInfo: (uri) => toPromise(media.getImageInfo, { uri }),
    /**
     * 压缩图片
     * 
     * @param {string} uri:图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
     * @param {int} quality:图片的压缩质量，0-100之间，默认是75
     * @param {Number} ratio:尺寸压缩倍数，必须大于0，尺寸会变为原图的1/ratio大小
     * @param {string} format:图片保存格式，支持JPEG，PNG，WEBP三种格式。默认使用JPEG格式
     * 
     * @returns Promise对象
     */
    compressImage: ({ uri, quality = 75, ratio, format = 'JPEG' }) => toPromise(media.compressImage, { uri, quality = 75, ratio, format = 'JPEG' }),
    /**
     * 对图片按顺序执行编辑操作
     * 在顺序执行编辑操作列表中的操作时，上一步操作生成的结果会作为下一步操作的输入，
     * 坐标系也是以上一步操作生成的结果的左上角为坐标原点重新确定的。
     * 
     * @param {string} uri:图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
     * @param {ObjectArray} operations:编辑操作列表，按照先后顺序执行。如果未提供，则不会执行编辑操作，仅重新保存图片
     * @param {int} quality:图片的压缩质量，0-100之间，默认是75
     * @param {string} format:图片保存格式，支持JPEG，PNG，WEBP三种格式。默认使用JPEG格式
     * 
     * @returns Promise对象
     */
    applyOperations: ({ uri, operations, quality = 75, format = 'JPEG' }) => toPromise(media.applyOperations, { uri, operations, quality = 75, format = 'JPEG' }),
    /**
     * 打开编辑器来编辑图片。目前支持选择图片范围并裁剪。
     * 
     * @param {string} uri:图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
     * 
     * @returns Promise对象
     */
    editImage: ({ uri }) => toPromise(media.editImage, { uri }),
    /**
     * 音频接口
     */
    audio
}