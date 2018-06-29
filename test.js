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
const MovieModel = mongoose.model('movie', movieSchema, 'maoyanmovie');

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

/**
 * @desc 热点资讯及预告片 测试
 */

/*
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
*/

/**
 * @desc 电影 测试
 */

/*
// DEBUG；返回电影数据库的前10项
MovieModel.find({}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})
*/

/*
// DEBUG：按照类型搜索电影
var key = '爱情'
MovieModel.find({movie_type: {$regex: key}}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})


// DEBUG：按照区域搜索电影
var key = '美国'
MovieModel.find({country: {$regex: key}}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})

*/

/**
 * @desc 影院 测试
 */

/*
// DEBUG；返回电影院数据库的前10项所热映电影的详细信息 ——> 通过 img_url 属性链接
CinemaModel.find({}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		for (let index in docs) {
			let url = docs[index].online_moive
			console.log(url.length)
			for (let i = 0; i < url.length; i++) {
				console.log(i, url[i])
				img = url[i].split('@')[0]
				// 根据图片，模糊查询
				MovieModel.find({img: {$regex: img, $options: 'i'}}, null, function(err, docs) {
					if (err) {
						console.log('查询出错：' + err)
					} else {
						console.log('电影结果：')
						console.log(docs)
					}
				})
			}

		}
	}
})
*/

/*
// DEBUG：按照行政区搜索电影院
var key = '全部'
if (key == '全部') {
	CinemaModel.find({}, null, {limit: 10, sort: {cinema_name: -1}}, function(err, docs) {
		if (err) {
			console.log('查询出错：' + err)
		} else {
			console.log('查询结果为：')
			console.log(docs)
		}
	})
} else {
	CinemaModel.find({district: key}, null, {limit: 10}, function(err, docs) {
		if (err) {
			console.log('查询出错：' + err)
		} else {
			console.log('查询结果为：')
			console.log(docs)
		}
	})
}*/


/*
// DEBUG：按照品牌名搜索电影院 --> 也可用于按照电影院名搜索电影院
key = '金逸'
CinemaModel.find({cinema_name: {$regex: key}}, null, {limit: 10}, function(err, docs) {
	if (err) {
		console.log('查询出错：' + err)
	} else {
		console.log('查询结果为：')
		console.log(docs)
	}
})
*/

