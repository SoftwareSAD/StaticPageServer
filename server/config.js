/***********************
 * @name JS
 * @author Jo.gel
 * @date 2017/11/7
 * @desc 向api/index.js 暴露配置文件
 ***********************/

/**
 * @desc db config
 * */
module.exports.config = {
  base: 'mongodb://127.0.0.1', // 普通不授权模式链接mongodb
  domain: 'heroku.com', // 主域名
  port: '27017',
  host: '127.0.0.1',
  scheme: 'mongodb', // 协议
  database: 'saddb', // 数据库名称
  username: 'admin', // 管理员用户名称
  password: 'admin'// 管理员密码
}

/**
 * @desc InitAdmin
 * */
module.exports.InitAdmin = {
  username: 'admin', // 管理员用户昵称
  password: 'admin', // 管理员密码
  // nickname: 'admin', // 昵称
  email: 'admin@vsorg.com', // email
  cellphone: '13711111111', // phone
  portrait: '../assets/img/logo/login-default-portrait.png', // 头像
}

/**
 *@desc 短信发送
 */
module.exports.SMS = {
  smsapi : "api.smsbao.com",
  user : "susie",// 短信平台账号
  password: "smsbaoshiwojia13", // 短信平台密码
}
