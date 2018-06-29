import mongoose from "mongoose"
const Schema = mongoose.Schema
/**
 * @desc 影院表
 */
const cinemaSchema = new Schema({
  id: String,
  cinema_name: String,  //电影院名字
  district: String,     //区
  online_moive: Array,  //上映电影图片地址
  address: String,      //电影院地址
  telephone: Array,     //电话
  img_url: String,      //电影图片地址
})

/**
 * @desc构建表模型
 */
const CinemaModel = mongoose.model('cinema', cinemaSchema, 'cinema')

export default CinemaModel
