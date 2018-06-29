import UsersModel from '../model/news'
import { _dbError, _dbSuccess} from '../function/function'
import { Router } from 'express'

const router = Router()

/**
 * @desc 用户登录
 * @param cellphone：手机号
           password: 密码
 * @return 返回 登陆信息
 * */
router.get('/login', async (req, res, next) => {
  console.log('########用户登录#########');
  let findUser = await UsersModel.find({cellphone: req.body.cellphone}).exec()
  let checkPwd = findUser[0] ? findUser[0].password : ''
  let inputPwd = req.body.password
  if (findUser.length === 0) {
    return _dbError(res, '该用户尚未注册')
  } else {
    if (checkPwd === inputPwd) {
      return _dbSuccess(res, '登录成功')
    } else {
      return _dbError(res, '登录失败，密码错误')
    }
  }
});

/**
 * @desc 用户注册
 * @param  username: 用户名
          cellphone：手机号
           password: 密码
 * @return 返回 注册信息
 * */
router.get('/register', async (req, res, next) => {
  console.log('########用户注册#########');
  var newUser = new UsersModel ({
    username: req.body.req.body,
    cellphone: req.body.cellphone,
    password: req.body.password
  })
  newUser.save(function (err){
    if (err) {
      return _dbError(res, '数据库错误，注册失败')
    } else {
      return _dbSuccess(res, '注册成功')
    }
  })
});


export default router
