import mongoose from "mongoose"
const Schema = mongoose.Schema
/**
 * @desc 新闻表
 */
const newsSchema = new Schema({
  id: String,
  title: String,  //新闻标题
  abstract: String,//新闻摘要
  article: String, //新闻内容
  cover_img_src: String, //新闻封面图
  content_img_src: Array, //内容图片
  url: String, //新闻链接
  date: String, //新闻发布时间
  view_count: String, //新闻浏览人数
})

/**
 * @desc构建表模型
 */
const NewsModel = mongoose.model('news', newsSchema)

export default NewsModel
