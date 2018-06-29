import CinemaModel  from '../model/cinema'
import { Router } from 'express'
import { _dbError, _dbSuccess} from '../function/function'

const router = Router()

/**
 * @desc 按照行政区搜索电影院
 * @param key：行政区的名字
 		 page: 当前是第几页
 * @return 返回10家电影院
 * */
router.get('/getCinemaByDistrict', async (req, res, next) => {
	console.log('########按照行政区搜索：获取10个电影院#########');
	let key = req.query.district
	let page = req.query.currentPage
	let page_length = 10;   // 每一页有10个电影院
	let count = (page - 1) * page_length
	if (key == '全部') {
		// 按照电影院名进行排序，-1为倒序
		let cinemaArr = await CinemaModel.find({}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	} else {
		let cinemaArr = await CinemaModel.find({district: key}).limit(page_length).skip(count).exec()
		let findCinemas = []
    // console.log(cinemaArr)
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	}
});


/**
 * @desc 按照品牌搜索电影院
 * @param key：品牌的名字
 		 page: 当前是第几页
 * @return 返回10家电影院
 * */
router.get('/getCinemaByBrand', async (req, res, next) => {
	console.log('########按照品牌搜索：获取10个电影院#########');
	let key = req.query.brand
	let page = req.query.currentPage
	let page_length = 10;   // 每一页有10个电影院
	let count = (page - 1) * page_length
	if (key == '全部') {
		// 按照电影院名进行排序，-1为倒序
		let cinemaArr = await CinemaModel.find({}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	} else {
		// 在电影院的名字中模糊搜索
		let cinemaArr = await CinemaModel.find({cinema_name: {$regex: key}}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
    console.log(cinemaArr)
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	}
});

export default router
