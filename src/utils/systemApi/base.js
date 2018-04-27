import app from '@system.app'
import router from '@system.router'

/**
 * 当前应用信息
 *
 *  name String 应用名称 
    versionName String 应用版本名称 
    versionCode Integer 应用版本号 
    logLevel String log级别 
    source 
 */
const AppInfo = app.getInfo();