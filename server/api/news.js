import NewsModel  from '../model/news'
import  VideoModel from '../model/videos'
import { _dbError, _dbSuccess} from '../function/function'
import { Router } from 'express'
const router = Router();

	/**
	 * @desc 拉取新闻列表函数
	 * @param page: int, 当前是第几页，规定每10个项为一页，共30页
	 * @return 返回第n页的全部数据（返回一个数组，每个项为一个object）
	 * */
	router.get('/getAllNews', async (req, res, next) => {
		let page = req.query.currentPage
  		console.log('########拉取第' + page + '页资讯#########')
		if (!page) {
			_dbError(res)
      	console.log('errror')
			return false
		}
		let page_length = 10   // 每10项为一页
		let count = (page - 1) * page_length
		let newsArr = await NewsModel.find({}).limit(page_length).skip(count).exec()
		let findNews = []
		for (let item of newsArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findNews.push(ob)
		}
		return _dbSuccess(res, '获取新闻成功', findNews)
	});


	/**
   * @desc 拉取热点资讯列表函数
   * @param 无
   * @return 返回前6项资讯
   * */

	router.get('/getHotNews', async (req, res, next) => {
    	console.log('########获取热点资讯#########')
		let page_length = 6   // 获取前6项资讯
		let newsArr = await NewsModel.find({}).limit(page_length).exec()
		let findNews = []
		for (let item of newsArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findNews.push(ob)
		}
		return _dbSuccess(res, '获取最热新闻成功', findNews)

	});


	/**
   * @desc 拉取电影预告片列表函数
   * @param currentPage: int, 当前是第几页，规定每15个项为一页，共20页
   * @return 返回第n页的全部数据（返回一个数组，每个项为一个object）
   * */
	router.get('/getAllVideos', async (req, res, next) => {
		let page = req.query.currentPage
    	console.log('########拉取第' + page + '页视频#########')
		if (!page) {
			_dbError(res)
			return false
		}
		let page_length = 15   // 每10项为一页
		let count = (page - 1) * page_length
		let videoArr = await VideoModel.find({}).limit(page_length).skip(count).exec()
		let findVideo = []
		for (let item of videoArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findVideo.push(ob)
		}
		return _dbSuccess(res, '获取预告片成功', findVideo)

	});

	/**
   * @desc 拉取热点电影预告片列表函数
   * @param 无
   * @return 返回前6项最热电影预告片
   * */
	router.get('/getHotVideos', async (req, res, next) => {
  		console.log('########获取热点视频#########')
		let page_length = 6   // 获取前6项预告片
		let videoArr = await VideoModel.find({}).limit(page_length).exec()
		let findVideo = []
		for (let item of videoArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findVideo.push(ob)
		}
		return _dbSuccess(res, '获取最热预告片成功', findVideo)
	})

export default router
