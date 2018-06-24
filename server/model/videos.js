import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * @desc 视频表
 */
const videoSchema = new Schema({
  id: String,
  title: String,  //视频标题
  abstract: String,//视频摘要
  author: String, //视频作者
  img_url: String, //视频封面图
  url: String, //视频链接  ---- 这里考虑是要直接连接到新闻还是生成新闻详情页面？
  date: String, //视频发布时间
  view_count: String, //视频播放人数
})

/**
 * @desc构建表模型
 */
const VideoModel = mongoose.model('videos', videoSchema)

export default VideoModel
