/**
 * @desc db config
 * */
module.exports.config = {
  url: 'mongodb://sysu:sysu2018@120.77.37.156:27017/maoyanmovie?authSource=admin', // 普通不授权模式链接mongodb
  domain: 'mlab.com', // 主域名
  scheme: 'mongodb', // 协议
  database: 'mlab.com', // 数据库名称
  username: 'heygrandpa', // 管理员用户名称
  password: 'SYSU2018'// 管理员密码
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
