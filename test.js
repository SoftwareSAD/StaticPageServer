var mongoose = require('mongoose');

/**
 * @desc db options
 */
let options = {
  user: 'heygrandpa',
  pass: 'SYSU2018'
}

mongoose.connect('mongodb://heygrandpa:SYSU2018@ds117691.mlab.com:17691/maoyanmovie', options, function(err) {
	if (err) {
		console.log('MongoDB数据库连接失败')
	} else {
		console.log('MongoDB数据库连接成功')
	}
})

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
  // content_img_src: Array, //内容图片
  news_url: String, //新闻链接
  news_date: String, //新闻发布时间
  view_count: String, //新闻浏览人数
})

/**
 * @desc构建表模型
 */
const NewsModel = mongoose.model('news', newsSchema, 'MaoYanNews')

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
const VideoModel = mongoose.model('videos', videoSchema, 'MaoYanVideos');



// DEBUG；返回资讯数据库的前10项
NewsModel.find({}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})

// DEBUG；返回预告片数据库的前10项
VideoModel.find({}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})