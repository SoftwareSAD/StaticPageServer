import express from 'express'
import {config} from '../config'
import mongoose from 'mongoose'
import UsersModel from '../model/users'
import {_dbError, _encryptedPWD} from '../function/function'
import public from './public'
import  smsverity from './smsverity'
import movie from './movie'
import cinema from './cinema'
import users from './users'
import news from './news'
const router = express.Router()

<<<<<<< HEAD
router.use(users)
=======
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
<<<<<<< HEAD
  const id = parseInt(req.params.id);
=======
  const id = parseInt(req.params.id)
>>>>>>> c9e8715cf694fffb7bf0b99c5de748b9f384880b
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> c9e8715cf694fffb7bf0b99c5de748b9f384880b

// router.use('/api/users', users)
>>>>>>> cc17b4c33fa4810d6e204cd25c0427127141d8c2

/**
 * 登录注册
 **/
router.post('/login', _public.login);
router.get('/statistics', _public.getStatistics);

/**
 * 手机注册验证
 */
router.post('/sms', _smsverity.send_sms);

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

export default router;
