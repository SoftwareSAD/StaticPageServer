import express from 'express'
// import login from './login'
const router = express.Router()
import _public from './public'
import _movie from './movie'
import _cinema from './cinema'
import _user from './user'
import _news from './news'


/**
 * 登录注册
 **/
router.post('/login', _public.login)
router.get('/statistics', _public.getStatistics)

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
