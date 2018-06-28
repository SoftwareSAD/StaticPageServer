const express = require('express')
const jwt = require("jsonwebtoken")
const expressWebToken = require("express-jwt")
import {InitAdmin} from '../config'
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

router.post('/login', async (req, res, next) => {
  if (req.body.cellphone === InitAdmin.cellphone && req.body.password === InitAdmin.password) {
    let account = { id: 123, cellphone : '13711111111' };
    const token = jwt.sign(account, jwtSecret, {
      expiresIn: jwtExpire
    });
    return res.json({ cellphone: '13711111111', token })
  }
  return res.status(401).json({ message: '用户名或者密码错误' })
})

router.get('/statistics', async (req, res, next) =>{
  console.log("aaa:", req.account);
  return res.json([{ foo: 10 }, { bar: 20 }])
})

export default router
