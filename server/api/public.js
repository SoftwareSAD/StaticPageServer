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

const _public= {
  // Add POST - /api/login
  login: async (req, res, next) => {
    if ((req.body.email === InitAdmin.cellphone || req.body.email === InitAdmin.email) && req.body.password === InitAdmin.password) {
      let account = { id: 123, email: 'admin@vsorg.com' };
      const token = jwt.sign(account, jwtSecret, {
        expiresIn: jwtExpire
      });
      return res.json({ email: 'demo', token })
    }
    return res.status(401).json({ message: '用户名或者密码错误' })
  },

  // Add GET - /api/statistics
  getStatistics: async (req, res, next) =>{
    console.log("aaa:", req.account);
    return res.json([{ foo: 10 }, { bar: 20 }])
  }
}

export default _public
