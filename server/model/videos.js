import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * @desc 视频表
 */
const videoSchema = new Schema({
  id: String,
  title: String,  //视频标题
  img_src: String, //视频封面图
  url: String, //视频链接 
  view_count: String, //视频播放人数
})

/**
 * @desc构建表模型
 */
const VideoModel = mongoose.model('videos', videoSchema);

export default VideoModel
