import crypto from 'crypto'
const logger = require('tracer').console() // console追踪库
var md5 = crypto.createHash('md5')

/**
 * @desc mongodb 操作成功函数,返回到前端
 * @errorCode 错误代码
 * */
async function _dbSuccess (res, msg, data, errorCode) {
  return res.json({
    msg: msg || '操作成功',
    data: data || [],
    errorCode: errorCode || 0
  })
}
/**
 * @desc mongodb 操作失败函数
 * @errorCode 错误代码
 * */
function _dbError (res, msg, data, errorCode) {
  return res.json({
    msg: msg || '服务端错误',
    data: data || [],
    errorCode: errorCode || 1
  })
}

/**
 * @desc mongodb 分页函数
 * @errorCode
 * @{total总条数,pageTotal总页数,pageNumber当前页数}
 * */
async function _flipPage (res, data, errorCode, msg, {totals, pages, pageCurrent}) {
  return res.json({
    errorCode: errorCode || 0,
    data: data || [],
    msg: msg || '操作成功',
    totals: totals,
    pages: pages,
    pageCurrent: pageCurrent
  })
}

/**
 * @desc 密码加密模块
 * */
function _encryptedPWD (password) {
  return md5.update(password).digest('hex');
}

/**
 * @desc 查询路由名称
 * */
async function _queryRouter (req, res, next) {
  let findRouter = await RouterModel.find(req)
  return findRouter
}

export {_dbError, _dbSuccess, _flipPage, _encryptedPWD, _queryRouter}
