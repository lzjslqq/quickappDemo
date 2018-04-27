/*
 * @Author: lqq 
 * @Date: 2018-04-27 15:01:36 
 * @Last Modified by:   lqq 
 * @Last Modified time: 2018-04-27 15:01:36 
 */
import toPromise from '../promisify'
import cipher from '@system.cipher'

export default {
    /**
     * RSA加解密。不支持分段加密，内容超长会出错
     * @param {string} action :加解密类型，两个可选值：encrypt：加密，decrypt： 解密
     * @param {string} text ：待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，待解密的文本内容应该是经过base64编码的一段二进制值。base64编码使用默认风格，下同
     * @param {string} key :加密或解密使用到的RSA密钥，经过base64编码后生成的字符串。加密时key为公钥，解密时key为私钥
     * @param {string} transformation :RSA算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"
     * @returns Promise对象
     */
    rsa: ({ action = 'encrypt', text, key, transformation = 'RSA' }) => toPromise(cipher.rsa, { action, text, key, transformation }),
}