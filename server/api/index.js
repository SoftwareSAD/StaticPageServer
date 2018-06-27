import express from 'express'
import {config} from '../config'
import mongoose from 'mongoose'
import UsersModel from '../model/users'
import {_dbError, _encryptedPWD} from '../function/function'
import _public from './public'
import  _smsverity from './smsverity'
import _movie from './movie'
import _cinema from './cinema'
import users from './users'
import _news from './news'
const router = express.Router()

router.use(users)

/**
 * 登录注册
 **/
router.post('/login', _public.login)
router.get('/statistics', _public.getStatistics)

/**
 * 手机注册验证
 */
router.post('/sms', _smsverity.send_sms)

/**
 * 处理用户个人页面
 */


/**
 * 处理电影页面
 */


/**
 * 处理影院页面
 */


/**
 * 处理资讯页面
 */

export default router
