import mongoose from 'mongoose'
const Schema = mongoose.Schema;

/**
 * @desc 电影表
 */

const movieSchema = new Schema({
  id: String,
  movie_name: String,   //电影名
  movie_ename: String,  //电影英文名
  country: String,      //国家
  movie_type: String,   //电影类型
  movie_time: String,   //电影时长
  online_time: String,  //上映时间
  movie_star: String,   //用户评分
  movie_total_price: String,   //票房
  img: String,          //电影图片路径
  director: String,     //导演，只有一个导演
  director_src: String, //导演图片
  actor: Array,        //演员，有多个演员
  actor_src: Array,    //演员图片
  introduction: String, //电影简介
});

/**
 * @desc构建表模型
 */
const MovieModel = mongoose.model('movie', movieSchema, 'decode_movie');

export default MovieModel
