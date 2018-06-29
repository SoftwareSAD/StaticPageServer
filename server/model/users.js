import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * @desc 用户表
 */
const usersSchema = new Schema({
  id: String,
  username: { type: String, default: "default-xxx"}, // 用户名
  password: {type: String}, // 密码
  email: {type: String, default: ""}, // email
  cellphone: {type: String}, // phone
  portrait: {type: String, default: "../../assets/img/logo/login-default-portrait.png"} // 头像
})

/**
 * @desc构建表模型
 */
const UsersModel = mongoose.model('users', usersSchema, 'users')

export default UsersModel
