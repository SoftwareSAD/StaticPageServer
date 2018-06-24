import mongoose from "mongoose"
const Schema = mongoose.Schema
/**
 * @desc 新闻表
 */
const newsSchema = new Schema({
  id: String,
  title: String,  //新闻标题
  abstract: String,//新闻摘要
  author: String, //新闻作者
  img_url: String, //新闻封面图
  url: String, //新闻链接  ---- 这里考虑是要直接连接到新闻还是生成新闻详情页面？
  date: String, //新闻发布时间
  view_count: String, //新闻浏览人数
})

/**
 * @desc构建表模型
 */
const NewsModel = mongoose.model('news', newsSchema)

export default NewsModel
