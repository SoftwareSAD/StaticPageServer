import express from 'express'
import mongoose from 'mongoose'
import  smsverity from './smsverity'
import movie from './movie'
import cinema from './cinema'
import users from './users'
import news from './news'
import {config} from '../config'
const router = express.Router()

<<<<<<< HEAD
/**@desc db options*/
let options = {
  user: config.username,
  pass: config.password,
  keepAlive: true,
}
mongoose.Promise = global.Promise

mongoose.connect(config.url, options);
=======
mongoose.Promise = global.Promise

mongoose.connect('mongodb://sysu:sysu2018@120.77.37.156:27017/maoyanmovie?authSource=admin');
>>>>>>> 45e2276d324e661687f9f96e7cd7fb22c6acc697
var db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库连接失败:'));
db.once('open', function() {
  console.log('数据库已连接');
});


/**用户注册登录选择*/
router.use(users)


/**手机注册验证*/
router.use(smsverity)

/**处理电影页面*/
router.use(movie)


/**处理影院页面*/
router.use(cinema)

/**处理资讯页面*/
router.use(news)

export default router
