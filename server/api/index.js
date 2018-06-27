import express from 'express'
import {config} from '../config'
import mongoose from 'mongoose'
import login from './login'
import  smsverity from './smsverity'
import movie from './movie'
import cinema from './cinema'
import users from './users'
import news from './news'
const router = express.Router()

/**@desc db options*/
// let options = {
//   user: 'heygrandpa',
//   pass: 'SYSU2018',
//   keepAlive: true,
// }
// mongoose.Promise = global.Promise
//
// mongoose.connect('mongodb://heygrandpa:SYSU2018@ds117691.mlab.com:17691/maoyanmovie', options);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, '数据库连接失败:'));
// db.once('open', function() {
//   console.log('数据库已连接');
// });


/**用户路由选择*/
router.use(users)

/**登录注册*/
router.use(login)

/**手机注册验证*/
router.use(smsverity)

/**处理电影页面*/
router.use(movie)


/**处理影院页面*/


/**处理资讯页面*/
router.use(news)

export default router
