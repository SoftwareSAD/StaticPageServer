const express = require('express')
const jwt = require("jsonwebtoken")
const expressWebToken = require("express-jwt")
const InitAdmin  = require('../myproject.config').InitAdmin
// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()

const jwtSecret = 'super_secret';
const jwtExpire = '6h';

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


// Add POST - /api/login
router.post('/login', (req, res) => {
    if ((req.body.email === InitAdmin.cellphone || req.body.email === InitAdmin.email) && req.body.password === InitAdmin.password) {
        let account = { id: 123, email: 'admin@vsorg.com' };
        const token = jwt.sign(account, jwtSecret, {
            expiresIn: jwtExpire
        });
        return res.json({ email: 'demo', token })
    }
    res.status(401).json({ message: '用户名或者密码错误' })
})


// Add POST - /api/register
router.post('/register', (req, res) => {
    let account = { id: 124, email: 'demo' };
    const token = jwt.sign(account, jwtSecret, {
      expiresIn: jwtExpire
    });
    return res.json({ email: 'demo', token })
})

// Add GET - /api/statistics
router.get('/statistics', (req, res) => {
    console.log("aaa:", req.account);
    res.json([{ foo: 10 }, { bar: 20 }])
})

// Export the server middleware
module.exports = {
    path: '/api',
    handler: router
}
