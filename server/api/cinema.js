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
		let brand = key.substring(0, 2)
		// console.log(brand)
		let cinemaArr = await CinemaModel.find({cinema_name: {$regex: brand}}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
    	// console.log(cinemaArr)
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	}
});

/**
 * @desc 按照影院名获取影院数据
 * @param cinemaName：影院名
 * @return 影院信息
 * */
router.get('/getCinemaByName', async (req, res, next) => {
  let cinemaName = req.query.cinemaName
  console.log('########获取' + cinemaName + '数据#########');
  let cinemaArr = await CinemaModel.find({cinema_name: cinemaName}).exec()
  let findCinemas = []
  for (let item of cinemaArr) {
    let ob = JSON.parse(JSON.stringify(item))
    findCinemas.push(ob)
  }
  return _dbSuccess(res, '获取' + cinemaName + '数据成功', findCinemas[0])
});

/**
 * @desc 按照品牌及行政区获取影院数据
 * @param district：行政区
             brand: 品牌
       currentpage: 当前第几页
 * @return 影院信息
 * */
router.get('/getCinemaByAll', async (req, res, next) => {
	let brand = req.query.brand
	let district = req.query.district
	let page = req.query.currentPage
	let page_length = 10;   // 每一页有10个电影院
	let count = (page - 1) * page_length
	console.log('########按照全部搜索：获取10个电影院#########');
	if (brand == '全部' && district == '全部') {   // 按照电影院名进行排序
		let cinemaArr = await CinemaModel.find({}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	} else if (district == '全部') { // 只通过品牌查询
		// 在电影院的名字中模糊搜索
		let cinemaArr = await CinemaModel.find({cinema_name: {$regex: brand}}).limit(page_length).skip(count).sort({cinema_name: -1}).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	} else if (brand == '全部') {    // 只通过行政区查询
		let cinemaArr = await CinemaModel.find({district: district}).limit(page_length).skip(count).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	} else {
		let key = brand.substring(0, 2)
		// console.log("all: ")
		// console.log(key)
		let cinemaArr = await CinemaModel.find({cinema_name: {$regex: key}, district: district}).limit(page_length).skip(count).exec()
		let findCinemas = []
		for (let item of cinemaArr) {
			let ob = JSON.parse(JSON.stringify(item))
			findCinemas.push(ob)
		}
		return _dbSuccess(res, '获取电影院成功', findCinemas)
	}
});

export default router
