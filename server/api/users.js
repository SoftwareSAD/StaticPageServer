import { _dbError, _dbSuccess} from '../function/function'
const express = require('express')
const jwt = require("jsonwebtoken")
const expressWebToken = require("express-jwt")
import UsersModel from '../model/users'
const router = express.Router()
var app = express()

const jwtSecret = 'super_secret';
const jwtExpire = '168h';

router.use(expressWebToken({
  requestProperty: "account",
  credentialsRequired: false,
  secret: jwtSecret,
}));

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

/**
 * @desc 用户登录
 * @param cellphone：手机号
 password: 密码
 * @return 返回 登陆信息
 * */
router.post('/login', async (req, res, next) => {
  console.log('########用户登录#########');
  let findUser = await UsersModel.find({cellphone: req.body.cellphone}).exec()
  let checkPwd = findUser[0] ? findUser[0].password : ''
  let inputPwd = req.body.password

  if (findUser.length === 0) {
    res.status(401).json({ message: '用户名或者密码错误' })
  }
  else {
    if (checkPwd === inputPwd) {
      let account = { id: 123, cellphone : req.body.cellphone };
      const token = jwt.sign(account, jwtSecret, {
        expiresIn: jwtExpire
      });
      return res.json({ cellphone: req.body.cellphone, token })
    } else {
      res.status(401).json({ message: '用户名或者密码错误' })
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
router.post('/register', async (req, res, next) => {
  console.log('########用户注册#########');
  var newUser = new UsersModel ({
    username: req.body.username,
    cellphone: req.body.cellphone,
    password: req.body.password
  })
  console.log('注册中')
  newUser.save(function (err){
    if (err) {
      console.log('失败')
      res.status(401).json({ message: '注册失败' })
    } else {
      console.log('成功')
      return res.json({ cellphone: req.body.cellphone, username: req.body.username })
    }
  })
});


router.get('/statistics', async (req, res, next) =>{
  console.log("aaa:", req.account);
  return res.json([{ foo: 10 }, { bar: 20 }])
})

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

export default router
