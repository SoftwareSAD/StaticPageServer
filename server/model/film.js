import mongoose from 'mongoose'
const Schema = mongoose.Schema;

/**
 * @desc 电影的存储结构
 */

const filmSchema = new Schema({
  id: String,
  film_name: {type: String},    //电影名（例如 "侏罗纪世界2"）
  country: {type: String},      //国家（例如 "美国"）
  time: {type: String},         //电影时长（例如 "150"，以分钟为单位）
  online_time: {type: String},  //上映时间（例如 "2018-05-23"）
  score: {type: String},        //用户评分（例如 "8.3"）
  box_office: {type: String},   //票房（例如"8952.32", 以万为单位）
  img_src: {type: String},      //电影图片路径
  tags: {type: Array},          //(例如 ["动作", "冒险", "科幻"], 数组中每个元素都是表示标签的string)
  introduction: {type: String}, //电影简介
  director: {type: Array},      //导演列表，数组中每个元素是一个表示人的object，每个object有2个属性name、img_src，例如:
  /*
  *   {
  *     name: "胡安·安东尼奥·巴亚纳",
  *     img_src: require("~/assets/img/human/胡安·安东尼奥·巴亚纳.jpg"),
  *   }
  * */
  actors: {type: Array},        //和导演的数据结构相同
});

/**
 * @desc构建表模型
 */
const FilmModel = mongoose.model('film', filmSchema);

export default FilmModel
