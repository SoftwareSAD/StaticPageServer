import express from 'express'
import {config} from '../config'
import mongoose from 'mongoose'
import UsersModel from '../model/users'
import {_dbError, _encryptedPWD} from '../function/function'
import _public from './public'
import  _smsverity from './smsverity'
import _movie from './movie'
import _cinema from './cinema'
// import users from './users'
import _news from './news'
const router = express.Router()

/**
 * 用户登录选择
 */

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

// router.use('/api/users', users)

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
